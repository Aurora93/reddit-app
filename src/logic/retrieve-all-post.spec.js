const retrieveAllPosts = require('./retrieve-all-post')

describe ('retrieve-all-post', () => {
    it('should successfully retrieve the info', () => {
    let pages = ''
    return retrieveAllPosts(pages)
        .then(results => {
            expect(results).toBeInstanceOf(Object)
            expect(results).toBeDefined()
            expect(results.data.children).toBeInstanceOf(Array)
            expect(results.data.children.length).toBe(25)
        })
    })

    it('should fail when pages is not a string', () => {
        pages = 9328743289
        expect(() => retrieveAllPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = false
        expect(() => retrieveAllPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = []
        expect(() => retrieveAllPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = {}
        expect(() => retrieveAllPosts(pages)).toThrow(`pages ${pages} is not a string`)
    })

})