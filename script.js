/* ---------- translations ---------- */
const T = {
  ar: {
    pageTitle: 'لوحة التكتيكات | فانتازي وتكتيكات eFootball',
    langLabel: 'English',
    dataLoading: 'بيانات مباشرة — جاري التحميل',
    lastUpdatedPrefix: 'آخر تحديث ',
    updateFailed: 'فشل التحديث المباشر',
    gwConnecting: 'جاري الاتصال ببيانات FPL المباشرة...',
    gwFailed: 'تعذّر تحميل بيانات الجولة',
    gwCurrent: 'الجولة الحالية', gwNext: 'الجولة القادمة', gwGeneric: 'الجولة',
    gwLiveSuffix: '— بيانات مباشرة',
    viewTitles: {captain:'مرشّحو الكابتنية', form:'الأعلى تألقاً', points:'الأكثر تسجيلاً', clean:'مراقبة نظافة الشباك', value:'أفضل قيمة مقابل السعر', injury:'مراقبة الإصابات', search:'بحث عن لاعب', byteam:'أفضل لاعب من كل فريق', byposition:'أفضل اللاعبين حسب المركز', byprice:'أفضل اللاعبين حسب الفئة السعرية', transfers:'الأكثر شراءً وبيعاً', compare:'مقارنة اللاعبين', squad:'فريقي', fixtures:'صعوبة فيكستشرز الفرق', teamhub:'صفحة الفريق', favorites:'المفضلة'},
    priceTiers: {budget:'فئة الميزانية', mid:'فئة متوسطة', premium:'فئة مميزة', elite:'فئة النخبة'},
    posLabel: {1:'حارس',2:'مدافع',3:'وسط',4:'مهاجم'},
    pickTags: {top:'👑 الخيار الأول', safe:'🧤 الاختيار الآمن', risk:'⚡ خيار الريسك', budget:'💎 خيار الميزانية'},
    pickDesc: {top:'أعلى تقييم بين اللاعبين الأكتر امتلاكاً هذا الأسبوع.', safe:'أداء منتظم ونسبة امتلاك مرتفعة نسبياً — اختيار مطمئن.', risk:'تقييم قوي بنسبة امتلاك منخفضة — فرصة تفرق في الترتيب.', budget:'أفضل قيمة مقابل السعر بين اللاعبين الأقل تكلفة.'},
    compositeRating: 'تقييم مركّب', opponent: 'الخصم', ownership: 'الملكية', noMatch: 'بدون مباراة',
    formUnit: 'فورم', pointsUnit: 'نقطة', difficultyUnit: 'صعوبة', valueUnit: 'نقطة/مليون', playChanceUnit: 'نسبة اللعب',
    statusMap: {i:'مصاب', d:'مشكوك', s:'موقوف', n:'غير متاح'},
    emptyForm: 'لا توجد بيانات فورم كافية دلوقتي (غالباً قبل بداية الموسم).',
    emptyPoints: 'لسه مفيش نقط متسجلة الموسم ده.',
    emptyClean: 'مفيش فيكستشرز سهلة واضحة للحراس/المدافعين الجولة دي.',
    emptyValue: 'محتاجين نقط متسجلة الأول عشان نحسب أفضل قيمة.',
    emptyInjury: 'مفيش إصابات أو شكوك في اللاعبين الأكتر امتلاكاً حالياً 👍',
    errorMsg: 'تعذّر تحميل البيانات المباشرة الآن — ممكن مشكلة شبكة مؤقتة.',
    retryBtn: 'إعادة المحاولة',
    statGoals:'أهداف', statAssists:'أسيست', statBonus:'بونص', statXG:'xG', statXA:'xA', statMinutes:'دقايق', statCS:'شباك نظيفة',
    influence:'تأثير', creativity:'إبداع', threat:'خطورة', nextFixtures:'المباريات الجاية',
    moreDetails:'تفاصيل أكتر', statPrice:'السعر', searchNoQuery:'اكتب اسم لاعب للبحث', searchNoResults:'مفيش لاعب بالاسم ده', searchResultsHeading:'نتائج البحث',
    transfersInTitle:'الأكثر شراءً', transfersOutTitle:'الأكثر بيعاً', transfersUnit:'تحويلة',
    favBtn:'مفضلة', cmpBtn:'مقارنة', sqdBtn:'فريقي',
    compareFull:'أقصى حد 3 لاعبين للمقارنة', compareEmpty:'اختار لاعبين للمقارنة الأول',
    favEmpty:'لسه ما ضفتش لاعبين للمفضلة',
    squadFull:'فريقك مكتمل بالفعل (15 لاعب)', squadPosFull:'المركز ده مكتمل في فريقك', squadTeamFull:'أقصى حد 3 لاعبين من نفس الفريق', squadBudgetExceeded:'الميزانية مش كافية للاعب ده',
    squadSlotEmpty:'لسه مفيش لاعبين في المركز ده', squadSpent:'المصروف', squadRemaining:'المتبقي', squadCount:'العدد',
    selectTeamPrompt:'اختار فريق من فوق',
    sourceOk:'⚡ Worker', sourceFallback:'⚠ احتياطي', sourceOkTitle:'البيانات جايه من السيرفر الأساسي', sourceFallbackTitle:'السيرفر الأساسي مش راد، البيانات جايه من مصدر احتياطي',
    exportReady:'الكود جاهز — انسخه وابعته لنفسك', copied:'اتنسخ! ✅', importSuccess:'تم الاستيراد بنجاح 🎉', importError:'الكود مش صحيح، جرب تاني', compareNeedOneMore:'اخترت لاعب واحد — ضيف واحد على الأقل عشان تقارن', compareSwipeHint:'👉 مرّر يمين وشمال عشان تشوف اللاعب التالت', squadComplete:'🎉 فريقك مكتمل! 15 لاعب جاهزين',
    favCount:'عدد المفضلة', benchLabel:'دكة البدلاء', pitchView:'الملعب', listView:'القائمة', compareLeads:'متفوق في', compareCategories:'فئة', captaincyHint:'دوس على أي لاعب أساسي عشان تخليه كابتن (C) — دوس تاني يبقى نائب (V) — دوس تالت يرجع عادي',
    homeCaptainLabel:'أفضل كابتن هذا الأسبوع', homeSquadLabel:'فريقي', homeSquadEmpty:'ابدأ تبني فريقك',
    homeHighlights:'أبرز النقاط', homeTopFormLabel:'الأعلى تألقاً', homeBestValueLabel:'أفضل قيمة',
    homeInjuryLabel:'تنبيه إصابة', homeEasyFixtureLabel:'أسهل فيكستشرز', homePlaybookLabel:'الأنظمة والتكتيكات',
    homePlaybookSub:'شوف كل التفاصيل والتحديثات'
  },
  en: {
    pageTitle: 'Tactics Board | Fantasy & eFootball Tactics',
    langLabel: 'العربية',
    dataLoading: 'Live data — loading',
    lastUpdatedPrefix: 'Last updated ',
    updateFailed: 'Live update failed',
    gwConnecting: 'Connecting to live FPL data...',
    gwFailed: 'Could not load gameweek data',
    gwCurrent: 'Current gameweek', gwNext: 'Next gameweek', gwGeneric: 'Gameweek',
    gwLiveSuffix: '— live data',
    viewTitles: {captain:'Captain Picks', form:'Top Form', points:'Top Scorers', clean:'Clean Sheet Watch', value:'Best Value', injury:'Injury Watch', search:'Player Search', byteam:'Best Player Per Team', byposition:'Best Players By Position', byprice:'Best Players By Price Tier', transfers:'Transfers In & Out', compare:'Compare Players', squad:'My Team', fixtures:'Team Fixture Difficulty', teamhub:'Team Hub', favorites:'Favorites'},
    priceTiers: {budget:'Budget Tier', mid:'Mid Tier', premium:'Premium Tier', elite:'Elite Tier'},
    posLabel: {1:'GK',2:'DEF',3:'MID',4:'FWD'},
    pickTags: {top:'👑 Top Pick', safe:'🧤 Safe Pick', risk:'⚡ Differential', budget:'💎 Budget Pick'},
    pickDesc: {top:'Highest-rated among the most-owned players this week.', safe:'Consistent output with fairly high ownership — a reassuring pick.', risk:'Strong rating with low ownership — a chance to climb the ranks.', budget:'Best points-per-cost among the cheaper players.'},
    compositeRating: 'Composite rating', opponent: 'Opponent', ownership: 'Ownership', noMatch: 'No fixture',
    formUnit: 'form', pointsUnit: 'pts', difficultyUnit: 'FDR', valueUnit: 'pts/£m', playChanceUnit: 'chance',
    statusMap: {i:'Injured', d:'Doubtful', s:'Suspended', n:'Unavailable'},
    emptyForm: 'Not enough form data yet (likely pre-season).',
    emptyPoints: 'No points on the board yet this season.',
    emptyClean: 'No clearly easy fixtures for keepers/defenders this gameweek.',
    emptyValue: 'Need some points on the board first to rank value.',
    emptyInjury: 'No injuries or doubts among highly-owned players right now 👍',
    errorMsg: 'Could not load live data right now — possibly a temporary network issue.',
    retryBtn: 'Retry',
    statGoals:'Goals', statAssists:'Assists', statBonus:'Bonus', statXG:'xG', statXA:'xA', statMinutes:'Mins', statCS:'Clean Sheets',
    influence:'Influence', creativity:'Creativity', threat:'Threat', nextFixtures:'Upcoming fixtures',
    moreDetails:'More details', statPrice:'Price', searchNoQuery:'Type a player name to search', searchNoResults:'No player found with that name', searchResultsHeading:'Search Results',
    transfersInTitle:'Most Transferred In', transfersOutTitle:'Most Transferred Out', transfersUnit:'transfers',
    favBtn:'Favorite', cmpBtn:'Compare', sqdBtn:'My Team',
    compareFull:'You can compare up to 3 players', compareEmpty:'Pick players to compare first',
    favEmpty:'No favorites added yet',
    squadFull:'Your squad is already full (15 players)', squadPosFull:'That position is already full in your squad', squadTeamFull:'Max 3 players from the same club', squadBudgetExceeded:'Not enough budget left for this player',
    squadSlotEmpty:'No players in this position yet', squadSpent:'Spent', squadRemaining:'Remaining', squadCount:'Count',
    selectTeamPrompt:'Pick a team above',
    sourceOk:'⚡ Worker', sourceFallback:'⚠ Fallback', sourceOkTitle:'Live data is coming from the primary server', sourceFallbackTitle:'The primary server is not responding, data is coming from a backup source',
    exportReady:'Code ready — copy and send it to yourself', copied:'Copied! ✅', importSuccess:'Imported successfully 🎉', importError:'Invalid code, please try again', compareNeedOneMore:"You've picked 1 player — add at least one more to compare", compareSwipeHint:'👉 Swipe left and right to see the third player', squadComplete:'🎉 Your squad is complete! All 15 players ready',
    favCount:'Favorites count', benchLabel:'Substitutes bench', pitchView:'Pitch', listView:'List', compareLeads:'leads in', compareCategories:'categories', captaincyHint:'Tap any starting player to make them Captain (C) — tap again for Vice-Captain (V) — tap a third time to clear',
    homeCaptainLabel:"This week's top captain", homeSquadLabel:'My Squad', homeSquadEmpty:'Start building your squad',
    homeHighlights:'Highlights', homeTopFormLabel:'Top form', homeBestValueLabel:'Best value',
    homeInjuryLabel:'Injury alert', homeEasyFixtureLabel:'Easiest fixtures', homePlaybookLabel:'Systems & Tactics',
    homePlaybookSub:'See all details and updates'
  }
};
const VIEW_TAGS = {captain:'FPL PICKS', form:'TOP FORM', points:'TOP SCORERS', clean:'CLEAN SHEET WATCH', value:'BEST VALUE', injury:'INJURY WATCH', search:'PLAYER SEARCH', byteam:'BY TEAM', byposition:'BY POSITION', byprice:'BY PRICE TIER', transfers:'TRANSFERS', compare:'COMPARE', squad:'MY TEAM', fixtures:'FIXTURE DIFFICULTY', teamhub:'TEAM HUB', favorites:'FAVORITES'};
let currentLang = 'ar';
let FPL_STATE = null;
let lastUpdateTime = null;
const STORAGE_KEYS = { squad:'tacticsboard_squad_v1', favorites:'tacticsboard_favorites_v1', compare:'tacticsboard_compare_v1', captain:'tacticsboard_captain_v1', vice:'tacticsboard_vice_v1' };
function saveToStorage(key, value){
  try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) { /* private mode / storage disabled — fail silently, in-memory state still works for this session */ }
}
function loadFromStorage(key, fallback){
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch(e) { return fallback; }
}

