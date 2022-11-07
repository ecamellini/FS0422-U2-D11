function timer(timeToWait) {
  return new Promise((resolve, reject) => {

    if(timeToWait) {
      setTimeout(resolve, timeToWait)
    } else {
      reject("You need to set as paramerter a number of milliseconds to wait.")
    }
  })
}





// timer(3000)
//   .then(() => {
//     console.log("Resolved after 3 seconds")
//   }).catch((error) => {
//     console.log(`I got an error: ${error}`)
//   })

// timer()
//   .then(() => {
//     console.log("Resolved after ????")
//   }).catch((error) => {
//     console.log(`I got an error: ${error}`)
//   })


// timer(5000).then(() => console.log(5 + 10))



timer(3000).then(() => {
    console.log("I waited 3 seconds")
    return timer() // Returning another promise
  }).then(() => {
    console.log("I waited 5 seconds")
    return timer(3000)
  }).then(() => {
    console.log("I waited 8 seconds")
  }).catch((error) => console.log(error)) // This will catch any error that happens in my chain


// Another way: it works also like this.
// The .then and .catch are already Promises of their own.
// So you will always be inside the chain of promises even if you don't
// explicitly return another promise
// timer(3000)
//   .then(() => console.log("I waited 3 seconds"))
//   .then(() => timer(4000))
//   .then(() => console.log("I waited 7 seconds"))
//   .then(() => timer(3000))
//   .then(() => console.log("I waited 10 seconds"))
//   .catch(err => console.log(err))
