
// Data Source
const GAMES_DATA = [["Mortal Kombat 11", 32.5, "🥊 Pelea", 2019, "Pelea"], ["Dragon Quest Heroes I & II", 32.0, "⚔️ RPG", 2017, "RPG"], ["EA Sports FC 24", 31.1, "⚽ Deportes", 2023, "Deportes"], ["The Witcher 3: Wild Hunt - Complete Edition", 31.3, "⚔️ RPG", 2019, "RPG"], ["Batman Arkham Trilogy", 46.0, "💥 Acción", 2023, "Acción"], ["L.A. Noire", 27.5, "🗺️ Aventura", 2017, "Aventura"], ["NBA 2K24", 26.0, "⚽ Deportes", 2023, "Deportes"], ["NBA 2K23", 25.0, "⚽ Deportes", 2022, "Deportes"], ["The Legend of Zelda: Breath of the Wild", 24.1, "🗺️ Aventura", 2017, "Aventura"], ["Resident Evil: Revelations 2", 23.7, "👻 Terror", 2017, "Terror"], ["Tsukihime: A Piece Of Blue Glass Moon", 23.0, "📖 Visual Novel", 2024, "Visual Novel"], ["GTA Trilogy - Definitive Edition", 22.7, "💥 Acción", 2021, "Acción"], ["DOOM (2016)", 22.0, "🔫 Shooter", 2017, "Shooter"], ["Eiyuden Chronicle: Hundred Heroes", 21.7, "⚔️ RPG", 2024, "RPG"], ["Wolfenstein: Youngblood", 20.9, "🔫 Shooter", 2019, "Shooter"], ["South Park: The Fractured But Whole", 20.1, "⚔️ RPG", 2018, "RPG"], ["Metal Gear Solid: Master Collection Vol.1", 19.0, "💥 Acción", 2023, "Acción"], ["MLB The Show 22", 19.9, "⚽ Deportes", 2022, "Deportes"], ["The Legend of Zelda: Tears of the Kingdom", 19.9, "🗺️ Aventura", 2023, "Aventura"], ["Monster Hunter Rise + Sunbreak", 19.8, "⚔️ RPG", 2021, "RPG"], ["Hellblade: Senua's Sacrifice", 18.4, "💥 Acción", 2019, "Acción"], ["SD Gundam Battle Alliance", 18.3, "💥 Acción", 2022, "Acción"], ["Naruto Shippuden: Ultimate Ninja Storm Trilogy", 17.7, "🥊 Pelea", 2018, "Pelea"], ["Super Smash Bros. Ultimate + DLC", 17.0, "🥊 Pelea", 2018, "Pelea"], ["Fire Emblem Engage", 16.6, "♟️ Estrategia", 2023, "Estrategia"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG"], ["Hogwarts Legacy", 14.8, "⚔️ RPG", 2023, "RPG"], ["Prince of Persia: The Lost Crown", 15.0, "💥 Acción", 2024, "Acción"], ["Persona 5 Royal", 14.2, "⚔️ RPG", 2022, "RPG"], ["Dragon Ball Z: Kakarot + DLC", 26.0, "⚔️ RPG", 2021, "RPG"], ["FATAL FRAME: Maiden of Black Water", 14.4, "👻 Terror", 2021, "Terror"], ["NieR: Automata - The End of YoRHa Edition", 10.9, "⚔️ RPG", 2022, "RPG"], ["Resident Evil 4 Remake (Cloud)", 12.0, "👻 Terror", 2023, "Terror"], ["Hyrule Warriors: Age of Calamity", 11.3, "💥 Acción", 2020, "Acción"], ["Kirby and the Forgotten Land", 11.4, "🏃 Plataformas", 2022, "Plataformas"], ["Bayonetta 3", 11.0, "💥 Acción", 2022, "Acción"], ["Metroid Prime Remastered", 10.3, "🗺️ Aventura", 2023, "Aventura"], ["Splatoon 3", 6.0, "🔫 Shooter", 2022, "Shooter"], ["Red Dead Redemption", 11.5, "🗺️ Aventura", 2023, "Aventura"], ["Pokemon Scarlet/Violet", 9.5, "⚔️ RPG", 2022, "RPG"], ["Pokemon Legends: Arceus", 9.0, "⚔️ RPG", 2022, "RPG"], ["Mario Kart 8 Deluxe + DLC", 8.5, "🏎️ Carreras", 2017, "Carreras"], ["Fire Emblem: Three Houses", 8.0, "♟️ Estrategia", 2019, "Estrategia"], ["Luigi's Mansion 3", 7.3, "🗺️ Aventura", 2019, "Aventura"], ["Animal Crossing: New Horizons", 7.1, "🌱 Simulación", 2020, "Simulación"], ["Pokemon Sword/Shield", 6.8, "⚔️ RPG", 2019, "RPG"], ["Super Mario Party Jamboree", 5.4, "🎉 Party", 2024, "Party"], ["Hades", 5.7, "💀 Roguelike", 2020, "Roguelike"], ["Super Mario Odyssey", 5.6, "🏃 Plataformas", 2017, "Plataformas"], ["Paper Mario: The Thousand-Year Door", 5.4, "⚔️ RPG", 2024, "RPG"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas"], ["Super Mario RPG", 8.0, "⚔️ RPG", 2023, "RPG"], ["Metroid Dread", 4.4, "💥 Acción", 2021, "Acción"], ["The Legend of Zelda: Link's Awakening", 4.2, "🗺️ Aventura", 2019, "Aventura"], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas"], ["Mario Strikers: Battle League", 2.8, "⚽ Deportes", 2022, "Deportes"], ["Luigi's Mansion 2 HD", 3.0, "🗺️ Aventura", 2024, "Aventura"], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas"], ["Emio - The Smiling Man", 3.0, "📖 Visual Novel", 2024, "Visual Novel"], ["Hollow Knight", 3.0, "🦇 Metroidvania", 2018, "Metroidvania"], ["Stardew Valley", 1.4, "🌱 Simulación", 2017, "Simulación"], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas"], ["Cuphead", 3.0, "🏃 Plataformas", 2020, "Plataformas"], ["Dead Cells", 1.5, "💀 Roguelike", 2019, "Roguelike"], ["Shovel Knight: Treasure Trove", 1.0, "🏃 Plataformas", 2017, "Plataformas"], ["The Binding of Isaac: Repentance", 1.7, "💀 Roguelike", 2021, "Roguelike"], ["Undertale", 0.2, "⚔️ RPG", 2018, "RPG"], ["Deltarune", 0.6, "⚔️ RPG", 2021, "RPG"], ["Limbo", 0.3, "🧩 Puzzle", 2018, "Puzzle"], ["Inside", 0.5, "🧩 Puzzle", 2018, "Puzzle"], ["Ori and the Blind Forest", 2.0, "🦇 Metroidvania", 2019, "Metroidvania"], ["Ori and the Will of the Wisps", 3.5, "🦇 Metroidvania", 2020, "Metroidvania"], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle"], ["Super Mario 3D All-Stars", 5.5, "🏃 Plataformas", 2020, "Plataformas"], ["Sonic Origins Plus", 2.5, "🏃 Plataformas", 2022, "Plataformas"], ["Castlevania Advance Collection", 0.5, "💥 Acción", 2021, "Acción"], ["Mega Man Legacy Collection", 0.4, "🏃 Plataformas", 2018, "Plataformas"], ["Mega Man X Legacy Collection", 2.0, "🏃 Plataformas", 2018, "Plataformas"], ["Street Fighter 30th Anniversary Collection", 2.0, "🥊 Pelea", 2018, "Pelea"], ["Contra Anniversary Collection", 0.2, "💥 Acción", 2019, "Acción"], ["SNK 40th Anniversary Collection", 1.0, "🕹️ Arcade", 2018, "Arcade"], ["Namco Museum Archives", 0.2, "🕹️ Arcade", 2020, "Arcade"], ["Octopath Traveler", 2.8, "⚔️ RPG", 2018, "RPG"], ["Octopath Traveler II", 4.5, "⚔️ RPG", 2023, "RPG"], ["Bravely Default II", 4.2, "⚔️ RPG", 2021, "RPG"], ["Final Fantasy VII/VIII Remastered", 3.5, "⚔️ RPG", 2019, "RPG"], ["Final Fantasy X/X-2 HD", 13.2, "⚔️ RPG", 2019, "RPG"], ["Final Fantasy XII: The Zodiac Age", 11.5, "⚔️ RPG", 2019, "RPG"], ["Chrono Cross: The Radical Dreamers Edition", 2.5, "⚔️ RPG", 2022, "RPG"], ["Trials of Mana", 6.0, "⚔️ RPG", 2020, "RPG"], ["Dragon Quest XI S", 13.5, "⚔️ RPG", 2019, "RPG"], ["Tales of Vesperia: Definitive Edition", 8.5, "⚔️ RPG", 2019, "RPG"], ["Diablo III: Eternal Collection", 12.0, "⚔️ RPG", 2018, "RPG"], ["Dark Souls Remastered", 3.8, "⚔️ RPG", 2018, "RPG"], ["No More Heroes 3", 6.8, "💥 Acción", 2021, "Acción"], ["ASTRAL CHAIN", 9.0, "💥 Acción", 2019, "Acción"], ["Bayonetta 2", 12.0, "💥 Acción", 2018, "Acción"], ["Bayonetta", 8.4, "💥 Acción", 2018, "Acción"], ["Assassin's Creed Rebel Collection", 6.0, "💥 Acción", 2019, "Acción"], ["The Elder Scrolls V: Skyrim", 14.0, "⚔️ RPG", 2017, "RPG"], ["DOOM Eternal", 18.3, "🔫 Shooter", 2020, "Shooter"], ["Borderlands Legendary Collection", 35.0, "🔫 Shooter", 2020, "Shooter"], ["BioShock Collection", 31.0, "🔫 Shooter", 2020, "Shooter"], ["Splatoon 2", 6.0, "🔫 Shooter", 2017, "Shooter"], ["Payday 2", 16.0, "🔫 Shooter", 2018, "Shooter"], ["Mario Kart 8 Deluxe", 6.8, "🏎️ Carreras", 2017, "Carreras"], ["Crash Team Racing Nitro-Fueled", 4.0, "🏎️ Carreras", 2019, "Carreras"], ["Need for Speed: Hot Pursuit Remastered", 6.0, "🏎️ Carreras", 2020, "Carreras"], ["GRID Autosport", 5.0, "🏎️ Carreras", 2019, "Carreras"], ["Wii Sports", 2.0, "⚽ Deportes", 2022, "Deportes"], ["Nintendo Switch Sports", 2.3, "⚽ Deportes", 2022, "Deportes"], ["FIFA 23 Legacy Edition", 12.0, "⚽ Deportes", 2022, "Deportes"], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018, "Deportes"], ["Mario Golf: Super Rush", 2.6, "⚽ Deportes", 2021, "Deportes"], ["Tetris Effect: Connected", 2.0, "🧩 Puzzle", 2021, "Puzzle"], ["Puyo Puyo Tetris 2", 1.5, "🧩 Puzzle", 2020, "Puzzle"], ["Civilization VI", 5.0, "♟️ Estrategia", 2018, "Estrategia"], ["XCOM 2 Collection", 18.0, "♟️ Estrategia", 2020, "Estrategia"], ["Pikmin 4", 5.0, "♟️ Estrategia", 2023, "Estrategia"], ["Pikmin 3 Deluxe", 5.5, "♟️ Estrategia", 2020, "Estrategia"], ["Advance Wars 1+2: Re-Boot Camp", 2.8, "♟️ Estrategia", 2023, "Estrategia"], ["Resident Evil Revelations Collection", 25.0, "👻 Terror", 2017, "Terror"], ["Resident Evil 0/1 Origins Collection", 17.0, "👻 Terror", 2019, "Terror"], ["Resident Evil 5", 11.0, "👻 Terror", 2019, "Terror"], ["Resident Evil 6", 15.0, "👻 Terror", 2019, "Terror"], ["Alien: Isolation", 12.0, "👻 Terror", 2019, "Terror"], ["Dead by Daylight", 8.0, "👻 Terror", 2019, "Terror"], ["Little Nightmares", 1.8, "👻 Terror", 2017, "Terror"], ["Little Nightmares II", 4.5, "👻 Terror", 2021, "Terror"], ["Outlast: Bundle of Terror", 9.0, "👻 Terror", 2018, "Terror"], ["Super Mario Party", 2.8, "🎉 Party", 2018, "Party"], ["Mario Party Superstars", 2.5, "🎉 Party", 2021, "Party"], ["Jackbox Party Pack 8", 2.0, "🎉 Party", 2021, "Party"], ["Overcooked! All You Can Eat", 2.5, "🎉 Party", 2021, "Party"], ["Moving Out", 1.0, "🎉 Party", 2020, "Party"], ["Among Us", 0.4, "🎉 Party", 2020, "Party"], ["Street Fighter 6 (Cloud)", 50.0, "🥊 Pelea", 2023, "Pelea"], ["Tekken 8 (Cloud)", 45.0, "🥊 Pelea", 2024, "Pelea"], ["Dragon Ball FighterZ", 3.0, "🥊 Pelea", 2018, "Pelea"], ["Mortal Kombat 1 (Cloud)", 40.0, "🥊 Pelea", 2023, "Pelea"], ["Super Smash Bros. Ultimate", 16.0, "🥊 Pelea", 2018, "Pelea"], ["ARMS", 2.2, "🥊 Pelea", 2017, "Pelea"], ["Guilty Gear Strive (Cloud)", 15.0, "🥊 Pelea", 2023, "Pelea"], ["Nickelodeon All-Star Brawl 2", 3.0, "🥊 Pelea", 2023, "Pelea"], ["Power Rangers: Battle for the Grid", 2.5, "🥊 Pelea", 2019, "Pelea"], ["Minecraft", 1.1, "🧱 Sandbox", 2018, "Sandbox"], ["Terraria", 0.2, "🧱 Sandbox", 2019, "Sandbox"], ["Cities: Skylines", 3.5, "🌱 Simulación", 2018, "Simulación"], ["Two Point Hospital", 2.0, "🌱 Simulación", 2020, "Simulación"], ["Game Dev Story", 0.1, "🌱 Simulación", 2020, "Simulación"], ["Story of Seasons: Pioneers of Olive Town", 2.5, "🌱 Simulación", 2021, "Simulación"], ["Rune Factory 5", 4.5, "🌱 Simulación", 2022, "Simulación"], ["Just Dance 2024", 8.0, "🎵 Ritmo", 2023, "Ritmo"], ["Taiko no Tatsujin: Drum 'n' Fun!", 2.5, "🎵 Ritmo", 2018, "Ritmo"], ["Hatsune Miku: Project DIVA Mega Mix", 4.5, "🎵 Ritmo", 2020, "Ritmo"], ["Cadence of Hyrule", 0.5, "🎵 Ritmo", 2019, "Ritmo"], ["Crypt of the NecroDancer", 0.2, "🎵 Ritmo", 2018, "Ritmo"], ["AI: The Somnium Files", 9.0, "📖 Visual Novel", 2019, "Visual Novel"], ["AI: The Somnium Files - nirvanA Initiative", 10.0, "📖 Visual Novel", 2022, "Visual Novel"], ["Danganronpa Decadence", 8.0, "📖 Visual Novel", 2021, "Visual Novel"], ["Phoenix Wright: Ace Attorney Trilogy", 0.7, "📖 Visual Novel", 2019, "Visual Novel"], ["The Great Ace Attorney Chronicles", 5.0, "📖 Visual Novel", 2021, "Visual Novel"], ["13 Sentinels: Aegis Rim", 3.5, "📖 Visual Novel", 2022, "Visual Novel"], ["The Legend of Zelda: Echoes of Wisdom", 5.7, "🗺️ Aventura", 2024, "Aventura"], ["Princess Peach: Showtime!", 4.2, "🗺️ Aventura", 2024, "Aventura"], ["Endless Ocean Luminous", 2.5, "🌱 Simulación", 2024, "Simulación"], ["Super Mario RPG", 8.0, "⚔️ RPG", 2023, "RPG"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas"], ["Pikmin 4", 10.4, "♟️ Estrategia", 2023, "Estrategia"], ["Kirby's Return to Dream Land Deluxe", 5.5, "🏃 Plataformas", 2023, "Plataformas"], ["Metroid Prime Remastered", 6.8, "🔫 Shooter", 2023, "Shooter"], ["Fire Emblem Engage", 13.0, "⚔️ RPG", 2023, "RPG"], ["Bayonetta Origins: Cereza and the Lost Demon", 5.0, "🗺️ Aventura", 2023, "Aventura"], ["Advance Wars 1+2: Re-Boot Camp", 7.0, "♟️ Estrategia", 2023, "Estrategia"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG"], ["Xenoblade Chronicles 2", 13.0, "⚔️ RPG", 2017, "RPG"], ["Xenoblade Chronicles 2: Torna", 5.0, "⚔️ RPG", 2018, "RPG"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG"], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas"], ["Captain Toad: Treasure Tracker", 1.4, "🧩 Puzzle", 2018, "Puzzle"], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019, "Plataformas"], ["Paper Mario: The Origami King", 6.5, "⚔️ RPG", 2020, "RPG"], ["Astral Chain", 9.6, "💥 Acción", 2019, "Acción"], ["Marvel Ultimate Alliance 3", 13.0, "💥 Acción", 2019, "Acción"], ["Sea of Stars", 3.8, "⚔️ RPG", 2023, "RPG"], ["Chained Echoes", 0.9, "⚔️ RPG", 2022, "RPG"], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike"], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación"], ["Vampire Survivors", 0.5, "💀 Roguelike", 2023, "Roguelike"], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia"], ["Animal Well", 0.1, "🦇 Metroidvania", 2024, "Metroidvania"], ["Blasphemous 1", 4.0, "🦇 Metroidvania", 2019, "Metroidvania"], ["Blasphemous 2", 4.5, "🦇 Metroidvania", 2023, "Metroidvania"], ["It Takes Two", 10.0, "🏃 Plataformas", 2022, "Plataformas"], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas"], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018, "Plataformas"], ["Tony Hawk's Pro Skater 1+2", 16.0, "⚽ Deportes", 2021, "Deportes"], ["Return to Monkey Island", 2.0, "🗺️ Aventura", 2022, "Aventura"], ["Portal Companion Collection", 12.0, "🧩 Puzzle", 2022, "Puzzle"], ["Red Dead Redemption", 11.5, "💥 Acción", 2023, "Acción"], ["Batman Arkham Trilogy", 46.0, "💥 Acción", 2023, "Acción"], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022, "RPG"], ["Persona 4 Golden", 3.1, "⚔️ RPG", 2023, "RPG"], ["Persona 3 Portable", 1.1, "⚔️ RPG", 2023, "RPG"], ["Nier Automata", 10.9, "⚔️ RPG", 2022, "RPG"], ["No Man's Sky", 5.0, "🌱 Simulación", 2022, "Simulación"], ["Grand Theft Auto: The Trilogy", 22.0, "💥 Acción", 2021, "Acción"], ["Hogwarts Legacy", 14.8, "⚔️ RPG", 2023, "RPG"], ["Mortal Kombat 11", 32.5, "🥊 Pelea", 2019, "Pelea"], ["Saints Row: The Third", 7.0, "💥 Acción", 2019, "Acción"], ["Saints Row IV", 8.0, "💥 Acción", 2020, "Acción"], ["Burnout Paradise Remastered", 4.0, "🏎️ Carreras", 2020, "Carreras"], ["Need for Speed Hot Pursuit", 6.0, "🏎️ Carreras", 2020, "Carreras"]];
const CATEGORIES = ["Acción", "Arcade", "Aventura", "Carreras", "Deportes", "Estrategia", "Metroidvania", "Party", "Pelea", "Plataformas", "Puzzle", "RPG", "Ritmo", "Roguelike", "Sandbox", "Shooter", "Simulación", "Terror", "Visual Novel"];
const PHONE_NUMBER = "528115139018";

