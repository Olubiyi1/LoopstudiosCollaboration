import styled from "styled-components";
const Button = () => {
    return ( <Buttonbtn> 
                SEE ALL
    </Buttonbtn> );
}
 
export default Button;

const Buttonbtn = styled.div`
   width: 120px;
   height: 40px;
    letter-spacing: 2px;
    font-size: 12px;
    &:hover{
        background-color: black;
        color: white;
    }
    
`