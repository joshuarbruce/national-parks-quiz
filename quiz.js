// ── Constants ─────────────────────────────────────────────────────────────

const DIMENSIONS = [
  "crowd_score", "challenge_score", "roughing_it_score",
  "wildlife_score", "lushness_score", "seasonality_score",
  "water_score", "remote_score", "family_score",
];

const DIM_LABELS = {
  crowd_score:       "Crowd level",
  challenge_score:   "Trail challenge",
  roughing_it_score: "Backcountry style",
  wildlife_score:    "Wildlife focus",
  lushness_score:    "Lush ecosystem",
  seasonality_score: "Peak-season park",
  water_score:       "Water access",
  remote_score:      "Remoteness",
  family_score:      "Family-friendliness",
};

const RANK_COLORS = ["#f5a623", "#60a5fa", "#34d399", "#c084fc", "#fb923c"];

const MONTH_NAMES = [
  "", "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const QUESTIONS = [
  // ── Crowd ──────────────────────────────────────────────────────────────
  {
    id: "crowd_1", dimension: "crowd_score",
    text: "On a trail, you'd prefer:",
    answers: [
      [0.00, "Complete solitude — I go hours without seeing anyone"],
      [0.33, "A quiet path with the occasional other hiker"],
      [0.67, "Busy but manageable — company available if I want it"],
      [1.00, "Lively and social — I love the energy of popular destinations"],
    ],
  },
  {
    id: "crowd_2", dimension: "crowd_score",
    text: "Permits and advance reservations:",
    answers: [
      [0.00, "Worth every hoop — total solitude is the point"],
      [0.33, "Fine with planning ahead if it means fewer people"],
      [0.67, "I prefer easy access even if it means more crowds"],
      [1.00, "Walk-up only — I don't plan that far ahead"],
    ],
  },
  // ── Challenge ──────────────────────────────────────────────────────────
  {
    id: "challenge_1", dimension: "challenge_score",
    text: "Your ideal day hike:",
    answers: [
      [0.00, "A flat 2-mile loop — I'm here for the views, not the miles"],
      [0.33, "5–6 miles with moderate elevation, done by early afternoon"],
      [0.67, "A full-day 10-mile push that earns the views"],
      [1.00, "A brutal 15-mile sufferfest I'll be bragging about for weeks"],
    ],
  },
  {
    id: "challenge_2", dimension: "challenge_score",
    text: "A successful park day feels like:",
    answers: [
      [0.00, "I found the perfect picnic spot with zero effort"],
      [0.33, "Covered good ground at a comfortable pace"],
      [0.67, "My legs are burning, but I made it"],
      [1.00, "I had to turn back once before finally summiting"],
    ],
  },
  // ── Roughing it ────────────────────────────────────────────────────────
  {
    id: "rough_1", dimension: "roughing_it_score",
    text: "Where do you sleep on a park trip?",
    answers: [
      [0.00, "Lodge, inn, or hotel — I earned a real bed"],
      [0.33, "RV or car camping with hookups"],
      [0.67, "Tent camping, no hookups needed"],
      [1.00, "Multi-day backpacking — everything on my back"],
    ],
  },
  {
    id: "rough_2", dimension: "roughing_it_score",
    text: "Running water on a backcountry trip:",
    answers: [
      [0.00, "Non-negotiable — hot shower every night"],
      [0.33, "Nice to have, but I can rough it a few nights"],
      [0.67, "I pack a filter and call it covered"],
      [1.00, "What running water?"],
    ],
  },
  // ── Wildlife ───────────────────────────────────────────────────────────
  {
    id: "wildlife_1", dimension: "wildlife_score",
    text: "The moment that would define your trip:",
    answers: [
      [0.00, "Golden light on a canyon wall at sunset"],
      [0.33, "A wildflower meadow at peak bloom"],
      [0.67, "Spotting a rare bird through binoculars"],
      [1.00, "Watching a wolf pack move across the valley"],
    ],
  },
  {
    id: "wildlife_2", dimension: "wildlife_score",
    text: "Your wildlife style:",
    answers: [
      [0.00, "I notice what wanders past — I don't plan around it"],
      [0.33, "I'd take a short detour for a known bird blind or active meadow"],
      [0.67, "I research which parks have my target species before I book"],
      [1.00, "I'll wake at 4am and wait in position for predators or megafauna"],
    ],
  },
  // ── Lushness ───────────────────────────────────────────────────────────
  {
    id: "lush_1", dimension: "lushness_score",
    text: "Your dream park landscape:",
    answers: [
      [0.00, "Sun-baked red rock, dramatic arches, not a cloud in sight"],
      [0.33, "High desert with pinyon pines and enormous sky"],
      [0.67, "Mossy Pacific Northwest forest with ferns everywhere"],
      [1.00, "Ancient temperate rainforest, everything dripping green"],
    ],
  },
  {
    id: "lush_2", dimension: "lushness_score",
    text: "Your ideal park weather:",
    answers: [
      [0.00, "Bone-dry desert heat — give me the sun"],
      [0.33, "Clear and crisp at altitude"],
      [0.67, "Cool with a chance of afternoon mist"],
      [1.00, "Overcast and moody — I love a dripping green forest"],
    ],
  },
  // ── Seasonality ────────────────────────────────────────────────────────
  {
    id: "season_1", dimension: "seasonality_score",
    text: "When do you visit national parks?",
    answers: [
      [0.00, "Whenever I can — shoulder season and winter trips are my thing"],
      [0.33, "Mostly spring and fall to dodge the crowds"],
      [0.67, "Usually summer — that's when I take vacation"],
      [1.00, "Peak summer only — I want everything fully open"],
    ],
  },
  {
    id: "season_2", dimension: "seasonality_score",
    text: "A park where half the facilities close in October:",
    answers: [
      [0.00, "Sounds perfect — fewer people, same landscapes"],
      [0.33, "Fine as long as the trails stay open"],
      [0.67, "Manageable — I'll check what's available beforehand"],
      [1.00, "Dealbreaker — I want the full experience"],
    ],
  },
  // ── Water access ───────────────────────────────────────────────────────
  {
    id: "water_1", dimension: "water_score",
    text: "Water on a park trip is:",
    answers: [
      [0.00, "Scenery I appreciate from shore — I'm not getting in"],
      [0.33, "A bonus if there's a good swimming hole or fishing spot"],
      [0.67, "Part of my plan — I'll paddle, fish, or swim if it's there"],
      [1.00, "The whole point — I want to kayak, snorkel, or be on the water"],
    ],
  },
  {
    id: "water_2", dimension: "water_score",
    text: "When a park has water — lake, river, or coastline — you:",
    answers: [
      [0.00, "Enjoy it from shore — great backdrop, no interest in getting wet"],
      [0.33, "Might fish or take a quick swim if it's right there"],
      [0.67, "Plan around it — paddling, fishing, or swimming is part of the trip"],
      [1.00, "The water IS the trip — kayaking, snorkeling, or boating is why I'm here"],
    ],
  },
  // ── Remoteness ─────────────────────────────────────────────────────────
  {
    id: "remote_1", dimension: "remote_score",
    text: "How far from civilization are you comfortable being?",
    answers: [
      [0.00, "Interstate access — ideally a short drive from a major city"],
      [0.33, "A few hours on paved roads; I'll pass through small towns on the way"],
      [0.67, "Hours on a back road with no cell service — part of the appeal"],
      [1.00, "Fly-in or end-of-road access only — I want where the roads stop"],
    ],
  },
  // ── Family-friendliness ────────────────────────────────────────────────
  {
    id: "family_1", dimension: "family_score",
    text: "Who are you visiting with?",
    answers: [
      [0.00, "Solo or with adults — kid-friendliness isn't a factor"],
      [0.33, "A small group of adults who want flexibility"],
      [0.67, "Mixed ages — some people need easier access and rest stops"],
      [1.00, "Young children in tow — accessible trails and visitor centers matter"],
    ],
  },
  {
    id: "family_2", dimension: "family_score",
    text: "A park trip success looks like:",
    answers: [
      [0.00, "I pushed my limits and earned every mile"],
      [0.33, "Good balance of effort and downtime"],
      [0.67, "Everyone in the group had a great time, regardless of fitness level"],
      [1.00, "The kids were amazed and want to come back"],
    ],
  },
];

