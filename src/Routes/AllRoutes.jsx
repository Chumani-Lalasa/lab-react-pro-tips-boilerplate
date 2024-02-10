import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import PageNotFound from "../Pages/PageNotFound";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*"  element={<PageNotFound />}></Route>
        </Routes>
    )
}
export default AllRoutes;