
// Data Source
const GAMES_DATA = [["Mortal Kombat 11", 32.5, "🥊 Pelea", 2019], ["Dragon Quest Heroes I & II", 32.0, "⚔️ RPG", 2017], ["EA Sports FC 24", 31.1, "⚽ Deportes", 2023], ["The Witcher 3: Wild Hunt - Complete Edition", 31.3, "⚔️ RPG", 2019], ["Batman Arkham Trilogy", 46.0, "💥 Acción", 2023], ["L.A. Noire", 27.5, "🗺️ Aventura", 2017], ["NBA 2K24", 26.0, "⚽ Deportes", 2023], ["NBA 2K23", 25.0, "⚽ Deportes", 2022], ["The Legend of Zelda: Breath of the Wild", 24.1, "🗺️ Aventura", 2017], ["Resident Evil: Revelations 2", 23.7, "👻 Terror", 2017], ["Tsukihime: A Piece Of Blue Glass Moon", 23.0, "📖 Visual Novel", 2024], ["GTA Trilogy - Definitive Edition", 22.7, "💥 Acción", 2021], ["DOOM (2016)", 22.0, "🔫 Shooter", 2017], ["Eiyuden Chronicle: Hundred Heroes", 21.7, "⚔️ RPG", 2024], ["Wolfenstein: Youngblood", 20.9, "🔫 Shooter", 2019], ["South Park: The Fractured But Whole", 20.1, "⚔️ RPG", 2018], ["Metal Gear Solid: Master Collection Vol.1", 19.0, "💥 Acción", 2023], ["MLB The Show 22", 19.9, "⚽ Deportes", 2022], ["The Legend of Zelda: Tears of the Kingdom", 19.9, "🗺️ Aventura", 2023], ["Monster Hunter Rise + Sunbreak", 19.8, "⚔️ RPG", 2021], ["Hellblade: Senua's Sacrifice", 18.4, "💥 Acción", 2019], ["SD Gundam Battle Alliance", 18.3, "💥 Acción", 2022], ["Naruto Shippuden: Ultimate Ninja Storm Trilogy", 17.7, "🥊 Pelea", 2018], ["Super Smash Bros. Ultimate + DLC", 17.0, "🥊 Pelea", 2018], ["Fire Emblem Engage", 16.6, "♟️ Estrategia", 2023], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022], ["Hogwarts Legacy", 14.8, "⚔️ RPG", 2023], ["Prince of Persia: The Lost Crown", 15.0, "💥 Acción", 2024], ["Persona 5 Royal", 14.2, "⚔️ RPG", 2022], ["Dragon Ball Z: Kakarot + DLC", 26.0, "⚔️ RPG", 2021], ["FATAL FRAME: Maiden of Black Water", 14.4, "👻 Terror", 2021], ["NieR: Automata - The End of YoRHa Edition", 10.9, "⚔️ RPG", 2022], ["Resident Evil 4 Remake (Cloud)", 12.0, "👻 Terror", 2023], ["Hyrule Warriors: Age of Calamity", 11.3, "💥 Acción", 2020], ["Kirby and the Forgotten Land", 11.4, "🏃 Plataformas", 2022], ["Bayonetta 3", 11.0, "💥 Acción", 2022], ["Metroid Prime Remastered", 10.3, "🗺️ Aventura", 2023], ["Splatoon 3", 6.0, "🔫 Shooter", 2022], ["Red Dead Redemption", 11.5, "🗺️ Aventura", 2023], ["Pokemon Scarlet/Violet", 9.5, "⚔️ RPG", 2022], ["Pokemon Legends: Arceus", 9.0, "⚔️ RPG", 2022], ["Mario Kart 8 Deluxe + DLC", 8.5, "🏎️ Carreras", 2017], ["Fire Emblem: Three Houses", 8.0, "♟️ Estrategia", 2019], ["Luigi's Mansion 3", 7.3, "🗺️ Aventura", 2019], ["Animal Crossing: New Horizons", 7.1, "🌱 Simulación", 2020], ["Pokemon Sword/Shield", 6.8, "⚔️ RPG", 2019], ["Super Mario Party Jamboree", 5.4, "🎉 Party", 2024], ["Hades", 5.7, "💀 Roguelike", 2020], ["Super Mario Odyssey", 5.6, "🏃 Plataformas", 2017], ["Paper Mario: The Thousand-Year Door", 5.4, "⚔️ RPG", 2024], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023], ["Super Mario RPG", 8.0, "⚔️ RPG", 2023], ["Metroid Dread", 4.4, "💥 Acción", 2021], ["The Legend of Zelda: Link's Awakening", 4.2, "🗺️ Aventura", 2019], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018], ["Mario Strikers: Battle League", 2.8, "⚽ Deportes", 2022], ["Luigi's Mansion 2 HD", 3.0, "🗺️ Aventura", 2024], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021], ["Emio - The Smiling Man", 3.0, "📖 Visual Novel", 2024], ["Hollow Knight", 3.0, "🦇 Metroidvania", 2018], ["Stardew Valley", 1.4, "🌱 Simulación", 2017], ["Celeste", 1.2, "🏃 Plataformas", 2018], ["Cuphead", 3.0, "🏃 Plataformas", 2020], ["Dead Cells", 1.5, "💀 Roguelike", 2019], ["Shovel Knight: Treasure Trove", 1.0, "🏃 Plataformas", 2017], ["The Binding of Isaac: Repentance", 1.7, "💀 Roguelike", 2021], ["Undertale", 0.2, "⚔️ RPG", 2018], ["Deltarune", 0.6, "⚔️ RPG", 2021], ["Limbo", 0.3, "🧩 Puzzle", 2018], ["Inside", 0.5, "🧩 Puzzle", 2018], ["Ori and the Blind Forest", 2.0, "🦇 Metroidvania", 2019], ["Ori and the Will of the Wisps", 3.5, "🦇 Metroidvania", 2020], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024], ["Super Mario 3D All-Stars", 5.5, "🏃 Plataformas", 2020], ["Sonic Origins Plus", 2.5, "🏃 Plataformas", 2022], ["Castlevania Advance Collection", 0.5, "💥 Acción", 2021], ["Mega Man Legacy Collection", 0.4, "🏃 Plataformas", 2018], ["Mega Man X Legacy Collection", 2.0, "🏃 Plataformas", 2018], ["Street Fighter 30th Anniversary Collection", 2.0, "🥊 Pelea", 2018], ["Contra Anniversary Collection", 0.2, "💥 Acción", 2019], ["SNK 40th Anniversary Collection", 1.0, "🎮 Arcade", 2018], ["Namco Museum Archives", 0.2, "🎮 Arcade", 2020], ["Octopath Traveler", 2.8, "⚔️ RPG", 2018], ["Octopath Traveler II", 4.5, "⚔️ RPG", 2023], ["Bravely Default II", 4.2, "⚔️ RPG", 2021], ["Final Fantasy VII/VIII Remastered", 3.5, "⚔️ RPG", 2019], ["Final Fantasy X/X-2 HD", 13.2, "⚔️ RPG", 2019], ["Final Fantasy XII: The Zodiac Age", 11.5, "⚔️ RPG", 2019], ["Chrono Cross: The Radical Dreamers Edition", 2.5, "⚔️ RPG", 2022], ["Trials of Mana", 6.0, "⚔️ RPG", 2020], ["Dragon Quest XI S", 13.5, "⚔️ RPG", 2019], ["Tales of Vesperia: Definitive Edition", 8.5, "⚔️ RPG", 2019], ["Diablo III: Eternal Collection", 12.0, "⚔️ RPG", 2018], ["Dark Souls Remastered", 3.8, "⚔️ RPG", 2018], ["No More Heroes 3", 6.8, "💥 Acción", 2021], ["ASTRAL CHAIN", 9.0, "💥 Acción", 2019], ["Bayonetta 2", 12.0, "💥 Acción", 2018], ["Bayonetta", 8.4, "💥 Acción", 2018], ["Assassin's Creed Rebel Collection", 6.0, "💥 Acción", 2019], ["The Elder Scrolls V: Skyrim", 14.0, "⚔️ RPG", 2017], ["DOOM Eternal", 18.3, "🔫 Shooter", 2020], ["Borderlands Legendary Collection", 35.0, "🔫 Shooter", 2020], ["BioShock Collection", 31.0, "🔫 Shooter", 2020], ["Splatoon 2", 6.0, "🔫 Shooter", 2017], ["Payday 2", 16.0, "🔫 Shooter", 2018], ["Mario Kart 8 Deluxe", 6.8, "🏎️ Carreras", 2017], ["Crash Team Racing Nitro-Fueled", 4.0, "🏎️ Carreras", 2019], ["Need for Speed: Hot Pursuit Remastered", 6.0, "🏎️ Carreras", 2020], ["GRID Autosport", 5.0, "🏎️ Carreras", 2019], ["Wii Sports", 2.0, "⚽ Deportes", 2022], ["Nintendo Switch Sports", 2.3, "⚽ Deportes", 2022], ["FIFA 23 Legacy Edition", 12.0, "⚽ Deportes", 2022], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018], ["Mario Golf: Super Rush", 2.6, "⚽ Deportes", 2021], ["Tetris Effect: Connected", 2.0, "🧩 Puzzle", 2021], ["Puyo Puyo Tetris 2", 1.5, "🧩 Puzzle", 2020], ["Civilization VI", 5.0, "♟️ Estrategia", 2018], ["XCOM 2 Collection", 18.0, "♟️ Estrategia", 2020], ["Pikmin 4", 5.0, "♟️ Estrategia", 2023], ["Pikmin 3 Deluxe", 5.5, "♟️ Estrategia", 2020], ["Advance Wars 1+2: Re-Boot Camp", 2.8, "♟️ Estrategia", 2023], ["Resident Evil Revelations Collection", 25.0, "👻 Terror", 2017], ["Resident Evil 0/1 Origins Collection", 17.0, "👻 Terror", 2019], ["Resident Evil 5", 11.0, "👻 Terror", 2019], ["Resident Evil 6", 15.0, "👻 Terror", 2019], ["Alien: Isolation", 12.0, "👻 Terror", 2019], ["Dead by Daylight", 8.0, "👻 Terror", 2019], ["Little Nightmares", 1.8, "👻 Terror", 2017], ["Little Nightmares II", 4.5, "👻 Terror", 2021], ["Outlast: Bundle of Terror", 9.0, "👻 Terror", 2018], ["Super Mario Party", 2.8, "🎉 Party", 2018], ["Mario Party Superstars", 2.5, "🎉 Party", 2021], ["Jackbox Party Pack 8", 2.0, "🎉 Party", 2021], ["Overcooked! All You Can Eat", 2.5, "🎉 Party", 2021], ["Moving Out", 1.0, "🎉 Party", 2020], ["Among Us", 0.4, "🎉 Party", 2020], ["Street Fighter 6 (Cloud)", 50.0, "🥊 Pelea", 2023], ["Tekken 8 (Cloud)", 45.0, "🥊 Pelea", 2024], ["Dragon Ball FighterZ", 3.0, "🥊 Pelea", 2018], ["Mortal Kombat 1 (Cloud)", 40.0, "🥊 Pelea", 2023], ["Super Smash Bros. Ultimate", 16.0, "🥊 Pelea", 2018], ["ARMS", 2.2, "🥊 Pelea", 2017], ["Guilty Gear Strive (Cloud)", 15.0, "🥊 Pelea", 2023], ["Nickelodeon All-Star Brawl 2", 3.0, "🥊 Pelea", 2023], ["Power Rangers: Battle for the Grid", 2.5, "🥊 Pelea", 2019], ["Minecraft", 1.1, "🎮 Sandbox", 2018], ["Terraria", 0.2, "🎮 Sandbox", 2019], ["Cities: Skylines", 3.5, "🌱 Simulación", 2018], ["Two Point Hospital", 2.0, "🌱 Simulación", 2020], ["Game Dev Story", 0.1, "🌱 Simulación", 2020], ["Story of Seasons: Pioneers of Olive Town", 2.5, "🌱 Simulación", 2021], ["Rune Factory 5", 4.5, "🌱 Simulación", 2022], ["Just Dance 2024", 8.0, "🎮 Ritmo", 2023], ["Taiko no Tatsujin: Drum 'n' Fun!", 2.5, "🎮 Ritmo", 2018], ["Hatsune Miku: Project DIVA Mega Mix", 4.5, "🎮 Ritmo", 2020], ["Cadence of Hyrule", 0.5, "🎮 Ritmo", 2019], ["Crypt of the NecroDancer", 0.2, "🎮 Ritmo", 2018], ["AI: The Somnium Files", 9.0, "📖 Visual Novel", 2019], ["AI: The Somnium Files - nirvanA Initiative", 10.0, "📖 Visual Novel", 2022], ["Danganronpa Decadence", 8.0, "📖 Visual Novel", 2021], ["Phoenix Wright: Ace Attorney Trilogy", 0.7, "📖 Visual Novel", 2019], ["The Great Ace Attorney Chronicles", 5.0, "📖 Visual Novel", 2021], ["13 Sentinels: Aegis Rim", 3.5, "📖 Visual Novel", 2022], ["The Legend of Zelda: Echoes of Wisdom", 5.7, "🗺️ Aventura", 2024], ["Princess Peach: Showtime!", 4.2, "🗺️ Aventura", 2024], ["Endless Ocean Luminous", 2.5, "🌱 Simulación", 2024], ["Super Mario RPG", 8.0, "⚔️ RPG", 2023], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023], ["Pikmin 4", 10.4, "♟️ Estrategia", 2023], ["Kirby's Return to Dream Land Deluxe", 5.5, "🏃 Plataformas", 2023], ["Metroid Prime Remastered", 6.8, "🔫 Shooter", 2023], ["Fire Emblem Engage", 13.0, "⚔️ RPG", 2023], ["Bayonetta Origins: Cereza and the Lost Demon", 5.0, "🗺️ Aventura", 2023], ["Advance Wars 1+2: Re-Boot Camp", 7.0, "♟️ Estrategia", 2023], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020], ["Xenoblade Chronicles 2", 13.0, "⚔️ RPG", 2017], ["Xenoblade Chronicles 2: Torna", 5.0, "⚔️ RPG", 2018], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018], ["Captain Toad: Treasure Tracker", 1.4, "🧩 Puzzle", 2018], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019], ["Paper Mario: The Origami King", 6.5, "⚔️ RPG", 2020], ["Astral Chain", 9.6, "💥 Acción", 2019], ["Marvel Ultimate Alliance 3", 13.0, "💥 Acción", 2019], ["Sea of Stars", 3.8, "⚔️ RPG", 2023], ["Chained Echoes", 0.9, "⚔️ RPG", 2022], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022], ["Tunic", 2.8, "🗺️ Aventura", 2022], ["Dave the Diver", 2.5, "🌱 Simulación", 2023], ["Vampire Survivors", 0.5, "💀 Roguelike", 2023], ["Balatro", 0.1, "♟️ Estrategia", 2024], ["Animal Well", 0.1, "🦇 Metroidvania", 2024], ["Blasphemous 1", 4.0, "🦇 Metroidvania", 2019], ["Blasphemous 2", 4.5, "🦇 Metroidvania", 2023], ["It Takes Two", 10.0, "🏃 Plataformas", 2022], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018], ["Tony Hawk's Pro Skater 1+2", 16.0, "⚽ Deportes", 2021], ["Return to Monkey Island", 2.0, "🗺️ Aventura", 2022], ["Portal Companion Collection", 12.0, "🧩 Puzzle", 2022], ["Red Dead Redemption", 11.5, "💥 Acción", 2023], ["Batman Arkham Trilogy", 46.0, "💥 Acción", 2023], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022], ["Persona 4 Golden", 3.1, "⚔️ RPG", 2023], ["Persona 3 Portable", 1.1, "⚔️ RPG", 2023], ["Nier Automata", 10.9, "⚔️ RPG", 2022], ["No Man's Sky", 5.0, "🌱 Simulación", 2022], ["Grand Theft Auto: The Trilogy", 22.0, "💥 Acción", 2021], ["Hogwarts Legacy", 14.8, "⚔️ RPG", 2023], ["Mortal Kombat 11", 32.5, "🥊 Pelea", 2019], ["Saints Row: The Third", 7.0, "💥 Acción", 2019], ["Saints Row IV", 8.0, "💥 Acción", 2020], ["Burnout Paradise Remastered", 4.0, "🏎️ Carreras", 2020], ["Need for Speed Hot Pursuit", 6.0, "🏎️ Carreras", 2020]];
const PHONE_NUMBER = "528115139018";