// ── Quiz engine ───────────────────────────────────────────────────────────

function scoreAnswers(raw) {
  const buckets = {};
  DIMENSIONS.forEach(d => { buckets[d] = []; });
  QUESTIONS.forEach(q => {
    if (raw[q.id] !== undefined) buckets[q.dimension].push(raw[q.id]);
  });
  const scores = {};
  DIMENSIONS.forEach(d => {
    const vals = buckets[d];
    scores[d] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0.5;
  });
  return scores;
}

function matchParks(userScores, parks, topN = 5) {
  const weights = {};
  // Floor at 0.2 so neutral answers still contribute baseline distance.
  // Without a floor, a neutral answer collapses a dimension's weight to 0,
  // letting very different parks (e.g. Wrangell-St. Elias vs Mammoth Cave)
  // appear as near-identical if the user was neutral on the separating dims.
  DIMENSIONS.forEach(d => {
    weights[d] = 0.2 + 0.8 * Math.abs(userScores[d] - 0.5) * 2;
  });

  const results = parks.map(park => {  // parks = pre-filtered subset
    const distSq = DIMENSIONS.reduce((sum, d) => {
      return sum + weights[d] * Math.pow(userScores[d] - park[d], 2);
    }, 0);
    return { park, distance: Math.sqrt(distSq) };
  });

  results.sort((a, b) => a.distance - b.distance);

  const worst = results[results.length - 1].distance;
  const best  = results[0].distance;
  const span  = worst - best || 1;

  return results.slice(0, topN).map((r, i) => ({
    rank:      i + 1,
    park:      r.park,
    matchPct:  Math.round(100 * (1 - (r.distance - best) / span)),
    distance:  r.distance,
    color:     RANK_COLORS[i],
    why:       topReasons(userScores, r.park, weights),
  }));
}

