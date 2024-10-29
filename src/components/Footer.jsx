import styled from "styled-components";

import FooterLogo from "../assets/images/logo.svg"
import Facebook from "../assets/images/icon-facebook.svg"
import Twitter from "../assets/images/icon-twitter.svg"
import Pinterest from "../assets/images/icon-pinterest.svg"
import Instagram from "../assets/images/icon-instagram.svg"

const Footer = () => {
    return ( <LoopFooter>
        <FooterLeft>
            <FooterImg>
                <img src={FooterLogo} alt="" />
            </FooterImg>

            <FooterLinks>
                <a href="#">About </a>
                <a href="#">Careers </a>
                <a href="#">Events </a>
                <a href="#">Products </a>
                <a href="#">Support </a>
            </FooterLinks>

            
        </FooterLeft>

        <FooterRight>
        <FooterIcons>
                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Pinterest} alt="pinterest" />
                <img src={Instagram} alt="instagram" />
            </FooterIcons>
            
            <FooterP>
                © 2021 Loopstudios. All rights reserved.
            </FooterP>
        </FooterRight>
    

    </LoopFooter> );
}
 
export default Footer;

const LoopFooter = styled.footer`
    background-color: black;
    padding: 30px;
    color: white;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width:610px) {
        flex-direction: column;
        align-items: center;
    }
`
const FooterLeft =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px; 

    @media (max-width:610px) {
        align-items: center;
    }
` 

const FooterRight =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 20px;

    @media (max-width:610px) {
      align-items: center;
    }
`

const FooterImg=styled.div`
`

const FooterIcons =styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;

    img{
        width: 25px;
        height: 25px;
    }
    
`

const FooterLinks =styled.div`
display:flex;
justify-content: space-between;
width: 250px;

a{
    text-decoration: none;
    color:white;
    font-size: 13px;
}
@media (max-width:610px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        a{
            font-size: 20px; 
        }
    }

`

const FooterP =styled.p`
font-size: 13px;
margin-bottom: 0;
`
