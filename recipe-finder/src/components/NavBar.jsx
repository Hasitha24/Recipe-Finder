import Sidebar from "./Sidebar";

function NavBar(){
return(
    <>
   <div className="navbar container">
    <a href="#" className="logo">Logo</a>
    <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Settings</a>
    </div>
    <div className="sidebar-btn">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
   </div>
   <Sidebar/>
   </>
);
}

export default NavBar