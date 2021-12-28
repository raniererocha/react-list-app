import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "auto"};
    background-color: ${props => props.bgColor ? props.bgColor : "#263238"};
    text-align: center;
    color: ${props => props.fontColor ? props.fontColor : "white"};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-contents: center;
    flex-direction: column;
    padding: 30px;
    
`

export const Text = styled.p`
    opacity: .5;
    padding: ${props => props.padding ? props.padding : "0"}
`
export const showItems = styled.table`
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.1);
    border-radius: 5px;
    margin-bottom: 80px;
    
`
export const tableHead = styled.th`
    text-align: left;
    width: ${props => props.size ? props.size + "px" : "auto"};
    padding-bottom: 10px;
    
`
export const Filter = styled.select``

export const btn = styled.button`
    padding: 10px 20px;
    margin: 20px;
    background-color: lightgreen;
    border: 1px solid black;
    cursor: pointer;
`