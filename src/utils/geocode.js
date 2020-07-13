const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoidml6ZXZlcnNpemUiLCJhIjoiY2pudHl0am9hMHo3eTNwcW1nZ2xiMnlkMyJ9.lUHfiHK9F_50Ya7wBqejog'

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to connect to location services', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

} 

module.exports = geocode