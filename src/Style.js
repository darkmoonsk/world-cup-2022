import styled from "styled-components";
import * as styles from "./Variables"

const Container = styled.div`
  position: relative;
  margin: 0px auto;
  max-width: 100%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  position: fixed;
  margin-top: 30px;
  top: 0;
  left: 41%;
  width: 320px;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
    margin-bottom: 25px;
  }
`;

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const LeftGroupsStage = styled.div`
  margin-left: 5%;
  display: flex;
  gap: 22px;
  flex-direction: column;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    margin-bottom: 15px;
  }
`;

const RightGroupsStage = styled.div`
  margin-right: 5%;
  display: flex;
  gap: 22px;
  flex-direction: column;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-right: 0px;
    width: 100%;
    margin-bottom: 15px;
  }
`;

const Round16Left = styled.div`
  position: fixed;
  top: 15%;
  left: 20%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    width: 100%;
    position: static;
    align-items: center;
    margin: 25px 0px;
    gap: 30px;
  }
`;

const Round16Right = styled.div`
  position: fixed;
  top: 15%;
  left: 73%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    width: 100%;
    position: static;
    align-items: center;
    margin-bottom: 15px;
    gap: 30px;
  }
`;

const Round8Left = styled.div`
  position: fixed;
  top: 35%;
  left: 32%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    width: 100%;
    position: static;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
  }
`;

const Round8Right = styled.div`
  position: fixed;
  top: 35%;
  left: 62%;
  display: flex;
  gap: 80px;
  flex-direction: column;
  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    width: 100%;
    position: static;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
  }
`;

const Round4Container = styled.div`
  position: fixed;
  top: 45%;
  left: 43%;
  display: flex;
  gap: 40px;
  flex-direction: row;
  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    width: 100%;
    position: static;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
  }
`;

const Final = styled.div`
  position: fixed;
  top: 22%;
  left: 47%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    width: 100%;
    position: static;
    gap: 30px;
    align-items: center;
    margin-bottom: 15px;
  }
`;

const TitleGroupStageLeft = styled.div`
  position: fixed;
  top: 30%;
  left: 1%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleGroupStageRight = styled.div`
  position: fixed;
  top: 30%;
  left: 96%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleRound16Left = styled.div`
  position: fixed;
  top: 28%;
  left: 17%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleRound16Right = styled.div`
  position: fixed;
  top: 28%;
  left: 80%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleRound8Left = styled.div`
  position: fixed;
  top: 27%;
  left: 28%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleRound8Right = styled.div`
  position: fixed;
  top: 27%;
  left: 69.5%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleRound4 = styled.div`
  position: fixed;
  top: 58%;
  left: 44%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const TitleFinal = styled.div`
  position: fixed;
  top: 34%;
  left: 47%;

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

const Button = styled.button`
  position: fixed;
  max-width: 300px;
  top: 80%;
  left: 43%;
  cursor: pointer;
  font-size: 25px;
  background-image: linear-gradient(
    to right,
    #c04848 0%,
    #480048 51%,
    #c04848 100%
  );
  margin: 10px;
  padding: 21px 65px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #da6832;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: ${styles.MEDIA_MAXWIDTH}) {
    position: static;
  }
`;

export { 
  Container,
  Logo,
  Groups,
  LeftGroupsStage,
  RightGroupsStage,
  Round16Left,
  Round16Right,
  Round8Left,
  Round8Right,
  Round4Container,
  Final,
  TitleGroupStageLeft,
  TitleGroupStageRight,
  TitleRound16Left,
  TitleRound16Right,
  TitleRound8Left,
  TitleRound8Right,
  TitleRound4,
  TitleFinal,
  Button,
};
