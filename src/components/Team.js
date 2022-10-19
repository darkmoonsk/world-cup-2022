import styled from "styled-components";

function Team(props) {
  return (
    <Container>
        <td>{`${props.id} ${props.name}`}</td>
        <td>{props.points? props.points : 0}</td>
        <td>{props.victories? props.victories : 0}</td>
        <td>{props.sg? props.sg : 0}</td>
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


