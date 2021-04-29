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
    height: ${props => props.h || "20vh"};;
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
export const YearDiv = styled.div`
    height: 10vh;
    display: flex;
    justify-content: left;
    align-items: center;
`;




export const H1JobsDiv = styled.div`
font-weight: bold;
 
`;

export const MainDiv = styled.div`
min-height: 93vh;
background-color: #023047;

`;

export const DayLi = styled.li`
list-style-type: none;
width: 100%;
background-color: #576777;
font-size: 1rem;
margin-bottom:4px;
border-radius: 5px;
font-weight: 400;
&:hover {
  background-color: #718599;
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