function topReasons(userScores, park, weights) {
  const sorted = [...DIMENSIONS].sort((a, b) => {
    const alignA = weights[a] * (1 - Math.abs(userScores[a] - park[a]));
    const alignB = weights[b] * (1 - Math.abs(userScores[b] - park[b]));
    return alignB - alignA;
  });
  return sorted.slice(0, 2).map(d => dimReason(d, park[d]));
}

function dimReason(dim, val) {
  const reasons = {
    crowd_score: [
      "Very few visitors — you'll have space to yourself",
      "Manageable crowds — busy but not overwhelming",
      "Popular and lively — lots of fellow visitors",
    ],
    challenge_score: [
      "Gentle terrain — easy walks with great payoff",
      "Moderate trails — solid effort, rewarding views",
      "Demanding trails — long, strenuous, worth every step",
    ],
    roughing_it_score: [
      "Well-developed facilities — lodges, hookups, amenities",
      "Traditional camping — tent-friendly without going remote",
      "True backcountry — wilderness permits, no crowds, no infrastructure",
    ],
    wildlife_score: [
      "Geology and landscape are the stars here",
      "Good mix of scenery and wildlife",
      "Exceptional wildlife density — mammals and birds everywhere",
    ],
    lushness_score: [
      "Arid and dramatic — desert rock and open sky",
      "Mixed terrain — some forest, some open country",
      "Lush and wet — old-growth forest, ferns, moss",
    ],
    seasonality_score: [
      "Great year-round — no need to time your visit",
      "Moderate seasonality — some shoulder-season charm",
      "Classic summer park — go in July–August for full access",
    ],
    water_score: [
      "Landscape-focused — the drama here is on land, not water",
      "Some water access — lakes or rivers for fishing and paddling",
      "Water-centric — kayaking, snorkeling, or boating are the main draws",
    ],
    remote_score: [
      "Easily accessible — near a major city or right off a highway",
      "A solid drive out — far enough to feel away from it all",
      "Genuinely remote — hours on back roads, limited services, real wilderness",
    ],
    family_score: [
      "Appeals to adventurers and serious hikers — not a destination built around kids",
      "Accessible to most visitors — a good general-purpose park",
      "Family favorite — kid-friendly trails, visitor centers, and accessible features",
    ],
  };
  const idx = val < 0.35 ? 0 : val < 0.65 ? 1 : 2;
  return reasons[dim][idx];
}

