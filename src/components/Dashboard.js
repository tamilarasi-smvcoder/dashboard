import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Sidebar from "./Sidebar"; 
import Navbar from "./Navbar";
import Table from "./Table";

const Dashboard = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar user={user} handleLogOut={handleLogOut} />  {/* Pass user and logout function to Navbar */}
        
        {
          /*<div className="p-4 box mt-3 text-center">
            <h1>Welcome to your Dashboard</h1>
            <p>{user && user.email}</p>
          </div>*/
          /*<div className="d-grid gap-2">
              <Button variant="primary" onClick={handleLogOut}>Log out</Button>
            </div> */
        }
        
        <Table userEmail={user.email} />  {/* Pass user email to Table component */}
      </div>
    </div>
  );
};

export default Dashboard;