let compareIds = loadFromStorage(STORAGE_KEYS.compare, []);
let favoriteIds = new Set(loadFromStorage(STORAGE_KEYS.favorites, []));
let squadIds = loadFromStorage(STORAGE_KEYS.squad, []);
let manualCaptainId = loadFromStorage(STORAGE_KEYS.captain, null);
let manualViceId = loadFromStorage(STORAGE_KEYS.vice, null);
let selectedTeamId = null;
let toastTimer = null;

const PREFERS_REDUCED_MOTION = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function animateCountUps(container){
  const els = container.querySelectorAll('[data-countup]');
  els.forEach(el => {
    const target = parseFloat(el.dataset.countup) || 0;
    const suffix = el.dataset.countupSuffix || '';
    if (PREFERS_REDUCED_MOTION) { el.textContent = target + suffix; return; }
    const duration = 700;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  });
}

function showToast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function exportMyData(){
  const payload = { squad: squadIds, favorites: [...favoriteIds], compare: compareIds };
  const code = btoa(JSON.stringify(payload));
  const box = document.getElementById('exportCodeBox');
  box.value = code;
  box.style.display = '';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => showToast(T[currentLang].copied)).catch(() => showToast(T[currentLang].exportReady));
  } else {
    box.select();
    showToast(T[currentLang].exportReady);
  }
}
function importMyData(){
  const input = document.getElementById('importCodeInput');
  try{
    const payload = JSON.parse(atob(input.value.trim()));
    if (Array.isArray(payload.squad)) squadIds = payload.squad;
    if (Array.isArray(payload.favorites)) favoriteIds = new Set(payload.favorites);
    if (Array.isArray(payload.compare)) compareIds = payload.compare;
    saveToStorage(STORAGE_KEYS.squad, squadIds);
    saveToStorage(STORAGE_KEYS.favorites, [...favoriteIds]);
    saveToStorage(STORAGE_KEYS.compare, compareIds);
    if (FPL_STATE) renderAll(FPL_STATE, currentLang);
    showToast(T[currentLang].importSuccess);
    input.value = '';
  } catch(e){
    showToast(T[currentLang].importError);
  }
}

function toArabicDigits(n){ return String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]); }

