const fetch = require('node-fetch') 

/**
 * Finds and receives hottest post from the database
 * 
 * @param {string} pages query string for the API
 * 
 * @returns {<array>} hottest post
 *
 * @throws {Error} if there are unkown error from the api or server's error
 */

function retrieveHotPost (pages = '') {
    if (typeof pages !== 'string') throw new TypeError(`pages ${pages} is not a string`)
    
    return fetch(`https://api.reddit.com/hot${pages}`)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } 

            if (response.status >= 400 || response.status < 500) {
                return response
                    .then(response => {
                        const { error } = response

                        throw new Error(error)
                    })
            } else throw new Error('Unknown error')
        })
        .then(response => response)
}

module.exports = retrieveHotPost