function fmtVisitors(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M visitors/yr`;
  if (n >= 1e3) return `${Math.round(n / 1e3)}K visitors/yr`;
  return `${n} visitors/yr`;
}

// ── App state ─────────────────────────────────────────────────────────────

let currentQ      = 0;
let rawAnswers    = {};
let leafletMap    = null;

// Filter state
let filterScope   = "any";   // "any" | "lower48" | "distance"
let userLat       = null;
let userLng       = null;
let maxDistanceMi = null;
let filteredParks = PARKS_DATA;

const NON_LOWER48 = new Set([
  "dena","katm","glba","wrst","lacl","gaar","kova","kefj",  // Alaska
  "havo","hale",                                             // Hawaii
  "viis",                                                    // Virgin Islands
]);

// ── Filter helpers ────────────────────────────────────────────────────────

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371, toRad = x => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function lookupZip(zip) {
  const url = `https://nominatim.openstreetmap.org/search?postalcode=${zip}&countrycodes=us&format=json&limit=1`;
  const resp = await fetch(url, { headers: { "User-Agent": "national-parks-quiz/1.0" } });
  if (!resp.ok) throw new Error("Lookup failed");
  const data = await resp.json();
  if (!data.length) throw new Error("ZIP code not found");
  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

function computeFilteredParks() {
  if (filterScope === "lower48") return PARKS_DATA.filter(p => !NON_LOWER48.has(p.code));
  if (filterScope === "distance" && userLat !== null && maxDistanceMi !== null) {
    const maxKm = maxDistanceMi * 1.60934;
    return PARKS_DATA.filter(p => haversineKm(userLat, userLng, p.lat, p.lng) <= maxKm);
  }
  return PARKS_DATA;
}

function updateParkCount() {
  const countEl  = document.getElementById("park-count");
  const startBtn = document.getElementById("filter-start-btn");
  if (filterScope !== "distance") {
    countEl.textContent = ""; countEl.className = "park-count";
    startBtn.disabled = false;
    return;
  }
  if (userLat === null || maxDistanceMi === null) {
    countEl.textContent = ""; startBtn.disabled = true;
    return;
  }
  const parks = computeFilteredParks();
  if (parks.length < 5) {
    countEl.textContent = `Only ${parks.length} park${parks.length !== 1 ? "s" : ""} within range — try a larger distance.`;
    countEl.className = "park-count warn";
    startBtn.disabled = true;
  } else {
    countEl.textContent = `${parks.length} parks within range`;
    countEl.className = "park-count";
    startBtn.disabled = false;
  }
}

function setUserLocation(lat, lng, msg, cls) {
  userLat = lat; userLng = lng;
  const status = document.getElementById("location-status");
  status.textContent = msg; status.className = "location-status " + cls;
  document.getElementById("dist-label").style.display = "";
  document.getElementById("distance-options").style.display = "flex";
  updateParkCount();
}

// ── Screen management ─────────────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
    s.style.display = "none";
  });
  const el = document.getElementById(id);
  el.style.display = "flex";
  el.classList.add("active");
}

// ── Quiz UI ───────────────────────────────────────────────────────────────

function startQuiz() {
  currentQ   = 0;
  rawAnswers = {};
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q       = QUESTIONS[currentQ];
  const pct     = (currentQ / QUESTIONS.length) * 100;
  const qText   = document.getElementById("q-text");
  const answers = document.getElementById("answers");

  document.getElementById("progress-fill").style.width  = pct + "%";
  document.getElementById("progress-label").textContent =
    `${currentQ + 1} of ${QUESTIONS.length}`;

  // Fade out → update → fade in
  const wrap = document.querySelector(".question-wrap");
  wrap.style.animation = "none";
  wrap.offsetHeight;                          // force reflow
  wrap.style.animation = "fadeSlide 0.25s ease";

  qText.textContent = q.text;
  answers.innerHTML = "";

  q.answers.forEach(([val, label]) => {
    const btn = document.createElement("button");
    btn.className   = "answer-btn";
    btn.textContent = label;
    if (rawAnswers[q.id] === val) btn.classList.add("selected");
    btn.addEventListener("click", () => handleAnswer(val));
    answers.appendChild(btn);
  });

  document.getElementById("back-btn").style.display = currentQ > 0 ? "block" : "none";
}

