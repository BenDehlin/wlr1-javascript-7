// In this component we import a promise we created
// over in ../utils/promiseStuff.js called 
// failPromise that will fail half the time 
// and pass half the time.
import {useState, useEffect} from 'react'
import {failPromise} from '../utils/promiseStuff'

const Promises = () => {
  // we are tracking 2 pieces of state here, one is
  // a display value that we will be retrieving
  // after the promise is fulfilled, and the 
  // other is a loading value that we will 
  // show while we're waiting for the 
  // promise to finish.
  const [display, setDisplay] = useState('')
  const [loading, setLoading] = useState('')

  useEffect(() => {
    // When our page first loads we set the loading
    // state to be a string that says Page is Loading.
    // Then we kick off our promise which will wait
    // 3 seconds and then either send back a success
    // response with an object of
    // {data: "Success!"}
    // If the promise fails then it will send back
    // an error object with
    // {message: "Failure!"}
    // In either case we take the response and save
    // it to the display piece of state so we can show
    // it on the screen.
    // Also in both cases afterwards we will set our
    // loading to instead say "Page is done loading"
    setLoading('Page is loading...')
    failPromise.then((res) => {
      setDisplay(res.data)
    })
    .catch(err => {
      setDisplay(err.message)
    })
    .then(() => {
      setLoading("Page is done loading")
    })
  }, [])
  
  return(
    <div>
      {/* Here we simply display the loading message
      and the display message from state. */}
      <h2>{loading}</h2>
      <h1>{display}</h1>
    </div>
  )
}

export default Promises
// Check out AsyncAwait to see an example of handling
// multiple promises at once.