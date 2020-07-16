console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

messageOne.textContent = 'From javaScript'


const searchLocation = (location) => {
    fetch('/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
                messageOne.textContent = error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
}

weatherForm.addEventListener('submit', (e)=>{
    //prevent default behavior to render new page
    e.preventDefault()

    const location = search.value

    messageOne.textContent = "Loading.."
    messageTwo.textContent = ""
    searchLocation(location)
})