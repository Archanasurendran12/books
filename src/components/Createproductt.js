import React from 'react'
import './Createproductt.css'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

function Createproductt() {
    return (
        <div>
            <div className="main-head">
            <h1>Create product</h1>
            </div>
            
             <div class="container p-4 my-4 border bg-dark text-white ">
            <form class="form-inline">
                <label for="Name">Product name:</label><br/>
                <input type="Name" id="Name"
                
                name="Name">
                </input><br/>
                <label for="Description">Product description:</label><br/>
                <textarea></textarea>
                 
                <br/><br/>       
                    <Button component={Link} to="/Productts" variant="contained" color="primary">Submit</Button><br/><br/>               
            </form>
            </div>
        </div>
    )
}

export default Createproductt

