
// Data Handling
let GAMES_DATA;
try { GAMES_DATA = [["Alien: Isolation", 17.7, "👻 Terror", 2019, "Terror", "#ff0000"], ["Amnesia: Collection", 5.5, "👻 Terror", 2019, "Terror", "#ff0000"], ["Among Us", 0.6, "🎉 Party", 2020, "Party", "#ffdd00"], ["Animal Crossing: New Horizons", 10.9, "🌱 Simulación", 2020, "Simulación", "#00ff99"], ["Apex Legends", 27.0, "🔫 Shooter", 2021, "Shooter", "#00aaff"], ["Arms", 2.2, "🥊 Pelea", 2017, "Pelea", "#ff2a2a"], ["Assassin's Creed III Remastered", 12.1, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Assassin's Creed IV: Black Flag", 11.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Assassin's Creed: The Ezio Collection", 35.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Astral Chain", 9.6, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia", "#00ffff"], ["Batman: Arkham Trilogy", 45.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Bayonetta 2", 12.4, "💥 Acción", 2018, "Acción", "#ffaa00"], ["Bayonetta 3", 15.0, "💥 Acción", 2022, "Acción", "#ffaa00"], ["Bayonetta Origins: Cereza and the Lost Demon", 3.5, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Bioshock: The Collection", 31.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Borderlands Legendary Collection", 48.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Captain Toad: Treasure Tracker", 1.6, "🧩 Puzzle", 2018, "Puzzle", "#d400ff"], ["Castlevania Advance Collection", 0.8, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Castlevania Anniversary Collection", 0.6, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Clubhouse Games: 51 Worldwide Classics", 2.1, "🎉 Party", 2020, "Party", "#ffdd00"], ["Cocoon", 1.8, "🧩 Puzzle", 2023, "Puzzle", "#d400ff"], ["Contra Anniversary Collection", 0.4, "🔫 Shooter", 2019, "Shooter", "#00aaff"], ["Crash Bandicoot 4: It's About Time", 9.4, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Crash Team Racing Nitro-Fueled", 9.3, "🏎️ Carreras", 2019, "Carreras", "#fff200"], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike", "#ff5500"], ["Cuphead", 3.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Dark Souls Remastered", 3.9, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación", "#00ff99"], ["Dead Cells", 2.1, "💀 Roguelike", 2018, "Roguelike", "#ff5500"], ["Dead by Daylight", 15.0, "👻 Terror", 2019, "Terror", "#ff0000"], ["Deltarune Ch1+2", 0.4, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Demon Slayer: The Hinokami Chronicles", 9.0, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Detective Pikachu Returns", 10.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Diablo II: Resurrected", 7.8, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Diablo III: Eternal Collection", 13.3, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Disney Dreamlight Valley", 4.5, "🌱 Simulación", 2023, "Simulación", "#00ff99"], ["Disney Illusion Island", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Doom (2016)", 22.0, "🔫 Shooter", 2017, "Shooter", "#00aaff"], ["Doom Eternal", 33.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Dragon Ball FighterZ", 9.8, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["Dragon Ball Xenoverse 2", 18.0, "🥊 Pelea", 2017, "Pelea", "#ff2a2a"], ["Dragon Ball Z: Kakarot", 16.5, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Dragon Quest Treasures", 3.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Dragon Quest XI S", 13.8, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Dredge", 0.8, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Dying Light: Platinum Edition", 15.5, "👻 Terror", 2021, "Terror", "#ff0000"], ["FIFA 23 / EA Sports FC 24", 30.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff"], ["Final Fantasy IX", 5.0, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy VII", 3.8, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy VIII Remastered", 2.6, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy X/X-2 HD Remaster", 26.9, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy XII The Zodiac Age", 12.6, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Fire Emblem Engage", 13.4, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Fire Emblem Warriors: Three Hopes", 13.4, "💥 Acción", 2022, "Acción", "#ffaa00"], ["Fire Emblem: Three Houses", 11.9, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Five Nights at Freddy's: Core Collection", 2.0, "👻 Terror", 2021, "Terror", "#ff0000"], ["Five Nights at Freddy's: Security Breach", 10.0, "👻 Terror", 2023, "Terror", "#ff0000"], ["Fortnite", 15.6, "🔫 Shooter", 2018, "Shooter", "#00aaff"], ["Friday the 13th: The Game", 4.5, "👻 Terror", 2019, "Terror", "#ff0000"], ["Grand Theft Auto: The Trilogy", 20.5, "💥 Acción", 2021, "Acción", "#ffaa00"], ["Gris", 1.8, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Hades", 5.8, "💀 Roguelike", 2020, "Roguelike", "#ff5500"], ["Hatsune Miku: Project DIVA Mega Mix", 15.0, "🎵 Ritmo", 2020, "Ritmo", "#ff0044"], ["Hogwarts Legacy", 15.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Hollow Knight", 5.3, "🦇 Metroidvania", 2018, "Metroidvania", "#9900ff"], ["Hotline Miami Collection", 0.8, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Hyrule Warriors: Age of Calamity", 10.9, "💥 Acción", 2020, "Acción", "#ffaa00"], ["Hyrule Warriors: Definitive Edition", 12.9, "💥 Acción", 2018, "Acción", "#ffaa00"], ["Inside", 1.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c"], ["It Takes Two", 9.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["JoJo's Bizarre Adventure: All-Star Battle R", 4.5, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Jump Force: Deluxe Edition", 12.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a"], ["Just Dance 2024", 0.6, "🎵 Ritmo", 2024, "Ritmo", "#ff0044"], ["Katana ZERO", 0.3, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Kirby and the Forgotten Land", 5.8, "🏃 Plataformas", 2022, "Plataformas", "#ff0088"], ["Kirby's Return to Dream Land Deluxe", 6.2, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["L.A. Noire", 27.4, "🗺️ Aventura", 2017, "Aventura", "#0aff6c"], ["LEGO Harry Potter Collection", 7.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c"], ["LEGO Star Wars: The Skywalker Saga", 14.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Layers of Fear: Legacy", 3.0, "👻 Terror", 2018, "Terror", "#ff0000"], ["Limbo", 0.2, "🧩 Puzzle", 2018, "Puzzle", "#d400ff"], ["Little Nightmares Complete", 3.5, "👻 Terror", 2018, "Terror", "#ff0000"], ["Little Nightmares II", 7.6, "👻 Terror", 2021, "Terror", "#ff0000"], ["Luigi's Mansion 2 HD", 3.2, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Luigi's Mansion 3", 6.4, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Mario Golf: Super Rush", 4.9, "⚽ Deportes", 2021, "Deportes", "#2a59ff"], ["Mario Kart 8 Deluxe", 12.5, "🏎️ Carreras", 2017, "Carreras", "#fff200"], ["Mario Party Superstars", 2.9, "🎉 Party", 2021, "Party", "#ffdd00"], ["Mario Strikers: Battle League", 3.0, "⚽ Deportes", 2022, "Deportes", "#2a59ff"], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018, "Deportes", "#2a59ff"], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle", "#d400ff"], ["Mega Man 11", 2.5, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Mega Man Legacy Collections", 10.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Metal Gear Solid: Master Collection Vol.1", 25.0, "💥 Acción", 2023, "Acción", "#ffaa00"], ["Metroid Dread", 4.1, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff"], ["Metroid Prime Remastered", 6.1, "🔫 Shooter", 2023, "Shooter", "#00aaff"], ["Minecraft", 2.5, "🧱 Sandbox", 2017, "Sandbox", "#aa5500"], ["Monster Hunter Generations Ultimate", 11.8, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Monster Hunter Rise (+Sunbreak)", 18.2, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Mortal Kombat 1", 34.0, "🥊 Pelea", 2023, "Pelea", "#ff2a2a"], ["Mortal Kombat 11 (Ultimate)", 32.5, "🥊 Pelea", 2019, "Pelea", "#ff2a2a"], ["My Hero One's Justice 2", 6.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a"], ["NBA 2K24", 58.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff"], ["Naruto Shippuden: UNS 4 Road to Boruto", 13.2, "🥊 Pelea", 2020, "Pelea", "#ff2a2a"], ["Naruto Trilogy", 17.6, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["New Pokémon Snap", 6.0, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["New Super Mario Bros. U Deluxe", 2.5, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["NieR: Automata", 10.9, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Nintendo Switch Sports", 3.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff"], ["No Man's Sky", 5.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["One Piece: Pirate Warriors 4", 15.0, "💥 Acción", 2020, "Acción", "#ffaa00"], ["Ori and the Blind Forest", 3.5, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff"], ["Ori and the Will of the Wisps", 4.2, "🦇 Metroidvania", 2020, "Metroidvania", "#9900ff"], ["Outlast 2", 9.6, "👻 Terror", 2018, "Terror", "#ff0000"], ["Outlast: Bundle of Terror", 5.7, "👻 Terror", 2018, "Terror", "#ff0000"], ["Overcooked! 2", 3.5, "🎉 Party", 2018, "Party", "#ffdd00"], ["Overcooked! All You Can Eat", 8.8, "🎉 Party", 2021, "Party", "#ffdd00"], ["Overwatch 2", 23.0, "🔫 Shooter", 2019, "Shooter", "#00aaff"], ["Paper Mario: The Origami King", 6.0, "⚔️ RPG", 2020, "RPG", "#bd00ff"], ["Paper Mario: The Thousand-Year Door", 5.1, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Persona 3 Portable", 4.0, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Persona 4 Golden", 3.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Pikmin 1+2", 2.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Pikmin 3 Deluxe", 6.5, "♟️ Estrategia", 2020, "Estrategia", "#00ffff"], ["Pikmin 4", 10.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Plants vs. Zombies: Battle for Neighborville", 6.5, "🔫 Shooter", 2021, "Shooter", "#00aaff"], ["Pokémon Brilliant Diamond / Shining Pearl", 6.9, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Pokémon Legends: Arceus", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Pokémon Let's Go Pikachu / Eevee", 4.2, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Pokémon Scarlet / Violet", 10.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Pokémon Sword / Shield", 12.8, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Pokémon Unite", 1.5, "♟️ Estrategia", 2021, "Estrategia", "#00ffff"], ["Prince of Persia: The Lost Crown", 6.8, "🦇 Metroidvania", 2024, "Metroidvania", "#9900ff"], ["Princess Peach: Showtime!", 4.7, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Red Dead Redemption", 11.4, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Resident Evil", 3.6, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 0", 3.6, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 4 (Original)", 4.0, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 5", 18.7, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 6", 17.6, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil Revelations 1+2", 35.0, "👻 Terror", 2017, "Terror", "#ff0000"], ["Ring Fit Adventure", 2.8, "⚽ Deportes", 2019, "Deportes", "#2a59ff"], ["Rocket League", 21.0, "⚽ Deportes", 2017, "Deportes", "#2a59ff"], ["Sea of Stars", 3.9, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Shovel Knight: Treasure Trove", 0.5, "🏃 Plataformas", 2017, "Plataformas", "#ff0088"], ["Sid Meier's Civilization VI", 12.0, "♟️ Estrategia", 2018, "Estrategia", "#00ffff"], ["Slay the Spire", 0.5, "♟️ Estrategia", 2019, "Estrategia", "#00ffff"], ["Sonic Frontiers", 10.4, "🏃 Plataformas", 2022, "Plataformas", "#ff0088"], ["Sonic Mania", 0.4, "🏃 Plataformas", 2017, "Plataformas", "#ff0088"], ["Sonic Superstars", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["South Park: Snow Day!", 9.0, "💥 Acción", 2024, "Acción", "#ffaa00"], ["South Park: The Fractured But Whole", 14.5, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["South Park: The Stick of Truth", 4.8, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Spiritfarer", 1.4, "🌱 Simulación", 2020, "Simulación", "#00ff99"], ["Splatoon 2", 6.1, "🔫 Shooter", 2017, "Shooter", "#00aaff"], ["Splatoon 3", 8.2, "🔫 Shooter", 2022, "Shooter", "#00aaff"], ["SpongeBob SquarePants: Battle for Bikini Bottom", 10.0, "🏃 Plataformas", 2020, "Plataformas", "#ff0088"], ["SpongeBob SquarePants: The Cosmic Shake", 6.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Star Wars: Battlefront Classic", 25.0, "🔫 Shooter", 2024, "Shooter", "#00aaff"], ["Stardew Valley", 1.5, "🌱 Simulación", 2017, "Simulación", "#00ff99"], ["Street Fighter 30th Anniversary", 5.1, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["Subnautica", 6.2, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Subnautica: Below Zero", 5.0, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Super Mario Maker 2", 2.8, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Super Mario Odyssey", 5.7, "🏃 Plataformas", 2017, "Plataformas", "#ff0088"], ["Super Mario Party", 2.7, "🎉 Party", 2018, "Party", "#ffdd00"], ["Super Mario RPG", 6.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Super Smash Bros. Ultimate", 17.5, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["Taiko no Tatsujin: Rhythm Festival", 3.5, "🎵 Ritmo", 2022, "Ritmo", "#ff0044"], ["Teenage Mutant Ninja Turtles: Cowanbunga", 2.8, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Teenage Mutant Ninja Turtles: Shredder's Revenge", 0.9, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Terraria", 0.4, "🧱 Sandbox", 2019, "Sandbox", "#aa5500"], ["The Binding of Isaac: Repentance", 1.8, "💀 Roguelike", 2021, "Roguelike", "#ff5500"], ["The Elder Scrolls V: Skyrim", 14.5, "⚔️ RPG", 2017, "RPG", "#bd00ff"], ["The Legend of Zelda: Breath of the Wild", 16.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c"], ["The Legend of Zelda: Echoes of Wisdom", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["The Legend of Zelda: Link's Awakening", 5.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["The Legend of Zelda: Skyward Sword HD", 7.1, "🗺️ Aventura", 2021, "Aventura", "#0aff6c"], ["The Legend of Zelda: Tears of the Kingdom", 16.3, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["The Witcher 3: Wild Hunt (Complete)", 32.5, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Tomb Raider I-III Remastered", 5.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Tony Hawk's Pro Skater 1+2", 10.0, "⚽ Deportes", 2021, "Deportes", "#2a59ff"], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Undertale", 0.3, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Unicorn Overlord", 6.5, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Unpacking", 0.6, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Untitled Goose Game", 0.8, "🧩 Puzzle", 2019, "Puzzle", "#d400ff"], ["Vampire Survivors", 0.4, "💀 Roguelike", 2023, "Roguelike", "#ff5500"], ["Warframe", 19.5, "🔫 Shooter", 2018, "Shooter", "#00aaff"], ["WarioWare: Get It Together!", 1.3, "🎉 Party", 2021, "Party", "#ffdd00"], ["WarioWare: Move It!", 1.5, "🎉 Party", 2023, "Party", "#ffdd00"], ["Wolfenstein II: The New Colossus", 23.0, "🔫 Shooter", 2018, "Shooter", "#00aaff"], ["XCOM 2 Collection", 24.0, "♟️ Estrategia", 2020, "Estrategia", "#00ffff"], ["Xenoblade Chronicles 2", 13.2, "⚔️ RPG", 2017, "RPG", "#bd00ff"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG", "#bd00ff"], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"]]; } catch(e) { GAMES_DATA = []; alert("Error Data"); }

const CATEGORIES = ["Acción", "Aventura", "Carreras", "Deportes", "Estrategia", "Metroidvania", "Party", "Pelea", "Plataformas", "Puzzle", "RPG", "Ritmo", "Roguelike", "Sandbox", "Shooter", "Simulación", "Terror"];
const PHONE_NUMBER = "528115139018";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100092204889914";

const SD_PRESETS = { "64": 58, "128": 119, "256": 238, "512": 476, "1024": 930 };

let GAMES = GAMES_DATA;
let activeCategory = 'all';
let currentSort = 'size_desc'; 
let selected = new Set();

function init() {
    createRain();
    renderCategoryOptions();
    applyFilters(); 
    updateStats();
    
    // Listeners
    document.getElementById('search').addEventListener('input', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', (e) => { currentSort = e.target.value; applyFilters(); });
    document.getElementById('categorySelect').addEventListener('change', (e) => { activeCategory = e.target.value; applyFilters(); });
    document.getElementById('sdPreset').addEventListener('change', updateSDCapacity);
    document.getElementById('systemSpace').addEventListener('input', updateStats);
}

function updateSDCapacity() { updateStats(); applyFilters(); }

function createRain() {
    const container = document.getElementById('rainContainer');
    const colors = ['#fcee0a', '#00ff41', '#ff003c', '#00f0ff']; // Cyber Colors
    
    for(let i=0; i<35; i++) {
        const el = document.createElement('div');
        // Randomly assign Left/Right class for specific shape logic
        const type = Math.random() > 0.5 ? 'left' : 'right';
        el.className = `joycon ${type}`; 
        
        // Structure for detailed CSS shapes
        const stick = document.createElement('div'); // Pseudo handled in CSS, but explicit elements act as anchors if needed.
        // Actually, CSS pseudo-elements (:before/:after) handle the details based on the class.
        
        // Add Button Groups anchors (optional if CSS handles it, but let's stick to CSS pseudos)
        const btnGroup = document.createElement('div');
        btnGroup.className = 'btn-group';
        el.appendChild(btnGroup);

        if(type === 'left') {
            const minus = document.createElement('div'); minus.className = 'btn-small'; el.appendChild(minus);
            const capture = document.createElement('div'); capture.className = 'btn-capture'; el.appendChild(capture);
        } else {
            const plus = document.createElement('div'); plus.className = 'btn-small'; el.appendChild(plus);
            const home = document.createElement('div'); home.className = 'btn-home'; el.appendChild(home);
        }

        el.style.left = (Math.random() * 95) + 'vw';
        el.style.animationDuration = (Math.random() * 10 + 10) + 's'; // Slow matrix fall
        el.style.animationDelay = (Math.random() * 5) + 's';
        
        // Cyber Colors override
        const color = colors[Math.floor(Math.random() * colors.length)];
        el.style.background = color;
        // Also tint the buttons slightly? No, keep buttons black/dark for realism overlay
        
        const scale = Math.random() * 0.4 + 0.6;
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
    if(!list.length) { container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;font-size:1.5rem;color:#444">SYSTEM ERROR: NO GAMES FOUND</div>'; GAMES=[]; return; }
    GAMES = list;
    
    const preset = document.getElementById('sdPreset').value;
    const sdReal = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    let selectedSize = 0;
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) selectedSize += g[1]; });
    const currentFree = sdReal - (sysReserved + selectedSize);

    const html = list.map((g, index) => {
        const isSel = selected.has(g[0]);
        const safeName = g[0].replace(/'/g, "\\'");
        const color = g[5]; // Category Color
        let noSpaceClass = (!isSel && g[1] > currentFree) ? "no-space" : "";

        return `
        <div class="game-card ${isSel ? 'selected' : ''} ${noSpaceClass}" 
             onclick="toggleGame('${safeName}')">
            <div class="card-content">
                <h3>${g[0]}</h3>
                <div class="game-meta">
                    <span class="game-cat-badge" style="background:${color}">${g[4]}</span>
                    <span class="game-size">${g[1]} GB</span>
                </div>
            </div>
            <div class="checkbox">
                <div class="check-circle"></div>
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
        if((currentTotal + sysReserved + game[1]) > sdSize) {
            alert("⚠️ SYSTEM FAILURE: MEMORY FULL ⚠️");
            viewOrder(); return;
        }
        selected.add(name);
    } else { selected.delete(name); }
    
    applyFilters(); updateStats();
}

function updateStats() {
    const preset = document.getElementById('sdPreset').value;
    const sdSize = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    
    let gamesTotal = 0;
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if(g) gamesTotal += g[1]; });
    
    const free = sdSize - (gamesTotal + sysReserved);
    const sysP = Math.min((sysReserved / sdSize) * 100, 100);
    const gameP = Math.min((gamesTotal / sdSize) * 100, 100 - sysP);
    
    document.getElementById('selectedCount').innerText = selected.size;
    document.getElementById('totalSize').innerText = gamesTotal.toFixed(1) + " GB";
    document.getElementById('freeSpace').innerText = free.toFixed(1) + " GB";
    
    // Cyber Bar
    const bar = document.getElementById('sdProgress');
    const p1 = sysP.toFixed(1);
    const p2 = (sysP + gameP).toFixed(1);

    if(free < 0) {
        bar.style.background = `repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #300 10px, #300 20px)`; 
        bar.style.width = '100%';
    } else {
        bar.style.background = `linear-gradient(90deg, #333 0%, #333 ${p1}%, #fcee0a ${p1}%, #fcee0a ${p2}%, transparent ${p2}%)`;
        bar.style.width = '100%'; 
    }
}

function viewOrder() { document.getElementById('reviewModal').classList.add('active'); renderReviewList(); }
function closeReview() { document.getElementById('reviewModal').classList.remove('active'); }

function renderReviewList() {
    const container = document.getElementById('reviewList');
    if(!selected.size) { container.innerHTML = 'EMPTY_LIST...'; return; }
    let html = '';
    [...selected].sort().forEach(name => {
        html += `<div class="review-item"><span>${name}</span><span class="btn-delete" onclick="toggleGame('${name.replace(/'/g, "\\'") }'); renderReviewList()">DEL</span></div>`;
    });
    container.innerHTML = html;
}

function openWhatsAppModal() { if(!selected.size) return alert("NO DATA SELECTED"); document.getElementById('whatsappModal').classList.add('active'); }
function closeModal() { document.getElementById('whatsappModal').classList.remove('active'); }

function sendWhatsApp() {
    const name = document.getElementById('clientName').value;
    const model = document.getElementById('clientModel').value;
    const preset = document.getElementById('sdPreset').value;
    
    let listText = "";
    [...selected].sort().forEach(n => {
        const g = GAMES_DATA.find(x => x[0] === n);
        listText += `[ ] ${n} (${g[1]} GB)\n`;
    });
    
    const rawMsg = `🤖 *PEDIDO FIXMOBITECH* 🤖
👤 *CLIENTE:* ${name}
📱 *KONSOLE:* ${model}
💾 *MEMORY:* ${preset} GB

*DATA_DUMP:*
${listText}
✅ END_OF_LINE`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(rawMsg)}`, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', init);
