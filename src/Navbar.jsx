import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function Navbar() {
    useEffect(()=>{
        // const nav = document.querySelectorAll('nav');
        const navlinks = document.querySelectorAll('.nav-item .a')
        const activepage = () => {
            navlinks.forEach(link => {
                link.classList.remove('active')
            })
        }
        navlinks.forEach((link, idx) => {
            link.addEventListener('click', () => {
                if (!link.classList.contains('active')) {
                    activepage();
                    link.classList.add('active')
                }
            })
        });
    })
    return ( 
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand " to="#">KARTHIK K</Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav  p-1  mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="a active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className="a">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/project" className="a"> Project</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="a">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )

}
export default Navbar;