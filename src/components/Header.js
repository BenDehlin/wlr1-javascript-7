import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <Link to='/promises'>Promises</Link>
      <Link to='/async-await'>Async Await</Link>
      <Link to='/throw'>Throw</Link>
    </header>
  )
}

export default Header