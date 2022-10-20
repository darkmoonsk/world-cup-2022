import styled from "styled-components";

function Match(props) {
  let penalty1;
  let penalty2;

  if(props.round === 16){
    if(props.match && (props.match[0].round16.penaltyShootout || props.match[1].round16.penaltyShootout)){
      penalty1 = props.match[0].round16.penaltyShootout;
      penalty2 = props.match[1].round16.penaltyShootout;
    }
  }

  if(props.round === 8){
    if(props.match && (props.match[0].round8.penaltyShootout || props.match[1].round8.penaltyShootout)){
      penalty1 = props.match[0].round8.penaltyShootout;
      penalty2 = props.match[1].round8.penaltyShootout;
    }
  }

  if(props.round === 4){
    if(props.match && (props.match[0].round4.penaltyShootout || props.match[1].round4.penaltyShootout)){
      penalty1 = props.match[0].round4.penaltyShootout;
      penalty2 = props.match[1].round4.penaltyShootout;
    }
  }

  if(props.round === "FINAL"){
    if(props.match && (props.match[0].final.penaltyShootout || props.match[1].final.penaltyShootout)){
      penalty1 = props.match[0].final.penaltyShootout;
      penalty2 = props.match[1].final.penaltyShootout;
    }
  }
  
  
  if(props.round === 16){
    return (
      <TheMatch>        
          <p>{props.match? props.match[0].Name: ""}</p>
          <Scoreboard><small>{penalty1? `(${penalty1})` : ""}</small> 
            {props.match? `${props.match[0].round16.goals} X ${props.match[1].round16.goals}`: "" }
            <small>{penalty1? `(${penalty2})` : ""}</small>
          </Scoreboard>      
          <p>{props.match? props.match[1].Name: ""}</p>
      </TheMatch>
    )
  }

  if(props.round === 8){
    return (
      <TheMatch>
          
          <p>{props.match? props.match[0].Name: ""}</p>
          <Scoreboard><small>{penalty1? `(${penalty1})` : ""}</small> 
            {props.match? `${props.match[0].round8.goals} X ${props.match[1].round8.goals}`: "" }
            <small>{penalty1? `(${penalty2})` : ""}</small>
          </Scoreboard>      
          <p>{props.match? props.match[1].Name: ""}</p>
      </TheMatch> 
    )
  }

  if(props.round === 4){
    return (
      <TheMatch>
          
          <p>{props.match? props.match[0].Name: ""}</p>
          <Scoreboard><small>{penalty1? `(${penalty1})` : ""}</small> 
            {props.match? `${props.match[0].round4.goals} X ${props.match[1].round4.goals}`: "" }
            <small>{penalty1? `(${penalty2})` : ""}</small>
          </Scoreboard>      
          <p>{props.match? props.match[1].Name: ""}</p>
      </TheMatch> 
    )
  }

  if(props.round === "FINAL"){
    return (
      <TheMatch>
          
          <p>{props.match? props.match[0].Name: ""}</p>
          <Scoreboard><small>{penalty1? `(${penalty1})` : ""}</small> 
            {props.match? `${props.match[0].final.goals} X ${props.match[1].final.goals}`: "" }
            <small>{penalty1? `(${penalty2})` : ""}</small>
          </Scoreboard>      
          <p>{props.match? props.match[1].Name: ""}</p>
      </TheMatch> 
    )
  }

  return (
    <TheMatch>        
      <p></p>
      <p><small></small> 
        <small></small>
      </p>      
      <p></p>
    </TheMatch>
    )

}

export default Match

const TheMatch = styled.div`
    width: 120px;
    height: 100px;
    padding: 5px;
    background: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    p {
        margin-top: 5px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
        font-size: 15px;
        font-weight: bold;
        text-align: center;

        small {
          margin: 0px 5px;
        }
    }  

    border-top: 15px solid rgb(30, 30, 30);
`

const Scoreboard = styled.p`
    color: #df7000;
    font-weight: bold;
    text-shadow: 3px 2px 2px rgba(0,0,0,0.6);
` 