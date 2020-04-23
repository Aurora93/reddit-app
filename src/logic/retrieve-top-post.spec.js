const retrieveTopPosts = require('./retrieve-top-post')

describe ('retrieve-top-post', ()=>{
    it('should successfully retrieve the info', () => {
    let pages = ''
    return retrieveTopPosts(pages)
        .then(results => {
            expect(results).toBeInstanceOf(Object)
            expect(results).toBeDefined()
            expect(results.data.children).toBeInstanceOf(Array)
            expect(results.data.children.length).toBe(25)
        })
    })

    it('should fail when pages is not a string', () => {
        pages = 9328743289
        expect(() => retrieveTopPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = false
        expect(() => retrieveTopPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = []
        expect(() => retrieveTopPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = {}
        expect(() => retrieveTopPosts(pages)).toThrow(`pages ${pages} is not a string`)
    })
})