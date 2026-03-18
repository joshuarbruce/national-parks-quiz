# Which National Park Are You?

A personality quiz that matches you to one of 69 major US national parks based on your travel preferences. Answer 16 questions about crowds, trail difficulty, camping style, wildlife, landscape, seasonality, water access, remoteness, and family-friendliness — and get a ranked list of your top 5 parks with an interactive map.

**Live at:** https://joshuarbruce.com/national-parks-quiz/

---

## Disclaimer

This is a personal project built for fun. It is not affiliated with, endorsed by, or connected to the National Park Service or any government agency. Park data is collected from public sources and may be incomplete or out of date. Match results are for entertainment purposes only.

---

## How it works

The quiz measures nine dimensions of park preference:

| Dimension | What it captures |
|-----------|-----------------|
| Crowd level | How busy the park is on average |
| Trail challenge | Typical trail length and difficulty |
| Backcountry style | Share of overnight visitors who backpack vs. car camp |
| Wildlife focus | Density of mammal and bird observations |
| Lush ecosystem | Moisture-dependent species (fungi, amphibians) as a proxy for green vs. arid |
| Peak-season park | How concentrated visitation is around summer |
| Water access | Count of water-based activities (kayaking, snorkeling, fishing, boating, etc.) |
| Remoteness | Straight-line distance from park centroid to nearest major city |
| Family-friendliness | Share of Reddit visitor posts mentioning family, kids, and accessibility |

Your answers are scored on each dimension and matched against park profiles using weighted Euclidean distance. Parks that align most closely with your stated preferences rank highest.

---

## Data methodology

### Scoring dimensions

Each of the nine dimensions is derived from a different data source and normalized to a 0–1 scale across all 69 parks.

**Crowd level** — derived from IRMA monthly visitation data (2015–2025). The annual average is log-transformed before scaling, because the spread between the most-visited park (Great Smoky Mountains, ~12M/yr) and the least-visited (Gates of the Arctic, ~10K/yr) spans three orders of magnitude. Log scaling ensures both ends of the spectrum are meaningfully represented.

**Trail challenge** — derived from OpenStreetMap trail geometry. Average trail length per park is used as a proxy for physical demand, since SAC scale difficulty tags are too sparsely populated in OSM to use directly. Longer average trail length means the park rewards (or requires) sustained effort. Log-transformed and scaled.

**Backcountry style** — derived from IRMA overnight visitor type data. Calculated as backcountry campers as a share of all overnight visitors (tent campers + RV campers + backcountry + concessioner lodging). This measures actual visitor behavior rather than campsite infrastructure. A notable result: Saguaro and Petrified Forest score at the top of this dimension despite being easily accessible — they simply attract very few car campers relative to day visitors and backcountry users.

**Wildlife focus** — derived from iNaturalist observations via GBIF. Mammal and bird observations as a share of total observations per park. Using a ratio rather than a raw count removes the effect of overall observation volume (popular parks attract more citizen scientists regardless of wildlife density).

**Lush ecosystem** — derived from iNaturalist. Fungi and amphibian observations as a share of total observations. Both taxa require sustained moisture, making their relative presence a reliable proxy for wet temperate vs. arid environments. Plant observations alone are misleading for this purpose — desert flora generates very high iNaturalist attention, which would make Joshua Tree score as "lush."

**Peak-season park** — derived from IRMA monthly visitation patterns. The seasonality index is calculated as the peak-month average divided by the mean monthly average. A park with a seasonality index of 4.8 (Glacier) concentrates nearly five times the average monthly traffic in its peak month. Log-transformed and scaled.

**Water access** — derived from NPS Data API activity listings. A curated list of 21 water-based activities (kayaking, snorkeling, fishing, boating, swimming, etc.) is matched against each park's listed activities. The count is log-transformed and scaled. Parks with no water activities score 0; Channel Islands scores highest.

**Remoteness** — straight-line (haversine) distance from each park's geographic centroid to the nearest of 68 major US cities, including regional cities chosen to avoid penalizing parks that are genuinely accessible from smaller metros (e.g. Key West for Dry Tortugas, Jackson for Grand Teton, Moab for Arches). Log-transformed and scaled.

**Family-friendliness** — derived from Reddit posts across r/nationalparks, r/hiking, and r/backpacking. For each park, the share of posts containing family- and accessibility-related terms ("kids," "stroller," "wheelchair," "toddler," etc.) is computed using keyword matching and VADER sentiment analysis. The raw ratio is min-max scaled across all parks. Parks with no Reddit data default to 0 (neutral, not penalized).

### Matching algorithm

Quiz answers map each dimension to a value between 0 and 1. A weighted Euclidean distance is then computed between the user's profile and every park profile:

```
distance = √( Σ  weight_d × (user_score_d − park_score_d)² )
```

Dimension weights are proportional to how strongly the user expressed a preference on that dimension:

```
weight_d = 0.2 + 0.8 × |user_score_d − 0.5| × 2
```

A floor of 0.2 ensures that neutral answers still contribute some signal — without it, a neutral response would zero out a dimension entirely, making very different parks (e.g. Wrangell-St. Elias vs. Mammoth Cave) appear identical if the user was neutral on the dimensions that separate them.

Match percentages are scaled linearly so the best-matching park in the filtered pool always shows 100% and the worst shows 0%.

### Visitor quotes

The "What visitors say" snippets on result cards are extracted from Reddit post titles and bodies using the Claude API (claude-haiku-4-5). For each park, the top posts from the three subreddits are sent to Claude with a prompt to extract 2–3 short, vivid, visitor-voice quotes. These are stored as static data and do not involve live API calls during quiz use.

---

## Data sources

Park profiles are built from six public datasets:

| Source | What it provides | License |
|--------|-----------------|---------|
| [NPS Data API](https://developer.nps.gov/api/v1/) | Park descriptions, activities, entrance fees | US federal public domain |
| [OpenStreetMap / Overpass API](https://overpass-api.de/) | Trail counts and lengths | [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) — © OpenStreetMap contributors |
| [IRMA Visitor Use Statistics](https://irma.nps.gov/Stats/) | Monthly visitation and overnight-stay types, 2015–2025 | US federal public domain |
| [Recreation Information Database (RIDB)](https://ridb.recreation.gov/) | Facility types and campsite counts | US federal public domain |
| [GBIF / iNaturalist](https://www.gbif.org/) | Species observation counts by taxonomic class | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — © GBIF contributors |
| [Reddit](https://www.reddit.com/) (r/nationalparks, r/hiking, r/backpacking) | Visitor voice quotes and family-friendliness signal | Public posts; processed with Claude API |

Map tiles by [CARTO](https://carto.com/), © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.

---

## Copyright

Quiz code and design © 2026 Joshua Bruce. All rights reserved.

Data belongs to its respective sources as noted above.
