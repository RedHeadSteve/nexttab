import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
// import Error from "./pages/error/Error.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Contact from "./pages/contact/Contact.jsx";
import OverOns from "./pages/over-ons/OverOns.jsx";
import Projecten from "./pages/projecten/Projecten.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                {/*<Route path={"/*"} element={<Error/>}/>*/}
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/over-ons"} element={<OverOns />} />
                <Route path={"projecten"} element={<Projecten />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
