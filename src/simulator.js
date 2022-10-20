

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
    },

    playMatchsGroup: function playMatchsGroup(group) {
        //Rounds
        let newGroup = group;
      
        //Gols da seleção 1 em cada partida
        newGroup[0].goals = {
          round1: Math.floor(Math.random() * 6),
          round2: Math.floor(Math.random() * 6),
          round3: Math.floor(Math.random() * 6),
        };
        
        //Gols da seleção 2 em cada partida
        newGroup[1].goals = {
          round1: Math.floor(Math.random() * 6),
          round2: Math.floor(Math.random() * 6),
          round3: Math.floor(Math.random() * 6),
        };
        
        //Gols da seleção 3 em cada partida
        newGroup[2].goals = {
          round1: Math.floor(Math.random() * 6),
          round2: Math.floor(Math.random() * 6),
          round3: Math.floor(Math.random() * 6),
        };
        
        //Gols da seleção 4 em cada partida
        newGroup[3].goals = {
          round1: Math.floor(Math.random() * 6),
          round2: Math.floor(Math.random() * 6),
          round3: Math.floor(Math.random() * 6),
        };
      
        //Rodadas do grupo
        newGroup.matchs = {
          round1_match1: `${group[0].Name} ${newGroup[0].goals.round1} x ${newGroup[1].goals.round1} ${group[1].Name}`,
          round1_match2: `${group[3].Name} ${newGroup[3].goals.round1} x ${newGroup[2].goals.round1} ${group[2].Name}`,
      
          round2_match1: `${group[2].Name} ${newGroup[2].goals.round2} x ${newGroup[0].goals.round2} ${group[0].Name}`,
          round2_match2: `${group[1].Name} ${newGroup[1].goals.round2} x ${newGroup[3].goals.round2} ${group[3].Name}`,
      
          round3_match1: `${group[3].Name} ${newGroup[3].goals.round3} x ${newGroup[0].goals.round3} ${group[0].Name}`,
          round3_match2: `${group[2].Name} ${newGroup[2].goals.round3} x ${newGroup[1].goals.round3} ${group[1].Name}`,
        };
      
        //Vitorias e empate de cada seleção
        newGroup[0].victories = 0;
        newGroup[0].beTied = 0;
        newGroup[1].victories = 0;
        newGroup[1].beTied = 0;
        newGroup[2].victories = 0;
        newGroup[2].beTied = 0;
        newGroup[3].victories = 0;
        newGroup[3].beTied = 0;
      
        //Analisando os resultados das rodas para definir vitoria e empate
        //Rodada 1
        if (newGroup[0].goals.round1 > newGroup[1].goals.round1) {
          newGroup[0].victories += 1;
        } else if (newGroup[0].victories < newGroup[1].goals.round1) {
          newGroup[1].victories += 1;
        } else {
          newGroup[0].beTied += 1;
          newGroup[1].beTied += 1;
        }
      
        if (newGroup[3].goals.round1 > newGroup[2].goals.round1) {
          newGroup[3].victories += 1;
        } else if (newGroup[3].victories < newGroup[2].goals.round1) {
          newGroup[2].victories += 1;
        } else {
          newGroup[3].beTied += 1;
          newGroup[2].beTied += 1;
        }
      
        //Rodada 2
        if (newGroup[2].goals.round2 > newGroup[0].goals.round2) {
          newGroup[2].victories += 1;
        } else if (newGroup[2].goals.round2 < newGroup[0].goals.round2) {
          newGroup[0].victories += 1;
        } else {
          newGroup[2].beTied += 1;
          newGroup[0].beTied += 1;
        }
      
        if (newGroup[1].goals.round2 > newGroup[3].goals.round2) {
          newGroup[1].victories += 1;
        } else if (newGroup[1].goals.round2 < newGroup[3].goals.round2) {
          newGroup[3].victories += 1;
        } else {
          newGroup[3].beTied += 1;
          newGroup[2].beTied += 1;
        }
      
        //Rodada 3
        if (newGroup[3].goals.round3 > newGroup[0].goals.round3) {
          newGroup[3].victories += 1;
        } else if (newGroup[3].goals.round3 < newGroup[0].goals.round3) {
          newGroup[0].victories += 1;
        } else {
          newGroup[3].beTied += 1;
          newGroup[0].beTied += 1;
        }
      
        if (newGroup[2].goals.round3 > newGroup[1].goals.round3) {
          newGroup[2].victories += 1;
        } else if (newGroup[2].goals.round3 < newGroup[1].goals.round3) {
          newGroup[1].victories += 1;
        } else {
          newGroup[2].beTied += 1;
          newGroup[1].beTied += 1;
        }
      
        //Calculando a pontuação de cada seleção
        newGroup[0].points = newGroup[0].victories * 3 + newGroup[0].beTied;
        newGroup[1].points = newGroup[1].victories * 3 + newGroup[1].beTied;
        newGroup[2].points = newGroup[2].victories * 3 + newGroup[2].beTied;
        newGroup[3].points = newGroup[3].victories * 3 + newGroup[3].beTied;
      
         //Calculando o Saldo de gols
        newGroup[0].sg =
        (newGroup[0].goals.round1 - newGroup[1].goals.round1) +
        (newGroup[0].goals.round2 - newGroup[2].goals.round2) +
        (newGroup[0].goals.round3 - newGroup[3].goals.round3);

        newGroup[1].sg =
        (newGroup[1].goals.round1 - newGroup[0].goals.round1) +
        (newGroup[1].goals.round2 - newGroup[3].goals.round2) +
        (newGroup[1].goals.round3 - newGroup[2].goals.round3);

        newGroup[2].sg =
        (newGroup[2].goals.round1 - newGroup[3].goals.round1) +
        (newGroup[2].goals.round2 - newGroup[0].goals.round2) +
        (newGroup[2].goals.round3 - newGroup[1].goals.round3);

        newGroup[3].sg =
        (newGroup[3].goals.round1 - newGroup[2].goals.round1) +
        (newGroup[3].goals.round2 - newGroup[1].goals.round2) +
        (newGroup[3].goals.round3 - newGroup[0].goals.round3);
      
        return newGroup;
      },

    playAllGroups: function (groups) {
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

      return newGroups;
    }
}
export default simulator;