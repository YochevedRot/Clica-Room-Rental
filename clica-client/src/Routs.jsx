import * as React from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AdminPage from "./components/Login/AdminPage";
import UserHome from "./components/User/UserHome";
import AdminHome from "./components/Admin/AdminHome";
import MeetingTable from "./components/Meetings/MeetingTable"

const MyRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/admin',
            element: <AdminPage/>,
            children: [
                {path: 'meetings', element: <AdminHome/>},
                {path: 'services', element: <AdminHome/>},
            ],
        },
        {
            path: '/',
            element: <UserHome/>
        }
    ])

    return(
       <RouterProvider router={router}/>
    )
}


export default MyRouter

