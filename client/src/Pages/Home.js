import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>
        <div className="home-container">
         
            <Link className='home-link admin' to="/admin">Admin</Link>
            <Link className='home-link student' to="/student">Student</Link>
            
            </div>
            <img className='image' src="./vit.jpg" alt="" />
        </div>
    )
}

export default Home;