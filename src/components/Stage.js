import styled from "styled-components"

function Stage(props) {
  return (
    <Title>{props.title}</Title>
  )
}

export default Stage

const Title = styled.p`
        text-shadow: 3px 1px 2px rgba(0,0,0,0.6);
        font-size: 35px;
        font-weight: 900;
        letter-spacing: 3px;
        text-transform: uppercase;
        writing-mode: vertical-lr;
        color: #df7000;
`