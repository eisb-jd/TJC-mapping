# True Jesus Church – Church Locations (Sabah, Labuan & Sarawak)

A web map of True Jesus Church (Gereja Yesus Benar) churches and prayer houses in Sabah, Labuan and Sarawak. You can search and filter the locations, open a details panel for each one, and tap its KodLokasi code for directions. The site is static and is hosted on GitHub Pages.

**Live site:** https://eisb-jd.github.io/TJC-mapping/

**Status:** Draft v1 (20 November 2026), for review by the church. Not field-verified.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The web map (Leaflet, OpenStreetMap base map) |
| `data/tjc_locations.geojson` | Location data, 108 features (93 with coordinates; 15 with `geometry: null`, awaiting coordinates) |
| `data/districts.json` | District boundaries (lines) and district names for Sabah, Labuan and Sarawak, from geoBoundaries (simplified) |
| `data/outline.json` | Simplified land outline, used only when the base map tiles cannot load |
| `data/validation_issues.csv` | List of data issues found by the validation checks |
| `VALIDATION.md` | Data validation report |
| `photos/` | Church photos, one file per location ID (`TJC-xxx.jpg`) |
| `vendor/` | Leaflet stylesheet |

## Publish on GitHub Pages

1. Create a repository (this one is `eisb-jd/TJC-mapping`) and upload every file in this folder, including `.nojekyll`.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
3. After about a minute the site is live at **https://eisb-jd.github.io/TJC-mapping/**.
4. Optional: to use a custom domain such as `map.example.org`, enter it under **Settings → Pages → Custom domain**, then add a CNAME record at your DNS provider.

Note: GitHub Pages sites are public. Publish only after the church has approved the data. A Pages site from a private repository needs a paid GitHub plan, and is still public.

## Updating the data

- To edit one location, change its properties in `data/tjc_locations.geojson`. Keep the `id`.
- For a location that receives coordinates, set
  `"geometry": {"type":"Point","coordinates":[<lon>,<lat>]}`. Also set `lat`, `lon`, `kodlokasi` and `kodlokasi_url` in its properties.
- To add a photo, save it as `photos/<id>.jpg` and set `"photo": "photos/<id>.jpg"`.
- Commit the changes. GitHub Pages redeploys automatically.
- Validate the GeoJSON at https://geojson.io or with `ogrinfo` before you commit.

## Local preview

The page loads its data with `fetch`, so it must be served over HTTP. From this folder, run `python -m http.server 8000`, then open http://localhost:8000.

## Credits and licences

- Base maps: satellite imagery © Esri, Maxar, Earthstar Geographics and the GIS User Community (Esri World Imagery, with the Esri transportation and place-name reference layers); street map © OpenStreetMap contributors (ODbL).
- District boundaries: geoBoundaries gbOpen MYS ADM2, 2020 edition (CC BY 3.0). They are simplified and indicative only.
- Map library: Leaflet (BSD-2-Clause).
- QR codes: qrcode-generator (MIT).
- Location data: True Jesus Church subzone documents (November 2026). Kuching and Miri come from OpenStreetMap.
- KodLokasi codes: obtained from the KodLokasi web app (https://map.kodlokasi.my).
- Prepared by EARTH Info Sdn. Bhd.
