/** 
 * EasyHTTP Library
 * Libray for making HTTP requests
 * 
 * @version 2.0.0
 * @author Patrick Nyeko
 * @license MIT
 * 
 * **/

class EasyHTTP{ // We dont even need a constructor because we dont need the XHR object like before where we assigned it to this.http. 
    // Make an HTTP GET Request
    get(url) {
        //We wrap this whole fetch in a Promises: call resolve when we want to send a response or reject to send an error.
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                // we call resolve and pass in data below
                .then(data => resolve(data))
                 // we call reject and pass in data below
                .catch(err => reject(err));
        });
    }
    //Make HTTP POST Request
    post(url, data) { // when we make a post request we have to add in an object in with info to post. see below
        //We wrap this whole fetch in a Promises: call resolve when we want to send a response or reject to send an error.
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                // we need content type in our headers
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                // we call resolve and pass in data below
                .then(data => resolve(data))
                 // we call reject and pass in data below
                .catch(err => reject(err));
        });
    }

 }