import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";

const mockResponse = [
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
];

const server = setupServer(
  rest.get("http://localhost/api/live-scores", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("GET /api/live-scores", () => {
  it("returns 200 and an array of matches", async () => {
    const res = await fetch("http://localhost/api/live-scores");
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThanOrEqual(1);

    // Check required keys for the first match
    const match = data[0];
    expect(match).toHaveProperty("matchId");
    expect(match).toHaveProperty("league");
    expect(match).toHaveProperty("venue");
    expect(match).toHaveProperty("status");
    expect(match).toHaveProperty("overs");
    expect(match).toHaveProperty("teams");
    expect(match.teams).toHaveProperty("home");
    expect(match.teams).toHaveProperty("away");
    expect(match).toHaveProperty("lastUpdated");
  });
});
