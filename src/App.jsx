import styled from "styled-components";
import Homepage from "./Pages/Homepage";
<<<<<<< HEAD
<<<<<<< HEAD
import Careers from "./Component/Careers";
import AboutPage from "./Component/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Events from "./Component/Events";
import Products from "./Component/Products";
import Supports from "./Component/Support";

const App = () => {
    return ( 
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Careers" element={<Careers/>}/>
                    <Route path="/About" element={<AboutPage/>}/>
                    <Route path="/Events" element={<Events/>}/>
                    <Route path="/Products" element={<Products/>}/>
                    <Route path="/Supports" element={<Supports/>}/>
                </Routes>
            </Main>
        </BrowserRouter>
=======
=======
>>>>>>> a47911f413e8b4ae8a14687a1ed2b39f737baf0a
import AboutPage from "./Component/About";

const App = () => {
    return ( 
        <Main>
            <Homepage/>
            <AboutPage/>
        </Main>
<<<<<<< HEAD
>>>>>>> a47911f413e8b4ae8a14687a1ed2b39f737baf0a
=======
>>>>>>> a47911f413e8b4ae8a14687a1ed2b39f737baf0a
     );
}
 
export default App;

const Main = styled.div`
    
`