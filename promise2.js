// creating mom job Promise 

const newJob = (hardwork) => {
    return new Promise((resolve,reject) => {
        if(!hardwork) {
            reject(`try again`)
        } else {
            resolve(`you got new job because of hardwork of ${hardwork}`)
        }
    })
}

// consuming Job promise 

newJob('24h').then((fullfilled) => {
    console.log(fullfilled);
})
.catch((err) => console.log(err));


// Promise Chaining 

// lets say you Promised your sister for car  once you get the job 

const giftCarAfterJob = Job => {
  return new Promise((resolve,reject) => {
    resolve(`Hey sis i got a job now you can get new car`);
    

  })}

  newJob('24h').then(giftCarAfterJob)
               .then(fullfilled => {
                   console.log(fullfilled)
               } )
                
               .catch(err => console.log(err))

//          
       



