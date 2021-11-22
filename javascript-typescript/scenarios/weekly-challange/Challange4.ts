interface ITeamModel {
  name: string;
  league: LeagueTypes;
  point: number;
}
interface ITurkeyLeagues {
  firstLeague: ITeamModel[];
  secondLeague: ITeamModel[];
}

enum LeagueTypes {
  First = "Süper Lig",
  Second = "İkinci Lig",
}

const teams: ITeamModel[] = [
  {
    name: "Galatasaray",
    league: LeagueTypes.First,
    point: 99,
  },
  {
    name: "AdıyamanSpor",
    league: LeagueTypes.Second,
    point: 99,
  },
  {
    name: "Fenerbahçe",
    league: LeagueTypes.First,
    point: 33,
  },
  {
    name: "Ankaragücü",
    league: LeagueTypes.Second,
    point: 22,
  },
  {
    name: "Beşiktaş",
    league: LeagueTypes.First,
    point: 98,
  },
  {
    name: "ÜsküdarSpor",
    league: LeagueTypes.Second,
    point: 98,
  },
];

const seperateTeamsByLeague = (teams: ITeamModel[]): ITurkeyLeagues => {
  const turkeyLeague: ITurkeyLeagues = {
    firstLeague: [],
    secondLeague: [],
  };

  teams.forEach((team: ITeamModel) => {
    switch (team.league) {
      case LeagueTypes.First:
        turkeyLeague.firstLeague.push(team);
        break;
      case LeagueTypes.Second:
        turkeyLeague.secondLeague.push(team);
        break;
      default:
        console.error("Unhandled league type");
        break;
    }
  });

  return turkeyLeague;
};

const turkeyLeague = seperateTeamsByLeague(teams);
//console.log("turkeyLeague", turkeyLeague);

const sortTeamsByPoint = (teams: ITeamModel[]) => {
  const turkeyLeague = seperateTeamsByLeague(teams);

  turkeyLeague.firstLeague
    .sort((a, b) => b.point - a.point)
    .forEach((team: ITeamModel, index: number) =>
      index === 0
        ? console.log(
            `First League Teams & Points;\n ${index + 1}. ${team.name} Puan: ${
              team.point
            }`
          )
        : console.log(`${index + 1}. ${team.name} Puan: ${team.point}`)
    );

  turkeyLeague.secondLeague
    .sort((a, b) => b.point - a.point)
    .forEach((team: ITeamModel, index: number) =>
      index === 0
        ? console.log(
            `Second League Teams & Points;\n ${index + 1}. ${team.name} Puan: ${
              team.point
            }`
          )
        : console.log(`${index + 1}. ${team.name} Puan: ${team.point}`)
    );
};

sortTeamsByPoint(teams);
