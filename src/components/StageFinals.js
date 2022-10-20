import styled from "styled-components"

function StageFinals(props) {
  return (
    <Title>{props.title}</Title>
  )
}

export default StageFinals;

const Title = styled.p`
    user-select: none;
    text-shadow: 3px 1px 2px rgba(0,0,0,0.6);
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #df7000;
`