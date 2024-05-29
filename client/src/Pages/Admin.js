import {Link} from 'react-router-dom'

const Admin = () => {
    return(
        <div>
        <div className='admin-container'>
           
            <Link className="admin-link" to="/Deposit">Deposit</Link>
            <Link className="admin-link" to="/Receive">Recieve</Link>
        </div>
        <img className='image' src='./sincerely-media-XihOO7UOvy4-unsplash.jpg' alt="" />
        </div>
    )
}

export default Admin;