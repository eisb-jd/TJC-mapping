# Data validation report – TJC church locations (Draft v1)

Run: 20 November 2026 · Data: `data/tjc_locations.geojson` · CRS: WGS 84 (EPSG:4326)

## Summary

| Item | Result |
|---|---|
| Records | 108 |
| With coordinates | 93 |
| With KodLokasi code | 93 |
| Unique IDs | Pass |
| Unique KodLokasi codes | Pass |
| Coordinates inside Borneo bounds | Pass |
| Points on land (Sabah / Labuan / Sarawak outline) | Pass |
| KodLokasi state prefix matches state (SB / WP / SW) | Pass |
| Locations within 500 m of each other | None |
| Agreement with OpenStreetMap church points | 10 matched, median 25 m, max 34 m |

## Issues by check

| Severity | Check | Count |
|---|---|---|
| High | Missing coordinates | 15 |
| Medium | Coordinates from crowd-sourced data | 2 |
| Medium | Corrected in source | 6 |
| Medium | Location to confirm | 5 |
| Low | Missing address | 24 |
| Low | Missing photo | 97 |
| Low | Missing service times | 26 |
| Low | Missing subzone | 6 |

## High and medium issues (action needed from the church)

| Severity | Check | ID | Location | Detail |
|---|---|---|---|---|
| High | Missing coordinates | TJC-016 | Kionsom | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-033 | Putrajaya | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-053 | Binanun | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-055 | Kampung Dua | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-057 | Kapalarau | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-059 | Katalirus | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-062 | Labut | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-064 | Layon | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-065 | Lotong | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-071 | Nangkawangan | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-073 | Pangi | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-079 | Salong | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-089 | Ulu Tepoh | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-105 | Bintulu | No GPS coordinates; not shown on map, no KodLokasi code. |
| High | Missing coordinates | TJC-108 | Sibu | No GPS coordinates; not shown on map, no KodLokasi code. |
| Medium | Coordinates from crowd-sourced data | TJC-106 | Kuching | Position from OpenStreetMap, not from church records. |
| Medium | Coordinates from crowd-sourced data | TJC-107 | Miri | Position from OpenStreetMap, not from church records. |
| Medium | Corrected in source | TJC-051 | Batu Lunguyan | Latitude/longitude swapped in church document; corrected. Church to confirm. |
| Medium | Corrected in source | TJC-054 | Kabu Baru | Latitude/longitude swapped in church document; corrected. Church to confirm. |
| Medium | Corrected in source | TJC-056 | Kampung Lima | Latitude/longitude swapped in church document; corrected. Church to confirm. |
| Medium | Corrected in source | TJC-060 | Kauluan | Latitude/longitude swapped in church document; corrected. Church to confirm. |
| Medium | Corrected in source | TJC-070 | Nakuyung | Latitude/longitude swapped in church document; corrected. Church to confirm. |
| Medium | Corrected in source | TJC-081 | Sinaron | Latitude/longitude swapped in church document; corrected. Church to confirm. |
| Medium | Location to confirm | TJC-009 | Danau | Church GPS is near Kinarut/Papar; the only "Danau" village in OSM is Dahit Danau, Penampang. Confirm location. |
| Medium | Location to confirm | TJC-054 | Kabu Baru | A Google Maps listing for this church is about 6 km from the church-supplied GPS. Confirm the correct pin. |
| Medium | Location to confirm | TJC-060 | Kauluan | Church document says Kauluan, Sook (Keningau); confirm the pin is at Sook, not Kauluan in Ranau. |
| Medium | Location to confirm | TJC-096 | Malikup | A second prayer house, Pinangah, in the church documents is only 400 m away but is not on the church map. Confirm both. |
| Medium | Location to confirm | TJC-105 | Bintulu | Two possible listings found on Google Maps; church to confirm which is correct. |

Low issues (missing address, service times, photo or subzone) are listed in `validation_issues.csv`.

## Checks performed

1. Schema: every feature has a unique ID, a valid Point geometry or `null` (awaiting coordinates), and required properties.
2. Coordinates within Borneo bounds and inside the state land outline (generalised coastline).
3. KodLokasi code present for every located site, unique, and with the correct state prefix.
4. Near-duplicate locations (< 500 m apart) and duplicate names.
5. Cross-check against OpenStreetMap church points (distance from church GPS).
6. Source corrections (swapped latitude/longitude) and known location doubts flagged for confirmation.
7. Completeness: address, service times, photo, subzone.
