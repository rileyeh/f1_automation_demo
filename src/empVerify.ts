import {WebDriver, By} from 'selenium-webdriver'
import {empInfo} from './employeeInfo'

export const empVerify = async (driver: WebDriver, empIndex: number) => {
    await (await driver.findElement(By.xpath(`//*[text()="${empInfo[empIndex].name}"]`))).click()

    await driver.sleep(1000)
    
    let empNameInput = await driver.findElement(By.name('nameEntry'))
    let empPhoneInput = await driver.findElement(By.name('phoneEntry'))
    let empTitleInput = await driver.findElement(By.name('titleEntry'))

    let nameValue = await empNameInput.getAttribute('value')
    let phoneValue = await empPhoneInput.getAttribute('value')
    let titleValue = await empTitleInput.getAttribute('value')

    expect(nameValue).toBe(empInfo[empIndex].name)
    expect(phoneValue).toBe(empInfo[empIndex].phone)
    expect(titleValue).toBe(empInfo[empIndex].title)
}