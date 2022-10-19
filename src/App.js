import { useEffect, useState } from "react";
import styled from "styled-components";
import Group from "./components/Group";
import Match from "./components/Match";
import Stage from "./components/Stage";
import StageFinals from "./components/StageFinals";
import simulator from "./simulator";

function App() {
  const [teams, setTeams] = useState();
  const [groups, setGroups] = useState(null);

  const handleGetTeams = async () => {
    const options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "git-user": "darkmoonsk"
        
      })
    }

    const data = await fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", options);
    const teamsData = await data.json();
    setTeams(teamsData.Result);
  }

  useEffect(() => {
    handleGetTeams();
  }, [])

  useEffect(() => {
    if(groups){
      console.log(groups);
    } 
  }, [groups])

  useEffect(() => {
    if(teams){
      console.log(teams); 
      setGroups(simulator.makeGroups(teams));
    }     
  }, [teams])

  const handlePlayMatchsGroups = (groups) => {
      const toComparePointsSGRandom = (a, b) => {
        if(a.points > b.points){
          return -1;
        }else if(a.points < b.points){
          return true;
        }else {
          if(a.sg > b.sg){
            return -1;
          }else if(a.sg < b.sg) {
            return true;
          } else {
            const randomChoose = [true,false];
            return randomChoose[Math.ceil(Math.random() * 2)];
          }
          
        }
      }
      const groupA = simulator.playMatchsGroup(groups.groupA).sort(toComparePointsSGRandom);
      const groupB = simulator.playMatchsGroup(groups.groupB).sort(toComparePointsSGRandom);
      const groupC = simulator.playMatchsGroup(groups.groupC).sort(toComparePointsSGRandom);
      const groupD = simulator.playMatchsGroup(groups.groupD).sort(toComparePointsSGRandom);
      const groupE = simulator.playMatchsGroup(groups.groupE).sort(toComparePointsSGRandom);
      const groupF = simulator.playMatchsGroup(groups.groupF).sort(toComparePointsSGRandom);
      const groupG = simulator.playMatchsGroup(groups.groupG).sort(toComparePointsSGRandom);
      const groupH = simulator.playMatchsGroup(groups.groupH).sort(toComparePointsSGRandom);



      const newGroups = {groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH}

      

      setGroups(newGroups);
  }
  

  return (
    <Container>
      <Background src="./images/soccerball.png" />
      <Logo alt="Logo da copa do mundo 2022" src="./images/fifa-world-cup2.png" />
      <Groups>
        <LeftGroupsStage>
          <TitleGroupStageLeft>
            <Stage title="Fase de grupos" />
          </TitleGroupStageLeft>
          <Group name="Grupo A" teams={groups?.groupA} />
          <Group name="Grupo B" teams={groups?.groupB}/>
          <Group name="Grupo C" teams={groups?.groupC}/>
          <Group name="Grupo D" teams={groups?.groupD}/>
        </LeftGroupsStage>

        <Round16Left>
          <TitleRound16Left>
            <Stage title="Oitavas de final" />
          </TitleRound16Left>
          <Match />
          <Match />
          <Match />
          <Match />
        </Round16Left>

        <Round8Left>
          <TitleRound8Left>
            <Stage title="Quartas de final" />
          </TitleRound8Left>
          <Match />
          <Match />
        </Round8Left>

        <Round4Left>
          <TitleRound4>
            <StageFinals title="Semifinal" />
          </TitleRound4>
          <Match />
        </Round4Left>

        <Final>
          <TitleFinal>
            <StageFinals title="Final" />
          </TitleFinal>
          <Match />
        </Final>

        <Round4Right>
          <Match />
        </Round4Right>

        <Round8Right>
          <TitleRound8Right>
            <Stage title="Quartas de Final" />
          </TitleRound8Right>
          <Match />
          <Match />
        </Round8Right>

        <Round16Right>
          <TitleRound16Right>
            <Stage title="Oitavas de Final" />
          </TitleRound16Right>
          <Match />
          <Match />
          <Match />
          <Match />
        </Round16Right>

        <RightGroupsStage>
          <TitleGroupStageRight>
            <Stage title="Fase de grupos" />
          </TitleGroupStageRight>
          <Group name="Grupo E" teams={groups?.groupE}/>
          <Group name="Grupo F" teams={groups?.groupF}/>
          <Group name="Grupo G" teams={groups?.groupG}/>
          <Group name="Grupo H" teams={groups?.groupH}/>
        </RightGroupsStage>
      </Groups>

      <Button onClick={() => handlePlayMatchsGroups(groups)}>Simule já!</Button>
    </Container>
  );
}

export default App;

const Background = styled.img`
    position: fixed;
    z-index: -1;
    top: 5%;
    left: 28%;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 800px;
    opacity: 0.035;
    
`

const Container = styled.div`
  position: relative;
  margin: 0px auto;
  margin-top: 30px;
  max-width: 100%;
`

const Logo = styled.img`
  position: fixed;
  top: 2%;
  left: 41%;
  width: 320px;
`

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
`

const LeftGroupsStage = styled.div`
  margin-left: 5%;
  display: flex;
  gap: 22px;
  flex-direction: column;
`

const RightGroupsStage = styled.div`
  margin-right: 5%;
  display: flex;
  gap: 22px;
  flex-direction: column;
`

const Round16Left = styled.div`
  position: fixed;
  top: 15%;
  left: 20%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const Round16Right = styled.div`
  position: fixed;
  top: 15%;
  left: 73%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const Round8Left = styled.div`
  position: fixed;
  top: 35%;
  left: 32%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const Round8Right = styled.div`
  position: fixed;
  top: 35%;
  left: 62%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const Round4Left = styled.div`
  position: fixed;
  top: 45%;
  left: 43%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const Round4Right = styled.div`
  position: fixed;
  top: 45%;
  left: 51%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const Final = styled.div`
  position: fixed;
  top: 22%;
  left: 47%;
  display: flex;
  gap: 80px;
  flex-direction: column;
`

const TitleGroupStageLeft = styled.div`
  position: fixed;
  top: 30%;
  left: 1%;
`

const TitleGroupStageRight = styled.div`
  position: fixed;
  top: 30%;
  left: 96%;
`

const TitleRound16Left = styled.div`
  position: fixed;
  top: 28%;
  left: 16%;
`

const TitleRound16Right = styled.div`
  position: fixed;
  top: 28%;
  left: 81%;
`

const TitleRound8Left = styled.div`
  position: fixed;
  top: 27%;
  left: 28%;
`

const TitleRound8Right = styled.div`
  position: fixed;
  top: 27%;
  left: 69.5%;
`

const TitleRound4 = styled.div`
  position: fixed;
  top: 58%;
  left: 44%;
`

const TitleFinal = styled.div`
  position: fixed;
  top: 34%;
  left: 47%;
`

const Button = styled.button`
  position: fixed;
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
`
