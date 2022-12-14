
import styled from "styled-components"
import Team from "./Team"

function Group(props) {
  

  return (
    <GroupContainer>
      <GroupHeader>
        <h1>{props.name}</h1>      
      </GroupHeader>
      <TeamsTable>
        <thead>
        <tr>
          <th>Classificação</th>
          <th>P</th>
          <th>V</th>
          <th>SG</th>
        </tr>
        </thead>
        <tbody>
          {props.teams?.map((team, index) => (
              <Team id={index + 1} key={team.Token} name={team.Name} points={team.points} victories={team.victories} sg={team.sg} />
            ))}     
        </tbody>    
      </TeamsTable>
      
    </GroupContainer>
  )
}

export default Group

const GroupContainer = styled.div`
    width: 200px;
    height: 200px;
    background: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const GroupHeader = styled.div`
    padding: 5px;
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    height: 35px;
    background: rgb(30, 30, 30 );
    

    h1 {
      user-select: none;
      text-align: center;
      margin: 0;
      color: #df7000;
      font-size: 18px;
    }
`

const TeamsTable = styled.table`
    user-select: none;
    padding: 5px 5px;

`