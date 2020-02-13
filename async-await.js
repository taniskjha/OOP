// Converting chained Promise2 into async await 

const newJob = hardwork => {
    return new Promise((resolve,reject) => {
        if(!hardwork) {
            reject(`try again`)
        } else {
            resolve(`you got new job because of hardwork of ${hardwork}`)        }
    })
}

const giftCar = (job) => {
    return new Promise((resolve,reject) => {
        resolve(`hey sis i got you a new car after getting job`)
    })

}

// consuming or calling promise by async

async function didYou() {
    try {
        let prom1 = await newJob('24h')
        let prom2 = await giftCar();
        console.log(prom1)
        console.log(prom2);
    } catch (err){
        console.log(err);

    }
}

didYou();