/* ---------- expand / collapse ---------- */
function toggleExpand(btn){
  const panel = btn.nextElementSibling;
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function toggleLbExpand(rowEl){
  const panel = rowEl.parentElement.querySelector('.expand-panel');
  const isOpen = panel.classList.toggle('open');
  rowEl.classList.toggle('open', isOpen);
  rowEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

/* ---------- language toggle ---------- */
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = T[lang].pageTitle;
  document.getElementById('langToggleLabel').textContent = T[lang].langLabel;
  document.querySelectorAll('[data-ar]').forEach(el => { el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en; });
  document.querySelectorAll('[data-ar-placeholder]').forEach(el => { el.placeholder = lang === 'ar' ? el.dataset.arPlaceholder : el.dataset.enPlaceholder; });

  if (FPL_STATE) {
    renderAll(FPL_STATE, lang);
    const t = T[lang]; const gw = FPL_STATE.gw;
    const gwWord = gw.is_current ? t.gwCurrent : (gw.is_next ? t.gwNext : t.gwGeneric);
    document.getElementById('gwLabel').innerHTML = gwWord + ' <b class="mono">' + gw.id + '</b> ' + t.gwLiveSuffix;
  } else {
    document.getElementById('gwLabel').textContent = T[lang].gwConnecting;
  }
  updateStatusText(lang);
  updateSourceBadge();

  const searchInput = document.getElementById('playerSearchInput');
  if (searchInput && searchInput.value.trim()) {
    handlePlayerSearch(searchInput.value);
  } else {
    const activeChip = document.querySelector('.fpl-subnav .chip.active');
    if (activeChip) {
      document.getElementById('fantasyHeading').textContent = T[lang].viewTitles[activeChip.dataset.view];
      document.getElementById('fantasyHeadingTag').textContent = VIEW_TAGS[activeChip.dataset.view];
    }
  }
}
function toggleLanguage(){ setLanguage(currentLang === 'ar' ? 'en' : 'ar'); }
function updateStatusText(lang){
  const status = document.getElementById('lastUpdated');
  if (lastUpdateTime) status.textContent = T[lang].lastUpdatedPrefix + lastUpdateTime.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-GB', {hour:'2-digit', minute:'2-digit'});
  else status.textContent = T[lang].dataLoading;
}
function updateSourceBadge(){
  const badge = document.getElementById('sourceBadge');
  if (!lastDataSource) { badge.style.display = 'none'; return; }
  const t = T[currentLang];
  const isPrimary = lastDataSource === 'worker';
  badge.style.display = '';
  badge.className = 'source-badge ' + (isPrimary ? 'ok' : 'fallback');
  badge.textContent = isPrimary ? t.sourceOk : t.sourceFallback;
  badge.title = (isPrimary ? t.sourceOkTitle : t.sourceFallbackTitle) + ' (' + lastDataSource + ')';
}

/* ---------- main tabs ---------- */
function switchTab(tabId, btn){
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-rail > .tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  moveIndicator(btn);
}
function moveIndicator(btn){
  const indicator = document.getElementById('tabIndicator');
  indicator.style.width = btn.offsetWidth + 'px';
  indicator.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
}
window.addEventListener('resize', () => { const a = document.querySelector('.tab-rail > .tab-btn.active'); if(a) moveIndicator(a); });

/* ---------- fantasy sub-nav ---------- */
const FPL_GROUPS = {
  prep: ['captain','clean','injury','fixtures','transfers'],
  rankings: ['form','points','value','byteam','byposition','byprice','teamhub'],
  mytools: ['squad','favorites','compare']
};
function switchFplGroup(groupKey, btn){
  document.querySelectorAll('.group-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const allowed = FPL_GROUPS[groupKey];
  document.querySelectorAll('.fpl-subnav .chip').forEach(chip => {
    chip.classList.toggle('group-hidden', !allowed.includes(chip.dataset.view));
  });
  const activeChip = document.querySelector('.fpl-subnav .chip.active');
  if (!activeChip || !allowed.includes(activeChip.dataset.view)) {
    const firstChip = document.querySelector(`.fpl-subnav .chip[data-view="${allowed[0]}"]`);
    if (firstChip) switchFplView(allowed[0], firstChip);
  }
}
function goToFplView(groupKey, viewKey){
  switchTab('fantasy', document.getElementById('tabbtn-fantasy'));
  const groupBtn = document.querySelector(`.group-tab[data-group="${groupKey}"]`);
  if (groupBtn) switchFplGroup(groupKey, groupBtn);
  const chipBtn = document.querySelector(`.fpl-subnav .chip[data-view="${viewKey}"]`);
  if (chipBtn) switchFplView(viewKey, chipBtn);
  window.scrollTo({top:0, behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth'});
}
function goToPlaybook(){
  switchTab('playbook', document.getElementById('tabbtn-playbook'));
  window.scrollTo({top:0, behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth'});
}
function switchFplView(view, btn){
  document.querySelectorAll('.fpl-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.fpl-subnav .chip').forEach(c => c.classList.remove('active'));
  document.getElementById('fplView-' + view).classList.add('active');
  btn.classList.add('active');
  btn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  document.getElementById('fantasyHeading').textContent = T[currentLang].viewTitles[view];
  document.getElementById('fantasyHeadingTag').textContent = VIEW_TAGS[view];
}

/* ---------- live FPL data ---------- */
const FPL_BASE = 'https://fantasy.premierleague.com/api/';
const WORKER_PROXY = 'https://fpl-proxy.fantasytacticsapp.workers.dev/';
const PROXIES = [
  u => WORKER_PROXY + '?url=' + encodeURIComponent(u),
  u => u,
  u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
  u => 'https://api.codetabs.com/v1/proxy/?quest=' + encodeURIComponent(u)
];
const PROXY_LABELS = ['worker', 'direct', 'allorigins', 'codetabs'];
let lastDataSource = null;
async function fetchJSON(url){
  let lastErr;
  for (let i = 0; i < PROXIES.length; i++){
    try{
      const res = await fetch(PROXIES[i](url), { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      lastDataSource = PROXY_LABELS[i];
      return data;
    } catch(e){ lastErr = e; }
  }
  throw lastErr || new Error('fetch failed');
}

function fdrColor(d){ if(d<=2) return 'var(--emerald)'; if(d===3) return 'var(--gold)'; return 'var(--red)'; }

/* current-season home shirt color per club (FPL short_name -> hex) */
const TEAM_COLORS = {
  ARS:'#EF0107', AVL:'#670E36', BOU:'#DA291C', BRE:'#E30613', BHA:'#0057B8',
  BUR:'#6C1D45', CHE:'#034694', CRY:'#1B458F', EVE:'#003399', FUL:'#FFFFFF',
  IPS:'#0044A9', LEE:'#FFFFFF', LEI:'#003090', LIV:'#C8102E', LUT:'#F78F1E',
  MCI:'#6CABDD', MUN:'#DA291C', NEW:'#241F20', NFO:'#DD0000', SOU:'#D71920',
  SUN:'#EB172B', TOT:'#FFFFFF', WHU:'#7A263A', WOL:'#FDB913'
};
function getTeamColor(shortName){ return TEAM_COLORS[shortName] || '#9FB3AA'; }
function jerseyIcon(color){
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:17px;height:17px;border-radius:5px;background:${color}26;border:1px solid ${color}55;margin-inline-end:5px;vertical-align:-4px;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3L3 7l3 3v11h12V10l3-3-4-4q-2.5 3-5.5 0z"/></svg></span>`;
}
function priceChangeBadge(p){
  const change = p.cost_change_event || 0;
  if (change > 0) return `<span class="price-up mono">▲${(change/10).toFixed(1)}</span>`;
  if (change < 0) return `<span class="price-down mono">▼${Math.abs(change/10).toFixed(1)}</span>`;
  return '';
}
function computeScore(p){
  const form = parseFloat(p.form) || 0;
  const ppg = parseFloat(p.points_per_game) || 0;
  const own = parseFloat(p.selected_by_percent) || 0;
  const price = (p.now_cost || 0) / 10;
  return form*6 + ppg*4 + own*0.3 + price*2;
}

function renderNextFixtures(teamId, allFixtures, teamsById){
  const upcoming = allFixtures.filter(fx => (fx.team_h === teamId || fx.team_a === teamId) && !fx.finished)
    .sort((a,b) => new Date(a.kickoff_time || 0) - new Date(b.kickoff_time || 0))
    .slice(0, 5);
  return upcoming.map(fx => {
    const isHome = fx.team_h === teamId;
    const opp = teamsById[isHome ? fx.team_a : fx.team_h] || {short_name:'?'};
    const diff = isHome ? fx.team_h_difficulty : fx.team_a_difficulty;
    const c = fdrColor(diff);
    return `<span class="fx-chip mono" style="background:${c}22;color:${c};border-color:${c}55">${opp.short_name} ${isHome?'(H)':'(A)'}</span>`;
  }).join('');
}

function renderPlayerDetail(p, teamsById, allFixtures, lang){
  const t = T[lang];
  const stats = [
    {label:t.statPrice, val:'£' + (p.now_cost/10).toFixed(1) + 'm' + priceChangeBadge(p)},
    {label:t.statGoals, val:p.goals_scored||0},
    {label:t.statAssists, val:p.assists||0},
    {label:t.statBonus, val:p.bonus||0},
    {label:t.statXG, val:parseFloat(p.expected_goals||0).toFixed(1)},
    {label:t.statXA, val:parseFloat(p.expected_assists||0).toFixed(1)},
    {label:t.statMinutes, val:p.minutes||0}
  ];
  if (p.element_type <= 3) stats.push({label:t.statCS, val:p.clean_sheets||0});
  const statsHtml = stats.map(s => `<div class="detail-stat"><b class="mono">${s.val}</b><span>${s.label}</span></div>`).join('');
  const ictHtml = `<span class="ict-chip mono">${t.influence} <b>${parseFloat(p.influence||0).toFixed(0)}</b></span><span class="ict-chip mono">${t.creativity} <b>${parseFloat(p.creativity||0).toFixed(0)}</b></span><span class="ict-chip mono">${t.threat} <b>${parseFloat(p.threat||0).toFixed(0)}</b></span>`;
  const cardsHtml = (p.yellow_cards || p.red_cards) ? `<div class="detail-cards mono">🟨 ${p.yellow_cards||0} 🟥 ${p.red_cards||0}</div>` : '';
  const fixturesHtml = allFixtures && allFixtures.length ? renderNextFixtures(p.team, allFixtures, teamsById) : '';
  const isFav = favoriteIds.has(p.id);
  const isCmp = compareIds.includes(p.id);
  const isSqd = squadIds.includes(p.id);
  const actionsHtml = `<div class="player-actions">
    <button class="action-btn${isFav?' active':''}" onclick="toggleFavorite(${p.id}, this)">⭐ ${t.favBtn}</button>
    <button class="action-btn${isCmp?' active':''}" onclick="toggleCompare(${p.id}, this)">⚖️ ${t.cmpBtn}</button>
    <button class="action-btn${isSqd?' active':''}" onclick="toggleSquad(${p.id}, this)">${isSqd?'✓':'➕'} ${t.sqdBtn}</button>
  </div>`;
  return `<div class="detail-stats">${statsHtml}</div><div class="detail-ict">${ictHtml}</div>${cardsHtml}${fixturesHtml ? `<div class="detail-fixtures-label">${t.nextFixtures}</div><div class="detail-fixtures">${fixturesHtml}</div>` : ''}${actionsHtml}`;
}

function lbRow(rankHtml, name, meta, statValue, statLabel, barPct, detailHtml){
  const delay = Math.min((parseInt(rankHtml)||1) * 35, 350);
  return `<div class="lb-item" style="animation-delay:${delay}ms">
    <span class="lb-accent"></span>
    <div class="lb-row" tabindex="0" role="button" aria-expanded="false" onclick="toggleLbExpand(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleLbExpand(this);}">
      <span class="lb-rank">${rankHtml}</span>
      <div class="lb-info">
        <div class="lb-name mono">${name}</div>
        <div class="lb-meta mono">${meta}</div>
        ${barPct != null ? `<div class="lb-bar-track"><div class="lb-bar-fill" style="width:${Math.max(4,barPct)}%"></div></div>` : ''}
      </div>
      <div class="lb-stat"><b class="mono">${statValue}</b><span>${statLabel}</span></div>
      <span class="lb-chevron-wrap"><svg class="lb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></span>
    </div>
    <div class="expand-panel"><div>${detailHtml}</div></div>
  </div>`;
}
function emptyState(msg){ return `<div class="lb-empty">📭 ${msg}</div>`; }

function renderPickCard(cat, teamsById, fxMap, allFixtures, lang){
  const t = T[lang];
  const p = cat.p;
  const team = teamsById[p.team] || {short_name:'—'};
  const fx = fxMap[p.team];
  const oppTeam = fx ? teamsById[fx.opp] : null;
  const fxText = fx && oppTeam ? (oppTeam.short_name + ' (' + (fx.home ? 'H' : 'A') + ')') : t.noMatch;
  const fdr = fx ? fx.diff : null;
  const own = (parseFloat(p.selected_by_percent) || 0).toFixed(1);
  const meter = Math.max(18, Math.min(97, Math.round(computeScore(p))));
  const rank = lang === 'ar' ? toArabicDigits(cat.rankNum) : cat.rankNum;
  const detailHtml = renderPlayerDetail(p, teamsById, allFixtures, lang);
  return `
  <article class="pick-card pick-card--${cat.cardClass}">
    <span class="pick-rank" aria-hidden="true">${rank}</span>
    <span class="pick-tag pick-tag--${cat.tagClass}">${t.pickTags[cat.key]}</span>
    <h3 class="player-name mono">${(p.web_name || '?').toUpperCase()}</h3>
    <span class="pick-club mono">${jerseyIcon(getTeamColor(team.short_name))}${team.short_name} · ${t.posLabel[p.element_type] || ''}</span>
    <p class="pick-desc">${t.pickDesc[cat.key]}</p>
    <div class="pick-meter" role="img" aria-label="${meter}%"><div class="pick-meter-fill" style="width:${meter}%"></div></div>
    <div class="pick-meter-label"><span>${t.compositeRating}</span><b class="mono" data-countup="${meter}" data-countup-suffix="%">0%</b></div>
    <div class="pick-stats">
      <span class="stat-pill">${t.opponent} <b class="mono">${fxText}</b>${fdr ? `<span class="fdr" style="background:${fdrColor(fdr)}33;color:${fdrColor(fdr)}">${fdr}</span>` : ''}</span>
      <span class="stat-pill">${t.ownership} <b class="mono">${own}%</b></span>
    </div>
    <button class="expand-btn" onclick="toggleExpand(this)" aria-expanded="false">${t.moreDetails}<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
    <div class="expand-panel"><div>${detailHtml}</div></div>
  </article>`;
}

function renderFormList(list, teamsById, allFixtures, lang){
  const t = T[lang];
  if (!list.length) return emptyState(t.emptyForm);
  const maxForm = Math.max(parseFloat(list[0]?.form) || 1, 1);
  return list.map((p,i) => {
    const team = teamsById[p.team] || {short_name:'—'};
    return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||''), parseFloat(p.form).toFixed(1), t.formUnit, (parseFloat(p.form)/maxForm)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
  }).join('');
}
function renderPointsList(list, teamsById, allFixtures, lang){
  const t = T[lang];
  if (!list.length) return emptyState(t.emptyPoints);
  const maxPts = Math.max(list[0]?.total_points || 1, 1);
  return list.map((p,i) => {
    const team = teamsById[p.team] || {short_name:'—'};
    return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||''), p.total_points, t.pointsUnit, (p.total_points/maxPts)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
  }).join('');
}
function renderCleanList(list, teamsById, fxMap, allFixtures, lang){
  const t = T[lang];
  if (!list.length) return emptyState(t.emptyClean);
  return list.map((p,i) => {
    const team = teamsById[p.team] || {short_name:'—'};
    const fx = fxMap[p.team]; const opp = teamsById[fx.opp] || {short_name:'—'};
    return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' vs ' + opp.short_name + ' (' + (fx.home?'H':'A') + ')', fx.diff, t.difficultyUnit, ((5-fx.diff)/4)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
  }).join('');
}
function renderValueList(list, teamsById, allFixtures, lang){
  const t = T[lang];
  if (!list.length) return emptyState(t.emptyValue);
  const maxVal = (list[0].total_points/(list[0].now_cost/10)) || 1;
  return list.map((p,i) => {
    const team = teamsById[p.team] || {short_name:'—'};
    const val = (p.total_points/(p.now_cost/10));
    return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · £' + (p.now_cost/10).toFixed(1) + 'm', val.toFixed(1), t.valueUnit, (val/maxVal)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
  }).join('');
}
function renderInjuryList(list, teamsById, allFixtures, lang){
  const t = T[lang];
  if (!list.length) return emptyState(t.emptyInjury);
  return list.map((p, idx) => {
    const team = teamsById[p.team] || {short_name:'—'};
    const chance = p.chance_of_playing_next_round;
    const dotColor = p.status === 'i' || p.status === 's' ? 'var(--red)' : 'var(--gold)';
    const label = t.statusMap[p.status] || t.statusMap.d;
    const meta = jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||'') + (p.news ? ' — ' + p.news.slice(0,50) : '');
    const detailHtml = renderPlayerDetail(p, teamsById, allFixtures, lang);
    return `<div class="lb-item" style="animation-delay:${Math.min((idx+1)*35,350)}ms">
      <span class="lb-accent" style="background:${dotColor};box-shadow:0 0 10px ${dotColor}77;"></span>
      <div class="lb-row" tabindex="0" role="button" aria-expanded="false" onclick="toggleLbExpand(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleLbExpand(this);}">
        <span class="lb-rank" style="color:${dotColor};background:${dotColor}22;"><span class="lb-dot" style="background:${dotColor}"></span></span>
        <div class="lb-info"><div class="lb-name mono">${(p.web_name||'?').toUpperCase()}</div><div class="lb-meta mono">${meta}</div></div>
        <div class="lb-stat"><b class="mono">${chance!=null ? chance+'%' : '—'}</b><span>${label}</span></div>
        <span class="lb-chevron-wrap"><svg class="lb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></span>
      </div>
      <div class="expand-panel"><div>${detailHtml}</div></div>
    </div>`;
  }).join('');
}

function toggleFavorite(playerId, btnEl){
  if (favoriteIds.has(playerId)) favoriteIds.delete(playerId);
  else favoriteIds.add(playerId);
  saveToStorage(STORAGE_KEYS.favorites, [...favoriteIds]);
  btnEl.classList.toggle('active', favoriteIds.has(playerId));
  if (document.getElementById('fplView-favorites')?.classList.contains('active')) renderFavoritesList();
}
function toggleCompare(playerId, btnEl){
  const idx = compareIds.indexOf(playerId);
  if (idx > -1) { compareIds.splice(idx, 1); }
  else {
    if (compareIds.length >= 3) { showToast(T[currentLang].compareFull); return; }
    compareIds.push(playerId);
  }
  saveToStorage(STORAGE_KEYS.compare, compareIds);
  btnEl.classList.toggle('active', compareIds.includes(playerId));
  if (document.getElementById('fplView-compare')?.classList.contains('active')) renderCompareView();
}
function removeCompare(id){
  const idx = compareIds.indexOf(id);
  if (idx > -1) compareIds.splice(idx, 1);
  saveToStorage(STORAGE_KEYS.compare, compareIds);
  renderCompareView();
}
function toggleSquad(playerId, btnEl){
  const t = T[currentLang];
  const idx = squadIds.indexOf(playerId);
  if (idx > -1) { squadIds.splice(idx, 1); }
  else {
    const p = FPL_STATE?.pool.find(x => x.id === playerId);
    if (!p) return;
    const posMax = {1:2, 2:5, 3:5, 4:3}[p.element_type];
    const posCount = squadIds.filter(id => FPL_STATE.pool.find(x => x.id === id)?.element_type === p.element_type).length;
    const teamCount = squadIds.filter(id => FPL_STATE.pool.find(x => x.id === id)?.team === p.team).length;
    const spent = squadIds.reduce((sum, id) => sum + (FPL_STATE.pool.find(x => x.id === id)?.now_cost || 0), 0);
    if (squadIds.length >= 15) { showToast(t.squadFull); return; }
    if (posCount >= posMax) { showToast(t.squadPosFull); return; }
    if (teamCount >= 3) { showToast(t.squadTeamFull); return; }
    if (spent + p.now_cost > 1000) { showToast(t.squadBudgetExceeded); return; }
    squadIds.push(playerId);
  }
  saveToStorage(STORAGE_KEYS.squad, squadIds);
  btnEl.classList.toggle('active', squadIds.includes(playerId));
  btnEl.textContent = (squadIds.includes(playerId) ? '✓ ' : '➕ ') + t.sqdBtn;
  if (document.getElementById('fplView-squad')?.classList.contains('active')) renderSquadView();
  if (squadIds.length === 15) triggerSquadCelebration();
}

function triggerSquadCelebration(){
  showToast(T[currentLang].squadComplete);
  if (PREFERS_REDUCED_MOTION) return;
  const colors = ['var(--gold)','var(--teal)','var(--emerald)','var(--red)'];
  const box = document.createElement('div');
  box.className = 'confetti-container';
  for (let i = 0; i < 26; i++){
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random()*100) + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = (Math.random()*0.3) + 's';
    piece.style.animationDuration = (1.7 + Math.random()*0.9) + 's';
    box.appendChild(piece);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3200);
}

function formatCount(n){ if (!n) return '0'; if (n >= 1000000) return (n/1000000).toFixed(1)+'M'; if (n >= 1000) return (n/1000).toFixed(0)+'K'; return String(n); }

function getEasiestFixtureTeam(teamsById, allFixtures){
  const teamIds = Object.keys(teamsById).map(Number);
  const rows = teamIds.map(tid => {
    const upcoming = allFixtures.filter(fx => (fx.team_h===tid || fx.team_a===tid) && !fx.finished)
      .sort((a,b) => new Date(a.kickoff_time||0) - new Date(b.kickoff_time||0)).slice(0,5);
    const avg = upcoming.length ? upcoming.reduce((s,fx) => s + (fx.team_h===tid ? fx.team_h_difficulty : fx.team_a_difficulty), 0) / upcoming.length : 99;
    return {team: teamsById[tid], avg, hasFixtures: upcoming.length > 0};
  }).filter(r => r.hasFixtures).sort((a,b) => a.avg - b.avg);
  return rows[0] || null;
}

function renderHomeScreen(){
  const container = document.getElementById('homeContent');
  const t = T[currentLang];
  if (!FPL_STATE) { container.innerHTML = emptyState(t.gwConnecting); return; }

  const top = FPL_STATE.categories.find(c => c.key === 'top');
  const topPick = top ? top.p : null;
  let captainCardHtml = '';
  if (topPick) {
    const team = FPL_STATE.teamsById[topPick.team] || {short_name:'—'};
    const meter = Math.max(18, Math.min(97, Math.round(computeScore(topPick))));
    captainCardHtml = `<div class="home-card home-card--captain" onclick="goToFplView('prep','captain')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToFplView('prep','captain');}">
      <div class="home-card-label">👑 ${t.homeCaptainLabel}</div>
      <div class="home-card-main">${jerseyIcon(getTeamColor(team.short_name))}<b>${(topPick.web_name||'?').toUpperCase()}</b></div>
      <div class="home-card-sub">${team.short_name} · ${t.compositeRating} <b class="mono" style="color:var(--gold);">${meter}%</b></div>
    </div>`;
  }

  const squadPlayers = squadIds.map(id => FPL_STATE.pool.find(p => p.id === id)).filter(Boolean);
  const spent = squadPlayers.reduce((s,p) => s + (p.now_cost||0), 0);
  const squadCardHtml = `<div class="home-card home-card--squad" onclick="goToFplView('mytools','squad')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToFplView('mytools','squad');}">
    <div class="home-card-label">🧢 ${t.homeSquadLabel}</div>
    <div class="home-card-main"><b>${squadPlayers.length}/15</b></div>
    <div class="home-card-sub">${squadPlayers.length ? (t.squadSpent + ' £' + (spent/10).toFixed(1) + 'm') : t.homeSquadEmpty}</div>
  </div>`;

  const topForm = FPL_STATE.formTop[0];
  const formHtml = topForm ? (() => {
    const team = FPL_STATE.teamsById[topForm.team] || {short_name:'—'};
    return `<div class="home-mini-card" onclick="goToFplView('rankings','form')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToFplView('rankings','form');}">
      <span class="home-mini-icon">🔥</span>
      <div class="home-mini-body"><div class="home-mini-title mono">${(topForm.web_name||'?').toUpperCase()}</div><div class="home-mini-sub">${t.homeTopFormLabel} · ${team.short_name}</div></div>
    </div>`;
  })() : '';

  const topValue = FPL_STATE.valuePool[0];
  const valueHtml = topValue ? (() => {
    const team = FPL_STATE.teamsById[topValue.team] || {short_name:'—'};
    return `<div class="home-mini-card" onclick="goToFplView('rankings','value')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToFplView('rankings','value');}">
      <span class="home-mini-icon">💰</span>
      <div class="home-mini-body"><div class="home-mini-title mono">${(topValue.web_name||'?').toUpperCase()}</div><div class="home-mini-sub">${t.homeBestValueLabel} · ${team.short_name}</div></div>
    </div>`;
  })() : '';

  const topInjury = FPL_STATE.injuryPool[0];
  const injuryHtml = topInjury ? (() => {
    const team = FPL_STATE.teamsById[topInjury.team] || {short_name:'—'};
    return `<div class="home-mini-card home-mini-card--alert" onclick="goToFplView('prep','injury')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToFplView('prep','injury');}">
      <span class="home-mini-icon">🚑</span>
      <div class="home-mini-body"><div class="home-mini-title mono">${(topInjury.web_name||'?').toUpperCase()}</div><div class="home-mini-sub">${t.homeInjuryLabel} · ${team.short_name}</div></div>
    </div>`;
  })() : '';

  const easiest = getEasiestFixtureTeam(FPL_STATE.teamsById, FPL_STATE.allFixtures);
  const fixtureHtml = easiest ? `<div class="home-mini-card" onclick="goToFplView('prep','fixtures')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToFplView('prep','fixtures');}">
    <span class="home-mini-icon">📅</span>
    <div class="home-mini-body"><div class="home-mini-title mono">${easiest.team.short_name}</div><div class="home-mini-sub">${t.homeEasyFixtureLabel}</div></div>
  </div>` : '';

  const playbookCardHtml = `<div class="home-card home-card--playbook" onclick="goToPlaybook()" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){goToPlaybook();}">
    <div><div class="home-card-label">⚽ ${t.homePlaybookLabel}</div><div class="home-card-sub">${t.homePlaybookSub}</div></div>
    <span class="new-badge">🆕 v6.0.0</span>
  </div>`;

  container.innerHTML = `
    ${(captainCardHtml || squadCardHtml) ? `<div class="home-grid">${captainCardHtml}${squadCardHtml}</div>` : ''}
    <div class="home-section-label">${t.homeHighlights}</div>
    <div class="home-mini-grid">${formHtml}${valueHtml}${injuryHtml}${fixtureHtml}</div>
    ${playbookCardHtml}
  `;
}

function renderTransfersList(pool, teamsById, allFixtures, lang){
  const t = T[lang];
  const buildGroup = (title, field) => {
    const list = pool.slice().sort((a,b) => (b[field]||0) - (a[field]||0)).slice(0,5);
    if (!list.length || !list[0][field]) return '';
    const max = list[0][field] || 1;
    const rows = list.map((p,i) => {
      const team = teamsById[p.team] || {short_name:'—'};
      return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||''), formatCount(p[field]), t.transfersUnit, (p[field]/max)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
    }).join('');
    return `<div class="group-heading"><h4>${title}</h4></div><div class="leaderboard group-block">${rows}</div>`;
  };
  const html = buildGroup(t.transfersInTitle, 'transfers_in_event') + buildGroup(t.transfersOutTitle, 'transfers_out_event');
  return html || emptyState(t.emptyPoints);
}

function renderFixtureTickerTable(teamsById, allFixtures, lang){
  const t = T[lang];
  const teamIds = Object.keys(teamsById).map(Number);
  const rows = teamIds.map(tid => {
    const upcoming = allFixtures.filter(fx => (fx.team_h===tid || fx.team_a===tid) && !fx.finished)
      .sort((a,b) => new Date(a.kickoff_time||0) - new Date(b.kickoff_time||0)).slice(0,5);
    const avg = upcoming.length ? upcoming.reduce((s,fx) => s + (fx.team_h===tid ? fx.team_h_difficulty : fx.team_a_difficulty), 0) / upcoming.length : 99;
    return {team: teamsById[tid], upcoming, avg, tid};
  }).filter(r => r.upcoming.length).sort((a,b) => a.avg - b.avg);
  if (!rows.length) return emptyState(t.emptyPoints);
  return rows.map(r => {
    const chips = r.upcoming.map(fx => {
      const isHome = fx.team_h === r.tid;
      const opp = teamsById[isHome ? fx.team_a : fx.team_h] || {short_name:'?'};
      const diff = isHome ? fx.team_h_difficulty : fx.team_a_difficulty;
      const c = fdrColor(diff);
      return `<span class="fdr-cell" style="background:${c}22;color:${c};border-color:${c}55">${opp.short_name}</span>`;
    }).join('');
    return `<div class="ticker-row"><span class="ticker-team">${jerseyIcon(getTeamColor(r.team.short_name))}<b class="mono">${r.team.short_name}</b></span><div class="ticker-chips">${chips}</div><span class="ticker-avg mono">${r.avg.toFixed(1)}</span></div>`;
  }).join('');
}

function renderTeamSelector(teamsById){
  const container = document.getElementById('teamSelector');
  if (!container) return;
  container.innerHTML = Object.values(teamsById).slice().sort((a,b) => a.short_name.localeCompare(b.short_name)).map(team =>
    `<button class="team-chip${selectedTeamId===team.id?' active':''}" onclick="selectTeamHub(${team.id})">${jerseyIcon(getTeamColor(team.short_name))}${team.short_name}</button>`
  ).join('');
}
function selectTeamHub(teamId){
  selectedTeamId = teamId;
  document.querySelectorAll('.team-chip').forEach(c => c.classList.remove('active'));
  if (FPL_STATE) renderTeamSelector(FPL_STATE.teamsById);
  renderTeamHubContent();
}
function renderTeamHubContent(){
  const container = document.getElementById('teamHubContent');
  const t = T[currentLang];
  if (!selectedTeamId || !FPL_STATE) { container.innerHTML = emptyState(t.selectTeamPrompt); return; }
  const team = FPL_STATE.teamsById[selectedTeamId];
  const squad = FPL_STATE.pool.filter(p => p.team === selectedTeamId).sort((a,b) => computeScore(b)-computeScore(a));
  const fixturesHtml = renderNextFixtures(selectedTeamId, FPL_STATE.allFixtures, FPL_STATE.teamsById);
  const squadHtml = squad.map((p,i) => lbRow(i+1, (p.web_name||'?').toUpperCase(), t.posLabel[p.element_type]||'', p.total_points, t.pointsUnit, null, renderPlayerDetail(p, FPL_STATE.teamsById, FPL_STATE.allFixtures, currentLang))).join('');
  container.innerHTML = `<div class="team-hub-header"><h3>${jerseyIcon(getTeamColor(team.short_name))}${team.name}</h3></div>${fixturesHtml ? `<div class="detail-fixtures-label">${t.nextFixtures}</div><div class="detail-fixtures" style="margin-bottom:18px;">${fixturesHtml}</div>` : ''}<div class="leaderboard">${squadHtml}</div>`;
}

function renderCompareView(){
  const container = document.getElementById('compareContent');
  const t = T[currentLang];
  if (!FPL_STATE || compareIds.length === 0) { container.innerHTML = emptyState(t.compareEmpty); return; }
  if (compareIds.length === 1) { container.innerHTML = emptyState(t.compareNeedOneMore); return; }
  const players = compareIds.map(id => FPL_STATE.pool.find(p => p.id === id)).filter(Boolean);
  const rows = [
    {label:t.statPrice, get:p=>'£'+(p.now_cost/10).toFixed(1)+'m'},
    {label:t.pointsUnit, get:p=>p.total_points, num:p=>p.total_points},
    {label:t.formUnit, get:p=>parseFloat(p.form).toFixed(1), num:p=>parseFloat(p.form)||0},
    {label:t.statGoals, get:p=>p.goals_scored||0, num:p=>p.goals_scored||0},
    {label:t.statAssists, get:p=>p.assists||0, num:p=>p.assists||0},
    {label:t.statXG, get:p=>parseFloat(p.expected_goals||0).toFixed(1), num:p=>parseFloat(p.expected_goals)||0},
    {label:t.statXA, get:p=>parseFloat(p.expected_assists||0).toFixed(1), num:p=>parseFloat(p.expected_assists)||0},
    {label:t.statBonus, get:p=>p.bonus||0, num:p=>p.bonus||0},
    {label:t.statMinutes, get:p=>p.minutes||0, num:p=>p.minutes||0},
    {label:t.ownership, get:p=>(parseFloat(p.selected_by_percent)||0).toFixed(1)+'%'}
  ];
  const headerCells = players.map(p => {
    const team = FPL_STATE.teamsById[p.team] || {short_name:'—'};
    return `<div class="cmp-col-head"><button class="cmp-remove" onclick="removeCompare(${p.id})">✕</button>${jerseyIcon(getTeamColor(team.short_name))}<b class="mono">${(p.web_name||'?').toUpperCase()}</b></div>`;
  }).join('');
  const winCounts = players.map(() => 0);
  const bodyRows = rows.map(r => {
    let bestIdx = -1;
    let maxVal = 0;
    if (r.num) {
      const vals = players.map(r.num);
      maxVal = Math.max(...vals);
      if (maxVal > 0) { bestIdx = vals.indexOf(maxVal); winCounts[bestIdx]++; }
    }
    const cells = players.map((p,i) => {
      const isBest = i === bestIdx;
      const barHtml = r.num ? `<div class="cmp-mini-bar"><div class="cmp-mini-bar-fill" style="width:${maxVal>0?Math.max(4,(r.num(p)/maxVal)*100):4}%"></div></div>` : '';
      return `<span class="cmp-cell mono${isBest?' cmp-best':''}">${r.get(p)}${barHtml}</span>`;
    }).join('');
    return `<div class="cmp-row"><span class="cmp-row-label">${r.label}</span>${cells}</div>`;
  }).join('');
  let verdictHtml = '';
  const totalCategories = rows.filter(r => r.num).length;
  const maxWins = Math.max(...winCounts);
  if (maxWins > 0) {
    const leaderIdx = winCounts.indexOf(maxWins);
    const leader = players[leaderIdx];
    verdictHtml = `<p class="cmp-verdict">🏆 <b class="mono">${(leader.web_name||'?').toUpperCase()}</b> ${t.compareLeads} ${maxWins}/${totalCategories} ${t.compareCategories}</p>`;
  }
  const swipeHint = players.length >= 3 ? `<p class="cmp-swipe-hint">${t.compareSwipeHint}</p>` : '';
  container.innerHTML = verdictHtml + `<div class="cmp-table" style="--cols:${players.length}"><div class="cmp-header"><span class="cmp-label-spacer"></span>${headerCells}</div>${bodyRows}</div>` + swipeHint;
}

function renderFavoritesList(){
  const container = document.getElementById('favoritesList');
  const t = T[currentLang];
  if (!favoriteIds.size || !FPL_STATE) { container.innerHTML = emptyState(t.favEmpty); return; }
  const players = FPL_STATE.pool.filter(p => favoriteIds.has(p.id));
  const summaryHtml = `<div class="fav-summary">${t.favCount}: <b class="mono">${players.length}</b></div>`;
  const groupsHtml = [1,2,3,4].map(posId => {
    const group = players.filter(p => p.element_type === posId).sort((a,b) => computeScore(b)-computeScore(a));
    if (!group.length) return '';
    const rows = group.map((p,i) => {
      const team = FPL_STATE.teamsById[p.team] || {short_name:'—'};
      return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name, p.total_points, t.pointsUnit, null, renderPlayerDetail(p, FPL_STATE.teamsById, FPL_STATE.allFixtures, currentLang));
    }).join('');
    return `<div class="group-heading"><h4>${t.posLabel[posId]}</h4><span class="mono">${group.length}</span></div><div class="leaderboard group-block">${rows}</div>`;
  }).join('');
  container.innerHTML = summaryHtml + groupsHtml;
}

let squadViewMode = 'pitch';
function switchSquadViewMode(mode){
  squadViewMode = mode;
  renderSquadView();
}

function pickStartingXI(squadPlayers){
  const byPos = (type) => squadPlayers.filter(p => p.element_type === type).sort((a,b) => computeScore(b)-computeScore(a));
  const gks = byPos(1), defs = byPos(2), mids = byPos(3), fwds = byPos(4);
  const startGK = gks.slice(0,1);
  let startDEF = defs.slice(0, Math.min(3, defs.length));
  let startMID = mids.slice(0, Math.min(2, mids.length));
  let startFWD = fwds.slice(0, Math.min(1, fwds.length));
  const remaining = [
    ...defs.slice(startDEF.length).map(p => ({p, type:2})),
    ...mids.slice(startMID.length).map(p => ({p, type:3})),
    ...fwds.slice(startFWD.length).map(p => ({p, type:4}))
  ].sort((a,b) => computeScore(b.p) - computeScore(a.p));
  let totalOutfield = startDEF.length + startMID.length + startFWD.length;
  for (const item of remaining){
    if (totalOutfield >= 10) break;
    if (item.type === 2 && startDEF.length < 5) { startDEF.push(item.p); totalOutfield++; }
    else if (item.type === 3 && startMID.length < 5) { startMID.push(item.p); totalOutfield++; }
    else if (item.type === 4 && startFWD.length < 3) { startFWD.push(item.p); totalOutfield++; }
  }
  const startingIds = new Set([...startGK, ...startDEF, ...startMID, ...startFWD].map(p => p.id));
  const bench = squadPlayers.filter(p => !startingIds.has(p.id))
    .sort((a,b) => { const ag=a.element_type===1, bg=b.element_type===1; if (ag!==bg) return ag?-1:1; return computeScore(b)-computeScore(a); });
  return {gk:startGK, def:startDEF, mid:startMID, fwd:startFWD, bench};
}

function pitchSlot(p, teamsById, fxMap, badge, clickable){
  const team = teamsById[p.team] || {short_name:'—'};
  const fx = fxMap[p.team];
  const oppTeam = fx ? teamsById[fx.opp] : null;
  const fxText = fx && oppTeam ? (oppTeam.short_name + ' (' + (fx.home?'H':'A') + ')') : '—';
  const color = getTeamColor(team.short_name);
  const interactive = clickable ? `onclick="cyclePlayerCaptaincy(${p.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();cyclePlayerCaptaincy(${p.id});}" role="button" tabindex="0" style="background:${color}26;border-color:${color}77;cursor:pointer;"` : `style="background:${color}26;border-color:${color}77;"`;
  return `<div class="pitch-slot">
    <div class="pitch-jersey-badge" ${interactive}>
      ${badge || ''}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3L3 7l3 3v11h12V10l3-3-4-4q-2.5 3-5.5 0z"/></svg>
    </div>
    <div class="pitch-name mono">${(p.web_name||'?').toUpperCase()}</div>
    <div class="pitch-fixture mono">${fxText}</div>
  </div>`;
}
function cyclePlayerCaptaincy(playerId){
  if (manualCaptainId === playerId) {
    manualCaptainId = null;
    manualViceId = playerId;
  } else if (manualViceId === playerId) {
    manualViceId = null;
  } else {
    manualCaptainId = playerId;
  }
  saveToStorage(STORAGE_KEYS.captain, manualCaptainId);
  saveToStorage(STORAGE_KEYS.vice, manualViceId);
  renderSquadView();
}
function pitchEmptySlot(label){
  return `<div class="pitch-slot"><div class="pitch-jersey-badge pitch-empty-slot"><span style="font-size:16px;color:var(--chalk-dim);">+</span></div><div class="pitch-name mono" style="opacity:.4;">${label}</div></div>`;
}

function renderSquadPitch(squadPlayers, teamsById, fxMap, lang){
  const t = T[lang];
  if (!squadPlayers.length) return `<div class="squad-pitch" style="padding:30px 10px;"><p class="lb-empty" style="border:none;background:transparent;color:#d8e6df;">📭 ${t.squadSlotEmpty}</p></div>`;
  const xi = pickStartingXI(squadPlayers);
  const allStarters = [...xi.gk, ...xi.def, ...xi.mid, ...xi.fwd];
  const startingIdSet = new Set(allStarters.map(p => p.id));
  const sortedStarters = allStarters.slice().sort((a,b) => computeScore(b)-computeScore(a));
  let captainId = (manualCaptainId && startingIdSet.has(manualCaptainId)) ? manualCaptainId : null;
  let viceId = (manualViceId && startingIdSet.has(manualViceId) && manualViceId !== captainId) ? manualViceId : null;
  if (!captainId) captainId = sortedStarters.find(p => p.id !== viceId)?.id;
  if (!viceId) viceId = sortedStarters.find(p => p.id !== captainId)?.id;
  const badgeFor = (p) => p.id === captainId ? '<span class="captain-badge">C</span>' : (p.id === viceId ? '<span class="vice-badge">V</span>' : '');

  const gkRow = xi.gk.length ? xi.gk.map(p => pitchSlot(p, teamsById, fxMap, badgeFor(p), true)).join('') : pitchEmptySlot('GK');
  const defRow = xi.def.map(p => pitchSlot(p, teamsById, fxMap, badgeFor(p), true)).join('');
  const midRow = xi.mid.map(p => pitchSlot(p, teamsById, fxMap, badgeFor(p), true)).join('');
  const fwdRow = xi.fwd.map(p => pitchSlot(p, teamsById, fxMap, badgeFor(p), true)).join('');
  const benchRow = xi.bench.length ? xi.bench.map(p => pitchSlot(p, teamsById, fxMap, '', false)).join('') : `<p class="lb-empty" style="border:none;">${t.squadSlotEmpty}</p>`;

  return `
  <p class="hint-text" style="text-align:center;">${t.captaincyHint}</p>
  <div class="squad-pitch">
    <svg class="pitch-lines-bg" viewBox="0 0 300 380" preserveAspectRatio="none" aria-hidden="true">
      <rect x="4" y="4" width="292" height="372" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2" rx="10"/>
      <path d="M95 4 L95 62 L205 62 L205 4" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
      <path d="M30 376 Q150 300 270 376" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
    </svg>
    <div class="pitch-row">${gkRow}</div>
    <div class="pitch-row">${defRow}</div>
    <div class="pitch-row">${midRow}</div>
    <div class="pitch-row">${fwdRow}</div>
  </div>
  <div class="squad-bench">
    <div class="squad-bench-label">${t.benchLabel}</div>
    <div class="pitch-row">${benchRow}</div>
  </div>`;
}

function renderSquadView(){
  const container = document.getElementById('squadContent');
  const t = T[currentLang];
  if (!FPL_STATE) { container.innerHTML = emptyState(t.gwConnecting); return; }
  const players = squadIds.map(id => FPL_STATE.pool.find(p => p.id === id)).filter(Boolean);
  const spent = players.reduce((s,p) => s + (p.now_cost||0), 0);
  const remaining = 1000 - spent;

  const budgetHtml = `<div class="squad-budget"><span>${t.squadSpent} <b class="mono">£${(spent/10).toFixed(1)}m</b></span><span>${t.squadRemaining} <b class="mono" style="color:${remaining<0?'var(--red)':'var(--emerald)'}">£${(remaining/10).toFixed(1)}m</b></span><span>${t.squadCount} <b class="mono">${players.length}/15</b></span></div>`;
  const tabsHtml = `<div class="squad-view-tabs">
    <button class="squad-view-tab${squadViewMode==='pitch'?' active':''}" onclick="switchSquadViewMode('pitch')">⚽ ${t.pitchView}</button>
    <button class="squad-view-tab${squadViewMode==='list'?' active':''}" onclick="switchSquadViewMode('list')">📋 ${t.listView}</button>
  </div>`;

  let bodyHtml;
  if (squadViewMode === 'pitch') {
    bodyHtml = renderSquadPitch(players, FPL_STATE.teamsById, FPL_STATE.fxMap, currentLang);
  } else {
    const posMax = {1:2, 2:5, 3:5, 4:3};
    bodyHtml = [1,2,3,4].map(posId => {
      const group = players.filter(p => p.element_type === posId);
      const rows = group.map((p,i) => {
        const team = FPL_STATE.teamsById[p.team] || {short_name:'—'};
        return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · £' + (p.now_cost/10).toFixed(1) + 'm', p.total_points, t.pointsUnit, null, renderPlayerDetail(p, FPL_STATE.teamsById, FPL_STATE.allFixtures, currentLang));
      }).join('');
      return `<div class="group-heading"><h4>${t.posLabel[posId]}</h4><span class="mono">${group.length}/${posMax[posId]}</span></div><div class="leaderboard group-block">${rows || emptyState(t.squadSlotEmpty)}</div>`;
    }).join('');
  }

  container.innerHTML = budgetHtml + tabsHtml + bodyHtml;
}

function renderByTeamList(pool, teamsById, allFixtures, lang){
  const t = T[lang];
  const bestPerTeam = {};
  pool.forEach(p => {
    const cur = bestPerTeam[p.team];
    if (!cur || computeScore(p) > computeScore(cur)) bestPerTeam[p.team] = p;
  });
  const rows = Object.values(bestPerTeam).sort((a,b) => computeScore(b) - computeScore(a));
  if (!rows.length) return emptyState(t.emptyPoints);
  const maxScore = computeScore(rows[0]) || 1;
  return rows.map((p,i) => {
    const team = teamsById[p.team] || {short_name:'—'};
    return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||''), p.total_points, t.pointsUnit, (computeScore(p)/maxScore)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
  }).join('');
}

function renderByPositionList(pool, teamsById, allFixtures, lang){
  const t = T[lang];
  const groups = [1,2,3,4].map(posId => pool.filter(p => p.element_type === posId).sort((a,b) => computeScore(b)-computeScore(a)).slice(0,5));
  if (!groups.some(g => g.length)) return emptyState(t.emptyPoints);
  return [1,2,3,4].map((posId, idx) => {
    const players = groups[idx];
    if (!players.length) return '';
    const maxScore = computeScore(players[0]) || 1;
    const rowsHtml = players.map((p,i) => {
      const team = teamsById[p.team] || {short_name:'—'};
      return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name, p.total_points, t.pointsUnit, (computeScore(p)/maxScore)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
    }).join('');
    return `<div class="group-heading"><h4>${t.posLabel[posId]}</h4></div><div class="leaderboard group-block">${rowsHtml}</div>`;
  }).join('');
}

const PRICE_TIERS = [
  {min:0, max:55, key:'budget'},
  {min:55, max:75, key:'mid'},
  {min:75, max:100, key:'premium'},
  {min:100, max:999, key:'elite'}
];
function renderByPriceList(pool, teamsById, allFixtures, lang){
  const t = T[lang];
  const nonEmpty = PRICE_TIERS.map(tier => pool.filter(p => (p.now_cost||0) > tier.min && (p.now_cost||0) <= tier.max).sort((a,b) => computeScore(b)-computeScore(a)).slice(0,5));
  if (!nonEmpty.some(g => g.length)) return emptyState(t.emptyPoints);
  return PRICE_TIERS.map((tier, idx) => {
    const players = nonEmpty[idx];
    if (!players.length) return '';
    const maxScore = computeScore(players[0]) || 1;
    const rangeLabel = '£' + (tier.min/10).toFixed(1) + (tier.max >= 999 ? 'm+' : '-' + (tier.max/10).toFixed(1) + 'm');
    const rowsHtml = players.map((p,i) => {
      const team = teamsById[p.team] || {short_name:'—'};
      return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||''), p.total_points, t.pointsUnit, (computeScore(p)/maxScore)*100, renderPlayerDetail(p, teamsById, allFixtures, lang));
    }).join('');
    return `<div class="group-heading"><h4>${t.priceTiers[tier.key]}</h4><span class="mono">${rangeLabel}</span></div><div class="leaderboard group-block">${rowsHtml}</div>`;
  }).join('');
}

