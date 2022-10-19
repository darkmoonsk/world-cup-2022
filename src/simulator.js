

const simulator = {
   shuffleArray: function shuffleArray(array){
        //Loop nos elementos
    for (let i = array.length - 1; i > 0; i--) {
        //Escolhendo o elemento eleatorio
        const j = Math.floor(Math.random() * (i + 1));
        //Reposicionando elemento
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Retornando o array com aleatoriedade
    return array;
    },

makeGroups: function makeGroups(teams){
    let groupA = [];
    let groupB = [];
    let groupC = [];
    let groupD = [];
    let groupE = [];
    let groupF = [];
    let groupG = [];
    let groupH = [];

    if(!teams){
        return console.error("No teams found");
    }

    const randomTeams = this.shuffleArray(teams);

    //Preenchendo os grupos
    randomTeams.forEach((team) => {
        if(groupA.length < 4){
            groupA.push(team);
        }else if(groupB.length < 4){
            groupB.push(team);
        }else if(groupC.length < 4){
            groupC.push(team);
        }else if(groupD.length < 4){
            groupD.push(team);
        }else if(groupE.length < 4){
            groupE.push(team);
        }else if(groupF.length < 4){
            groupF.push(team);
        }else if(groupG.length < 4){
            groupG.push(team);
        }else if(groupH.length < 4){
            groupH.push(team);
        }
    })
    
    return {groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH} 
    }
}

export default simulator;