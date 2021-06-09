import {Builder, Capabilities} from 'selenium-webdriver'
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

import {empVerify} from './src/empVerify'
import {empInfo} from './src/employeeInfo'

beforeAll(async () => {
    await (await driver).get('http://localhost:3000')
})

afterAll(async () => {
    await (await driver).quit()
})

test('verify fe matches be emp info', async () => {
    for (let i = 0; i < empInfo.length; i++) {
        await empVerify(driver, i)
    }
})