function handlePlayerSearch(query){
  const t = T[currentLang];
  const container = document.getElementById('searchResults');
  const normalViews = document.getElementById('fplNormalViews');
  const clearBtn = document.getElementById('searchClearBtn');
  const q = query.trim().toLowerCase();

  if (!q) {
    container.style.display = 'none';
    normalViews.style.display = '';
    clearBtn.style.display = 'none';
    const activeChip = document.querySelector('.fpl-subnav .chip.active');
    if (activeChip) {
      document.getElementById('fantasyHeading').textContent = t.viewTitles[activeChip.dataset.view];
      document.getElementById('fantasyHeadingTag').textContent = VIEW_TAGS[activeChip.dataset.view];
    }
    return;
  }

  container.style.display = '';
  normalViews.style.display = 'none';
  clearBtn.style.display = '';
  document.getElementById('fantasyHeading').textContent = t.searchResultsHeading;
  document.getElementById('fantasyHeadingTag').textContent = 'SEARCH';

  if (!FPL_STATE) { container.innerHTML = emptyState(t.gwConnecting); return; }
  const matches = FPL_STATE.pool.filter(p =>
    (p.web_name||'').toLowerCase().includes(q) ||
    (p.first_name||'').toLowerCase().includes(q) ||
    (p.second_name||'').toLowerCase().includes(q)
  ).sort((a,b) => computeScore(b) - computeScore(a)).slice(0, 20);
  if (!matches.length) { container.innerHTML = emptyState(t.searchNoResults); return; }
  container.innerHTML = matches.map((p,i) => {
    const team = FPL_STATE.teamsById[p.team] || {short_name:'—'};
    return lbRow(i+1, (p.web_name||'?').toUpperCase(), jerseyIcon(getTeamColor(team.short_name)) + team.short_name + ' · ' + (t.posLabel[p.element_type]||''), p.total_points, t.pointsUnit, null, renderPlayerDetail(p, FPL_STATE.teamsById, FPL_STATE.allFixtures, currentLang));
  }).join('');
}
function clearSearch(){
  const input = document.getElementById('playerSearchInput');
  input.value = '';
  handlePlayerSearch('');
  input.focus();
}

