
let GAMES_DATA;
try { GAMES_DATA = [["Alien: Isolation", 17.7, "👻 Terror", 2019, "Terror", "#ff0000"], ["Amnesia: Collection", 5.5, "👻 Terror", 2019, "Terror", "#ff0000"], ["Among Us", 0.6, "🎉 Party", 2020, "Party", "#ffdd00"], ["Animal Crossing: New Horizons", 10.9, "🌱 Simulación", 2020, "Simulación", "#00ff99"], ["Apex Legends", 27.0, "🔫 Shooter", 2021, "Shooter", "#00aaff"], ["Arms", 2.2, "🥊 Pelea", 2017, "Pelea", "#ff2a2a"], ["Assassin's Creed III Remastered", 12.1, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Assassin's Creed IV: Black Flag", 11.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Assassin's Creed: The Ezio Collection", 35.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Astral Chain", 9.6, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia", "#00ffff"], ["Batman: Arkham Trilogy", 45.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Bayonetta 2", 12.4, "💥 Acción", 2018, "Acción", "#ffaa00"], ["Bayonetta 3", 15.0, "💥 Acción", 2022, "Acción", "#ffaa00"], ["Bayonetta Origins: Cereza and the Lost Demon", 3.5, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Bioshock: The Collection", 31.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Borderlands Legendary Collection", 48.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Captain Toad: Treasure Tracker", 1.6, "🧩 Puzzle", 2018, "Puzzle", "#d400ff"], ["Castlevania Advance Collection", 0.8, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Castlevania Anniversary Collection", 0.6, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Clubhouse Games: 51 Worldwide Classics", 2.1, "🎉 Party", 2020, "Party", "#ffdd00"], ["Cocoon", 1.8, "🧩 Puzzle", 2023, "Puzzle", "#d400ff"], ["Contra Anniversary Collection", 0.4, "🔫 Shooter", 2019, "Shooter", "#00aaff"], ["Crash Bandicoot 4: It's About Time", 9.4, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Crash Team Racing Nitro-Fueled", 9.3, "🏎️ Carreras", 2019, "Carreras", "#fff200"], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike", "#ff5500"], ["Cuphead", 3.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Dark Souls Remastered", 3.9, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación", "#00ff99"], ["Dead Cells", 2.1, "💀 Roguelike", 2018, "Roguelike", "#ff5500"], ["Dead by Daylight", 15.0, "👻 Terror", 2019, "Terror", "#ff0000"], ["Deltarune Ch1+2", 0.4, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Demon Slayer: The Hinokami Chronicles", 9.0, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Detective Pikachu Returns", 10.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Diablo II: Resurrected", 7.8, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Diablo III: Eternal Collection", 13.3, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Disney Dreamlight Valley", 4.5, "🌱 Simulación", 2023, "Simulación", "#00ff99"], ["Disney Illusion Island", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Doom (2016)", 22.0, "🔫 Shooter", 2017, "Shooter", "#00aaff"], ["Doom Eternal", 33.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Dragon Ball FighterZ", 9.8, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["Dragon Ball Xenoverse 2", 18.0, "🥊 Pelea", 2017, "Pelea", "#ff2a2a"], ["Dragon Ball Z: Kakarot", 16.5, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Dragon Quest Treasures", 3.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Dragon Quest XI S", 13.8, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Dredge", 0.8, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Dying Light: Platinum Edition", 15.5, "👻 Terror", 2021, "Terror", "#ff0000"], ["FIFA 23 / EA Sports FC 24", 30.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff"], ["Final Fantasy IX", 5.0, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy VII", 3.8, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy VIII Remastered", 2.6, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy X/X-2 HD Remaster", 26.9, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Final Fantasy XII The Zodiac Age", 12.6, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Fire Emblem Engage", 13.4, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Fire Emblem Warriors: Three Hopes", 13.4, "💥 Acción", 2022, "Acción", "#ffaa00"], ["Fire Emblem: Three Houses", 11.9, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Five Nights at Freddy's: Core Collection", 2.0, "👻 Terror", 2021, "Terror", "#ff0000"], ["Five Nights at Freddy's: Security Breach", 10.0, "👻 Terror", 2023, "Terror", "#ff0000"], ["Fortnite", 15.6, "🔫 Shooter", 2018, "Shooter", "#00aaff"], ["Friday the 13th: The Game", 4.5, "👻 Terror", 2019, "Terror", "#ff0000"], ["Grand Theft Auto: The Trilogy", 20.5, "💥 Acción", 2021, "Acción", "#ffaa00"], ["Gris", 1.8, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Hades", 5.8, "💀 Roguelike", 2020, "Roguelike", "#ff5500"], ["Hatsune Miku: Project DIVA Mega Mix", 15.0, "🎵 Ritmo", 2020, "Ritmo", "#ff0044"], ["Hogwarts Legacy", 15.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Hollow Knight", 5.3, "🦇 Metroidvania", 2018, "Metroidvania", "#9900ff"], ["Hotline Miami Collection", 0.8, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Hyrule Warriors: Age of Calamity", 10.9, "💥 Acción", 2020, "Acción", "#ffaa00"], ["Hyrule Warriors: Definitive Edition", 12.9, "💥 Acción", 2018, "Acción", "#ffaa00"], ["Inside", 1.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c"], ["It Takes Two", 9.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["JoJo's Bizarre Adventure: All-Star Battle R", 4.5, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Jump Force: Deluxe Edition", 12.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a"], ["Just Dance 2024", 0.6, "🎵 Ritmo", 2024, "Ritmo", "#ff0044"], ["Katana ZERO", 0.3, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Kirby and the Forgotten Land", 5.8, "🏃 Plataformas", 2022, "Plataformas", "#ff0088"], ["Kirby's Return to Dream Land Deluxe", 6.2, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["L.A. Noire", 27.4, "🗺️ Aventura", 2017, "Aventura", "#0aff6c"], ["LEGO Harry Potter Collection", 7.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c"], ["LEGO Star Wars: The Skywalker Saga", 14.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Layers of Fear: Legacy", 3.0, "👻 Terror", 2018, "Terror", "#ff0000"], ["Limbo", 0.2, "🧩 Puzzle", 2018, "Puzzle", "#d400ff"], ["Little Nightmares Complete", 3.5, "👻 Terror", 2018, "Terror", "#ff0000"], ["Little Nightmares II", 7.6, "👻 Terror", 2021, "Terror", "#ff0000"], ["Luigi's Mansion 2 HD", 3.2, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Luigi's Mansion 3", 6.4, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Mario Golf: Super Rush", 4.9, "⚽ Deportes", 2021, "Deportes", "#2a59ff"], ["Mario Kart 8 Deluxe", 12.5, "🏎️ Carreras", 2017, "Carreras", "#fff200"], ["Mario Party Superstars", 2.9, "🎉 Party", 2021, "Party", "#ffdd00"], ["Mario Strikers: Battle League", 3.0, "⚽ Deportes", 2022, "Deportes", "#2a59ff"], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018, "Deportes", "#2a59ff"], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle", "#d400ff"], ["Mega Man 11", 2.5, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Mega Man Legacy Collections", 10.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088"], ["Metal Gear Solid: Master Collection Vol.1", 25.0, "💥 Acción", 2023, "Acción", "#ffaa00"], ["Metroid Dread", 4.1, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff"], ["Metroid Prime Remastered", 6.1, "🔫 Shooter", 2023, "Shooter", "#00aaff"], ["Minecraft", 2.5, "🧱 Sandbox", 2017, "Sandbox", "#aa5500"], ["Monster Hunter Generations Ultimate", 11.8, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Monster Hunter Rise (+Sunbreak)", 18.2, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Mortal Kombat 1", 34.0, "🥊 Pelea", 2023, "Pelea", "#ff2a2a"], ["Mortal Kombat 11 (Ultimate)", 32.5, "🥊 Pelea", 2019, "Pelea", "#ff2a2a"], ["My Hero One's Justice 2", 6.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a"], ["NBA 2K24", 58.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff"], ["Naruto Shippuden: UNS 4 Road to Boruto", 13.2, "🥊 Pelea", 2020, "Pelea", "#ff2a2a"], ["Naruto Trilogy", 17.6, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["New Pokémon Snap", 6.0, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["New Super Mario Bros. U Deluxe", 2.5, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["NieR: Automata", 10.9, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Nintendo Switch Sports", 3.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff"], ["No Man's Sky", 5.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["One Piece: Pirate Warriors 4", 15.0, "💥 Acción", 2020, "Acción", "#ffaa00"], ["Ori and the Blind Forest", 3.5, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff"], ["Ori and the Will of the Wisps", 4.2, "🦇 Metroidvania", 2020, "Metroidvania", "#9900ff"], ["Outlast 2", 9.6, "👻 Terror", 2018, "Terror", "#ff0000"], ["Outlast: Bundle of Terror", 5.7, "👻 Terror", 2018, "Terror", "#ff0000"], ["Overcooked! 2", 3.5, "🎉 Party", 2018, "Party", "#ffdd00"], ["Overcooked! All You Can Eat", 8.8, "🎉 Party", 2021, "Party", "#ffdd00"], ["Overwatch 2", 23.0, "🔫 Shooter", 2019, "Shooter", "#00aaff"], ["Paper Mario: The Origami King", 6.0, "⚔️ RPG", 2020, "RPG", "#bd00ff"], ["Paper Mario: The Thousand-Year Door", 5.1, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Persona 3 Portable", 4.0, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Persona 4 Golden", 3.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Pikmin 1+2", 2.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Pikmin 3 Deluxe", 6.5, "♟️ Estrategia", 2020, "Estrategia", "#00ffff"], ["Pikmin 4", 10.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Plants vs. Zombies: Battle for Neighborville", 6.5, "🔫 Shooter", 2021, "Shooter", "#00aaff"], ["Pokémon Brilliant Diamond / Shining Pearl", 6.9, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Pokémon Legends: Arceus", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Pokémon Let's Go Pikachu / Eevee", 4.2, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Pokémon Scarlet / Violet", 10.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Pokémon Sword / Shield", 12.8, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Pokémon Unite", 1.5, "♟️ Estrategia", 2021, "Estrategia", "#00ffff"], ["Prince of Persia: The Lost Crown", 6.8, "🦇 Metroidvania", 2024, "Metroidvania", "#9900ff"], ["Princess Peach: Showtime!", 4.7, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Red Dead Redemption", 11.4, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Resident Evil", 3.6, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 0", 3.6, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 4 (Original)", 4.0, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 5", 18.7, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil 6", 17.6, "👻 Terror", 2019, "Terror", "#ff0000"], ["Resident Evil Revelations 1+2", 35.0, "👻 Terror", 2017, "Terror", "#ff0000"], ["Ring Fit Adventure", 2.8, "⚽ Deportes", 2019, "Deportes", "#2a59ff"], ["Rocket League", 21.0, "⚽ Deportes", 2017, "Deportes", "#2a59ff"], ["Sea of Stars", 3.9, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Shovel Knight: Treasure Trove", 0.5, "🏃 Plataformas", 2017, "Plataformas", "#ff0088"], ["Sid Meier's Civilization VI", 12.0, "♟️ Estrategia", 2018, "Estrategia", "#00ffff"], ["Slay the Spire", 0.5, "♟️ Estrategia", 2019, "Estrategia", "#00ffff"], ["Sonic Frontiers", 10.4, "🏃 Plataformas", 2022, "Plataformas", "#ff0088"], ["Sonic Mania", 0.4, "🏃 Plataformas", 2017, "Plataformas", "#ff0088"], ["Sonic Superstars", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["South Park: Snow Day!", 9.0, "💥 Acción", 2024, "Acción", "#ffaa00"], ["South Park: The Fractured But Whole", 14.5, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["South Park: The Stick of Truth", 4.8, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Spiritfarer", 1.4, "🌱 Simulación", 2020, "Simulación", "#00ff99"], ["Splatoon 2", 6.1, "🔫 Shooter", 2017, "Shooter", "#00aaff"], ["Splatoon 3", 8.2, "🔫 Shooter", 2022, "Shooter", "#00aaff"], ["SpongeBob SquarePants: Battle for Bikini Bottom", 10.0, "🏃 Plataformas", 2020, "Plataformas", "#ff0088"], ["SpongeBob SquarePants: The Cosmic Shake", 6.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Star Wars: Battlefront Classic", 25.0, "🔫 Shooter", 2024, "Shooter", "#00aaff"], ["Stardew Valley", 1.5, "🌱 Simulación", 2017, "Simulación", "#00ff99"], ["Street Fighter 30th Anniversary", 5.1, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["Subnautica", 6.2, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Subnautica: Below Zero", 5.0, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Super Mario Maker 2", 2.8, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Super Mario Odyssey", 5.7, "🏃 Plataformas", 2017, "Plataformas", "#ff0088"], ["Super Mario Party", 2.7, "🎉 Party", 2018, "Party", "#ffdd00"], ["Super Mario RPG", 6.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Super Smash Bros. Ultimate", 17.5, "🥊 Pelea", 2018, "Pelea", "#ff2a2a"], ["Taiko no Tatsujin: Rhythm Festival", 3.5, "🎵 Ritmo", 2022, "Ritmo", "#ff0044"], ["Teenage Mutant Ninja Turtles: Cowanbunga", 2.8, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Teenage Mutant Ninja Turtles: Shredder's Revenge", 0.9, "🥊 Pelea", 2022, "Pelea", "#ff2a2a"], ["Terraria", 0.4, "🧱 Sandbox", 2019, "Sandbox", "#aa5500"], ["The Binding of Isaac: Repentance", 1.8, "💀 Roguelike", 2021, "Roguelike", "#ff5500"], ["The Elder Scrolls V: Skyrim", 14.5, "⚔️ RPG", 2017, "RPG", "#bd00ff"], ["The Legend of Zelda: Breath of the Wild", 16.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c"], ["The Legend of Zelda: Echoes of Wisdom", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["The Legend of Zelda: Link's Awakening", 5.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["The Legend of Zelda: Skyward Sword HD", 7.1, "🗺️ Aventura", 2021, "Aventura", "#0aff6c"], ["The Legend of Zelda: Tears of the Kingdom", 16.3, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["The Witcher 3: Wild Hunt (Complete)", 32.5, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Tomb Raider I-III Remastered", 5.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Tony Hawk's Pro Skater 1+2", 10.0, "⚽ Deportes", 2021, "Deportes", "#2a59ff"], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Undertale", 0.3, "⚔️ RPG", 2018, "RPG", "#bd00ff"], ["Unicorn Overlord", 6.5, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Unpacking", 0.6, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Untitled Goose Game", 0.8, "🧩 Puzzle", 2019, "Puzzle", "#d400ff"], ["Vampire Survivors", 0.4, "💀 Roguelike", 2023, "Roguelike", "#ff5500"], ["Warframe", 19.5, "🔫 Shooter", 2018, "Shooter", "#00aaff"], ["WarioWare: Get It Together!", 1.3, "🎉 Party", 2021, "Party", "#ffdd00"], ["WarioWare: Move It!", 1.5, "🎉 Party", 2023, "Party", "#ffdd00"], ["Wolfenstein II: The New Colossus", 23.0, "🔫 Shooter", 2018, "Shooter", "#00aaff"], ["XCOM 2 Collection", 24.0, "♟️ Estrategia", 2020, "Estrategia", "#00ffff"], ["Xenoblade Chronicles 2", 13.2, "⚔️ RPG", 2017, "RPG", "#bd00ff"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG", "#bd00ff"], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088"], ["Advance Wars 1+2: Re-Boot Camp", 6.7, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Another Code: Recollection", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Apollo Justice: Ace Attorney Trilogy", 2.0, "📖 Visual Novel", 2024, "Visual Novel", "#ff66aa"], ["Arceus Legends", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Assassin's Creed Rogue Remastered", 8.8, "🗺️ Aventura", 2017, "Aventura", "#0aff6c"], ["Astroneer", 1.2, "🧱 Sandbox", 2022, "Sandbox", "#aa5500"], ["Atelier Ryza 3", 8.0, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Axion Verge 1+2", 0.8, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff"], ["Baba Is You", 0.2, "🧩 Puzzle", 2019, "Puzzle", "#d400ff"], ["Baten Kaitos I & II HD Remaster", 7.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Batman: The Telltale Series", 6.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c"], ["Beacon Pines", 1.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Bear and Breakfast", 1.0, "🌱 Simulación", 2022, "Simulación", "#00ff99"], ["BioShock 2 Remastered", 10.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["BioShock Infinite", 18.0, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Blasphemous 2", 2.5, "🦇 Metroidvania", 2023, "Metroidvania", "#9900ff"], ["Blasphemous", 4.0, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff"], ["Bloodstained: Ritual of the Night", 8.0, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff"], ["Bomb Rush Cyberfunk", 1.8, "💥 Acción", 2023, "Acción", "#ffaa00"], ["Bravely Default II", 12.5, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Broforce", 0.5, "💥 Acción", 2018, "Acción", "#ffaa00"], ["Bug Fables", 0.3, "⚔️ RPG", 2020, "RPG", "#bd00ff"], ["Burnout Paradise Remastered", 4.0, "🏎️ Carreras", 2020, "Carreras", "#fff200"], ["Cadence of Hyrule", 1.0, "🎵 Ritmo", 2019, "Ritmo", "#ff0044"], ["Captain Tsubasa: Rise of New Champions", 12.0, "⚽ Deportes", 2020, "Deportes", "#2a59ff"], ["Carrion", 0.5, "👻 Terror", 2020, "Terror", "#ff0000"], ["Catherine: Full Body", 11.0, "🧩 Puzzle", 2020, "Puzzle", "#d400ff"], ["Chained Echoes", 0.6, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Chicory: A Colorful Tale", 0.9, "🗺️ Aventura", 2021, "Aventura", "#0aff6c"], ["Children of Morta", 1.2, "💀 Roguelike", 2019, "Roguelike", "#ff5500"], ["Chrono Cross: The Radical Dreamers", 4.0, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Cities: Skylines", 3.2, "🌱 Simulación", 2018, "Simulación", "#00ff99"], ["Civilization VI", 10.5, "♟️ Estrategia", 2018, "Estrategia", "#00ffff"], ["Coffee Talk Ep. 2", 0.5, "📖 Visual Novel", 2023, "Visual Novel", "#ff66aa"], ["Collection of Mana", 0.4, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Cult of the Lamb: Unholy Alliance", 1.8, "💀 Roguelike", 2024, "Roguelike", "#ff5500"], ["Cyber Shadow", 0.3, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Danganronpa Decadence", 12.0, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa"], ["Darkwood", 1.5, "👻 Terror", 2019, "Terror", "#ff0000"], ["Disco Elysium: The Final Cut", 7.5, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Disgaea 7", 6.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Divinity: Original Sin 2", 10.5, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Doki Doki Literature Club Plus!", 1.6, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa"], ["Don't Starve Together", 1.5, "🌱 Simulación", 2022, "Simulación", "#00ff99"], ["Doom 64", 0.1, "🔫 Shooter", 2020, "Shooter", "#00aaff"], ["Doraemon Story of Seasons", 1.5, "🌱 Simulación", 2019, "Simulación", "#00ff99"], ["Dragon's Dogma: Dark Arisen", 13.0, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Dredge: The Pale Reach", 1.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Eastward", 1.5, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Eiyuden Chronicle: Hundred Heroes", 10.0, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Endless Ocean Luminous", 3.0, "🌱 Simulación", 2024, "Simulación", "#00ff99"], ["Enter the Gungeon", 0.5, "💀 Roguelike", 2017, "Roguelike", "#ff5500"], ["Etrian Odyssey Origins Collection", 2.2, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Factorio", 1.8, "🌱 Simulación", 2022, "Simulación", "#00ff99"], ["Famicom Detective Club", 1.5, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa"], ["Fatal Frame: Mask of the Lunar Eclipse", 6.8, "👻 Terror", 2023, "Terror", "#ff0000"], ["Fatal Frame: Maiden of Black Water", 14.5, "👻 Terror", 2021, "Terror", "#ff0000"], ["FEZ", 0.5, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Final Fantasy Pixel Remaster I-VI", 6.0, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Firewatch", 2.2, "🗺️ Aventura", 2018, "Aventura", "#0aff6c"], ["Game Builder Garage", 1.0, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Gargoyles Remastered", 2.5, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["Ghost Trick: Phantom Detective", 2.5, "🧩 Puzzle", 2023, "Puzzle", "#d400ff"], ["Ghosts 'n Goblins Resurrection", 2.5, "🏃 Plataformas", 2021, "Plataformas", "#ff0088"], ["Goat Simulator 3", 3.5, "🧱 Sandbox", 2023, "Sandbox", "#aa5500"], ["Golf Story", 0.8, "⚔️ RPG", 2017, "RPG", "#bd00ff"], ["Good Job!", 0.5, "🧩 Puzzle", 2020, "Puzzle", "#d400ff"], ["Grandia HD Collection", 4.5, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Grid Autosport", 6.4, "🏎️ Carreras", 2019, "Carreras", "#fff200"], ["Grim Fandango Remastered", 3.9, "🗺️ Aventura", 2018, "Aventura", "#0aff6c"], ["Grounded", 4.0, "🌱 Simulación", 2024, "Simulación", "#00ff99"], ["Gunbrella", 0.8, "💥 Acción", 2023, "Acción", "#ffaa00"], ["Have a Nice Death", 1.5, "💀 Roguelike", 2023, "Roguelike", "#ff5500"], ["Heaven's Vault", 4.5, "🗺️ Aventura", 2021, "Aventura", "#0aff6c"], ["Hellblade: Senua's Sacrifice", 18.2, "💥 Acción", 2019, "Acción", "#ffaa00"], ["Hello Kitty Island Adventure", 2.5, "🌱 Simulación", 2025, "Simulación", "#00ff99"], ["House Flipper 2", 4.0, "🌱 Simulación", 2024, "Simulación", "#00ff99"], ["Human Fall Flat", 1.5, "🧩 Puzzle", 2017, "Puzzle", "#d400ff"], ["Hyper Light Drifter", 0.8, "🎮 Action", 2018, "Action", "#00f3ff"], ["Ib", 0.2, "👻 Terror", 2023, "Terror", "#ff0000"], ["Inscryption", 1.8, "♟️ Estrategia", 2022, "Estrategia", "#00ffff"], ["Into the Breach", 0.3, "♟️ Estrategia", 2018, "Estrategia", "#00ffff"], ["It's Quiz Time", 1.5, "🎉 Party", 2017, "Party", "#ffdd00"], ["Jackbox Party Pack 10", 2.0, "🎉 Party", 2023, "Party", "#ffdd00"], ["Jenny LeClue", 1.5, "🗺️ Aventura", 2020, "Aventura", "#0aff6c"], ["Journey to the Savage Planet", 2.6, "🗺️ Aventura", 2020, "Aventura", "#0aff6c"], ["Jurassic World Evolution", 5.5, "🌱 Simulación", 2020, "Simulación", "#00ff99"], ["Kentucky Route Zero", 1.5, "🗺️ Aventura", 2002, "Aventura", "#0aff6c"], ["Kingdom Come Deliverance", 16.0, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Kingdom Two Crowns", 1.2, "♟️ Estrategia", 2018, "Estrategia", "#00ffff"], ["Klonoa Phantasy Reverie Series", 8.0, "🏃 Plataformas", 2022, "Plataformas", "#ff0088"], ["Laika: Aged Through Blood", 3.0, "🦇 Metroidvania", 2023, "Metroidvania", "#9900ff"], ["Life is Strange: Arcadia Bay Collection", 18.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Life is Strange: True Colors", 10.0, "🗺️ Aventura", 2021, "Aventura", "#0aff6c"], ["Little Kitty, Big City", 1.5, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Live A Live", 4.5, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Loop Hero", 0.4, "♟️ Estrategia", 2021, "Estrategia", "#00ffff"], ["Lost in Random", 3.6, "🗺️ Aventura", 2021, "Aventura", "#0aff6c"], ["Luigi's Mansion 1 (Pending)", 2.5, "🗺️ Aventura", 2024, "Aventura", "#0aff6c"], ["Lumines Remastered", 0.8, "🧩 Puzzle", 2018, "Puzzle", "#d400ff"], ["Machinarium", 0.3, "🧩 Puzzle", 2018, "Puzzle", "#d400ff"], ["Manifold Garden", 1.5, "🧩 Puzzle", 2020, "Puzzle", "#d400ff"], ["Mark of the Ninja", 3.0, "💥 Acción", 2018, "Acción", "#ffaa00"], ["Marvel Ultimate Alliance 3", 14.5, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Marvel's Midnight Suns", 20.0, "♟️ Estrategia", 2024, "Estrategia", "#00ffff"], ["Mega Man Battle Network Legacy Collection", 2.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["Metal Slug Tactics", 0.8, "♟️ Estrategia", 2024, "Estrategia", "#00ffff"], ["Metroid Prime 4: Beyond", 12.0, "🔫 Shooter", 2025, "Shooter", "#00aaff"], ["Miitopia", 3.0, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Minecraft Dungeons", 3.5, "⚔️ RPG", 2020, "RPG", "#bd00ff"], ["Minecraft Legends", 6.8, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Monster Hunter Stories 2", 14.0, "⚔️ RPG", 2021, "RPG", "#bd00ff"], ["Nobody Saves the World", 0.8, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Octopath Traveler II", 8.5, "⚔️ RPG", 2023, "RPG", "#bd00ff"], ["OlliOlli World", 2.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff"], ["OMORI", 1.6, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Outer Wilds", 2.2, "🗺️ Aventura", 2023, "Aventura", "#0aff6c"], ["Persona 5 Tactica", 8.0, "♟️ Estrategia", 2023, "Estrategia", "#00ffff"], ["Pizza Tower", 0.4, "🏃 Plataformas", 2024, "Plataformas", "#ff0088"], ["Portal Companion Collection", 12.0, "🧩 Puzzle", 2022, "Puzzle", "#d400ff"], ["Rain World", 2.5, "🗺️ Aventura", 2019, "Aventura", "#0aff6c"], ["Resident Evil 4", 12.0, "👻 Terror", 2019, "Terror", "#ff0000"], ["Return to Monkey Island", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c"], ["Risk of Rain 2", 1.8, "💀 Roguelike", 2019, "Roguelike", "#ff5500"], ["Rune Factory 5", 8.0, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Shin Megami Tensei V: Vengeance", 14.0, "⚔️ RPG", 2024, "RPG", "#bd00ff"], ["Signalis", 1.5, "👻 Terror", 2022, "Terror", "#ff0000"], ["Slime Rancher: Plortable Edition", 0.8, "🌱 Simulación", 2021, "Simulación", "#00ff99"], ["Stars Wars: KOTOR II", 12.0, "⚔️ RPG", 2022, "RPG", "#bd00ff"], ["Super Mario Wonder", 4.5, "🏃 Plataformas", 2023, "Plataformas", "#ff0088"], ["The Great Ace Attorney Chronicles", 3.5, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa"], ["The Witcher 3: Wild Hunt", 32.0, "⚔️ RPG", 2019, "RPG", "#bd00ff"], ["Thirteen Sentinels: Aegis Rim", 4.0, "📖 Visual Novel", 2022, "Visual Novel", "#ff66aa"], ["Tinykin", 2.0, "🏃 Plataformas", 2022, "Plataformas", "#ff0088"], ["Triangle Strategy", 6.5, "♟️ Estrategia", 2022, "Estrategia", "#00ffff"], ["Trombome Champ", 0.5, "🎵 Ritmo", 2023, "Ritmo", "#ff0044"], ["Two Point Campus", 2.5, "🌱 Simulación", 2022, "Simulación", "#00ff99"]]; } catch(e) { GAMES_DATA = []; }

const CATEGORIES = ["Acción", "Action", "Aventura", "Carreras", "Deportes", "Estrategia", "Metroidvania", "Party", "Pelea", "Plataformas", "Puzzle", "RPG", "Ritmo", "Roguelike", "Sandbox", "Shooter", "Simulación", "Terror", "Visual Novel"];
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
    
    document.getElementById('search').addEventListener('input', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', (e) => { currentSort = e.target.value; applyFilters(); });
    document.getElementById('categorySelect').addEventListener('change', (e) => { activeCategory = e.target.value; applyFilters(); });
    document.getElementById('sdPreset').addEventListener('change', updateSDCapacity);
    document.getElementById('systemSpace').addEventListener('input', updateStats);
}

function updateSDCapacity() { updateStats(); applyFilters(); }

function createRain() {
    const container = document.getElementById('rainContainer');
    const colors = ['#00f3ff', '#ff0055', '#4dff88', '#bd00ff', '#ffff4d'];
    
    for(let i=0; i<30; i++) {
        const el = document.createElement('div');
        const type = Math.random() > 0.5 ? 'left' : 'right';
        el.className = `joycon ${type}`; 
        
        const stick = document.createElement('div'); stick.className = 'analog-stick'; el.appendChild(stick);
        
        if(type === 'left') {
            ['btn-up', 'btn-down', 'btn-left', 'btn-right'].forEach(c => {
                const b = document.createElement('div'); b.className = `btn-face ${c}`; el.appendChild(b);
            });
            const minus = document.createElement('div'); minus.className = 'btn-meta btn-minus'; el.appendChild(minus);
            const cap = document.createElement('div'); cap.className = 'btn-meta btn-capture'; el.appendChild(cap);
        } else {
            ['btn-x', 'btn-b', 'btn-y', 'btn-a'].forEach(c => {
                const b = document.createElement('div'); b.className = `btn-face ${c}`; el.appendChild(b);
            });
            const plusV = document.createElement('div'); plusV.className = 'btn-meta btn-plus-v'; el.appendChild(plusV);
            const plusH = document.createElement('div'); plusH.className = 'btn-meta btn-plus-h'; el.appendChild(plusH);
            const home = document.createElement('div'); home.className = 'btn-meta btn-home'; el.appendChild(home);
        }

        el.style.left = (Math.random() * 95) + 'vw';
        el.style.animationDuration = (Math.random() * 8 + 6) + 's';
        el.style.animationDelay = (Math.random() * 5) + 's';
        
        const baseColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.background = `linear-gradient(135deg, ${baseColor} 0%, #333 100%)`;
        el.style.boxShadow = `0 0 10px ${baseColor}`; 
        
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
    if(!list.length) { container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">NO SE ENCONTRARON JUEGOS</div>'; GAMES=[]; return; }
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
        const color = g[5]; 
        const emoji = g[2].split(" ")[0];
        
        // Dynamic placeholder using placehold.co
        const bgColor = color.replace('#', '');
        const shortName = g[0].length > 20 ? g[0].substring(0, 18) + '...' : g[0];
        const coverUrl = `https://placehold.co/300x450/${bgColor}/fff?font=roboto&text=${encodeURIComponent(shortName)}`;
        
        let noSpaceClass = (!isSel && g[1] > currentFree) ? "no-space" : "";

        return `
        <div class="game-card ${isSel ? 'selected' : ''} ${noSpaceClass}" 
             onclick="toggleGame('${safeName}')">
            
            <div class="cover-wrapper">
                <img src="${coverUrl}" class="cover-img" loading="lazy" alt="${g[0]}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="cover-fallback" style="display:none"><span>${emoji}</span></div>
            </div>

            <div class="card-content">
                <h3>${g[0]}</h3>
                <div class="game-meta">
                    <span class="game-cat-badge" style="background:${color}">${g[4]}</span>
                    <span class="game-size">${g[1]} GB</span>
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
        if((currentTotal + sysReserved + game[1]) > sdSize) {
            alert("⚠️ MEMORIA LLENA: No cabe este juego.");
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
    
    const bar = document.getElementById('sdProgress');
    const p1 = sysP.toFixed(1);
    const p2 = (sysP + gameP).toFixed(1);

    if(free < 0) {
        bar.style.background = `repeating-linear-gradient(45deg, #ff0055, #ff0055 10px, #300 10px, #300 20px)`; 
        bar.style.width = '100%';
    } else {
        bar.style.background = `linear-gradient(90deg, #555 0%, #555 ${p1}%, #00f3ff ${p1}%, #00f3ff ${p2}%, transparent ${p2}%)`;
        bar.style.width = '100%'; 
    }
}

function viewOrder() { document.getElementById('reviewModal').classList.add('active'); renderReviewList(); }
function closeReview() { document.getElementById('reviewModal').classList.remove('active'); }

function renderReviewList() {
    const container = document.getElementById('reviewList');
    if(!selected.size) { container.innerHTML = '<span style="color:#888">No has seleccionado juegos aún.</span>'; return; }
    let html = '';
    [...selected].sort().forEach(name => {
        html += `<div class="review-item"><span>${name}</span><span class="btn-delete" onclick="toggleGame('${name.replace(/'/g, "\\'") }'); renderReviewList()">❌</span></div>`;
    });
    container.innerHTML = html;
}

function openWhatsAppModal() { 
    if(!selected.size) return alert("Selecciona juegos primero."); 
    document.getElementById('whatsappModal').classList.add('active');
    document.getElementById('clientName').focus(); // Auto-focus input
}
function closeModal() { document.getElementById('whatsappModal').classList.remove('active'); }

function sendWhatsApp() {
    const name = document.getElementById('clientName').value;
    const model = document.getElementById('clientModel').value;
    const preset = document.getElementById('sdPreset').value;
    const sdReal = SD_PRESETS[preset] || 119;
    
    if(!name) return alert("Por favor escribe tu Nombre."); // Basic Validation

    let listText = "";
    [...selected].sort().forEach(n => {
        const g = GAMES_DATA.find(x => x[0] === n);
        listText += `[ ] ${n} (${g[1]} GB)\n`;
    });
    
    const rawMsg = `🎮 *PEDIDO FIXMOBITECH* 🎮
👤 *CLIENTE:* ${name}
📱 *CONSOLA:* ${model}
💾 *MEMORIA:* ${preset} GB (Real: ${sdReal} GB)

*JUEGOS:*
${listText}
✅ FIN DEL PEDIDO`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(rawMsg)}`, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', init);
