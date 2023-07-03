import { useEffect, useState } from "react";
import {
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
} from "./Style";
import Group from "./components/Group";
import Match from "./components/Match";
import Stage from "./components/Stage";
import StageFinals from "./components/StageFinals";
import Modal from "./components/Modal";
import simulator from "./simulator";
import data from "./teams";

function App() {
  const [teams, setTeams] = useState();
  const [groups, setGroups] = useState(null);
  const [round16, setRound16] = useState(null);
  const [round8, setRound8] = useState(null);
  const [round4, setRound4] = useState(null);
  const [final, setFinal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleGetTeams = async () => {
    
    // API Indisponivel
    /* const options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "git-user": "darkmoonsk",
      }),
    };

    const data = await fetch(
      "https://estagio.geopostenergy.com/WorldCup/GetAllTeams",
      options
    );

    const data = await fetch("./teams.json");
    const teamsData = await data.json(); */

    console.log(data);
    setTeams(data);
  };


// API Indisponivel
//   const handleSendChampion = async (final) => {
//     const url = "https://estagio.geopostenergy.com/WorldCup/InsertFinalResult";
//     const data = {
//       equipeA: final.roundFinal[0].Token,
//       equipeB: final.roundFinal[1].Token,
//       golsEquipeA: final.roundFinal[0].final.goals,
//       golsEquipeB: final.roundFinal[1].final.goals,
//       golsPenaltyTimeA: final.roundFinal[0].final.penaltyShootout,
//       golsPenaltyTimeB: final.roundFinal[1].final.penaltyShootout,
//     };
//     const options = {
//       method: "POST",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         "git-user": "darkmoonsk",
//       }),
//       body: JSON.stringify(data),
//     };

//     const response = await fetch(url, options);

//     return response.json();
//   };

  useEffect(() => {
    handleGetTeams();
  }, []);

  useEffect(() => {
    if (teams) {
      setGroups(simulator.makeGroups(teams));
    }
  }, [teams]);

//   useEffect(() => {
//     if (final) {
//       handleSendChampion(final).then((data) => {
//         console.log(data);
//       });
//     }
//   }, [final]);

  const handlePlayMatchs = (groups) => {
    const newGroups = simulator.playAllGroups(groups);
    setGroups(newGroups);

    const round16Simulation = simulator.playRound16(
      simulator.makeRound16(newGroups)
    );
    setRound16(round16Simulation);

    const round8Simulation = simulator.playRound8(
      simulator.makeRound(round16Simulation, 8)
    );
    setRound8(round8Simulation);

    const round4Simulation = simulator.playRound4(
      simulator.makeRound(round8Simulation, 4)
    );
    setRound4(round4Simulation);

    const finalSimulation = simulator.playFinal(
      simulator.makeRound(round4Simulation, 2)
    );
    setFinal(finalSimulation);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      {showModal ? <Modal onClose={handleCloseModal} groups={groups} /> : <></>}
      <Logo
        alt="Logo da copa do mundo 2022"
        src="./images/fifa-world-cup2.png"
      />
      <Groups>
        <LeftGroupsStage>
          <TitleGroupStageLeft>
            <Stage title="Fase de grupos" />
          </TitleGroupStageLeft>
          <Group name="Grupo A" teams={groups?.groupA} />
          <Group name="Grupo B" teams={groups?.groupB} />
          <Group name="Grupo C" teams={groups?.groupC} />
          <Group name="Grupo D" teams={groups?.groupD} />
        </LeftGroupsStage>

        <RightGroupsStage>
          <TitleGroupStageRight>
            <Stage title="Fase de grupos" />
          </TitleGroupStageRight>
          <Group name="Grupo E" teams={groups?.groupE} />
          <Group name="Grupo F" teams={groups?.groupF} />
          <Group name="Grupo G" teams={groups?.groupG} />
          <Group name="Grupo H" teams={groups?.groupH} />
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
          <Match round={8} match={round8?.round8D} />
        </Round8Right>

        <Round4Container>
          <TitleRound4>
            <StageFinals title="Semifinal" />
          </TitleRound4>
          <Match round={4} match={round4?.round4A} />

          <Match round={4} match={round4?.round4B} />
        </Round4Container>

        <Final>
          <TitleFinal>
            <StageFinals title="Final" />
          </TitleFinal>
          <Match round="FINAL" match={final?.round2A} />
        </Final>
      </Groups>

      <Button onClick={() => handlePlayMatchs(groups)}>Simule já!</Button>
    </Container>
  );
}

export default App;
