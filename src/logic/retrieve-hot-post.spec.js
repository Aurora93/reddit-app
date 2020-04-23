const retrieveHotPosts = require('./retrieve-hot-post')

describe ('retrieve-hot-post', ()=>{
    it('should successfully retrieve the info', () => {
    let pages = ''
    return retrieveHotPosts(pages)
        .then(results => {
            expect(results).toBeInstanceOf(Object)
            expect(results).toBeDefined()
            expect(results.data.children).toBeInstanceOf(Array)
            expect(results.data.children.length).toBe(25)
        })
    })

    it('should fail when pages is not a string', () => {
        pages = 9328743289
        expect(() => retrieveHotPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = false
        expect(() => retrieveHotPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = []
        expect(() => retrieveHotPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = {}
        expect(() => retrieveHotPosts(pages)).toThrow(`pages ${pages} is not a string`)
    })
})