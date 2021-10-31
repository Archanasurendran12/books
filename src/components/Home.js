import React from 'react'
import {Button} from '@material-ui/core'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="abc">
<br/><h1>Home page</h1><br/> 
<Button component={Link} to="/Productts/id" variant="contained" color="primary">Books</Button><br/><br/>
<Button component={Link} to="/Wishlist/id" variant="contained" color="primary">Wishlist</Button><br/><br/>
<Button component={Link} to="/Createproductt/id/1"variant="contained" color="primary">Register Book</Button><br/><br/>
</div> 
        
    )
}

export default Home



