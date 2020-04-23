const retrieveNewPosts = require('./retrieve-new-post')

describe ('retrieve-new-post', ()=>{
    it('should successfully retrieve the info', () => {
    let pages = ''
    return retrieveNewPosts(pages)
        .then(results => {
            expect(results).toBeInstanceOf(Object)
            expect(results).toBeDefined()
            expect(results.data.children).toBeInstanceOf(Array)
            expect(results.data.children.length).toBe(25)
        })
    })

    it('should fail when pages is not a string', () => {
        pages = 9328743289
        expect(() => retrieveNewPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = false
        expect(() => retrieveNewPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = []
        expect(() => retrieveNewPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = {}
        expect(() => retrieveNewPosts(pages)).toThrow(`pages ${pages} is not a string`)
    })
})