function handleAnswer(val) {
  const q = QUESTIONS[currentQ];

  // Visual feedback before advancing
  const clicked = [...document.querySelectorAll(".answer-btn")]
    .find(b => b.textContent === q.answers.find(([v]) => v === val)[1]);
  if (clicked) clicked.classList.add("selected");

  rawAnswers[q.id] = val;

  setTimeout(() => {
    currentQ++;
    if (currentQ >= QUESTIONS.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }, 180);
}

function refreshResults() {
  filteredParks = computeFilteredParks();
  const userScores = scoreAnswers(rawAnswers);
  const matches    = matchParks(userScores, filteredParks);
  renderResults(matches, userScores);
  requestAnimationFrame(() => initMap(matches));

  // Sync filter bar active state
  document.querySelectorAll(".rscope-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.scope === filterScope);
  });
}

function finishQuiz() {
  document.getElementById("progress-fill").style.width = "100%";
  showScreen("results");
  refreshResults();
}

// ── Results UI ────────────────────────────────────────────────────────────

function renderResults(matches, userScores) {
  document.getElementById("top-match-label").textContent =
    `Your #1 match: ${matches[0].park.name}`;

  renderCards(matches);
  renderProfileBars(userScores);
}

function renderCards(matches) {
  const container = document.getElementById("match-cards");
  container.innerHTML = "";

  matches.forEach(m => {
    const card = document.createElement("div");
    card.className    = "match-card";
    card.dataset.code = m.park.code;

    const quotesHtml = (m.park.visitor_quotes && m.park.visitor_quotes.length)
      ? `<div class="card-quotes">${m.park.visitor_quotes.map(q => `<p class="visitor-quote">💬 "${q}"</p>`).join("")}</div>`
      : "";

    card.innerHTML = `
      <div class="card-header">
        <div class="rank-badge" style="background:${m.color}">${m.rank}</div>
        <div class="card-name">${m.park.name}</div>
        <div class="card-pct">${m.matchPct}%</div>
      </div>
      <div class="pct-bar-track">
        <div class="pct-bar-fill" style="width:${m.matchPct}%;background:${m.color}"></div>
      </div>
      <div class="card-meta">
        <span class="chip">📅 Best in ${MONTH_NAMES[m.park.peak_month]}</span>
        <span class="chip">🥾 ${m.park.n_trails} trails</span>
        <span class="chip">👥 ${fmtVisitors(m.park.avg_annual_visits)}</span>
      </div>
      <div class="card-why">
        ${m.why.map(w => `<p>${w}</p>`).join("")}
      </div>
      ${quotesHtml}
    `;

    card.addEventListener("click", () => focusPark(m.park.code));
    container.appendChild(card);
  });
}