let GAMES = GAMES_DATA;
let activeCategory = 'all';
let currentSort = 'name_asc';
let selected = new Set();
let focusedIndex = -1;

function init() {
    renderCategories();
    applyFilters();

    document.getElementById('search').addEventListener('input', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFilters();
    });
    document.getElementById('sdSize').addEventListener('input', updateStats);
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', handleKeyNavigation);
}

function renderCategories() {
    const container = document.getElementById('categoryFilters');
    let html = '<button class="cat-btn active" onclick="setCategory(this, \'all\')">Todas</button>';
    CATEGORIES.forEach(cat => {
        html += `<button class="cat-btn" onclick="setCategory(this, '${cat}')">${cat}</button>`;
    });
    container.innerHTML = html;
}

function setCategory(btn, cat) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = cat;
    applyFilters();
}

function applyFilters() {
    const query = document.getElementById('search').value.toLowerCase();
    
    // 1. Filter by Category & Search
    let filtered = GAMES_DATA.filter(g => {
        const matchCat = activeCategory === 'all' || g[4] === activeCategory;
        const matchSearch = g[0].toLowerCase().includes(query);
        return matchCat && matchSearch;
    });
    
    // 2. Sort
    filtered.sort((a, b) => {
        if(currentSort === 'name_asc') return a[0].localeCompare(b[0]);
        if(currentSort === 'name_desc') return b[0].localeCompare(a[0]);
        if(currentSort === 'size_desc') return b[1] - a[1];
        if(currentSort === 'size_asc') return a[1] - b[1];
        return 0;
    });

    renderGames(filtered);
}

