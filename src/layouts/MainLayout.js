import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";




function MainLayout(){
    return(
        <>
            <Nav>

            </Nav>
            <main>
                <Outlet/>
            </main>
            <Footer>

            </Footer>
        </>
        
    )
}

export default MainLayout;