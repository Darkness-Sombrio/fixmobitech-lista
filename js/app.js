
const GAMES_DATA = [["Mortal Kombat 11 Ultimate", 32.5, "🥊 Pelea", 2019, "Pelea", "#ff4d4d"], ["Dragon Quest Heroes I & II", 32.0, "⚔️ RPG", 2017, "RPG", "#a64dff"], ["EA Sports FC 24", 31.1, "⚽ Deportes", 2023, "Deportes", "#4d4dff"], ["The Witcher 3: Wild Hunt - Complete Edition", 31.3, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Batman Arkham Trilogy", 46.0, "💥 Acción", 2023, "Acción", "#ffaa4d"], ["L.A. Noire", 27.5, "🗺️ Aventura", 2017, "Aventura", "#4dff88"], ["NBA 2K24 Kobe Bryant Edition", 58.0, "⚽ Deportes", 2023, "Deportes", "#4d4dff"], ["NBA 2K23", 48.0, "⚽ Deportes", 2022, "Deportes", "#4d4dff"], ["Borderlands Legendary Collection", 35.0, "🔫 Shooter", 2020, "Shooter", "#4da6ff"], ["BioShock: The Collection", 31.0, "🔫 Shooter", 2020, "Shooter", "#4da6ff"], ["The Legend of Zelda: Breath of the Wild", 24.1, "🗺️ Aventura", 2017, "Aventura", "#4dff88"], ["Resident Evil: Revelations 2", 23.7, "👻 Terror", 2017, "Terror", "#880000"], ["Tsukihime: A Piece Of Blue Glass Moon", 23.0, "📖 Visual Novel", 2024, "Visual Novel", "#ff99cc"], ["GTA Trilogy - Definitive Edition", 22.7, "💥 Acción", 2021, "Acción", "#ffaa4d"], ["DOOM (2016)", 22.0, "🔫 Shooter", 2017, "Shooter", "#4da6ff"], ["Eiyuden Chronicle: Hundred Heroes", 21.7, "⚔️ RPG", 2024, "RPG", "#a64dff"], ["Wolfenstein: Youngblood", 20.9, "🔫 Shooter", 2019, "Shooter", "#4da6ff"], ["South Park: The Fractured But Whole", 20.1, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Metal Gear Solid: Master Collection Vol.1", 19.0, "💥 Acción", 2023, "Acción", "#ffaa4d"], ["Mortal Kombat 1", 34.0, "🥊 Pelea", 2023, "Pelea", "#ff4d4d"], ["Hogwarts Legacy", 14.8, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Red Dead Redemption", 11.5, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["MLB The Show 23", 21.0, "⚽ Deportes", 2023, "Deportes", "#4d4dff"], ["The Legend of Zelda: Tears of the Kingdom", 19.9, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Monster Hunter Rise + Sunbreak", 19.8, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Hellblade: Senua's Sacrifice", 18.4, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["SD Gundam Battle Alliance", 18.3, "💥 Acción", 2022, "Acción", "#ffaa4d"], ["Naruto Shippuden: Ultimate Ninja Storm Trilogy", 17.7, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Super Smash Bros. Ultimate", 17.0, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Fire Emblem Engage", 16.6, "♟️ Estrategia", 2023, "Estrategia", "#008888"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Prince of Persia: The Lost Crown", 15.0, "💥 Acción", 2024, "Acción", "#ffaa4d"], ["Shin Megami Tensei V: Vengeance", 15.0, "⚔️ RPG", 2024, "RPG", "#a64dff"], ["Bayonetta 3", 15.0, "💥 Acción", 2022, "Acción", "#ffaa4d"], ["Persona 5 Royal", 14.2, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Dragon Ball Z: Kakarot + DLC", 16.5, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["FATAL FRAME: Maiden of Black Water", 14.4, "👻 Terror", 2021, "Terror", "#880000"], ["NieR: Automata - The End of YoRHa Edition", 10.9, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Resident Evil 4", 12.0, "👻 Terror", 2019, "Terror", "#880000"], ["Hyrule Warriors: Age of Calamity", 11.3, "💥 Acción", 2020, "Acción", "#ffaa4d"], ["Kirby and the Forgotten Land", 11.4, "🏃 Plataformas", 2022, "Plataformas", "#ff4da6"], ["Metroid Prime Remastered", 6.8, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Splatoon 3", 6.0, "🔫 Shooter", 2022, "Shooter", "#4da6ff"], ["Monster Hunter Stories 2", 13.5, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Xenoblade Chronicles 2", 13.0, "⚔️ RPG", 2017, "RPG", "#a64dff"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG", "#a64dff"], ["Diablo III: Eternal Collection", 13.3, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Assassin's Creed: The Rebel Collection", 11.9, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["LEGO Star Wars: The Skywalker Saga", 14.5, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["Pokemon Scarlet/Violet", 9.5, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Pokemon Legends: Arceus", 9.0, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Mario Kart 8 Deluxe", 8.5, "🏎️ Carreras", 2017, "Carreras", "#ffff4d"], ["Fire Emblem: Three Houses", 11.0, "♟️ Estrategia", 2019, "Estrategia", "#008888"], ["Luigi's Mansion 3", 7.3, "🗺️ Aventura", 2019, "Aventura", "#4dff88"], ["Animal Crossing: New Horizons", 7.1, "🌱 Simulación", 2020, "Simulación", "#00ffcc"], ["Pokemon Sword/Shield", 10.3, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Super Mario Party Jamboree", 5.4, "🎉 Party", 2024, "Party", "#ffcc00"], ["Hades", 5.7, "💀 Roguelike", 2020, "Roguelike", "#884400"], ["Super Mario Odyssey", 5.6, "🏃 Plataformas", 2017, "Plataformas", "#ff4da6"], ["Paper Mario: The Thousand-Year Door", 5.1, "⚔️ RPG", 2024, "RPG", "#a64dff"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["Super Mario RPG", 8.0, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Donkey Kong Country Returns HD", 9.0, "🏃 Plataformas", 2025, "Plataformas", "#ff4da6"], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Mario & Luigi: Brothership", 6.8, "⚔️ RPG", 2024, "RPG", "#a64dff"], ["Princess Peach: Showtime!", 4.7, "🗺️ Aventura", 2024, "Aventura", "#4dff88"], ["Pikmin 4", 10.4, "♟️ Estrategia", 2023, "Estrategia", "#008888"], ["It Takes Two", 10.0, "🏃 Plataformas", 2022, "Plataformas", "#ff4da6"], ["No Man's Sky", 5.5, "🌱 Simulación", 2022, "Simulación", "#00ffcc"], ["Just Dance 2024", 8.0, "🎵 Ritmo", 2023, "Ritmo", "#ff0088"], ["Crash Bandicoot 4: It's About Time", 9.5, "🏃 Plataformas", 2021, "Plataformas", "#ff4da6"], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"], ["Tony Hawk's Pro Skater 1+2", 16.0, "⚽ Deportes", 2021, "Deportes", "#4d4dff"], ["Metroid Dread", 4.4, "💥 Acción", 2021, "Acción", "#ffaa4d"], ["The Legend of Zelda: Link's Awakening", 4.2, "🗺️ Aventura", 2019, "Aventura", "#4dff88"], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Mario Strikers: Battle League", 2.8, "⚽ Deportes", 2022, "Deportes", "#4d4dff"], ["Luigi's Mansion 2 HD", 3.1, "🗺️ Aventura", 2024, "Aventura", "#4dff88"], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas", "#ff4da6"], ["Emio - The Smiling Man", 3.0, "📖 Visual Novel", 2024, "Visual Novel", "#ff99cc"], ["Sea of Stars", 3.9, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Cuphead + DLC", 4.0, "🏃 Plataformas", 2020, "Plataformas", "#ff4da6"], ["Ori and the Will of the Wisps", 4.2, "🦇 Metroidvania", 2020, "Metroidvania", "#550055"], ["Hollow Knight", 3.0, "🦇 Metroidvania", 2018, "Metroidvania", "#550055"], ["Dark Souls Remastered", 3.9, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Dragon Ball FighterZ", 6.2, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Rocket League", 15.0, "⚽ Deportes", 2017, "Deportes", "#4d4dff"], ["Need for Speed Hot Pursuit", 6.0, "🏎️ Carreras", 2020, "Carreras", "#ffff4d"], ["Crash Team Racing Nitro-Fueled", 9.0, "🏎️ Carreras", 2019, "Carreras", "#ffff4d"], ["SpongeBob SquarePants: Battle for Bikini Bottom", 6.0, "🏃 Plataformas", 2020, "Plataformas", "#ff4da6"], ["Stardew Valley", 1.5, "🌱 Simulación", 2017, "Simulación", "#00ffcc"], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Dead Cells: Return to Castlevania", 2.2, "💀 Roguelike", 2023, "Roguelike", "#884400"], ["Shovel Knight: Treasure Trove", 1.0, "🏃 Plataformas", 2017, "Plataformas", "#ff4da6"], ["The Binding of Isaac: Repentance", 1.7, "💀 Roguelike", 2021, "Roguelike", "#884400"], ["Undertale", 0.3, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Deltarune (Ch 1&2)", 0.6, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Limbo", 0.3, "🧩 Puzzle", 2018, "Puzzle", "#cc4dff"], ["Inside", 1.5, "🧩 Puzzle", 2018, "Puzzle", "#cc4dff"], ["Ori and the Blind Forest", 3.5, "🦇 Metroidvania", 2019, "Metroidvania", "#550055"], ["Chained Echoes", 0.9, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike", "#884400"], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación", "#00ffcc"], ["Vampire Survivors", 0.6, "💀 Roguelike", 2023, "Roguelike", "#884400"], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia", "#008888"], ["Animal Well", 0.1, "🦇 Metroidvania", 2024, "Metroidvania", "#550055"], ["Blasphemous 1", 4.0, "🦇 Metroidvania", 2019, "Metroidvania", "#550055"], ["Blasphemous 2", 4.5, "🦇 Metroidvania", 2023, "Metroidvania", "#550055"], ["Human Fall Flat", 1.6, "🎉 Party", 2017, "Party", "#ffcc00"], ["Unpacking", 0.5, "🧩 Puzzle", 2021, "Puzzle", "#cc4dff"], ["Untitled Goose Game", 0.8, "🧩 Puzzle", 2019, "Puzzle", "#cc4dff"], ["Baba Is You", 0.1, "🧩 Puzzle", 2019, "Puzzle", "#cc4dff"], ["Slay the Spire", 0.5, "♟️ Estrategia", 2019, "Estrategia", "#008888"], ["Into the Breach", 0.3, "♟️ Estrategia", 2018, "Estrategia", "#008888"], ["Katana ZERO", 0.3, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["Hotline Miami Collection", 0.8, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["Captain Toad: Treasure Tracker", 1.6, "🧩 Puzzle", 2018, "Puzzle", "#cc4dff"], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle", "#cc4dff"], ["Tetris Effect: Connected", 2.5, "🧩 Puzzle", 2021, "Puzzle", "#cc4dff"], ["Puyo Puyo Tetris 2", 2.0, "🧩 Puzzle", 2020, "Puzzle", "#cc4dff"], ["Minecraft", 1.2, "🧱 Sandbox", 2018, "Sandbox", "#8b4513"], ["Terraria", 0.3, "🧱 Sandbox", 2019, "Sandbox", "#8b4513"], ["Among Us", 0.6, "🎉 Party", 2020, "Party", "#ffcc00"], ["Overcooked! 2", 2.8, "🎉 Party", 2018, "Party", "#ffcc00"], ["Moving Out", 1.0, "🎉 Party", 2020, "Party", "#ffcc00"], ["Super Mario 3D All-Stars", 5.5, "🏃 Plataformas", 2020, "Plataformas", "#ff4da6"], ["Sonic Origins Plus", 3.7, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["Castlevania Advance Collection", 0.6, "💥 Acción", 2021, "Acción", "#ffaa4d"], ["Mega Man Legacy Collection", 0.4, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Mega Man X Legacy Collection", 3.0, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Street Fighter 30th Anniversary Collection", 5.0, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Contra Anniversary Collection", 0.2, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["Teenage Mutant Ninja Turtles: The Cowabunga Collection", 2.0, "💥 Acción", 2022, "Acción", "#ffaa4d"], ["Teenage Mutant Ninja Turtles: Shredder's Revenge", 1.0, "💥 Acción", 2022, "Acción", "#ffaa4d"]];
const CATEGORIES = ["Acción", "Aventura", "Carreras", "Deportes", "Estrategia", "Metroidvania", "Party", "Pelea", "Plataformas", "Puzzle", "RPG", "Ritmo", "Roguelike", "Sandbox", "Shooter", "Simulación", "Terror", "Visual Novel"];
const PHONE_NUMBER = "528115139018";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61566827606526";

// Real Capacities (Approx GiB)
const SD_PRESETS = {
    "64": 58,
    "128": 119,
    "256": 238,
    "512": 476,
    "1024": 930
};

let GAMES = GAMES_DATA;
let activeCategory = 'all';
let currentSort = 'size_desc'; // Default Sort: Size Descending
let selected = new Set();
let focusedIndex = -1;

function init() {
    createRain();
    renderCategoryOptions();
    applyFilters(); // Apply default filter immediately
    updateStats();

    // Event Listeners
    document.getElementById('search').addEventListener('input', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', (e) => { currentSort = e.target.value; applyFilters(); });
    document.getElementById('categorySelect').addEventListener('change', (e) => { activeCategory = e.target.value; applyFilters(); });
    document.getElementById('sdPreset').addEventListener('change', updateSDCapacity);
    document.getElementById('systemSpace').addEventListener('input', updateStats);
    document.addEventListener('keydown', handleKeyNavigation);
}

function updateSDCapacity() {
    const preset = document.getElementById('sdPreset').value;
    const realCap = SD_PRESETS[preset] || 119;
    updateStats(); 
}

function createRain() {
    const container = document.getElementById('rainContainer');
    const colors = ['#ff0055', '#00f3ff', '#4dff88', '#ffff4d', '#a64dff'];
    for(let i=0; i<30; i++) {
        const el = document.createElement('div');
        el.className = 'joycon';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = (Math.random() * 5 + 5) + 's';
        el.style.animationDelay = (Math.random() * 5) + 's';
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const scale = Math.random() * 0.5 + 0.5;
        el.style.transform = `scale(${scale})`;
        container.appendChild(el);
    }
}

function renderCategoryOptions() {
    const select = document.getElementById('categorySelect');
    let html = '<option value="all">Todas las Categorías</option>';
    CATEGORIES.forEach(cat => { html += `<option value="${cat}">${cat}</option>`; });
    select.innerHTML = html;
}

function applyFilters() {
    const query = document.getElementById('search').value.toLowerCase();
    
    let filtered = GAMES_DATA.filter(g => {
        const matchCat = activeCategory === 'all' || g[4] === activeCategory;
        const matchSearch = g[0].toLowerCase().includes(query);
        return matchCat && matchSearch;
    });
    
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
    if(!list.length) { container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;opacity:0.5">Nada por aquí...</div>'; GAMES=[]; return; }
    
    GAMES = list;
    
    container.innerHTML = list.map((g, index) => {
        const isSel = selected.has(g[0]);
        const safeName = g[0].replace(/'/g, "\\'");
        const color = g[5]; 
        
        return `
        <div class="game-card ${isSel ? 'selected' : ''}" style="border-left-color: ${color}" 
             data-index="${index}" onclick="toggleGame('${safeName}'); focusedIndex=${index}; updateFocusVisuals()">
            <div class="card-content">
                <h3>${g[0]}</h3>
                <div class="game-meta">
                    <span class="game-cat-badge" style="background:${color}">${g[4]}</span>
                    <span class="game-size" style="color:${color}">${g[1]} GB</span>
                </div>
            </div>
            <div class="checkbox">
                <div class="check-circle" style="${isSel ? 'background:'+color+';border-color:'+color : ''}"></div>
            </div>
        </div>`;
    }).join('');
    focusedIndex = -1;
    updateStats();
}

function toggleGame(name) {
    const preset = document.getElementById('sdPreset').value;
    const sdSize = SD_PRESETS[preset] || 119; // Real Capacity
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    
    // Check space BEFORE adding
    if(!selected.has(name)) {
        let currentTotal = 0;
        selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) currentTotal += g[1]; });
        
        const game = GAMES_DATA.find(x => x[0] === name);
        const newTotal = currentTotal + sysReserved + game[1];
        
        if(newTotal > sdSize) {
            alert("⚠️ ¡MEMORIA LLENA!\nNo cabe más juegos. Revisa tu lista para borrar.");
            window.scrollTo(0,0);
            viewOrder(); // Open review/edit
            return;
        }
        selected.add(name);
    } else {
        selected.delete(name);
    }
    
    // Efficient UI Update
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        if(card.querySelector('h3').innerText === name) {
            const color = card.style.borderLeftColor;
            if(selected.has(name)) {
                card.classList.add('selected');
                card.querySelector('.check-circle').style.background = color;
                card.querySelector('.check-circle').style.borderColor = color;
            } else {
                card.classList.remove('selected');
                card.querySelector('.check-circle').style.background = 'transparent';
                card.querySelector('.check-circle').style.borderColor = '#666';
            }
        }
    });
    updateStats();
}