function renderGames(list) {
    const container = document.getElementById('gameList');
    
    if(!list || list.length === 0) {
        container.innerHTML = '<div style="text-align:center;width:100%;grid-column:1/-1;padding:20px">No se encontraron juegos con esos filtros.</div>';
        GAMES = []; // Update current view ref
        return;
    }
    
    GAMES = list; // For keyboard nav reference
    
    container.innerHTML = list.map((g, index) => {
        const isSel = selected.has(g[0]);
        const safeName = g[0].replace(/'/g, "\\'");
        return `
        <div class="game-card ${isSel ? 'selected' : ''}" data-index="${index}" onclick="toggleGame('${safeName}'); focusedIndex=${index}; updateFocusVisuals(document.querySelectorAll('.game-card'))">
            <div class="checkbox"></div>
            <div class="game-info">
                <h3>${g[0]}</h3>
                <div class="game-meta">
                    <span class="game-cat">${g[2]}</span>
                    <span>${g[3]}</span>
                </div>
            </div>
            <div class="game-size">${g[1]} GB</div>
        </div>`;
    }).join('');
    
    focusedIndex = -1;
    updateStats();
}

function handleKeyNavigation(e) {
    const cards = document.querySelectorAll('.game-card');
    if(cards.length === 0) return;
    
    if (e.key === 'ArrowRight') focusedIndex++;
    else if (e.key === 'ArrowLeft') focusedIndex--;
    else if (e.key === 'ArrowDown') focusedIndex += getColumnsCount();
    else if (e.key === 'ArrowUp') focusedIndex -= getColumnsCount();
    else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if(focusedIndex >= 0 && focusedIndex < cards.length) {
            const name = cards[focusedIndex].querySelector('h3').innerText;
            toggleGame(name);
        }
        return;
    } else return;

    if (focusedIndex < 0) focusedIndex = cards.length - 1;
    if (focusedIndex >= cards.length) focusedIndex = 0;
    
    updateFocusVisuals(cards);
}

