const retrieveControversialPosts = require('./retrieve-controversial-post')

describe ('retrieve-controversial-post', ()=>{

    it('should successfully retrieve the info', () => {
    let pages = ''
    return retrieveControversialPosts(pages)
        .then(results => {
            expect(results).toBeInstanceOf(Object)
            expect(results).toBeDefined()
            expect(results.data.children).toBeInstanceOf(Array)
            expect(results.data.children.length).toBe(25)
        })
    })

    it('should fail when pages is not a string', () => {
        pages = 9328743289
        expect(() => retrieveControversialPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = false
        expect(() => retrieveControversialPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = []
        expect(() => retrieveControversialPosts(pages)).toThrow(`pages ${pages} is not a string`)
        
        pages = {}
        expect(() => retrieveControversialPosts(pages)).toThrow(`pages ${pages} is not a string`)
    })
})