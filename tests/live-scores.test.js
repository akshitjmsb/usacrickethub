// tests/live-scores.test.js
import { describe, it, expect } from "vitest";
import handler from "../api/live-scores.js";

describe("GET /api/live-scores (edge handler)", () => {
  it("returns 200 and a valid array of matches", async () => {
    // Simulate a request to the edge function
    const req = new Request("http://localhost/api/live-scores", { method: "GET" });
    const res = await handler(req);

    // Status
    expect(res.status).toBe(200);

    // Body
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThanOrEqual(1);

    // Required keys on the first match
    const match = data[0];
    ["matchId", "league", "venue", "status", "overs", "teams", "lastUpdated"]
      .forEach(key => expect(match).toHaveProperty(key));

    // Team keys
    expect(match.teams).toHaveProperty("home");
    expect(match.teams).toHaveProperty("away");
  });
});