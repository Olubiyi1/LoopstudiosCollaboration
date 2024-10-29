import styled from "styled-components";
import Creation from "./components/Creation";
import Button from "./components/Button";

import DeepEarth from "./assets/images/desktop/image-deep-earth.jpg"
import NightArcade from "./assets/images/desktop/image-night-arcade.jpg"
import SoccerTeam from "./assets/images/desktop/image-soccer-team.jpg"
import Grid from "./assets/images/desktop/image-grid.jpg"
import FromAbove from "./assets/images/desktop/image-from-above.jpg"
import PocketBorealis from "./assets/images/desktop/image-pocket-borealis.jpg"
import Curiosity from "./assets/images/desktop/image-curiosity.jpg"
import Fisheye from "./assets/images/desktop/image-fisheye.jpg"

import DeepEarthM from "./assets/images/mobile/image-deep-earth.jpg"
import NightArcadeM from "./assets/images/mobile/image-night-arcade.jpg"
import SoccerTeamM from "./assets/images/mobile/image-soccer-team.jpg"
import GridM from "./assets/images/mobile/image-grid.jpg"
import FromAboveM from "./assets/images/mobile/image-from-above.jpg"
import PocketBorealisM from "./assets/images/mobile/image-pocket-borealis.jpg"
import CuriosityM from "./assets/images/mobile/image-curiosity.jpg"
import FisheyeM from "./assets/images/mobile/image-fisheye.jpg"

const MidSection = () => {
    return (   
    <div>
        <OurCreation>
            <CreationLeft> OUR CREATIONS</CreationLeft>
            <CreationBtn> <Button/> </CreationBtn>
        </OurCreation>

        <MidProps>
            <Div1>
                <Creation Name="DEEP EARTH" />
            </Div1>
            <Div2>
                <Creation Name="NIGHT ARCADE"/>
            </Div2>
            <Div3>
                <Creation Name="SOCCER TEAM VR"/>
            </Div3>
            <Div4>
                <Creation Name="THE  GRID"/>
            </Div4>
            <Div5>
                <Creation Name="FROM UP ABOVE VR"/>
            </Div5>
            <Div6>
                <Creation Name="POCKET BOREALIS"/>
            </Div6>
            <Div7>
                <Creation Name="THE CURIOSITY"/>
            </Div7>
            <Div8>
                <Creation Name="MAKE IT FISHEYE"/>
            </Div8>
        
        </MidProps>

        <CreationBtn2> <Button/> </CreationBtn2>
    </div> );
}
 
export default MidSection;

const MidProps = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    gap: 30px;
    margin: 30px auto;
    justify-content: center;
    /* border: 1px solid; */
    /* background-image: url(${props => props.imageUrl}); */

`
const Div1 = styled.div`
    background-image: url(${DeepEarth}) ;
    background-size: cover; 
    background-position:center;

    @media (max-width:610px) {
        background-image: url(${DeepEarthM}) ;  
    }

`
const Div2 = styled.div`
    background-image: url(${NightArcade}) ;
    background-size: cover;
    background-position: center;

    @media (max-width:610px) {
        background-image: url(${NightArcadeM}) ;
    }

`
const Div3 = styled.div`
    background-image: url(${SoccerTeam}) ;
    background-size: cover; 
    background-position:center;

    @media (max-width:610px) {
        background-image: url(${SoccerTeamM}) ;
    }

`
const Div4 = styled.div`
    background-image: url(${Grid}) ;
    background-size: cover; 
    background-position:center;
    @media (max-width:610px) {
        background-image: url(${GridM}) ;

    }
`
const Div5 = styled.div`
    background-image: url(${FromAbove}) ;
    background-size: cover; 
    background-position:center;

    @media (max-width:610px) {
        background-image: url(${FromAboveM}) ;
    }

`
const Div6 = styled.div`
    background-image: url(${PocketBorealis}) ;
    background-size: cover; 
    background-position:center;

    @media (max-width:610px) {
        background-image: url(${PocketBorealisM}) ;
    }

`
const Div7 = styled.div`
    background-image: url(${Curiosity}) ;   
    background-size: cover; 
    background-position:center;

    @media (max-width:610px) {
        background-image: url(${CuriosityM}) ;
    }

`
const Div8 = styled.div`
    background-image: url(${Fisheye}) ;
    background-size: cover;
    background-position:center;

    @media (max-width:610px) {
        background-image: url(${FisheyeM}) ;
    }

`
const OurCreation = styled.div`
    max-width: 1100px;
    display: flex;
    /* border: 1px solid; */
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;

`
const CreationLeft = styled.p`
    font-size: 18px;

    @media (max-width:610px) {
       font-size: 28px;
       letter-spacing: 2px;
       margin: auto;
       /* width: 80%; */
    }
`
const CreationBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid red;

    @media (max-width:610px) {
       display: none;
    }
`

const CreationBtn2 = styled.button`
    display: none;
    width: 50%;
    margin: 30px auto;
    height: 40px;
    border: 2px solid red;

    @media (max-width:610px) {
       display: block;
    }
`