let GAMES = GAMES_DATA;
let filteredGames = GAMES_DATA; // Para navegación en lista filtrada
let selected = new Set();
let focusedIndex = -1; // Índice visual para teclado

function init() {
    if(GAMES && GAMES.length > 0) {
        renderGames(GAMES);
    } else {
        console.error("No games data found");
        document.getElementById('gameList').innerHTML = '<div style="color:red;text-align:center;grid-column:1/-1"><h3>Error: Lista vacía</h3></div>';
    }

    document.getElementById('search').addEventListener('input', (e) => filterGames(e.target.value));
    document.getElementById('sdSize').addEventListener('input', updateStats);
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Listeners de Teclado
    document.addEventListener('keydown', handleKeyNavigation);
}

function handleKeyNavigation(e) {
    const cards = document.querySelectorAll('.game-card');
    if(cards.length === 0) return;
    
    // Moverse
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
    } else return; // Otras teclas

    // Circular loop
    if (focusedIndex < 0) focusedIndex = cards.length - 1;
    if (focusedIndex >= cards.length) focusedIndex = 0;
    
    updateFocusVisuals(cards);
}

function getColumnsCount() {
    const grid = document.getElementById('gameList');
    const colWidth = 280; // minmax en CSS
    const gap = 15;
    // Estimación aproximada (no perfecta pero funcional)
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

function renderGames(list) {
    filteredGames = list;
    if(!list || list.length === 0) {
        document.getElementById('gameList').innerHTML = '<div style="text-align:center;width:100%;grid-column:1/-1;padding:20px">No se encontraron juegos.</div>';
        return;
    }

    const container = document.getElementById('gameList');
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
    
    focusedIndex = -1; // Reset focus on render
    updateStats();
}

function toggleGame(name) {
    if(selected.has(name)) selected.delete(name);
    else selected.add(name);
    
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

function filterGames(query) {
    const lower = query.toLowerCase();
    const filtered = GAMES.filter(g => g[0].toLowerCase().includes(lower));
    renderGames(filtered);
}

function updateStats() {
    const sdSize = parseFloat(document.getElementById('sdSize').value) || 128;
    let total = 0;
    selected.forEach(name => {
        const g = GAMES.find(x => x[0] === name);
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
    
    const sd = document.getElementById('sdSize').value;
    let total = 0;
    let listText = "";
    
    const selList = [...selected].sort();
    
    selList.forEach((n, i) => {
        const g = GAMES.find(x => x[0] === n);
        total += g[1];
        // Formato Checklist para Técnico (Cuadrado vacío)
        listText += `⬜ ${n} (${g[1]} GB)%0A`;
    });
    
    const free = parseFloat(sd) - total;
    
    const msg = `🎮 *ORDEN DE INSTALACIÓN*%0A` +
                `👤 Cliente: *${name}*%0A` +
                `💾 Capacidad SD: ${sd} GB%0A%0A` +
                `*LISTA DE JUEGOS A INSTALAR:*%0A` +
                listText + 
                `%0A📊 Total: ${selected.size} juegos` +
                `%0A📦 Peso Total: ${total.toFixed(1)} GB` +
                `%0A${free >= 0 ? '✅ Espacio Suficiente' : '⚠️ FALTA ESPACIO (' + free.toFixed(1) + ' GB)'}`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', init);
