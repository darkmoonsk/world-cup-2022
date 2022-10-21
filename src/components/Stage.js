import styled from "styled-components"
import * as styles from "../Variables"

function Stage(props) {
  return (
    <Title>{props.title}</Title>
  )
}

export default Stage

const Title = styled.p`
    user-select: none;
    text-shadow: 3px 1px 2px rgba(0,0,0,0.6);
    font-size: 35px;
    font-weight: 900;
    letter-spacing: 3px;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    color: #df7000;

    @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
      writing-mode: initial;
    }

    @media (max-width: 1260px) {
      marging-top: 25px;
    }

    @media (max-width: 768px) {
      font-size: 25px;
    }
`