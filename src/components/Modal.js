import styled from "styled-components";

function Modal(props) {

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h4>Modal title</h4>
        </ModalHeader>
        <ModalBody>
            <GroupStage>
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
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
    padding: 15px;
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

const Button = styled.button`
    text-align: right;
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

const GroupStage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`
const Group = styled.div`
    margin-right: 15px;
    margin-bottom: 20px;
`
