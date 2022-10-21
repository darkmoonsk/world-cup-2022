const simulator = {
  shuffleArray: function shuffleArray(array) {
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

  makeGroups: function makeGroups(teams) {
    let groupA = [];
    let groupB = [];
    let groupC = [];
    let groupD = [];
    let groupE = [];
    let groupF = [];
    let groupG = [];
    let groupH = [];

    if (!teams) {
      return console.error("No teams found");
    }

    const randomTeams = this.shuffleArray(teams);

    //Preenchendo os grupos
    randomTeams.forEach((team) => {
      if (groupA.length < 4) {
        groupA.push(team);
      } else if (groupB.length < 4) {
        groupB.push(team);
      } else if (groupC.length < 4) {
        groupC.push(team);
      } else if (groupD.length < 4) {
        groupD.push(team);
      } else if (groupE.length < 4) {
        groupE.push(team);
      } else if (groupF.length < 4) {
        groupF.push(team);
      } else if (groupG.length < 4) {
        groupG.push(team);
      } else if (groupH.length < 4) {
        groupH.push(team);
      }
    });

    return { groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH };
  },

  makeRound16: function (groups) {
    let round16A = [];
    let round16B = [];
    let round16C = [];
    let round16D = [];
    let round16E = [];
    let round16F = [];
    let round16G = [];
    let round16H = [];

    round16A.push(groups.groupA[0]);
    round16A.push(groups.groupB[1]);

    round16B.push(groups.groupC[0]);
    round16B.push(groups.groupD[1]);

    round16C.push(groups.groupE[0]);
    round16C.push(groups.groupF[1]);

    round16D.push(groups.groupG[0]);
    round16D.push(groups.groupH[1]);

    round16E.push(groups.groupB[0]);
    round16E.push(groups.groupA[1]);

    round16F.push(groups.groupD[0]);
    round16F.push(groups.groupC[1]);

    round16G.push(groups.groupF[0]);
    round16G.push(groups.groupE[1]);

    round16H.push(groups.groupH[0]);
    round16H.push(groups.groupG[1]);

    return {
      round16A,
      round16B,
      round16C,
      round16D,
      round16E,
      round16F,
      round16G,
      round16H,
    };
  },

  makeRound8: function (groups) {
    let round8A = [];
    let round8B = [];
    let round8C = [];
    let round8D = [];

    if (groups.round16A[0].round16.result === "V") {
      round8A.push(groups.round16A[0]);
    } else {
      round8A.push(groups.round16A[1]);
    }

    if (groups.round16B[0].round16.result === "V") {
      round8A.push(groups.round16B[0]);
    } else {
      round8A.push(groups.round16B[1]);
    }

    if (groups.round16C[0].round16.result === "V") {
      round8B.push(groups.round16C[0]);
    } else {
      round8B.push(groups.round16C[1]);
    }

    if (groups.round16D[0].round16.result === "V") {
      round8B.push(groups.round16D[0]);
    } else {
      round8B.push(groups.round16D[1]);
    }

    if (groups.round16E[0].round16.result === "V") {
      round8C.push(groups.round16E[0]);
    } else {
      round8C.push(groups.round16E[1]);
    }

    if (groups.round16F[0].round16.result === "V") {
      round8C.push(groups.round16F[0]);
    } else {
      round8C.push(groups.round16F[1]);
    }

    if (groups.round16G[0].round16.result === "V") {
      round8D.push(groups.round16G[0]);
    } else {
      round8D.push(groups.round16G[1]);
    }

    if (groups.round16H[0].round16.result === "V") {
      round8D.push(groups.round16H[0]);
    } else {
      round8D.push(groups.round16H[1]);
    }

    return { round8A, round8B, round8C, round8D };
  },

  makeRound4: function (groups) {
    let round4A = [];
    let round4B = [];

    if (groups.round8A[0].round8.result === "V") {
      round4A.push(groups.round8A[0]);
    } else {
      round4A.push(groups.round8A[1]);
    }

    if (groups.round8B[0].round8.result === "V") {
      round4A.push(groups.round8B[0]);
    } else {
      round4A.push(groups.round8B[1]);
    }

    if (groups.round8C[0].round8.result === "V") {
      round4B.push(groups.round8C[0]);
    } else {
      round4B.push(groups.round8C[1]);
    }

    if (groups.round8D[0].round8.result === "V") {
      round4B.push(groups.round8D[0]);
    } else {
      round4B.push(groups.round8D[1]);
    }

    return { round4A, round4B };
  },

  makeFinal: function (groups) {
    let roundFinal = [];

    if (groups.round4A[0].round4.result === "V") {
      roundFinal.push(groups.round4A[0]);
    } else {
      roundFinal.push(groups.round4A[1]);
    }

    if (groups.round4B[0].round4.result === "V") {
      roundFinal.push(groups.round4B[0]);
    } else {
      roundFinal.push(groups.round4B[1]);
    }

    return { roundFinal };
  },

  simulateMatch: function () {
    let goalsTeam1 = 0;
    let goalsTeam2 = 0;
    let penaltyShootoutTeam1 = 0;
    let penaltyShootoutTeam2 = 0;
    let resultTeam1 = null;
    let resultTeam2 = null;

    //Defindo os gols de cada seleção
    goalsTeam1 = Math.floor(Math.random() * 6);
    goalsTeam2 = Math.floor(Math.random() * 6);
    //Verificando o vencedor
    if (goalsTeam1 > goalsTeam2) {
      resultTeam1 = "V";
      resultTeam2 = "D";
    } else if (goalsTeam1 < goalsTeam2) {
      resultTeam2 = "V";
      resultTeam1 = "D";
    } else {
      // Simulando as disputas de penalty
      let penaltyPossibilities = [
        { T1: 3, T2: 0 },
        { T1: 3, T2: 1 },
        { T1: 4, T2: 2 },
        { T1: 5, T2: 4 },
        { T1: 5, T2: 3 },
        { T1: 6, T2: 5 },
        { T1: 7, T2: 6 },
        { T1: 0, T2: 3 },
        { T1: 1, T2: 3 },
        { T1: 2, T2: 4 },
        { T1: 4, T2: 5 },
        { T1: 3, T2: 5 },
        { T1: 5, T2: 6 },
        { T1: 6, T2: 7 },
      ];

      let n1 = Math.ceil(Math.random() * 14 - 1);

      let penaltyResult1 = penaltyPossibilities[n1].T1;
      let penaltyResult2 = penaltyPossibilities[n1].T2;

      penaltyShootoutTeam1 = penaltyResult1;
      penaltyShootoutTeam2 = penaltyResult2;

      if (penaltyShootoutTeam1 === penaltyShootoutTeam2) {
        penaltyShootoutTeam1 += 1;
      }

      if (penaltyShootoutTeam1 > penaltyShootoutTeam2) {
        resultTeam1 = "V";
        resultTeam2 = "D";
      } else {
        resultTeam2 = "V";
        resultTeam1 = "D";
      }
    }

    return {
      goalsTeam1,
      goalsTeam2,
      penaltyShootoutTeam1,
      penaltyShootoutTeam2,
      resultTeam1,
      resultTeam2,
    };
  },

  playMatchsGroup: function (group) {
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
      newGroup[1].beTied += 1;
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
    newGroup[0].points = (newGroup[0].victories * 3) + newGroup[0].beTied;
    newGroup[1].points = (newGroup[1].victories * 3) + newGroup[1].beTied;
    newGroup[2].points = (newGroup[2].victories * 3) + newGroup[2].beTied;
    newGroup[3].points = (newGroup[3].victories * 3) + newGroup[3].beTied;

    //Calculando o Saldo de gols
    newGroup[0].sg =
      (newGroup[0].goals.round1 -
      newGroup[1].goals.round1) +
      (newGroup[0].goals.round2 - newGroup[2].goals.round2) +
      (newGroup[0].goals.round3 - newGroup[3].goals.round3);

    newGroup[1].sg =
      newGroup[1].goals.round1 -
      newGroup[0].goals.round1 +
      (newGroup[1].goals.round2 - newGroup[3].goals.round2) +
      (newGroup[1].goals.round3 - newGroup[2].goals.round3);

    newGroup[2].sg =
      (newGroup[2].goals.round1 -
      newGroup[3].goals.round1) +
      (newGroup[2].goals.round2 - newGroup[0].goals.round2) +
      (newGroup[2].goals.round3 - newGroup[1].goals.round3);

    newGroup[3].sg =
      (newGroup[3].goals.round1 -
      newGroup[2].goals.round1) +
      (newGroup[3].goals.round2 - newGroup[1].goals.round2) +
      (newGroup[3].goals.round3 - newGroup[0].goals.round3);

    return newGroup;
  },

  playAllGroups: function (groups) {
    const toComparePointsSGRandom = (a, b) => {
      if (a.points > b.points) {
        return -1;
      } else if (a.points < b.points) {
        return true;
      } else {
        if (a.sg > b.sg) {
          return -1;
        } else if (a.sg < b.sg) {
          return true;
        } else {
          const randomChoose = [true, false];
          return randomChoose[Math.ceil(Math.random() * 2)];
        }
      }
    };

    const groupA = simulator
      .playMatchsGroup(groups.groupA)
      .sort(toComparePointsSGRandom);
    const groupB = simulator
      .playMatchsGroup(groups.groupB)
      .sort(toComparePointsSGRandom);
    const groupC = simulator
      .playMatchsGroup(groups.groupC)
      .sort(toComparePointsSGRandom);
    const groupD = simulator
      .playMatchsGroup(groups.groupD)
      .sort(toComparePointsSGRandom);
    const groupE = simulator
      .playMatchsGroup(groups.groupE)
      .sort(toComparePointsSGRandom);
    const groupF = simulator
      .playMatchsGroup(groups.groupF)
      .sort(toComparePointsSGRandom);
    const groupG = simulator
      .playMatchsGroup(groups.groupG)
      .sort(toComparePointsSGRandom);
    const groupH = simulator
      .playMatchsGroup(groups.groupH)
      .sort(toComparePointsSGRandom);

    const newGroups = {
      groupA,
      groupB,
      groupC,
      groupD,
      groupE,
      groupF,
      groupG,
      groupH,
    };

    return newGroups;
  },

  playRound16: function (matchs) {
    let matchResult;

    //Oitavas 1
    matchResult = this.simulateMatch();
    matchs.round16A[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16A[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 2
    matchResult = this.simulateMatch();
    matchs.round16B[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16B[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 3
    matchResult = this.simulateMatch();
    matchs.round16C[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16C[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 4
    matchResult = this.simulateMatch();
    matchs.round16D[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16D[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 5
    matchResult = this.simulateMatch();
    matchs.round16E[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16E[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 6
    matchResult = this.simulateMatch();
    matchs.round16F[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16F[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 7
    matchResult = this.simulateMatch();
    matchs.round16G[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16G[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Oitavas 8
    matchResult = this.simulateMatch();
    matchs.round16H[0].round16 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round16H[1].round16 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    return matchs;
  },

  playRound8: function (matchs) {
    let matchResult;

    //Quartas 1
    matchResult = this.simulateMatch();
    matchs.round8A[0].round8 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round8A[1].round8 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Quartas 2
    matchResult = this.simulateMatch();
    matchs.round8B[0].round8 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round8B[1].round8 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Quartas 3
    matchResult = this.simulateMatch();
    matchs.round8C[0].round8 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round8C[1].round8 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Quartas 4
    matchResult = this.simulateMatch();
    matchs.round8D[0].round8 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round8D[1].round8 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    return matchs;
  },

  playRound4: function (matchs) {
    let matchResult;

    //Semifinal 1
    matchResult = this.simulateMatch();
    matchs.round4A[0].round4 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round4A[1].round4 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    //Semifinal 2
    matchResult = this.simulateMatch();
    matchs.round4B[0].round4 = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.round4B[1].round4 = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    return matchs;
  },

  playFinal: function (matchs) {
    let matchResult;

    //Final 1
    matchResult = this.simulateMatch();
    matchs.roundFinal[0].final = {
      goals: matchResult.goalsTeam1,
      penaltyShootout: matchResult.penaltyShootoutTeam1,
      result: matchResult.resultTeam1,
    };
    matchs.roundFinal[1].final = {
      goals: matchResult.goalsTeam2,
      penaltyShootout: matchResult.penaltyShootoutTeam2,
      result: matchResult.resultTeam2,
    };

    return matchs;
  },
};
export default simulator;
