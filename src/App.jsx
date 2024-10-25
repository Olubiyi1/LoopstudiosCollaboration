import styled from "styled-components";
import Homepage from "./Pages/Homepage";
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
     );
}
 
export default App;

const Main = styled.div`
    
`