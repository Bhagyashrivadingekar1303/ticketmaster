
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar'
import Login from '../pages/Login';
import Employee from '../pages/Employee';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';
const AppRoutes = () => {
    return (
        <div>
            <div className='row'>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>

                        {/* <Route path='/' element={<Login></Login>}></Route> */}
                        <Route path='/' element={<Login></Login>}></Route>
                        <Route path='employee' element={<Employee></Employee>}></Route>
                        <Route path='registration' element={<Registration></Registration>}></Route>
                        <Route path='ticket' element={<Tickets></Tickets>}></Route>
                        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>


                    </Routes>


                </BrowserRouter>
            </div>
        </div>
    );
};

export default AppRoutes;
