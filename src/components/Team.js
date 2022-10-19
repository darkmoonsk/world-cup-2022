import styled from "styled-components";

function Team(props) {
  return (
    <Container>
        <td>1 {props.name}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </Container>
  )
}

export default Team

const Container = styled.tr`
    background: #C9E1DF;

    td {
        width: 100%;
        padding: 8px 7px;
        font-size: 11px;
        font-weight: bold;
        text-transform: uppercase;
    }

`


