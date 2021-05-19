// Here we show a very simple example of throwing our
// own error inside of a try block. If we throw an error
// it will immediately kick us out into the catch.
import {useState, useEffect} from 'react'

const Throw = () => {
  const [error, setError] = useState('')
  useEffect(() => {
    // here we have a try/catch/finally block. Inside all we do
    // is throw an error in the try block which will then kick
    // us out to the catch block. Notice how we never make it
    // to the console.log inside of the try block because it
    // happens after we throw an error.
    try{
      throw 'An Error Occured.'
      console.log("This never happens")
    }
    catch(err){
      console.log(err)
      setError(err)
    }
    finally{
      console.log("after everything else")
    }
  }, [])
  return(
    <div>
      {/* Here we display the error we threw in the try block */}
      <h1>{error}</h1>
    </div>
  )
}

export default Throw