import styled from "styled-components";

function Modal(props) {

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h1>Fase de grupos</h1>
        </ModalHeader>
        <ModalBody>
            <GroupStage>
                <Section>
                  <Group>
                      <h2>Grupo A</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupA.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupA.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupA.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupA.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupA.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupA.matchs.round3_match2}`}</p>
                  </Group>
                  <Group>
                      <h2>Grupo B</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupB.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupB.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupB.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupB.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupB.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupB.matchs.round3_match2}`}</p>
                  </Group>
                  <Group>
                      <h2>Grupo C</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupC.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupC.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupC.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupC.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupC.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupC.matchs.round3_match2}`}</p>
                  </Group>
                  <Group>
                      <h2>Grupo D</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupD.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupD.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupD.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupD.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupD.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupD.matchs.round3_match2}`}</p>
                  </Group>
                </Section>
                <Section>
                  <Group>
                      <h2>Grupo E</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupE.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupE.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupE.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupE.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupE.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupE.matchs.round3_match2}`}</p>
                  </Group>
                  <Group>
                      <h2>Grupo F</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupF.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupF.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupF.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupF.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupF.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupF.matchs.round3_match2}`}</p>
                  </Group>
                  <Group>
                      <h2>Grupo G</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupG.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupG.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupG.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupG.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupG.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupG.matchs.round3_match2}`}</p>
                  </Group>
                  <Group>
                      <h2>Grupo H</h2>
                      <h4>Rodada 1</h4>
                      <p>{`${props.groups.groupH.matchs.round1_match1}`}</p>
                      <p>{`${props.groups.groupH.matchs.round1_match2}`}</p>
                      <h4>Rodada 2</h4>
                      <p>{`${props.groups.groupH.matchs.round2_match1}`}</p>
                      <p>{`${props.groups.groupH.matchs.round2_match2}`}</p>
                      <h4>Rodada 3</h4>
                      <p>{`${props.groups.groupH.matchs.round3_match1}`}</p>
                      <p>{`${props.groups.groupH.matchs.round3_match2}`}</p>
                  </Group>           
                </Section>
                
                
            </GroupStage>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    z-index: 999;
    position: absolute;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 1250px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
    padding: 15px;
    background-color: rgb(30, 30, 30);

    h1{
      margin-left: 15px;
      color: #df7000;
    }
  h4 {
    margin: 0;
  }
`;

const ModalBody = styled.div`
    padding: 15px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;
`;

const GroupStage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    
    
    @media (max-width: 360px){
      flex-direction: column;
      
`
const Group = styled.div`
    border-radius: 12px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,65,65,1) 0%, rgba(59,0,0,1) 100.2% );
    padding: 5px 20px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 270px;

    h2, h4 {
      letter-spacing: 1.5px;
      text-shadow: 3px 2px 2px rgba(0,0,0,0.6);
      color: #EEE;
      margin: 8px 0px;
    }

    p {
      letter-spacing: 1px;
      text-shadow: 3px 2px 2px rgba(0,0,0,0.6);
      color: white;
      text-align: center;
      background: radial-gradient(circle, rgba(139,22,56,1) 50%, rgba(46,45,45,1) 100%);
      font-size: 13px;
      font-weight: bold;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      margin: 7px 0px;
      padding: 4px;
    }
`

const Section = styled.section`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Button = styled.button`
    text-shadow: 3px 2px 2px rgba(0,0,0,0.6);
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;    
    background-image: linear-gradient(
      to right,
      #e52d27 0%,
      #b31217 51%,
      #e52d27 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #1e1e1e;
    border-radius: 10px;
    display: block;

    button:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
`
