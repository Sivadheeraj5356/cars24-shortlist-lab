# Shortlist Lab

An independent used-car shortlist prototype inspired by CARS24's marketplace. Original demo by Siva Dheeraj, not affiliated with CARS24.

## Run
Download the repository and open `index.html` in a browser. No install, API keys, backend or network calls. Tests: `node --test test.js` (Node 18+).

## What works
- Budget and odometer limits are inclusive, deterministic filters.
- Results sort by odometer, then price, then stable ID.
- Each match explains the rule and displays budget headroom.
- Responsive UI, accessible form labels, live results and empty/error states.
- Ten tests cover boundaries, validation, immutability, tie breaks and empty results.

## Scope and limitations
All six listings and prices are synthetic. This is not live CARS24 inventory, a valuation model, an inspection product, financial advice or a production integration. No scraped data, logos, proprietary code or personal data. Ranking does not consider inspection quality, ownership history, safety, fees or service costs. Listing text is a fixed local fixture, not untrusted external input.

A real extension would ingest an approved inventory schema, validate and escape external fields, expose provenance and inspection attributes, and add API pagination and integration tests. No impact metrics are claimed.
