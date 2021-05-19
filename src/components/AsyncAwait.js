// In this component notice how we are importing 3
// different promises from ../utils/promiseStuff. The idea
// here is to use Async/Await so that we can cleanly wait
// for each of our promises to finish and save those values
// to state.
import {useState, useEffect} from 'react'
import {firstPromise, secondPromise, thirdPromise} from '../utils/promiseStuff'

const AsyncAwait = () => {
  // 3 pieces of state for the results of the 3 promises
  const [resultOne, setResultOne] = useState('')
  const [resultTwo, setResultTwo] = useState('')
  const [resultThree, setResultThree] = useState('')
  // 1 piece of state for handling an error if we encounter one
  const [error, setError] = useState('')
  // 1 piece of state do display a loading message while we're
  // waiting for our promises to complete
  const [loading, setLoading] = useState('')
  
  useEffect(() => {
    // We cannot do async calls at the root level in a useEffect
    // so instead we create a function inside to be our async function
    // that we will call immediately after.
    const resolvePromises = async() => {
      // we put a try block inside of our async function to catch any
      // errors we might encounter. NOTE we will immediately skip to
      // the catch block if we do end up encountering an error in any
      // of these promises.
      try{
        // Inside the try block we set ourselves to loading and then kick
        // off all 3 of our promises, once they've all returned we save
        // them to state.
        setLoading('Page is loading...')
        const resOne = await firstPromise
        const resTwo = await secondPromise
        const resThree = await thirdPromise
        setResultOne(resOne.data)
        setResultTwo(resTwo.data)
        setResultThree(resThree.data)
      }
      catch(err){
        // if we encounter an error in our promise we save the error
        // message to state so we can display it on the screen.
        setError(err.message)
      }
      finally{
        // Whether we hit an error or not we want to say we are done
        // loading once the page finishes loading.
        setLoading('Page is done loading.')
      }
    }
    // here we call the function we just created.
    resolvePromises()
  }, [])
  return(
    <div>
      {/* Displaying all the values from up above. */}
      <h1>{loading}</h1>
      <h1>{error}</h1>
      <h1>{resultOne}</h1>
      <h1>{resultTwo}</h1>
      <h1>{resultThree}</h1>
    </div>
  )
}

export default AsyncAwait
// Check out ./Throw.js next to see how we might create
// our own errors.