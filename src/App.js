import { useEffect, useState } from "react";
import styled from "styled-components";
import Group from "./components/Group";
import Match from "./components/Match";
import Stage from "./components/Stage";
import StageFinals from "./components/StageFinals";
import Modal from "./components/Modal";
import simulator from "./simulator";

function App() {

  const [teams, setTeams] = useState();
  const [groups, setGroups] = useState(null);
  const [round16, setRound16] = useState(null);
  const [round8, setRound8] = useState(null);
  const [round4, setRound4] = useState(null);
  const [final, setFinal] = useState(null);;
  const [showModal, setShowModal] = useState(false);

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
    if(final){
      console.log(final);
    } 
  }, [final])


  useEffect(() => {
    if(teams){
      console.log(teams); 
      setGroups(simulator.makeGroups(teams));
    }     
  }, [teams])


  const handlePlayMatchs = (groups) => { 
    const newGroups =  simulator.playAllGroups(groups);
    setGroups(newGroups);

    const round16Simulation = simulator.playRound16(simulator.makeRound16(newGroups))
    setRound16(round16Simulation);
    //console.log(round16);

    const round8Simulation = simulator.playRound8(simulator.makeRound8(round16Simulation));
    setRound8(round8Simulation);
    //console.log(round8);

    const round4Simulation = simulator.playRound4(simulator.makeRound4(round8Simulation));
    setRound4(round4Simulation);
    console.log(round4);

    const finalSimulation = simulator.playFinal(simulator.makeFinal(round4Simulation));
    setFinal(finalSimulation);
    console.log(final);

    setShowModal(true);
  }
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
   
    <Container>
      {showModal? <Modal onClose={handleCloseModal} groups={groups}/> : <></>}
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

        <RightGroupsStage>
          <TitleGroupStageRight>
            <Stage title="Fase de grupos" />
          </TitleGroupStageRight>
          <Group name="Grupo E" teams={groups?.groupE}/>
          <Group name="Grupo F" teams={groups?.groupF}/>
          <Group name="Grupo G" teams={groups?.groupG}/>
          <Group name="Grupo H" teams={groups?.groupH}/>
        </RightGroupsStage>

        <Round16Left>
          <TitleRound16Left>
            <Stage title="Oitavas de final" />
          </TitleRound16Left>
          <Match round={16} match={round16?.round16A} />
          <Match round={16} match={round16?.round16B} />
          <Match round={16} match={round16?.round16C} />
          <Match round={16} match={round16?.round16D} />
        </Round16Left>

        <Round16Right>
          <TitleRound16Right>
            <Stage title="Oitavas de Final" />
          </TitleRound16Right>
          <Match round={16} match={round16?.round16E} />
          <Match round={16} match={round16?.round16F} />
          <Match round={16} match={round16?.round16G} />
          <Match round={16} match={round16?.round16H} />
        </Round16Right>


          <Round8Left>
            <TitleRound8Left>
              <Stage title="Quartas de final" />
            </TitleRound8Left>
            <Match round={8} match={round8?.round8A} />
            <Match round={8} match={round8?.round8B} />
          </Round8Left>

          <Round8Right>
            <TitleRound8Right>
              <Stage title="Quartas de Final" />
            </TitleRound8Right>
            <Match round={8} match={round8?.round8C} />
            <Match round={8} match={round8?.round8D}/>
          </Round8Right>


        <Round4Container>
          <TitleRound4>
            <StageFinals title="Semifinal" />
          </TitleRound4>
          <Match round={4} match={round4?.round4A} />

          <Match round={4} match={round4?.round4B}/>
        </Round4Container>
        

        <Final>
          <TitleFinal>
            <StageFinals title="Final" />
          </TitleFinal>
          <Match round="FINAL" match={final?.roundFinal}/>
        </Final>

     

        

        

      </Groups>

      <Button onClick={() => handlePlayMatchs(groups)}>Simule já!</Button>
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

  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Logo = styled.img`
  position: fixed;
  top: 2%;
  left: 41%;
  width: 320px;

  @media (max-width: 1700px) {
    position: static;
  }
`

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1700px) {
    position: static;
  }

`

const LeftGroupsStage = styled.div`
  margin-left: 5%;
  display: flex;
  gap: 22px;
  flex-direction: column;

  @media (max-width: 1700px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`

const RightGroupsStage = styled.div`
  margin-right: 5%;
  display: flex;
  gap: 22px;
  flex-direction: column;

  @media (max-width: 1700px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`

const Round16Left = styled.div`
  position: fixed;
  top: 15%;
  left: 20%;
  display: flex;
  gap: 80px;
  flex-direction: column;
  
  @media (max-width: 1700px) {
    width: 100%;
    position: static;
    align-items: center;
    margin-bottom: 15px;
    gap: 30px;
  }
`

const Round16Right = styled.div`
  position: fixed;
  top: 15%;
  left: 73%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: 1700px) {
    width: 100%;
    position: static;
    align-items: center;
    margin-bottom: 15px;
    gap: 30px;
  }
`

const Round8Left = styled.div`
  position: fixed;
  top: 35%;
  left: 32%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: 1700px) {
    width: 100%;
    position: static;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
  }
`

const Round8Right = styled.div`
  position: fixed;
  top: 35%;
  left: 62%;
  display: flex;
  gap: 80px;
  flex-direction: column;
   @media (max-width: 1700px) {
    width: 100%;
    position: static;
    flex-direction: column;
    align-items: center;
    gap: 30px;;
    margin-bottom: 15px;
  }
`

const Round4Container = styled.div`
  position: fixed;
  top: 45%;
  left: 43%;
  display: flex;
  gap: 40px;
  flex-direction: row;
  @media (max-width: 1700px) {
    width: 100%;
    position: static;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
  }
`

const Final = styled.div`
  position: fixed;
  top: 22%;
  left: 47%;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (max-width: 1700px) {
    width: 100%;
    position: static;
    gap: 30px;
    align-items: center;
    margin-bottom: 15px;
  }
`

const TitleGroupStageLeft = styled.div`
  position: fixed;
  top: 30%;
  left: 1%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleGroupStageRight = styled.div`
  position: fixed;
  top: 30%;
  left: 96%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleRound16Left = styled.div`
  position: fixed;
  top: 28%;
  left: 16%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleRound16Right = styled.div`
  position: fixed;
  top: 28%;
  left: 81%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleRound8Left = styled.div`
  position: fixed;
  top: 27%;
  left: 28%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleRound8Right = styled.div`
  position: fixed;
  top: 27%;
  left: 69.5%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleRound4 = styled.div`
  position: fixed;
  top: 58%;
  left: 44%;

  @media (max-width: 1700px) {
    position: static;
  }
`

const TitleFinal = styled.div`
  position: fixed;
  top: 34%;
  left: 47%;

  @media (max-width: 1700px) {
    position: static;
  }
`

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

  @media (max-width: 1700px) {
    position: static;
  }
`
