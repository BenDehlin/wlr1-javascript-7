export const failPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(Math.floor(Math.random() * 10) > 5){
       resolve({data: 'Success!'})
    }else{
      reject({message: 'Failure!'})
    }
  }, 3000)
})

export const firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({data: "Promise 2 Success!"})
  }, 5000)
})

export const secondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({data: "Promise 3 Success!"})
  }, 3000)
})

export const thirdPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({data: "Promise 4 Success!"})
  }, 2000)
})