function getColumnsCount() {
    const grid = document.getElementById('gameList');
    const colWidth = 280;
    const gap = 15;
    return Math.floor((grid.offsetWidth + gap) / (colWidth + gap)) || 1;
}

function updateFocusVisuals(cards) {
    cards.forEach(c => c.classList.remove('focused'));
    if(focusedIndex >= 0 && cards[focusedIndex]) {
        const card = cards[focusedIndex];
        card.classList.add('focused');
        card.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}

function toggleGame(name) {
    if(selected.has(name)) selected.delete(name);
    else selected.add(name);
    
    // Update visuals
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        if(card.querySelector('h3').innerText === name) {
            if(selected.has(name)) card.classList.add('selected');
            else card.classList.remove('selected');
        }
    });
    
    updateStats();
}

function setSD(size) {
    document.getElementById('sdSize').value = size;
    document.querySelectorAll('.btn-sd').forEach(b => b.classList.remove('active'));
    const btn = Array.from(document.querySelectorAll('.btn-sd')).find(b => b.innerText.includes(size >= 1000 ? '1 TB' : size));
    if(btn) btn.classList.add('active');
    updateStats();
}

function updateStats() {
    const sdSize = parseFloat(document.getElementById('sdSize').value) || 128;
    let total = 0;
    // Calculate total from selected Set (need to lookup size in GAMES_DATA)
    selected.forEach(name => {
        const g = GAMES_DATA.find(x => x[0] === name);
        if(g) total += g[1];
    });
    
    const free = sdSize - total;
    
    document.getElementById('selectedCount').innerText = selected.size;
    document.getElementById('totalSize').innerText = total.toFixed(1) + " GB";
    
    const freeEl = document.getElementById('freeSpace');
    freeEl.innerText = free.toFixed(1) + " GB";
    freeEl.style.color = free >= 0 ? "var(--neon-green)" : "#ff4444";
}

