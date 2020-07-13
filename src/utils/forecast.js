const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e876dc18b31895bc2305207f388ba30&query='+ latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to connect to location services', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.weather_descriptions[0]
            + ' degrees out. It feels like ' + body.current.feelslike + ' degrees')
        }
    })

} 

module.exports = forecast