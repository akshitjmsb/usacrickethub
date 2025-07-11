export const config = { runtime: "edge" };

const body = JSON.stringify([
  {
    matchId: "mlc-2025-07-10-01",
    league: "MLC",
    venue: "Grand Prairie Stadium, TX",
    status: "In Progress",
    overs: "9.3 / 20",
    teams: {
      home: { name: "Texas Super Kings", runs: 78, wickets: 2 },
      away: { name: "LA Knight Riders", runs: 0, wickets: 0 }
    },
    lastUpdated: "2025-07-09T22:15:00Z"
  },
  {
    matchId: "mlc-2025-07-10-02",
    league: "MLC",
    venue: "Church Street Park, NC",
    status: "Scheduled",
    overs: "0 / 20",
    teams: {
      home: { name: "San Francisco Unicorns", runs: 0, wickets: 0 },
      away: { name: "Seattle Orcas", runs: 0, wickets: 0 }
    },
    lastUpdated: "2025-07-09T20:00:00Z"
  },
  {
    matchId: "us-open-2025-07-10-01",
    league: "US Open",
    venue: "Central Broward Stadium, FL",
    status: "Complete",
    overs: "20 / 20",
    teams: {
      home: { name: "Atlanta Fire", runs: 156, wickets: 7 },
      away: { name: "Chicago Blasters", runs: 152, wickets: 9 }
    },
    lastUpdated: "2025-07-09T19:45:00Z"
  }
]);

export default async function handler(req) {
  return new Response(body, {
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*"
    }
  });
}