function renderProfileBars(userScores) {
  const container = document.getElementById("profile-bars");
  container.innerHTML = "";

  DIMENSIONS.forEach(d => {
    const val = userScores[d];
    const row = document.createElement("div");
    row.className = "profile-row";
    row.innerHTML = `
      <div class="profile-label">${DIM_LABELS[d]}</div>
      <div class="profile-track">
        <div class="profile-fill" style="width:${val * 100}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

// ── Map ───────────────────────────────────────────────────────────────────

let markersByCode = {};

function initMap(matches) {
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }
  markersByCode = {};

  leafletMap = L.map("map", { zoomControl: true });

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors © <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }
  ).addTo(leafletMap);

  const matchCodes = new Set(matches.map(m => m.park.code));

  // Grey dots for all non-matched parks
  PARKS_DATA.forEach(park => {
    if (matchCodes.has(park.code)) return;

    const marker = L.circleMarker([park.lat, park.lng], {
      radius:      5,
      fillColor:   "#4a5568",
      fillOpacity: 0.65,
      color:       "#6b7280",
      weight:      1,
    }).addTo(leafletMap);

    marker.bindPopup(
      `<div class="popup-name-only">${park.name}</div>`,
      { className: "dark-popup" }
    );
    marker.on("mouseover", function () { this.openPopup(); });
    marker.on("mouseout",  function () { this.closePopup(); });

    markersByCode[park.code] = marker;
  });

  // Ranked markers for top 5
  matches.forEach(m => {
    const icon = L.divIcon({
      html: `<div class="rank-marker" style="background:${m.color}">${m.rank}</div>`,
      className:  "",
      iconSize:   [32, 32],
      iconAnchor: [16, 16],
      popupAnchor:[0, -20],
    });

    const marker = L.marker([m.park.lat, m.park.lng], { icon })
      .addTo(leafletMap);

    marker.bindPopup(buildPopup(m), {
      maxWidth:  280,
      className: "dark-popup",
    });

    marker.on("click", () => highlightCard(m.park.code));
    markersByCode[m.park.code] = marker;
  });

  // Fit map to top 5 bounds with padding
  const bounds = L.latLngBounds(matches.map(m => [m.park.lat, m.park.lng]));
  leafletMap.fitBounds(bounds, { padding: [48, 48] });
}

function buildPopup(m) {
  return `
    <div class="park-popup">
      <div class="popup-rank-row">
        <div class="popup-rank-badge" style="background:${m.color}">${m.rank}</div>
        <span class="popup-match-pct">${m.matchPct}% match</span>
      </div>
      <div class="popup-name">${m.park.name}</div>
      <div class="popup-chips">
        <span class="popup-chip">📅 ${MONTH_NAMES[m.park.peak_month]}</span>
        <span class="popup-chip">🥾 ${m.park.n_trails} trails</span>
        <span class="popup-chip">👥 ${fmtVisitors(m.park.avg_annual_visits)}</span>
      </div>
      <div class="popup-why">
        ${m.why.map(w => `<p>${w}</p>`).join("")}
      </div>
      <a class="popup-link" href="${m.park.url}" target="_blank" rel="noopener">
        NPS page →
      </a>
    </div>
  `;
}

function focusPark(code) {
  highlightCard(code);
  const marker = markersByCode[code];
  if (!marker || !leafletMap) return;
  const latlng = marker.getLatLng
    ? marker.getLatLng()
    : L.latLng(marker._latlng);
  leafletMap.flyTo(latlng, 7, { animate: true, duration: 0.6 });
  marker.openPopup();
}

function highlightCard(code) {
  document.querySelectorAll(".match-card").forEach(c => {
    c.classList.toggle("highlighted", c.dataset.code === code);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────

function goBack() {
  if (currentQ > 0) { currentQ--; renderQuestion(); }
}

// Welcome → Filter
document.getElementById("start-btn").addEventListener("click", () => showScreen("filter"));

// Filter: scope buttons
document.querySelectorAll(".scope-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".scope-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterScope = btn.dataset.scope;
    document.getElementById("location-panel").style.display =
      filterScope === "distance" ? "flex" : "none";
    updateParkCount();
  });
});

// Filter: geolocation
document.getElementById("geolocate-btn").addEventListener("click", () => {
  const btn = document.getElementById("geolocate-btn");
  btn.textContent = "📍 Locating…"; btn.disabled = true;
  navigator.geolocation.getCurrentPosition(
    pos => {
      btn.textContent = "📍 Location found";
      btn.classList.add("success");
      setUserLocation(pos.coords.latitude, pos.coords.longitude, "Location detected", "ok");
    },
    err => {
      btn.textContent = "📍 Use my location"; btn.disabled = false;
      btn.classList.add("error");
      const s = document.getElementById("location-status");
      const msgs = {
        1: "Permission denied — enter your ZIP code instead.",
        2: "Location unavailable — geolocation requires HTTPS. Enter your ZIP code instead.",
        3: "Request timed out — enter your ZIP code instead.",
      };
      s.textContent = msgs[err.code] || "Location failed — enter your ZIP code instead.";
      s.className = "location-status err";
    },
    { timeout: 10000, enableHighAccuracy: false }
  );
});

// Filter: ZIP lookup
async function handleZipLookup() {
  const zip = document.getElementById("zip-input").value.trim();
  const status = document.getElementById("location-status");
  if (!/^\d{5}$/.test(zip)) {
    status.textContent = "Please enter a 5-digit ZIP code.";
    status.className = "location-status err"; return;
  }
  status.textContent = "Looking up ZIP code…"; status.className = "location-status";
  const btn = document.getElementById("zip-btn"); btn.disabled = true;
  try {
    const { lat, lng } = await lookupZip(zip);
    setUserLocation(lat, lng, `ZIP ${zip} found`, "ok");
  } catch(e) {
    status.textContent = e.message; status.className = "location-status err";
  }
  btn.disabled = false;
}
document.getElementById("zip-btn").addEventListener("click", handleZipLookup);
document.getElementById("zip-input").addEventListener("keydown", e => {
  if (e.key === "Enter") handleZipLookup();
});

// Filter: distance buttons
document.querySelectorAll(".dist-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".dist-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    maxDistanceMi = parseInt(btn.dataset.miles);
    updateParkCount();
  });
});

// Filter → Quiz
document.getElementById("filter-start-btn").addEventListener("click", () => {
  filteredParks = computeFilteredParks();
  startQuiz();
});

// Back button within quiz
document.getElementById("back-btn").addEventListener("click", goBack);

// Retake → Filter (preserves previous filter selection)
document.getElementById("retake-btn").addEventListener("click", () => {
  if (leafletMap) { leafletMap.remove(); leafletMap = null; }
  showScreen("filter");
});

// ── Results filter bar ────────────────────────────────────────────────────

// Scope toggle buttons
document.querySelectorAll(".rscope-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    filterScope = btn.dataset.scope;
    document.querySelectorAll(".rscope-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const panel = document.getElementById("res-location-panel");
    panel.style.display = filterScope === "distance" ? "flex" : "none";
    if (filterScope !== "distance") refreshResults();
  });
});

// Geolocation
document.getElementById("res-geolocate-btn").addEventListener("click", () => {
  const btn = document.getElementById("res-geolocate-btn");
  btn.textContent = "📍 Locating…"; btn.disabled = true;
  navigator.geolocation.getCurrentPosition(
    pos => {
      userLat = pos.coords.latitude; userLng = pos.coords.longitude;
      btn.textContent = "📍 Location found"; btn.classList.add("success");
      document.getElementById("res-distance-options").style.display = "flex";
    },
    () => {
      btn.textContent = "📍 My location"; btn.disabled = false; btn.classList.add("error");
      document.getElementById("res-location-status").textContent =
        "Location unavailable — enter ZIP code instead.";
    },
    { timeout: 10000, enableHighAccuracy: false }
  );
});

// ZIP lookup
async function handleResZipLookup() {
  const zip    = document.getElementById("res-zip-input").value.trim();
  const status = document.getElementById("res-location-status");
  if (!/^\d{5}$/.test(zip)) {
    status.textContent = "Please enter a 5-digit ZIP code."; return;
  }
  status.textContent = "Looking up…";
  const btn = document.getElementById("res-zip-btn"); btn.disabled = true;
  try {
    const { lat, lng } = await lookupZip(zip);
    userLat = lat; userLng = lng;
    status.textContent = `ZIP ${zip} found`;
    document.getElementById("res-distance-options").style.display = "flex";
  } catch(e) {
    status.textContent = e.message;
  }
  btn.disabled = false;
}
document.getElementById("res-zip-btn").addEventListener("click", handleResZipLookup);
document.getElementById("res-zip-input").addEventListener("keydown", e => {
  if (e.key === "Enter") handleResZipLookup();
});

// Distance buttons
document.querySelectorAll(".res-dist-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".res-dist-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    maxDistanceMi = parseInt(btn.dataset.miles);
    if (userLat !== null) refreshResults();
  });
});