function handleKeyNavigation(e) {
    const cards = document.querySelectorAll('.game-card');
    if(!cards.length) return;
    if(e.key === 'ArrowRight') focusedIndex++;
    else if(e.key === 'ArrowLeft') focusedIndex--;
    else if(e.key === 'ArrowDown') focusedIndex++;
    else if(e.key === 'ArrowUp') focusedIndex--;
    else if(e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if(focusedIndex >= 0 && focusedIndex < cards.length) toggleGame(cards[focusedIndex].querySelector('h3').innerText);
        return;
    } else return;
    
    if(focusedIndex < 0) focusedIndex = cards.length -1;
    if(focusedIndex >= cards.length) focusedIndex = 0;
    
    cards.forEach(c => c.classList.remove('focused'));
    if(cards[focusedIndex]) {
        cards[focusedIndex].classList.add('focused');
        cards[focusedIndex].scrollIntoView({behavior:'smooth', block:'nearest'});
    }
}

function updateStats() {
    const preset = document.getElementById('sdPreset').value;
    const sdSize = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    
    let gamesTotal = 0;
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) gamesTotal += g[1]; });
    
    const totalUsed = gamesTotal + sysReserved;
    const free = sdSize - totalUsed;
    
    // Percent
    const sysP = (sysReserved / sdSize) * 100;
    const gameP = (gamesTotal / sdSize) * 100;
    
    document.getElementById('selectedCount').innerText = selected.size;
    document.getElementById('totalSize').innerText = gamesTotal.toFixed(1) + " GB";
    document.getElementById('freeSpace').innerText = free.toFixed(1) + " GB";
    
    // Bar
    const bar = document.getElementById('sdProgress');
    const p1 = sysP.toFixed(1);
    const p2 = (sysP + gameP).toFixed(1);
    
    if(free < 0) {
        bar.style.background = `linear-gradient(90deg, #555 0%, #555 ${p1}%, #ff0000 ${p1}%, #ff0000 100%)`;
        bar.style.width = '100%';
    } else {
        bar.style.background = `linear-gradient(90deg, #555 0%, #555 ${p1}%, #00f3ff ${p1}%, #00f3ff ${p2}%, transparent ${p2}%)`;
        bar.style.width = '100%'; 
    }
    
    document.getElementById('statsText').innerText = `Sistema: ${sysReserved}GB | Juegos: ${gamesTotal.toFixed(1)}GB | Libre: ${free.toFixed(1)}GB | Total Real: ${sdSize}GB`;
}

