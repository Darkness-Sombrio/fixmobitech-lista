
let GAMES_DATA;
try { GAMES_DATA = [["Alien: Isolation", 17.7, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Amnesia: Collection", 5.5, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Among Us", 0.6, "🎉 Party", 2020, "Party", "#ffdd00", null], ["Animal Crossing: New Horizons", 10.9, "🌱 Simulación", 2020, "Simulación", "#00ff99", "images/covers/animalcrossingnewhorizons.jpg"], ["Apex Legends", 27.0, "🔫 Shooter", 2021, "Shooter", "#00aaff", null], ["Arms", 2.2, "🥊 Pelea", 2017, "Pelea", "#ff2a2a", null], ["Assassin's Creed III Remastered", 12.1, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", null], ["Assassin's Creed IV: Black Flag", 11.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", null], ["Assassin's Creed: The Ezio Collection", 35.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Astral Chain", 9.6, "💥 Acción", 2019, "Acción", "#ffaa00", null], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia", "#00ffff", null], ["Batman: Arkham Trilogy", 45.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Bayonetta 2", 12.4, "💥 Acción", 2018, "Acción", "#ffaa00", null], ["Bayonetta 3", 15.0, "💥 Acción", 2022, "Acción", "#ffaa00", null], ["Bayonetta Origins: Cereza and the Lost Demon", 3.5, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Bioshock: The Collection", 31.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", null], ["Borderlands Legendary Collection", 48.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", null], ["Captain Toad: Treasure Tracker", 1.6, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", null], ["Castlevania Advance Collection", 0.8, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", null], ["Castlevania Anniversary Collection", 0.6, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", null], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/celeste.jpg"], ["Clubhouse Games: 51 Worldwide Classics", 2.1, "🎉 Party", 2020, "Party", "#ffdd00", null], ["Cocoon", 1.8, "🧩 Puzzle", 2023, "Puzzle", "#d400ff", null], ["Contra Anniversary Collection", 0.4, "🔫 Shooter", 2019, "Shooter", "#00aaff", null], ["Crash Bandicoot 4: It's About Time", 9.4, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", null], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", null], ["Crash Team Racing Nitro-Fueled", 9.3, "🏎️ Carreras", 2019, "Carreras", "#fff200", null], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike", "#ff5500", null], ["Cuphead", 3.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", null], ["Dark Souls Remastered", 3.9, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/darksoulsremastered.jpg"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación", "#00ff99", null], ["Dead Cells", 2.1, "💀 Roguelike", 2018, "Roguelike", "#ff5500", null], ["Dead by Daylight", 15.0, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Deltarune Ch1+2", 0.4, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Demon Slayer: The Hinokami Chronicles", 9.0, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", null], ["Detective Pikachu Returns", 10.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Diablo II: Resurrected", 7.8, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Diablo III: Eternal Collection", 13.3, "⚔️ RPG", 2018, "RPG", "#bd00ff", null], ["Disney Dreamlight Valley", 4.5, "🌱 Simulación", 2023, "Simulación", "#00ff99", null], ["Disney Illusion Island", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", null], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", null], ["Doom (2016)", 22.0, "🔫 Shooter", 2017, "Shooter", "#00aaff", null], ["Doom Eternal", 33.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", null], ["Dragon Ball FighterZ", 9.8, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", null], ["Dragon Ball Xenoverse 2", 18.0, "🥊 Pelea", 2017, "Pelea", "#ff2a2a", null], ["Dragon Ball Z: Kakarot", 16.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Dragon Quest Treasures", 3.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Dragon Quest XI S", 13.8, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Dredge", 0.8, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Dying Light: Platinum Edition", 15.5, "👻 Terror", 2021, "Terror", "#ff0000", null], ["FIFA 23 / EA Sports FC 24", 30.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff", null], ["Final Fantasy IX", 5.0, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Final Fantasy VII", 3.8, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Final Fantasy VIII Remastered", 2.6, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Final Fantasy X/X-2 HD Remaster", 26.9, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Final Fantasy XII The Zodiac Age", 12.6, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Fire Emblem Engage", 13.4, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Fire Emblem Warriors: Three Hopes", 13.4, "💥 Acción", 2022, "Acción", "#ffaa00", null], ["Fire Emblem: Three Houses", 11.9, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/fireemblemthreehouses.jpg"], ["Five Nights at Freddy's: Core Collection", 2.0, "👻 Terror", 2021, "Terror", "#ff0000", null], ["Five Nights at Freddy's: Security Breach", 10.0, "👻 Terror", 2023, "Terror", "#ff0000", null], ["Fortnite", 15.6, "🔫 Shooter", 2018, "Shooter", "#00aaff", null], ["Friday the 13th: The Game", 4.5, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Grand Theft Auto: The Trilogy", 20.5, "💥 Acción", 2021, "Acción", "#ffaa00", null], ["Gris", 1.8, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", null], ["Hades", 5.8, "💀 Roguelike", 2020, "Roguelike", "#ff5500", "images/covers/hades.jpg"], ["Hatsune Miku: Project DIVA Mega Mix", 15.0, "🎵 Ritmo", 2020, "Ritmo", "#ff0044", null], ["Hogwarts Legacy", 15.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Hollow Knight", 5.3, "🦇 Metroidvania", 2018, "Metroidvania", "#9900ff", "images/covers/hollowknight.jpg"], ["Hotline Miami Collection", 0.8, "💥 Acción", 2019, "Acción", "#ffaa00", null], ["Hyrule Warriors: Age of Calamity", 10.9, "💥 Acción", 2020, "Acción", "#ffaa00", null], ["Hyrule Warriors: Definitive Edition", 12.9, "💥 Acción", 2018, "Acción", "#ffaa00", null], ["Inside", 1.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", null], ["It Takes Two", 9.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["JoJo's Bizarre Adventure: All-Star Battle R", 4.5, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", null], ["Jump Force: Deluxe Edition", 12.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a", null], ["Just Dance 2024", 0.6, "🎵 Ritmo", 2024, "Ritmo", "#ff0044", null], ["Katana ZERO", 0.3, "💥 Acción", 2019, "Acción", "#ffaa00", null], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", null], ["Kirby and the Forgotten Land", 5.8, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", null], ["Kirby's Return to Dream Land Deluxe", 6.2, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", null], ["L.A. Noire", 27.4, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", null], ["LEGO Harry Potter Collection", 7.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", null], ["LEGO Star Wars: The Skywalker Saga", 14.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Layers of Fear: Legacy", 3.0, "👻 Terror", 2018, "Terror", "#ff0000", null], ["Limbo", 0.2, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", null], ["Little Nightmares Complete", 3.5, "👻 Terror", 2018, "Terror", "#ff0000", null], ["Little Nightmares II", 7.6, "👻 Terror", 2021, "Terror", "#ff0000", null], ["Luigi's Mansion 2 HD", 3.2, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["Luigi's Mansion 3", 6.4, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", null], ["Mario Golf: Super Rush", 4.9, "⚽ Deportes", 2021, "Deportes", "#2a59ff", null], ["Mario Kart 8 Deluxe", 12.5, "🏎️ Carreras", 2017, "Carreras", "#fff200", "images/covers/mariokart8deluxe.jpg"], ["Mario Party Superstars", 2.9, "🎉 Party", 2021, "Party", "#ffdd00", null], ["Mario Strikers: Battle League", 3.0, "⚽ Deportes", 2022, "Deportes", "#2a59ff", null], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018, "Deportes", "#2a59ff", null], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle", "#d400ff", null], ["Mega Man 11", 2.5, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", null], ["Mega Man Legacy Collections", 10.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", null], ["Metal Gear Solid: Master Collection Vol.1", 25.0, "💥 Acción", 2023, "Acción", "#ffaa00", null], ["Metroid Dread", 4.1, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff", "images/covers/metroiddread.jpg"], ["Metroid Prime Remastered", 6.1, "🔫 Shooter", 2023, "Shooter", "#00aaff", null], ["Minecraft", 2.5, "🧱 Sandbox", 2017, "Sandbox", "#aa5500", "images/covers/minecraft.jpg"], ["Monster Hunter Generations Ultimate", 11.8, "⚔️ RPG", 2018, "RPG", "#bd00ff", null], ["Monster Hunter Rise (+Sunbreak)", 18.2, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Mortal Kombat 1", 34.0, "🥊 Pelea", 2023, "Pelea", "#ff2a2a", null], ["Mortal Kombat 11 (Ultimate)", 32.5, "🥊 Pelea", 2019, "Pelea", "#ff2a2a", null], ["My Hero One's Justice 2", 6.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a", null], ["NBA 2K24", 58.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff", null], ["Naruto Shippuden: UNS 4 Road to Boruto", 13.2, "🥊 Pelea", 2020, "Pelea", "#ff2a2a", null], ["Naruto Trilogy", 17.6, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", null], ["New Pokémon Snap", 6.0, "🌱 Simulación", 2021, "Simulación", "#00ff99", null], ["New Super Mario Bros. U Deluxe", 2.5, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", null], ["NieR: Automata", 10.9, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Nintendo Switch Sports", 3.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff", null], ["No Man's Sky", 5.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["One Piece: Pirate Warriors 4", 15.0, "💥 Acción", 2020, "Acción", "#ffaa00", null], ["Ori and the Blind Forest", 3.5, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff", null], ["Ori and the Will of the Wisps", 4.2, "🦇 Metroidvania", 2020, "Metroidvania", "#9900ff", null], ["Outlast 2", 9.6, "👻 Terror", 2018, "Terror", "#ff0000", null], ["Outlast: Bundle of Terror", 5.7, "👻 Terror", 2018, "Terror", "#ff0000", null], ["Overcooked! 2", 3.5, "🎉 Party", 2018, "Party", "#ffdd00", null], ["Overcooked! All You Can Eat", 8.8, "🎉 Party", 2021, "Party", "#ffdd00", null], ["Overwatch 2", 23.0, "🔫 Shooter", 2019, "Shooter", "#00aaff", null], ["Paper Mario: The Origami King", 6.0, "⚔️ RPG", 2020, "RPG", "#bd00ff", null], ["Paper Mario: The Thousand-Year Door", 5.1, "⚔️ RPG", 2024, "RPG", "#bd00ff", null], ["Persona 3 Portable", 4.0, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Persona 4 Golden", 3.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Pikmin 1+2", 2.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", null], ["Pikmin 3 Deluxe", 6.5, "♟️ Estrategia", 2020, "Estrategia", "#00ffff", null], ["Pikmin 4", 10.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", null], ["Plants vs. Zombies: Battle for Neighborville", 6.5, "🔫 Shooter", 2021, "Shooter", "#00aaff", null], ["Pokémon Brilliant Diamond / Shining Pearl", 6.9, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Pokémon Legends: Arceus", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Pokémon Let's Go Pikachu / Eevee", 4.2, "⚔️ RPG", 2018, "RPG", "#bd00ff", null], ["Pokémon Scarlet / Violet", 10.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Pokémon Sword / Shield", 12.8, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Pokémon Unite", 1.5, "♟️ Estrategia", 2021, "Estrategia", "#00ffff", null], ["Prince of Persia: The Lost Crown", 6.8, "🦇 Metroidvania", 2024, "Metroidvania", "#9900ff", null], ["Princess Peach: Showtime!", 4.7, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["Red Dead Redemption", 11.4, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Resident Evil", 3.6, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Resident Evil 0", 3.6, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Resident Evil 4 (Original)", 4.0, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Resident Evil 5", 18.7, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Resident Evil 6", 17.6, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Resident Evil Revelations 1+2", 35.0, "👻 Terror", 2017, "Terror", "#ff0000", null], ["Ring Fit Adventure", 2.8, "⚽ Deportes", 2019, "Deportes", "#2a59ff", null], ["Rocket League", 21.0, "⚽ Deportes", 2017, "Deportes", "#2a59ff", null], ["Sea of Stars", 3.9, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Shovel Knight: Treasure Trove", 0.5, "🏃 Plataformas", 2017, "Plataformas", "#ff0088", null], ["Sid Meier's Civilization VI", 12.0, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", null], ["Slay the Spire", 0.5, "♟️ Estrategia", 2019, "Estrategia", "#00ffff", null], ["Sonic Frontiers", 10.4, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", null], ["Sonic Mania", 0.4, "🏃 Plataformas", 2017, "Plataformas", "#ff0088", null], ["Sonic Superstars", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", null], ["South Park: Snow Day!", 9.0, "💥 Acción", 2024, "Acción", "#ffaa00", null], ["South Park: The Fractured But Whole", 14.5, "⚔️ RPG", 2018, "RPG", "#bd00ff", null], ["South Park: The Stick of Truth", 4.8, "⚔️ RPG", 2018, "RPG", "#bd00ff", null], ["Spiritfarer", 1.4, "🌱 Simulación", 2020, "Simulación", "#00ff99", null], ["Splatoon 2", 6.1, "🔫 Shooter", 2017, "Shooter", "#00aaff", null], ["Splatoon 3", 8.2, "🔫 Shooter", 2022, "Shooter", "#00aaff", "images/covers/splatoon3.jpg"], ["SpongeBob SquarePants: Battle for Bikini Bottom", 10.0, "🏃 Plataformas", 2020, "Plataformas", "#ff0088", null], ["SpongeBob SquarePants: The Cosmic Shake", 6.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", null], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", null], ["Star Wars: Battlefront Classic", 25.0, "🔫 Shooter", 2024, "Shooter", "#00aaff", null], ["Stardew Valley", 1.5, "🌱 Simulación", 2017, "Simulación", "#00ff99", "images/covers/stardewvalley.jpg"], ["Street Fighter 30th Anniversary", 5.1, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", null], ["Subnautica", 6.2, "🌱 Simulación", 2021, "Simulación", "#00ff99", null], ["Subnautica: Below Zero", 5.0, "🌱 Simulación", 2021, "Simulación", "#00ff99", null], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", null], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/supermariobroswonder.jpg"], ["Super Mario Maker 2", 2.8, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", null], ["Super Mario Odyssey", 5.7, "🏃 Plataformas", 2017, "Plataformas", "#ff0088", "images/covers/supermarioodyssey.jpg"], ["Super Mario Party", 2.7, "🎉 Party", 2018, "Party", "#ffdd00", null], ["Super Mario RPG", 6.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Super Smash Bros. Ultimate", 17.5, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", "images/covers/supersmashbrosultimate.jpg"], ["Taiko no Tatsujin: Rhythm Festival", 3.5, "🎵 Ritmo", 2022, "Ritmo", "#ff0044", null], ["Teenage Mutant Ninja Turtles: Cowanbunga", 2.8, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", null], ["Teenage Mutant Ninja Turtles: Shredder's Revenge", 0.9, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", null], ["Terraria", 0.4, "🧱 Sandbox", 2019, "Sandbox", "#aa5500", null], ["The Binding of Isaac: Repentance", 1.8, "💀 Roguelike", 2021, "Roguelike", "#ff5500", null], ["The Elder Scrolls V: Skyrim", 14.5, "⚔️ RPG", 2017, "RPG", "#bd00ff", null], ["The Legend of Zelda: Breath of the Wild", 16.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", "images/covers/thelegendofzeldabreathofthewild.jpg"], ["The Legend of Zelda: Echoes of Wisdom", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["The Legend of Zelda: Link's Awakening", 5.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", null], ["The Legend of Zelda: Skyward Sword HD", 7.1, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", null], ["The Legend of Zelda: Tears of the Kingdom", 16.3, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/thelegendofzeldatearsofthekingdom.jpg"], ["The Witcher 3: Wild Hunt (Complete)", 32.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Tomb Raider I-III Remastered", 5.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["Tony Hawk's Pro Skater 1+2", 10.0, "⚽ Deportes", 2021, "Deportes", "#2a59ff", null], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Undertale", 0.3, "⚔️ RPG", 2018, "RPG", "#bd00ff", null], ["Unicorn Overlord", 6.5, "⚔️ RPG", 2024, "RPG", "#bd00ff", null], ["Unpacking", 0.6, "🌱 Simulación", 2021, "Simulación", "#00ff99", null], ["Untitled Goose Game", 0.8, "🧩 Puzzle", 2019, "Puzzle", "#d400ff", null], ["Vampire Survivors", 0.4, "💀 Roguelike", 2023, "Roguelike", "#ff5500", null], ["Warframe", 19.5, "🔫 Shooter", 2018, "Shooter", "#00aaff", null], ["WarioWare: Get It Together!", 1.3, "🎉 Party", 2021, "Party", "#ffdd00", null], ["WarioWare: Move It!", 1.5, "🎉 Party", 2023, "Party", "#ffdd00", null], ["Wolfenstein II: The New Colossus", 23.0, "🔫 Shooter", 2018, "Shooter", "#00aaff", null], ["XCOM 2 Collection", 24.0, "♟️ Estrategia", 2020, "Estrategia", "#00ffff", null], ["Xenoblade Chronicles 2", 13.2, "⚔️ RPG", 2017, "RPG", "#bd00ff", null], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/xenobladechronicles3.jpg"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG", "#bd00ff", null], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", null], ["Advance Wars 1+2: Re-Boot Camp", 6.7, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", null], ["Another Code: Recollection", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["Apollo Justice: Ace Attorney Trilogy", 2.0, "📖 Visual Novel", 2024, "Visual Novel", "#ff66aa", null], ["Arceus Legends", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Assassin's Creed Rogue Remastered", 8.8, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", null], ["Astroneer", 1.2, "🧱 Sandbox", 2022, "Sandbox", "#aa5500", null], ["Atelier Ryza 3", 8.0, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Axion Verge 1+2", 0.8, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff", null], ["Baba Is You", 0.2, "🧩 Puzzle", 2019, "Puzzle", "#d400ff", null], ["Baten Kaitos I & II HD Remaster", 7.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Batman: The Telltale Series", 6.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", null], ["Beacon Pines", 1.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Bear and Breakfast", 1.0, "🌱 Simulación", 2022, "Simulación", "#00ff99", null], ["BioShock 2 Remastered", 10.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", null], ["BioShock Infinite", 18.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", null], ["Blasphemous 2", 2.5, "🦇 Metroidvania", 2023, "Metroidvania", "#9900ff", null], ["Blasphemous", 4.0, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff", null], ["Bloodstained: Ritual of the Night", 8.0, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff", null], ["Bomb Rush Cyberfunk", 1.8, "💥 Acción", 2023, "Acción", "#ffaa00", null], ["Bravely Default II", 12.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Broforce", 0.5, "💥 Acción", 2018, "Acción", "#ffaa00", null], ["Bug Fables", 0.3, "⚔️ RPG", 2020, "RPG", "#bd00ff", null], ["Burnout Paradise Remastered", 4.0, "🏎️ Carreras", 2020, "Carreras", "#fff200", null], ["Cadence of Hyrule", 1.0, "🎵 Ritmo", 2019, "Ritmo", "#ff0044", null], ["Captain Tsubasa: Rise of New Champions", 12.0, "⚽ Deportes", 2020, "Deportes", "#2a59ff", null], ["Carrion", 0.5, "👻 Terror", 2020, "Terror", "#ff0000", null], ["Catherine: Full Body", 11.0, "🧩 Puzzle", 2020, "Puzzle", "#d400ff", null], ["Chained Echoes", 0.6, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Chicory: A Colorful Tale", 0.9, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", null], ["Children of Morta", 1.2, "💀 Roguelike", 2019, "Roguelike", "#ff5500", null], ["Chrono Cross: The Radical Dreamers", 4.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Cities: Skylines", 3.2, "🌱 Simulación", 2018, "Simulación", "#00ff99", null], ["Civilization VI", 10.5, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", null], ["Coffee Talk Ep. 2", 0.5, "📖 Visual Novel", 2023, "Visual Novel", "#ff66aa", null], ["Collection of Mana", 0.4, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Cult of the Lamb: Unholy Alliance", 1.8, "💀 Roguelike", 2024, "Roguelike", "#ff5500", null], ["Cyber Shadow", 0.3, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", null], ["Danganronpa Decadence", 12.0, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", null], ["Darkwood", 1.5, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Disco Elysium: The Final Cut", 7.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Disgaea 7", 6.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", null], ["Divinity: Original Sin 2", 10.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Doki Doki Literature Club Plus!", 1.6, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", null], ["Don't Starve Together", 1.5, "🌱 Simulación", 2022, "Simulación", "#00ff99", null], ["Doom 64", 0.1, "🔫 Shooter", 2020, "Shooter", "#00aaff", null], ["Doraemon Story of Seasons", 1.5, "🌱 Simulación", 2019, "Simulación", "#00ff99", null], ["Dragon's Dogma: Dark Arisen", 13.0, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Dredge: The Pale Reach", 1.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Eastward", 1.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Eiyuden Chronicle: Hundred Heroes", 10.0, "⚔️ RPG", 2024, "RPG", "#bd00ff", null], ["Endless Ocean Luminous", 3.0, "🌱 Simulación", 2024, "Simulación", "#00ff99", null], ["Enter the Gungeon", 0.5, "💀 Roguelike", 2017, "Roguelike", "#ff5500", null], ["Etrian Odyssey Origins Collection", 2.2, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Factorio", 1.8, "🌱 Simulación", 2022, "Simulación", "#00ff99", null], ["Famicom Detective Club", 1.5, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", null], ["Fatal Frame: Mask of the Lunar Eclipse", 6.8, "👻 Terror", 2023, "Terror", "#ff0000", null], ["Fatal Frame: Maiden of Black Water", 14.5, "👻 Terror", 2021, "Terror", "#ff0000", null], ["FEZ", 0.5, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", null], ["Final Fantasy Pixel Remaster I-VI", 6.0, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Firewatch", 2.2, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", null], ["Game Builder Garage", 1.0, "🌱 Simulación", 2021, "Simulación", "#00ff99", null], ["Gargoyles Remastered", 2.5, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", null], ["Ghost Trick: Phantom Detective", 2.5, "🧩 Puzzle", 2023, "Puzzle", "#d400ff", null], ["Ghosts 'n Goblins Resurrection", 2.5, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", null], ["Goat Simulator 3", 3.5, "🧱 Sandbox", 2023, "Sandbox", "#aa5500", null], ["Golf Story", 0.8, "⚔️ RPG", 2017, "RPG", "#bd00ff", null], ["Good Job!", 0.5, "🧩 Puzzle", 2020, "Puzzle", "#d400ff", null], ["Grandia HD Collection", 4.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Grid Autosport", 6.4, "🏎️ Carreras", 2019, "Carreras", "#fff200", null], ["Grim Fandango Remastered", 3.9, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", null], ["Grounded", 4.0, "🌱 Simulación", 2024, "Simulación", "#00ff99", null], ["Gunbrella", 0.8, "💥 Acción", 2023, "Acción", "#ffaa00", null], ["Have a Nice Death", 1.5, "💀 Roguelike", 2023, "Roguelike", "#ff5500", null], ["Heaven's Vault", 4.5, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", null], ["Hellblade: Senua's Sacrifice", 18.2, "💥 Acción", 2019, "Acción", "#ffaa00", null], ["Hello Kitty Island Adventure", 2.5, "🌱 Simulación", 2025, "Simulación", "#00ff99", null], ["House Flipper 2", 4.0, "🌱 Simulación", 2024, "Simulación", "#00ff99", null], ["Human Fall Flat", 1.5, "🧩 Puzzle", 2017, "Puzzle", "#d400ff", null], ["Hyper Light Drifter", 0.8, "🎮 Action", 2018, "Action", "#00f3ff", null], ["Ib", 0.2, "👻 Terror", 2023, "Terror", "#ff0000", null], ["Inscryption", 1.8, "♟️ Estrategia", 2022, "Estrategia", "#00ffff", null], ["Into the Breach", 0.3, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", null], ["It's Quiz Time", 1.5, "🎉 Party", 2017, "Party", "#ffdd00", null], ["Jackbox Party Pack 10", 2.0, "🎉 Party", 2023, "Party", "#ffdd00", null], ["Jenny LeClue", 1.5, "🗺️ Aventura", 2020, "Aventura", "#0aff6c", null], ["Journey to the Savage Planet", 2.6, "🗺️ Aventura", 2020, "Aventura", "#0aff6c", null], ["Jurassic World Evolution", 5.5, "🌱 Simulación", 2020, "Simulación", "#00ff99", null], ["Kentucky Route Zero", 1.5, "🗺️ Aventura", 2002, "Aventura", "#0aff6c", null], ["Kingdom Come Deliverance", 16.0, "⚔️ RPG", 2024, "RPG", "#bd00ff", null], ["Kingdom Two Crowns", 1.2, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", null], ["Klonoa Phantasy Reverie Series", 8.0, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", null], ["Laika: Aged Through Blood", 3.0, "🦇 Metroidvania", 2023, "Metroidvania", "#9900ff", null], ["Life is Strange: Arcadia Bay Collection", 18.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Life is Strange: True Colors", 10.0, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", null], ["Little Kitty, Big City", 1.5, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["Live A Live", 4.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Loop Hero", 0.4, "♟️ Estrategia", 2021, "Estrategia", "#00ffff", null], ["Lost in Random", 3.6, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", null], ["Luigi's Mansion 1 (Pending)", 2.5, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", null], ["Lumines Remastered", 0.8, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", null], ["Machinarium", 0.3, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", null], ["Manifold Garden", 1.5, "🧩 Puzzle", 2020, "Puzzle", "#d400ff", null], ["Mark of the Ninja", 3.0, "💥 Acción", 2018, "Acción", "#ffaa00", null], ["Marvel Ultimate Alliance 3", 14.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Marvel's Midnight Suns", 20.0, "♟️ Estrategia", 2024, "Estrategia", "#00ffff", null], ["Mega Man Battle Network Legacy Collection", 2.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Metal Slug Tactics", 0.8, "♟️ Estrategia", 2024, "Estrategia", "#00ffff", null], ["Metroid Prime 4: Beyond", 12.0, "🔫 Shooter", 2025, "Shooter", "#00aaff", null], ["Miitopia", 3.0, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Minecraft Dungeons", 3.5, "⚔️ RPG", 2020, "RPG", "#bd00ff", null], ["Minecraft Legends", 6.8, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", null], ["Monster Hunter Stories 2", 14.0, "⚔️ RPG", 2021, "RPG", "#bd00ff", null], ["Nobody Saves the World", 0.8, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Octopath Traveler II", 8.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["OlliOlli World", 2.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff", null], ["OMORI", 1.6, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Outer Wilds", 2.2, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Persona 5 Tactica", 8.0, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", null], ["Pizza Tower", 0.4, "🏃 Plataformas", 2024, "Plataformas", "#ff0088", null], ["Portal Companion Collection", 12.0, "🧩 Puzzle", 2022, "Puzzle", "#d400ff", null], ["Rain World", 2.5, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", null], ["Resident Evil 4", 12.0, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Return to Monkey Island", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Risk of Rain 2", 1.8, "💀 Roguelike", 2019, "Roguelike", "#ff5500", null], ["Rune Factory 5", 8.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Shin Megami Tensei V: Vengeance", 14.0, "⚔️ RPG", 2024, "RPG", "#bd00ff", null], ["Signalis", 1.5, "👻 Terror", 2022, "Terror", "#ff0000", null], ["Slime Rancher: Plortable Edition", 0.8, "🌱 Simulación", 2021, "Simulación", "#00ff99", null], ["Stars Wars: KOTOR II", 12.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Super Mario Wonder", 4.5, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", null], ["The Great Ace Attorney Chronicles", 3.5, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", null], ["The Witcher 3: Wild Hunt", 32.0, "⚔️ RPG", 2019, "RPG", "#bd00ff", null], ["Thirteen Sentinels: Aegis Rim", 4.0, "📖 Visual Novel", 2022, "Visual Novel", "#ff66aa", null], ["Tinykin", 2.0, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", null], ["Triangle Strategy", 6.5, "♟️ Estrategia", 2022, "Estrategia", "#00ffff", null], ["Trombome Champ", 0.5, "🎵 Ritmo", 2023, "Ritmo", "#ff0044", null], ["Two Point Campus", 2.5, "🌱 Simulación", 2022, "Simulación", "#00ff99", null]]; } catch(e) { GAMES_DATA = []; }

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
        const localCover = g[6]; // Local cover path from build script
        
        // Use local cover if available, otherwise use placehold.co
        const bgColor = color.replace('#', '');
        const shortName = g[0].length > 20 ? g[0].substring(0, 18) + '...' : g[0];
        const coverUrl = localCover || `https://placehold.co/300x450/${bgColor}/fff?font=roboto&text=${encodeURIComponent(shortName)}`;
        
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
