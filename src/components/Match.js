import styled from "styled-components";

function Match() {
  return (
    <TheMatch>
        
        <p>Brasil</p>
        <p>X</p>
        <p>Alemanha</p>
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
        text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    }

    border-top: 15px solid rgb(30, 30, 30);
`