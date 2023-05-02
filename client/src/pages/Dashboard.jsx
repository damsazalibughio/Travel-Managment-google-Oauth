import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Outlet, Link } from "react-router-dom";

export const Dashboard = () => {
    const [tripsData, setTripsData] = useState([])
    const getGoals = async () =>{
        const response=  await axios.get('http://localhost:5000/api/travel');
        setTripsData(response.data.trips)
       
    }
    
    useEffect(() => {
        getGoals()
    
      return () => {
       
      }
    }, [])
   
    console.log(tripsData)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/dashboard" className="nav-link">React</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <i className="bi bi-person-circle"></i>
                        <Link to='/'  className="nav-link" >Logout</Link>
                    </li>
                  
                    <>
                    <li className="nav-item profile-panel-outer">
                        <i className="bi bi-person-circle fs-1 text-info" ></i>
                       {/* {showProfilePanel ?   */}
                       {/* <ul className='profile-panel'>
                            <li className="nav-link">
                            
                            <div className="card" style={{width:'180px'}}>
                            <div className="profile-card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                className="rounded-circle img-fluid" style={{width:"100px"}}/>
                                <h5 className="mt-3 mb-2">John Smith</h5>
                                <p className="text-muted mb-1">developer</p>
                                <p className="text-muted mt-3">
                                <Link to="/login"  className="nav-link">Logout</Link>
                                </p>
                            </div>
                            </div>
                          
                          
                            </li>
                           
                        </ul> */}
                       
                    </li>
                   
                    </>
                     
                     
                </ul>
                
                </div>
            </div>
        </nav>
    <div className='dashboard-container'>
     
        <div className="card mt-5" style={{width:'80%'}}>
        <div className="card-header">
        <i className="bi bi-people-fill text-info fs-2"></i> Travel Management System
        </div>
        <div className="card-body">
        {/* <div className="record-header d-flex justify-content-between border-bottom pb-4">
            <i className="bi bi-person-fill-add text-info fs-2" ></i>
            <input type="text" className='form-control' name="search" placeholder='Search Employee...' style={{width:'25%'}}/>
        </div> */}
        <div className="employee-record">
        {/* {userList.length >0 ?  */}
        <table className="table table-striped table-responsive">
            <thead>
                <tr>
                <th scope="col"># Trip ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Trip</th>
                <th scope="col">Trip Date</th>
                <th scope="col">Arrival</th>
                <th scope="col">Departure</th>
                {/* <th scope="col">Status</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th> */}
                </tr>
            </thead>
            <tbody>
               {tripsData.length > 0 ? 

               tripsData.map((data, i) =>{
                i++;
                   return(
                    <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{data.name}</td>
                    <td>{data.trip}</td>
                    <td> {data.tripDate} </td>
                    <td> {data.arrival} am</td>
                    <td> {data.arrival} pm </td>                   
                </tr>
                   )
               })
               : 
               <tr>
                <td> Data not Found</td>
               </tr>
            
            }
             
            </tbody>
            </table>
           
          
        </div>
        </div>
        </div>
    {/* {showModal ? <BootstrapModal setShowModal = {setShowModal} setEmployeeData ={setEmployeeData} addEmployee={addEmployee}/> :''} */}
     {/* <!-- Button trigger modal --> */}
    
    
  </div>
  </>
  )
}