function renderAll(state, lang){
  renderHomeScreen();
  document.getElementById('pickGrid').innerHTML = state.categories.map(c => renderPickCard(c, state.teamsById, state.fxMap, state.allFixtures, lang)).join('');
  animateCountUps(document.getElementById('pickGrid'));
  document.getElementById('formList').innerHTML = renderFormList(state.formTop, state.teamsById, state.allFixtures, lang);
  document.getElementById('pointsList').innerHTML = renderPointsList(state.pointsTop, state.teamsById, state.allFixtures, lang);
  document.getElementById('cleanList').innerHTML = renderCleanList(state.cleanPool, state.teamsById, state.fxMap, state.allFixtures, lang);
  document.getElementById('valueList').innerHTML = renderValueList(state.valuePool, state.teamsById, state.allFixtures, lang);
  document.getElementById('injuryList').innerHTML = renderInjuryList(state.injuryPool, state.teamsById, state.allFixtures, lang);
  document.getElementById('byTeamList').innerHTML = renderByTeamList(state.pool, state.teamsById, state.allFixtures, lang);
  document.getElementById('byPositionList').innerHTML = renderByPositionList(state.pool, state.teamsById, state.allFixtures, lang);
  document.getElementById('byPriceList').innerHTML = renderByPriceList(state.pool, state.teamsById, state.allFixtures, lang);
  document.getElementById('transfersList').innerHTML = renderTransfersList(state.pool, state.teamsById, state.allFixtures, lang);
  document.getElementById('fixtureTickerList').innerHTML = renderFixtureTickerTable(state.teamsById, state.allFixtures, lang);
  renderTeamSelector(state.teamsById);
  renderTeamHubContent();
  renderCompareView();
  renderFavoritesList();
  renderSquadView();
}

