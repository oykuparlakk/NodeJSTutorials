const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=81c6957beda8a6484399&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json:true}, (error, response) => {
        //const data = JSON.parse(response.body)
        //console.log(data.current)
        if (error) {
            //console.log(error)
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            //console.log('Unable to find location')
            callback('Unable to find location', undefined)
        } else {
            /*console.log('Hava ' + response.body.current.weather_descriptions[0] + 
            ' hava sÄ±caklÄ±ÄŸÄ± ' + response.body.current.temperature + 
            ' hissedilen ' + response.body.current.feelslike + 
            ' derece')*/
            callback(undefined, 'Hava ' + response.body.current.weather_descriptions[0] + 
            ' hava sÄ±caklÄ±ÄŸÄ± ' + response.body.current.temperature + 
            ' hissedilen ' + response.body.current.feelslike + 
            ' derece')
        } 
    })
}

module.exports = forecast