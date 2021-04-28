import styled from 'styled-components';


//export unnamed styled-component (exported to hooks in this case)
export const DivSC = styled.div`
    background-color: ${props => props.bgc || "purple"};
    width: 400px;
    height: 400px;
`;

export const H1S = styled.div`
color:#8f3120;
font-size: 4vh;
font-family: 'Chango', cursive;
    background-color: lightgray;
    text-align: center;
    width: 100%;
    height: 20vh;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;

`;

export const HomeH1 = styled.div`
    font-size: 3vh;
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: 0px 15px 10px -15px black;
    color: #f26419;
`;


export const ButtonDiv = styled.div`
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;




export const H1JobsDiv = styled.div`

 
`;

export const MainDiv = styled.div`
background-color: #023047;
 height: 93vh;
`;

export const JobLi = styled.li`
cursor: pointer;
width: 100%;
background-color: #D3D3D3;
font-size: 1.2rem;
/* list-style-type: none; */
margin-bottom:4px;
border-radius: 5px;
font-weight: 400;
&:hover {
  /* list-style-type: none; */
  background-color: rgb(230, 230, 230);
}

`;

export const TitleLi = styled.li`
background-color: rgb(26, 120, 163);
font-size: 1.3rem;
list-style-type: none;
margin-bottom:15px;
`;


export const FootDiv = styled.div`
width: 100%;
height: 3vh;
background-color: black;
color: darkgray;
text-align:center;
`;