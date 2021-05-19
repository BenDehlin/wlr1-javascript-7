// Here we created 4 promises, one that will work
// half the time and fail the other half and 3
// others just so that we can have
// multiple examples
// of executing a promise throughout our code.
// These promises wait a certain number of
// milliseconds before responding with either a
// success or fail object.
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
    resolve({data: "Promise 1 Success!"})
  }, 5000)
})

export const secondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({data: "Promise 2 Success!"})
  }, 3000)
})

export const thirdPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({data: "Promise 3 Success!"})
  }, 2000)
})