function openModal() {
    if(selected.size === 0) return alert("Selecciona al menos un juego.");
    document.getElementById('whatsappModal').classList.add('active');
    document.getElementById('clientName').focus();
}

function closeModal() {
    document.getElementById('whatsappModal').classList.remove('active');
}

function sendWhatsApp() {
    const name = document.getElementById('clientName').value.trim();
    if(!name) return alert("Por favor escribe tu nombre.");
    
    const model = document.getElementById('clientModel').value;
    const color = document.getElementById('clientColor').value || "No especificado";
    const sd = document.getElementById('sdSize').value;
    
    let total = 0;
    let listText = "";
    
    const selList = [...selected].sort();
    
    selList.forEach((n, i) => {
        const g = GAMES_DATA.find(x => x[0] === n);
        total += g[1];
        listText += `[ ] ${n} (${g[1]} GB)\n`;
    });
    
    const free = parseFloat(sd) - total;
    
    const rawMsg = 
`🎮 *PEDIDO FIXMOBITECH* 🎮
👤 *Cliente:* ${name}
📱 *Modelo:* ${model}
🎨 *Color:* ${color}
💾 *SD:* ${sd} GB

*LISTA A INSTALAR:*
${listText}
📊 *Total:* ${selected.size} juegos
📦 *Peso:* ${total.toFixed(1)} GB
${free >= 0 ? '✅ Espacio OK' : '❌ FALTA ESPACIO (' + free.toFixed(1) + ' GB)'}`;

    const encodedMsg = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMsg}`, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', init);
