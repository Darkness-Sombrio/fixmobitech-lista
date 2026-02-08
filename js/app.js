
// Ensure data is valid
let GAMES_DATA;
try {
    GAMES_DATA = [["Alien: Isolation", 17.7, "👻 Terror", 2019, "Terror", "#880000"], ["Amnesia: Collection", 5.5, "👻 Terror", 2019, "Terror", "#880000"], ["Among Us", 0.6, "🎉 Party", 2020, "Party", "#ffcc00"], ["Animal Crossing: New Horizons", 10.9, "🌱 Simulación", 2020, "Simulación", "#00ffcc"], ["Apex Legends", 27.0, "🔫 Shooter", 2021, "Shooter", "#4da6ff"], ["Arms", 2.2, "🥊 Pelea", 2017, "Pelea", "#ff4d4d"], ["Assassin's Creed III Remastered", 12.1, "🗺️ Aventura", 2019, "Aventura", "#4dff88"], ["Assassin's Creed IV: Black Flag", 11.8, "🗺️ Aventura", 2019, "Aventura", "#4dff88"], ["Assassin's Creed: The Ezio Collection", 35.0, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["Astral Chain", 9.6, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia", "#008888"], ["Batman: Arkham Trilogy", 45.0, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Bayonetta 2", 12.4, "💥 Acción", 2018, "Acción", "#ffaa4d"], ["Bayonetta 3", 15.0, "💥 Acción", 2022, "Acción", "#ffaa4d"], ["Bayonetta Origins: Cereza and the Lost Demon", 3.5, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Bioshock: The Collection", 31.0, "🔫 Shooter", 2020, "Shooter", "#4da6ff"], ["Borderlands Legendary Collection", 48.0, "🔫 Shooter", 2020, "Shooter", "#4da6ff"], ["Captain Toad: Treasure Tracker", 1.6, "🧩 Puzzle", 2018, "Puzzle", "#cc4dff"], ["Castlevania Advance Collection", 0.8, "🏃 Plataformas", 2021, "Plataformas", "#ff4da6"], ["Castlevania Anniversary Collection", 0.6, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Clubhouse Games: 51 Worldwide Classics", 2.1, "🎉 Party", 2020, "Party", "#ffcc00"], ["Cocoon", 1.8, "🧩 Puzzle", 2023, "Puzzle", "#cc4dff"], ["Contra Anniversary Collection", 0.4, "🔫 Shooter", 2019, "Shooter", "#4da6ff"], ["Crash Bandicoot 4: It's About Time", 9.4, "🏃 Plataformas", 2021, "Plataformas", "#ff4da6"], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Crash Team Racing Nitro-Fueled", 9.3, "🏎️ Carreras", 2019, "Carreras", "#ffff4d"], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike", "#884400"], ["Cuphead", 3.3, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"], ["Dark Souls Remastered", 3.9, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación", "#00ffcc"], ["Dead Cells", 2.1, "💀 Roguelike", 2018, "Roguelike", "#884400"], ["Dead by Daylight", 15.0, "👻 Terror", 2019, "Terror", "#880000"], ["Deltarune Ch1+2", 0.4, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Demon Slayer: The Hinokami Chronicles", 9.0, "🥊 Pelea", 2022, "Pelea", "#ff4d4d"], ["Detective Pikachu Returns", 10.0, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Diablo II: Resurrected", 7.8, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Diablo III: Eternal Collection", 13.3, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Disney Dreamlight Valley", 4.5, "🌱 Simulación", 2023, "Simulación", "#00ffcc"], ["Disney Illusion Island", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Doom (2016)", 22.0, "🔫 Shooter", 2017, "Shooter", "#4da6ff"], ["Doom Eternal", 33.0, "🔫 Shooter", 2020, "Shooter", "#4da6ff"], ["Dragon Ball FighterZ", 9.8, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Dragon Ball Xenoverse 2", 18.0, "🥊 Pelea", 2017, "Pelea", "#ff4d4d"], ["Dragon Ball Z: Kakarot", 16.5, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Dragon Quest Treasures", 3.5, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Dragon Quest XI S", 13.8, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Dredge", 0.8, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Dying Light: Platinum Edition", 15.5, "👻 Terror", 2021, "Terror", "#880000"], ["FIFA 23 / EA Sports FC 24", 30.0, "⚽ Deportes", 2023, "Deportes", "#4d4dff"], ["Final Fantasy IX", 5.0, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Final Fantasy VII", 3.8, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Final Fantasy VIII Remastered", 2.6, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Final Fantasy X/X-2 HD Remaster", 26.9, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Final Fantasy XII The Zodiac Age", 12.6, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Fire Emblem Engage", 13.4, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Fire Emblem Warriors: Three Hopes", 13.4, "💥 Acción", 2022, "Acción", "#ffaa4d"], ["Fire Emblem: Three Houses", 11.9, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Five Nights at Freddy's: Core Collection", 2.0, "👻 Terror", 2021, "Terror", "#880000"], ["Five Nights at Freddy's: Security Breach", 10.0, "👻 Terror", 2023, "Terror", "#880000"], ["Fortnite", 15.6, "🔫 Shooter", 2018, "Shooter", "#4da6ff"], ["Friday the 13th: The Game", 4.5, "👻 Terror", 2019, "Terror", "#880000"], ["Grand Theft Auto: The Trilogy", 20.5, "💥 Acción", 2021, "Acción", "#ffaa4d"], ["Gris", 1.8, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Hades", 5.8, "💀 Roguelike", 2020, "Roguelike", "#884400"], ["Hatsune Miku: Project DIVA Mega Mix", 15.0, "🎵 Ritmo", 2020, "Ritmo", "#ff0088"], ["Hogwarts Legacy", 15.0, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Hollow Knight", 5.3, "🦇 Metroidvania", 2018, "Metroidvania", "#550055"], ["Hotline Miami Collection", 0.8, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["Hyrule Warriors: Age of Calamity", 10.9, "💥 Acción", 2020, "Acción", "#ffaa4d"], ["Hyrule Warriors: Definitive Edition", 12.9, "💥 Acción", 2018, "Acción", "#ffaa4d"], ["Inside", 1.5, "🗺️ Aventura", 2018, "Aventura", "#4dff88"], ["It Takes Two", 9.5, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["JoJo's Bizarre Adventure: All-Star Battle R", 4.5, "🥊 Pelea", 2022, "Pelea", "#ff4d4d"], ["Jump Force: Deluxe Edition", 12.0, "🥊 Pelea", 2020, "Pelea", "#ff4d4d"], ["Just Dance 2024", 0.6, "🎵 Ritmo", 2024, "Ritmo", "#ff0088"], ["Katana ZERO", 0.3, "💥 Acción", 2019, "Acción", "#ffaa4d"], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Kirby and the Forgotten Land", 5.8, "🏃 Plataformas", 2022, "Plataformas", "#ff4da6"], ["Kirby's Return to Dream Land Deluxe", 6.2, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["L.A. Noire", 27.4, "🗺️ Aventura", 2017, "Aventura", "#4dff88"], ["LEGO Harry Potter Collection", 7.5, "🗺️ Aventura", 2018, "Aventura", "#4dff88"], ["LEGO Star Wars: The Skywalker Saga", 14.0, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["Layers of Fear: Legacy", 3.0, "👻 Terror", 2018, "Terror", "#880000"], ["Limbo", 0.2, "🧩 Puzzle", 2018, "Puzzle", "#cc4dff"], ["Little Nightmares Complete", 3.5, "👻 Terror", 2018, "Terror", "#880000"], ["Little Nightmares II", 7.6, "👻 Terror", 2021, "Terror", "#880000"], ["Luigi's Mansion 2 HD", 3.2, "🗺️ Aventura", 2024, "Aventura", "#4dff88"], ["Luigi's Mansion 3", 6.4, "🗺️ Aventura", 2019, "Aventura", "#4dff88"], ["Mario Golf: Super Rush", 4.9, "⚽ Deportes", 2021, "Deportes", "#4d4dff"], ["Mario Kart 8 Deluxe", 12.5, "🏎️ Carreras", 2017, "Carreras", "#ffff4d"], ["Mario Party Superstars", 2.9, "🎉 Party", 2021, "Party", "#ffcc00"], ["Mario Strikers: Battle League", 3.0, "⚽ Deportes", 2022, "Deportes", "#4d4dff"], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018, "Deportes", "#4d4dff"], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle", "#cc4dff"], ["Mega Man 11", 2.5, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Mega Man Legacy Collections", 10.0, "🏃 Plataformas", 2018, "Plataformas", "#ff4da6"], ["Metal Gear Solid: Master Collection Vol.1", 25.0, "💥 Acción", 2023, "Acción", "#ffaa4d"], ["Metroid Dread", 4.1, "🦇 Metroidvania", 2021, "Metroidvania", "#550055"], ["Metroid Prime Remastered", 6.1, "🔫 Shooter", 2023, "Shooter", "#4da6ff"], ["Minecraft", 2.5, "🧱 Sandbox", 2017, "Sandbox", "#8b4513"], ["Monster Hunter Generations Ultimate", 11.8, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Monster Hunter Rise (+Sunbreak)", 18.2, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Mortal Kombat 1", 34.0, "🥊 Pelea", 2023, "Pelea", "#ff4d4d"], ["Mortal Kombat 11 (Ultimate)", 32.5, "🥊 Pelea", 2019, "Pelea", "#ff4d4d"], ["My Hero One's Justice 2", 6.0, "🥊 Pelea", 2020, "Pelea", "#ff4d4d"], ["NBA 2K24", 58.0, "⚽ Deportes", 2023, "Deportes", "#4d4dff"], ["Naruto Shippuden: UNS 4 Road to Boruto", 13.2, "🥊 Pelea", 2020, "Pelea", "#ff4d4d"], ["Naruto Trilogy", 17.6, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["New Pokémon Snap", 6.0, "🌱 Simulación", 2021, "Simulación", "#00ffcc"], ["New Super Mario Bros. U Deluxe", 2.5, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"], ["NieR: Automata", 10.9, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Nintendo Switch Sports", 3.2, "⚽ Deportes", 2022, "Deportes", "#4d4dff"], ["No Man's Sky", 5.0, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["One Piece: Pirate Warriors 4", 15.0, "💥 Acción", 2020, "Acción", "#ffaa4d"], ["Ori and the Blind Forest", 3.5, "🦇 Metroidvania", 2019, "Metroidvania", "#550055"], ["Ori and the Will of the Wisps", 4.2, "🦇 Metroidvania", 2020, "Metroidvania", "#550055"], ["Outlast 2", 9.6, "👻 Terror", 2018, "Terror", "#880000"], ["Outlast: Bundle of Terror", 5.7, "👻 Terror", 2018, "Terror", "#880000"], ["Overcooked! 2", 3.5, "🎉 Party", 2018, "Party", "#ffcc00"], ["Overcooked! All You Can Eat", 8.8, "🎉 Party", 2021, "Party", "#ffcc00"], ["Overwatch 2", 23.0, "🔫 Shooter", 2019, "Shooter", "#4da6ff"], ["Paper Mario: The Origami King", 6.0, "⚔️ RPG", 2020, "RPG", "#a64dff"], ["Paper Mario: The Thousand-Year Door", 5.1, "⚔️ RPG", 2024, "RPG", "#a64dff"], ["Persona 3 Portable", 4.0, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Persona 4 Golden", 3.5, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Pikmin 1+2", 2.5, "♟️ Estrategia", 2023, "Estrategia", "#008888"], ["Pikmin 3 Deluxe", 6.5, "♟️ Estrategia", 2020, "Estrategia", "#008888"], ["Pikmin 4", 10.5, "♟️ Estrategia", 2023, "Estrategia", "#008888"], ["Plants vs. Zombies: Battle for Neighborville", 6.5, "🔫 Shooter", 2021, "Shooter", "#4da6ff"], ["Pokémon Brilliant Diamond / Shining Pearl", 6.9, "⚔️ RPG", 2021, "RPG", "#a64dff"], ["Pokémon Legends: Arceus", 6.1, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Pokémon Let's Go Pikachu / Eevee", 4.2, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Pokémon Scarlet / Violet", 10.5, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Pokémon Sword / Shield", 12.8, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Pokémon Unite", 1.5, "♟️ Estrategia", 2021, "Estrategia", "#008888"], ["Prince of Persia: The Lost Crown", 6.8, "🦇 Metroidvania", 2024, "Metroidvania", "#550055"], ["Princess Peach: Showtime!", 4.7, "🗺️ Aventura", 2024, "Aventura", "#4dff88"], ["Red Dead Redemption", 11.4, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["Resident Evil", 3.6, "👻 Terror", 2019, "Terror", "#880000"], ["Resident Evil 0", 3.6, "👻 Terror", 2019, "Terror", "#880000"], ["Resident Evil 4 (Original)", 4.0, "👻 Terror", 2019, "Terror", "#880000"], ["Resident Evil 5", 18.7, "👻 Terror", 2019, "Terror", "#880000"], ["Resident Evil 6", 17.6, "👻 Terror", 2019, "Terror", "#880000"], ["Resident Evil Revelations 1+2", 35.0, "👻 Terror", 2017, "Terror", "#880000"], ["Ring Fit Adventure", 2.8, "⚽ Deportes", 2019, "Deportes", "#4d4dff"], ["Rocket League", 21.0, "⚽ Deportes", 2017, "Deportes", "#4d4dff"], ["Sea of Stars", 3.9, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Shovel Knight: Treasure Trove", 0.5, "🏃 Plataformas", 2017, "Plataformas", "#ff4da6"], ["Sid Meier's Civilization VI", 12.0, "♟️ Estrategia", 2018, "Estrategia", "#008888"], ["Slay the Spire", 0.5, "♟️ Estrategia", 2019, "Estrategia", "#008888"], ["Sonic Frontiers", 10.4, "🏃 Plataformas", 2022, "Plataformas", "#ff4da6"], ["Sonic Mania", 0.4, "🏃 Plataformas", 2017, "Plataformas", "#ff4da6"], ["Sonic Superstars", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["South Park: Snow Day!", 9.0, "💥 Acción", 2024, "Acción", "#ffaa4d"], ["South Park: The Fractured But Whole", 14.5, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["South Park: The Stick of Truth", 4.8, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Spiritfarer", 1.4, "🌱 Simulación", 2020, "Simulación", "#00ffcc"], ["Splatoon 2", 6.1, "🔫 Shooter", 2017, "Shooter", "#4da6ff"], ["Splatoon 3", 8.2, "🔫 Shooter", 2022, "Shooter", "#4da6ff"], ["SpongeBob SquarePants: Battle for Bikini Bottom", 10.0, "🏃 Plataformas", 2020, "Plataformas", "#ff4da6"], ["SpongeBob SquarePants: The Cosmic Shake", 6.0, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"], ["Star Wars: Battlefront Classic", 25.0, "🔫 Shooter", 2024, "Shooter", "#4da6ff"], ["Stardew Valley", 1.5, "🌱 Simulación", 2017, "Simulación", "#00ffcc"], ["Street Fighter 30th Anniversary", 5.1, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Subnautica", 6.2, "🌱 Simulación", 2021, "Simulación", "#00ffcc"], ["Subnautica: Below Zero", 5.0, "🌱 Simulación", 2021, "Simulación", "#00ffcc"], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas", "#ff4da6"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas", "#ff4da6"], ["Super Mario Maker 2", 2.8, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"], ["Super Mario Odyssey", 5.7, "🏃 Plataformas", 2017, "Plataformas", "#ff4da6"], ["Super Mario Party", 2.7, "🎉 Party", 2018, "Party", "#ffcc00"], ["Super Mario RPG", 6.5, "⚔️ RPG", 2023, "RPG", "#a64dff"], ["Super Smash Bros. Ultimate", 17.5, "🥊 Pelea", 2018, "Pelea", "#ff4d4d"], ["Taiko no Tatsujin: Rhythm Festival", 3.5, "🎵 Ritmo", 2022, "Ritmo", "#ff0088"], ["Teenage Mutant Ninja Turtles: Cowanbunga", 2.8, "🥊 Pelea", 2022, "Pelea", "#ff4d4d"], ["Teenage Mutant Ninja Turtles: Shredder's Revenge", 0.9, "🥊 Pelea", 2022, "Pelea", "#ff4d4d"], ["Terraria", 0.4, "🧱 Sandbox", 2019, "Sandbox", "#8b4513"], ["The Binding of Isaac: Repentance", 1.8, "💀 Roguelike", 2021, "Roguelike", "#884400"], ["The Elder Scrolls V: Skyrim", 14.5, "⚔️ RPG", 2017, "RPG", "#a64dff"], ["The Legend of Zelda: Breath of the Wild", 16.0, "🗺️ Aventura", 2017, "Aventura", "#4dff88"], ["The Legend of Zelda: Echoes of Wisdom", 6.0, "🗺️ Aventura", 2024, "Aventura", "#4dff88"], ["The Legend of Zelda: Link's Awakening", 5.8, "🗺️ Aventura", 2019, "Aventura", "#4dff88"], ["The Legend of Zelda: Skyward Sword HD", 7.1, "🗺️ Aventura", 2021, "Aventura", "#4dff88"], ["The Legend of Zelda: Tears of the Kingdom", 16.3, "🗺️ Aventura", 2023, "Aventura", "#4dff88"], ["The Witcher 3: Wild Hunt (Complete)", 32.5, "⚔️ RPG", 2019, "RPG", "#a64dff"], ["Tomb Raider I-III Remastered", 5.0, "🗺️ Aventura", 2024, "Aventura", "#4dff88"], ["Tony Hawk's Pro Skater 1+2", 10.0, "⚽ Deportes", 2021, "Deportes", "#4d4dff"], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura", "#4dff88"], ["Undertale", 0.3, "⚔️ RPG", 2018, "RPG", "#a64dff"], ["Unicorn Overlord", 6.5, "⚔️ RPG", 2024, "RPG", "#a64dff"], ["Unpacking", 0.6, "🌱 Simulación", 2021, "Simulación", "#00ffcc"], ["Untitled Goose Game", 0.8, "🧩 Puzzle", 2019, "Puzzle", "#cc4dff"], ["Vampire Survivors", 0.4, "💀 Roguelike", 2023, "Roguelike", "#884400"], ["Warframe", 19.5, "🔫 Shooter", 2018, "Shooter", "#4da6ff"], ["WarioWare: Get It Together!", 1.3, "🎉 Party", 2021, "Party", "#ffcc00"], ["WarioWare: Move It!", 1.5, "🎉 Party", 2023, "Party", "#ffcc00"], ["Wolfenstein II: The New Colossus", 23.0, "🔫 Shooter", 2018, "Shooter", "#4da6ff"], ["XCOM 2 Collection", 24.0, "♟️ Estrategia", 2020, "Estrategia", "#008888"], ["Xenoblade Chronicles 2", 13.2, "⚔️ RPG", 2017, "RPG", "#a64dff"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG", "#a64dff"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG", "#a64dff"], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019, "Plataformas", "#ff4da6"]];
} catch(e) {
    console.error("Error parsing games data:", e);
    GAMES_DATA = [];
    alert("Error cargando base de datos. Recarga la página.");
}

const CATEGORIES = ["Acción", "Aventura", "Carreras", "Deportes", "Estrategia", "Metroidvania", "Party", "Pelea", "Plataformas", "Puzzle", "RPG", "Ritmo", "Roguelike", "Sandbox", "Shooter", "Simulación", "Terror"];
const PHONE_NUMBER = "528115139018";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100092204889914";

const SD_PRESETS = {
    "64": 58,
    "128": 119,
    "256": 238,
    "512": 476,
    "1024": 930
};

let GAMES = GAMES_DATA;
let activeCategory = 'all';
let currentSort = 'size_desc'; 
let selected = new Set();
let focusedIndex = -1;

function init() {
    console.log("Iniciando App... Total Juegos:", GAMES_DATA.length);
    createRain();
    renderCategoryOptions();
    applyFilters(); 
    updateStats();

    document.getElementById('search').addEventListener('input', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', (e) => { currentSort = e.target.value; applyFilters(); });
    document.getElementById('categorySelect').addEventListener('change', (e) => { activeCategory = e.target.value; applyFilters(); });
    document.getElementById('sdPreset').addEventListener('change', updateSDCapacity);
    document.getElementById('systemSpace').addEventListener('input', updateStats);
    document.addEventListener('keydown', handleKeyNavigation);
}

function updateSDCapacity() {
    updateStats(); 
    applyFilters(); 
}

function createRain() {
    const container = document.getElementById('rainContainer');
    const colors = ['#ff0055', '#00f3ff', '#4dff88', '#ffff4d', '#a64dff', '#ddd'];
    
    for(let i=0; i<35; i++) {
        const el = document.createElement('div');
        el.className = Math.random() > 0.5 ? 'joycon left' : 'joycon right'; 
        el.style.left = (Math.random() * 95) + 'vw'; /* Avoid overflow */
        el.style.animationDuration = (Math.random() * 8 + 8) + 's'; /* Slower fall */
        el.style.animationDelay = (Math.random() * 5) + 's';
        
        // Random Color (filter applied via style if needed, but background works best)
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const scale = Math.random() * 0.4 + 0.5;
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
    
    // Sort
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
    if(!container) return;

    if(!list || list.length === 0) { 
        container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;opacity:0.5;font-size:1.5rem">No se encontraron juegos 😢</div>'; 
        GAMES=[]; 
        return; 
    }
    
    GAMES = list;
    
    // Calculate current usage
    const preset = document.getElementById('sdPreset').value;
    const sdReal = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    let selectedSize = 0;
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) selectedSize += g[1]; });
    const currentFree = sdReal - (sysReserved + selectedSize);

    // Build HTML string efficiently
    const html = list.map((g, index) => {
        const isSel = selected.has(g[0]);
        const safeName = g[0].replace(/'/g, "\\'");
        const color = g[5]; 
        
        let noSpaceClass = "";
        // Only mark no-space if NOT selected and DOES NOT FIT
        if(!isSel && g[1] > currentFree) {
            noSpaceClass = "no-space";
        }

        return `
        <div class="game-card ${isSel ? 'selected' : ''} ${noSpaceClass}" style="border-left-color: ${color}" 
             data-index="${index}" onclick="toggleGame('${safeName}')">
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
    
    container.innerHTML = html;
}

function toggleGame(name) {
    const preset = document.getElementById('sdPreset').value;
    const sdSize = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    
    if(!selected.has(name)) {
        let currentTotal = 0;
        selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) currentTotal += g[1]; });
        
        const game = GAMES_DATA.find(x => x[0] === name);
        if(!game) return;

        const newTotal = currentTotal + sysReserved + game[1];
        
        if(newTotal > sdSize) {
            alert("⚠️ ¡MEMORIA LLENA!\nNo cabe más juegos. Revisa tu lista para borrar.");
            // Optional: Auto scroll top?
            // window.scrollTo(0,0);
            viewOrder();
            return;
        }
        selected.add(name);
    } else {
        selected.delete(name);
    }
    
    applyFilters(); // Re-render logic
    updateFocusVisuals();
}

function handleKeyNavigation(e) {
    // Simplified for performance
}
function updateFocusVisuals() {} // Placeholder if needed

function updateStats() {
    const preset = document.getElementById('sdPreset').value;
    const sdSize = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    
    let gamesTotal = 0;
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) gamesTotal += g[1]; });
    
    const totalUsed = gamesTotal + sysReserved;
    const free = sdSize - totalUsed;
    
    // Percent
    const sysP = Math.min((sysReserved / sdSize) * 100, 100);
    const gameP = Math.min((gamesTotal / sdSize) * 100, 100 - sysP);
    
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
        // Three sections: System (Gray), Games (Blue), Free (Transparent)
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
