# Which National Park Are You?

A personality quiz that matches you to one of 69 major US national parks based on your travel preferences. Answer 14 questions about crowds, trail difficulty, camping style, wildlife, landscape, seasonality, and water access — and get a ranked list of your top 5 parks with an interactive map.

**Live at:** https://joshuarbruce.com/national-parks-quiz/

---

## Disclaimer

This is a personal project built for fun. It is not affiliated with, endorsed by, or connected to the National Park Service or any government agency. Park data is collected from public sources and may be incomplete or out of date. Match results are for entertainment purposes only.

---

## How it works

The quiz measures seven dimensions of park preference:

| Dimension | What it captures |
|-----------|-----------------|
| Crowd level | How busy the park is on average |
| Trail challenge | Typical trail length and difficulty |
| Backcountry style | Share of overnight visitors who backpack vs. car camp |
| Wildlife focus | Density of mammal and bird observations |
| Lush ecosystem | Moisture-dependent species (fungi, amphibians) as a proxy for green vs. arid |
| Peak-season park | How concentrated visitation is around summer |
| Water access | Count of water-based activities (kayaking, snorkeling, fishing, boating, etc.) |

Your answers are scored on each dimension and matched against park profiles using weighted Euclidean distance. Parks that align most closely with your stated preferences rank highest.

---

## Data sources

Park profiles are built from five public datasets:

| Source | What it provides | License |
|--------|-----------------|---------|
| [NPS Data API](https://developer.nps.gov/api/v1/) | Park descriptions, activities, entrance fees | US federal public domain |
| [OpenStreetMap / Overpass API](https://overpass-api.de/) | Trail counts and lengths | [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) — © OpenStreetMap contributors |
| [IRMA Visitor Use Statistics](https://irma.nps.gov/Stats/) | Monthly visitation and overnight-stay types, 2015–2025 | US federal public domain |
| [Recreation Information Database (RIDB)](https://ridb.recreation.gov/) | Facility types and campsite counts | US federal public domain |
| [GBIF / iNaturalist](https://www.gbif.org/) | Species observation counts by taxonomic class | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — © GBIF contributors |

Map tiles by [CARTO](https://carto.com/), © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.

---

## Copyright

Quiz code and design © 2025 Joshua Bruce. All rights reserved.

Data belongs to its respective sources as noted above.
