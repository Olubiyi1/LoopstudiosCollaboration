import styled from "styled-components";

const Creation = (props) => {
    return ( <CreationDiv>
        <DivTitle>{props.Name}</DivTitle>

    </CreationDiv> );
}
 
export default Creation

const CreationDiv = styled.div`
    border: 1px solid;
    height: 450px;
    width: 250px;
    display: flex;
    align-items: end;
    color: white;

    &:hover{
        background-color: rgba(255, 255, 255, 0.6);
    }

    @media (max-width:610px) {
        width: 85vw;
        height: 230px;
    }
    /* background-image: url(${props => props.imageUrl}); */
`
const DivTitle = styled.p`
    width: 120px;
    font-size: 20px;
    margin-left: 55px;
    margin-bottom: 40px;
    line-height: 25px;
    letter-spacing: 2px;
    /* font-weight: 300; */ 
`