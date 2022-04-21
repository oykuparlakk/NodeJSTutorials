const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaWZzNSIsImEiOiJja215YnU1NHKl7g'

    request( {url: url, json:true}, (error,response) =>{
        if (error) {
            //console.log('Unable to connect to geocoding services')
            callback('Unable to connect to geocoding services', undefined)
        } else if (response.body.features.length === 0) {
            //console.log('Unable to find location. Try another search')
            callback('Unable to find location. Try another search', undefined)
        } 
        else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
            /*const longitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            const location = response.body.features[0].place_name*/
            //console.log(latitude, longitude)    
        }
    })
}

module.exports = geocode