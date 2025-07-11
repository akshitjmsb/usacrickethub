# USA Cricket Hub

> A community-driven portal for live scores, grounds maps, and news on U.S. cricket.

## Stack
- React 19 + Vite 7
- Tailwind CSS
- React Router 7
- TanStack Query (coming soon)

## Quick Start
```bash
git clone https://github.com/akshitjmsb/usacrickethub
cd usacrickethub
pnpm install
pnpm dev
```

## Contributing
- Create a feature branch: `git checkout -b feature/my-awesome-thing`
- Run `pnpm lint` & `pnpm format` before committing.
- Open a draft PR early; CI will run lint & tests.

## License
MIT © 2025 …

## API Contract

### `GET /api/live-scores`

Returns a JSON array of mocked live cricket matches.  
**Refresh cadence:** Static/deterministic for development/testing.

#### Sample response

```json
[
  {
    "matchId": "mlc-2025-07-10-01",
    "league": "MLC",
    "venue": "Grand Prairie Stadium, TX",
    "status": "In Progress",
    "overs": "9.3 / 20",
    "teams": {
      "home": { "name": "Texas Super Kings", "runs": 78, "wickets": 2 },
      "away": { "name": "LA Knight Riders", "runs": 0, "wickets": 0 }
    },
    "lastUpdated": "2025-07-09T22:15:00Z"
  }
  // ...more matches
]
```

