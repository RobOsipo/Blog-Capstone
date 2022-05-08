// const {describe,it,test,expect} = require('vitest')
import {describe,it,test,expect} from 'vitest'
const { getAllBlogs, getAllPostTitle, getBlogByPostId, composeBlogPost, deleteBlogPostById  } = require('./blogPost')


describe('That my blogPost controllers are of type function', () => {

    test('getAllBlogs controller', () => {

        const controllerToTest = getAllBlogs

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })

    test('getAllPostTitle controller', () => {

        const controllerToTest = getAllPostTitle

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })

    test('getBlogByPostId controller', () => {

        const controllerToTest = getBlogByPostId

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })

    test('composeBlogPost controller', () => {

        const controllerToTest = composeBlogPost

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })

    test('deleteBlogPostById controller', () => {

        const controllerToTest = deleteBlogPostById

        expect(controllerToTest).toBeTypeOf('function')
        expect(typeof controllerToTest !== 'function').toBe(false)
    })
})