function renderErrorEverywhere(lang){
  const t = T[lang];
  const gridErr = `<div class="error-card">${t.errorMsg}<br><button class="retry-btn" onclick="loadFPL()">${t.retryBtn}</button></div>`;
  document.getElementById('pickGrid').innerHTML = gridErr;
  document.getElementById('homeContent').innerHTML = gridErr;
  ['formList','pointsList','cleanList','valueList','injuryList','byTeamList','byPositionList','byPriceList','transfersList','fixtureTickerList'].forEach(id => { document.getElementById(id).innerHTML = gridErr; });
}

async function loadFPL(){
  const refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.classList.add('spinning');
  updateStatusText(currentLang);

  try{
    const data = await fetchJSON(FPL_BASE + 'bootstrap-static/');
    const events = data.events || [];
    let gw = events.find(e => e.is_current) || events.find(e => e.is_next) || events.find(e => !e.finished) || events[events.length - 1] || {id:1};

    let allFixtures = [];
    try{ allFixtures = await fetchJSON(FPL_BASE + 'fixtures/'); } catch(e){ allFixtures = []; }

    const teamsById = {}; (data.teams || []).forEach(t => teamsById[t.id] = t);
    const fxMap = {};
    allFixtures.filter(fx => fx.event === gw.id).forEach(fx => {
      fxMap[fx.team_h] = {opp: fx.team_a, home:true, diff: fx.team_h_difficulty};
      fxMap[fx.team_a] = {opp: fx.team_h, home:false, diff: fx.team_a_difficulty};
    });

    const pool = (data.elements || []).filter(p => p.element_type <= 4 && p.status !== 'u');
    const sorted = pool.slice().sort((a,b) => computeScore(b) - computeScore(a));

    const used = new Set();
    function pickFrom(pred, fallbackPred){
      let found = sorted.find(p => !used.has(p.id) && pred(p));
      if (!found && fallbackPred) found = sorted.find(p => !used.has(p.id) && fallbackPred(p));
      if (!found) found = sorted.find(p => !used.has(p.id));
      used.add(found.id);
      return found;
    }
    const top = pickFrom(p => parseFloat(p.selected_by_percent) >= 15);
    const safe = pickFrom(p => parseFloat(p.selected_by_percent) >= 10, p => parseFloat(p.selected_by_percent) >= 5);
    const diffPick = pickFrom(p => parseFloat(p.selected_by_percent) < 10);
    let budgetPool = sorted.filter(p => !used.has(p.id) && (p.now_cost || 0) <= 70)
      .sort((a,b) => (computeScore(b)/(b.now_cost||1)) - (computeScore(a)/(a.now_cost||1)));
    const budget = budgetPool[0] || sorted.find(p => !used.has(p.id));
    used.add(budget.id);

    const categories = [
      {p: top,      key:'top',    tagClass:'gold',    cardClass:'top',    rankNum:1},
      {p: safe,     key:'safe',   tagClass:'teal',    cardClass:'safe',   rankNum:2},
      {p: diffPick, key:'risk',   tagClass:'red',     cardClass:'risk',   rankNum:3},
      {p: budget,   key:'budget', tagClass:'emerald', cardClass:'budget', rankNum:4}
    ];

    const formTop = pool.slice().sort((a,b) => parseFloat(b.form) - parseFloat(a.form)).slice(0,6);
    const pointsTop = pool.slice().sort((a,b) => b.total_points - a.total_points).slice(0,6);
    const cleanPool = (data.elements||[]).filter(p => p.element_type <= 2 && p.status !== 'u' && fxMap[p.team] && fxMap[p.team].diff <= 3)
      .sort((a,b) => (fxMap[a.team].diff - fxMap[b.team].diff) || (parseFloat(b.selected_by_percent) - parseFloat(a.selected_by_percent)))
      .slice(0,6);
    const valuePool = pool.filter(p => (p.now_cost||0) > 0 && p.total_points > 0)
      .sort((a,b) => (b.total_points/(b.now_cost/10)) - (a.total_points/(a.now_cost/10))).slice(0,6);
    const injuryPool = pool.filter(p => (p.status !== 'a' || (p.chance_of_playing_next_round !== null && p.chance_of_playing_next_round < 100)) && parseFloat(p.selected_by_percent) > 3)
      .sort((a,b) => parseFloat(b.selected_by_percent) - parseFloat(a.selected_by_percent)).slice(0,6);

    FPL_STATE = {categories, formTop, pointsTop, cleanPool, valuePool, injuryPool, teamsById, fxMap, allFixtures, gw, pool};

    // prune any saved squad/favorite/compare IDs that no longer exist in the live pool
    // (e.g. a player who left the league, or a stale ID from an imported transfer code)
    const validIds = new Set(pool.map(p => p.id));
    const prunedSquad = squadIds.filter(id => validIds.has(id));
    const prunedCompare = compareIds.filter(id => validIds.has(id));
    const prunedFavorites = [...favoriteIds].filter(id => validIds.has(id));
    if (prunedSquad.length !== squadIds.length) { squadIds = prunedSquad; saveToStorage(STORAGE_KEYS.squad, squadIds); }
    if (prunedCompare.length !== compareIds.length) { compareIds = prunedCompare; saveToStorage(STORAGE_KEYS.compare, compareIds); }
    if (prunedFavorites.length !== favoriteIds.size) { favoriteIds = new Set(prunedFavorites); saveToStorage(STORAGE_KEYS.favorites, prunedFavorites); }
    if (manualCaptainId && !validIds.has(manualCaptainId)) { manualCaptainId = null; saveToStorage(STORAGE_KEYS.captain, null); }
    if (manualViceId && !validIds.has(manualViceId)) { manualViceId = null; saveToStorage(STORAGE_KEYS.vice, null); }
    renderAll(FPL_STATE, currentLang);

    const t = T[currentLang];
    const gwWord = gw.is_current ? t.gwCurrent : (gw.is_next ? t.gwNext : t.gwGeneric);
    document.getElementById('gwLabel').innerHTML = gwWord + ' <b class="mono">' + gw.id + '</b> ' + t.gwLiveSuffix;
    lastUpdateTime = new Date();
    updateStatusText(currentLang);
    updateSourceBadge();
  } catch(err){
    FPL_STATE = null;
    renderErrorEverywhere(currentLang);
    document.getElementById('gwLabel').textContent = T[currentLang].gwFailed;
    document.getElementById('lastUpdated').textContent = T[currentLang].updateFailed;
  } finally{
    refreshBtn.classList.remove('spinning');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  moveIndicator(document.getElementById('tabbtn-home'));
  document.getElementById('refreshBtn').addEventListener('click', loadFPL);
  document.querySelectorAll('.fpl-subnav .chip').forEach(chip => {
    chip.classList.toggle('group-hidden', chip.dataset.group !== 'prep');
  });
  loadFPL();
});

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      const btn = document.getElementById('backToTop');
      if (btn) btn.classList.toggle('show', window.scrollY > 500);
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});
