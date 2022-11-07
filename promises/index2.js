function getData(url) {
  return new Promise((resolve, reject) => {
    // Get the data ... it takes some time.


    console.log(`Getting data from ${url}`)

    // Some mock data and server answer...
    const serverAnswerOk = true
    const data = "Here's some data"

    if(serverAnswerOk) {
      resolve(data)
    } else {
      reject('Something went wrong')
    }
  })
}



getData("http://myserver/user")
  .then((user) => getData(`http://myserver/${user}/posts`))
  .then((posts) => getData(`http://myserver/${user}/posts/${posts[0]}/comments`))
  .then((commmentsToTheFirstPost) => {
    // Here we finally got from the server what we needed

    // Visualize it how you prefer
    console.log(commmentsToTheFirstPost)
  }).catch(error => console.log(error))
