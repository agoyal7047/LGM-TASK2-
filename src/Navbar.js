import React from 'react'
import { Button } from 'react-bootstrap'
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom'
import Grid from './Grid'

function Navbar() {
    return (
        <BrowserRouter>
            <div>
            <div className="header_page">
                <section className="top_section">
                    <div className="brand">
                        <h1>Digital Creator</h1>
                    </div>
                    <div className="loader">
                        <Link to="/view-users"><Button className="loader_button">Users</Button></Link>
                    </div>
                </section>
            </div>
            <Switch>
                <Route path="/view-users" component={Grid}/>
            </Switch>
        </div>
        </BrowserRouter>
        
    )
}

export default Navbar
