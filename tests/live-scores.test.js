// tests/live-scores.test.js
import { describe, it, expect } from "vitest";
import handler from "../api/live-scores.js";

describe('GET /api/live-scores', () => {
  it('returns valid JSON', async () => {
    const res = await handler(new Request('http://localhost'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    const m = data[0];
    expect(m).toHaveProperty('matchId');
    expect(m.teams).toHaveProperty('home');
    expect(m.teams.home).toHaveProperty('name');
    expect(m).toHaveProperty('lastUpdated');
  });
});