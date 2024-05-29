import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
            <nav>
                <Link to="/" className='nav'>Home</Link>
            </nav>
        </div>
    )

}

export default Navbar;