function viewOrder() {
    const container = document.getElementById('reviewList');
    document.getElementById('reviewModal').classList.add('active');
    
    if(selected.size === 0) {
        container.innerHTML = '<div style="text-align:center; padding:20px; color:#aaa">Lista vacía.</div>';
        return;
    }
    
    let html = '';
    [...selected].sort().forEach(name => {
        html += `
        <div class="review-item">
            <span>${name}</span>
            <span class="btn-delete" onclick="toggleGame('${name.replace(/'/g, "\\'") }'); viewOrder()">✕</span>
        </div>`;
    });
    container.innerHTML = html;
}

function closeReview() { document.getElementById('reviewModal').classList.remove('active'); }

function openWhatsAppModal() { 
    if(!selected.size) return alert("Selecciona juegos primero."); 
    document.getElementById('whatsappModal').classList.add('active'); 
}

function closeModal() { document.getElementById('whatsappModal').classList.remove('active'); }

function sendWhatsApp() {
    const name = document.getElementById('clientName').value;
    const model = document.getElementById('clientModel').value;
    const color = document.getElementById('clientColor').value;
    
    const preset = document.getElementById('sdPreset').value;
    const sdReal = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    
    let listText = "";
    let gTotal = 0;
    [...selected].sort().forEach(n => {
        const g = GAMES_DATA.find(x => x[0] === n);
        gTotal += g[1];
        listText += `[ ] ${n} (${g[1]} GB)\n`;
    });
    
    const totalUsed = gTotal + sysReserved;
    const free = sdReal - totalUsed;
    
    const rawMsg = `🎮 *PEDIDO FIXMOBITECH* 🎮
👤 *Cliente:* ${name}
📱 *Modelo:* ${model} | 🎨 ${color}
💾 *SD:* ${preset} GB (Real: ${sdReal} GB)

*JUEGOS:*
${listText}
📊 *Cant:* ${selected.size} | 📦 *Peso:* ${gTotal.toFixed(1)} GB
⚙️ *Sistema:* ${sysReserved} GB
Total Ocupado: ${totalUsed.toFixed(1)} GB
${free >= 0 ? '✅ Espacio OK' : '⚠️ Falta Espacio (' + free.toFixed(1) + ' GB)'}`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(rawMsg)}`, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', init);
