type LeagueModel = "1.Lig" | "2.Lig";

type FourBigs = "Galatasaray" | "Fenerbahçe" | "Beşiktaş" | "Trabzonspor";

class Team {
  protected name: string | FourBigs = "";
  protected league: LeagueModel;
  protected point: number;

  constructor(league: LeagueModel, point: number) {
    this.league = league;
    this.point = point;
  }

  getName(): string | FourBigs {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getLeague(): LeagueModel {
    return this.league;
  }
  setLeague(league: LeagueModel) {
    this.league = league;
  }

  getPoint(): number {
    return this.point;
  }
  setPoint(point: number) {
    this.point = point;
  }
}

class FourChamp extends Team {
  constructor(name: FourBigs, league: LeagueModel, point: number) {
    super(league, point);
    this.name = name;
  }
}

const cimbom = new FourChamp("Galatasaray", "1.Lig", 99);
const kanarya = new FourChamp("Fenerbahçe", "1.Lig", 90);
const kartal = new FourChamp("Beşiktaş", "1.Lig", 85);
const hamsi = new FourChamp("Trabzonspor", "1.Lig", 80);

const teamsArr = [cimbom, kanarya, kartal, hamsi];

const leagueTable = (teamsArr: FourChamp[]) => {
  const sortedTeamByPoint = teamsArr.sort(
    (team1: FourChamp, team2: FourChamp) => team2.getPoint() - team1.getPoint()
  );

  sortedTeamByPoint.forEach((team: FourChamp, i: number) =>
    console.log(`${i + 1}. Team: ${team.getName()} Point: ${team.getPoint()}`)
  );
};

leagueTable(teamsArr);
