import React,{useState,useEffect} from 'react'
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap'

function Grid() {
    const [users,setusers] = useState([])
    const [loading,setloading] = useState(false)

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async ()=>{
        await axios.get('https://reqres.in/api/users?page=1')
        .then((response)=>response)
        .then((data)=>{
            setusers(data.data.data)
            setloading(true)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div class="row1">
              
            {
                loading?(
                        users.map((data)=>{
                            return(
                                <div class="column1" key={data.id}>
                                    <div class="card1"><img src={data.avatar} alt={data.first_name}/></div>
                                    <div class="card1">{data.first_name} {data.last_name}</div>
                                    <div class="card1">{data.email}</div>
                                </div>
                            )
                        })
                   
                ):(
                    <ReactBootstrap.Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </ReactBootstrap.Spinner>          
                )
            }
            
        </div>
    )
}

export default Grid
