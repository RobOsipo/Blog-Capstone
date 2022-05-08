// const {describe,it,test,expect} = require('vitest')
import {describe,it,test,expect} from 'vitest'
const { signup, login } = require('./Auth')

describe('That my Authentication controllers are of type function', () => {

    test('signup controller', () => {

        const controllerToTest = signup

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })

    test('login controller', () => {

        const controllerToTest = login

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })

})