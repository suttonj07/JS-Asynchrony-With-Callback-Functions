function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 3000)
    })
}

test().then((val) => {   //run the test function above and after 3 seconds print the value which is success/ then will be what you put into resolve/with a promise a .then is always needed
    console.log(val)
})

// fetch('https://api.github.com/users/naaltunian').then((response) => {
//     return response.json().then(data => {
//         console.log(data)
//     })
// })