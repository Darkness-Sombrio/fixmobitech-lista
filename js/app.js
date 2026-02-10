
let GAMES_DATA;
try { GAMES_DATA = [["Alien: Isolation", 17.7, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/alienisolation.jpg"], ["Amnesia: Collection", 5.5, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/amnesiacollection.jpg"], ["Among Us", 0.6, "🎉 Party", 2020, "Party", "#ffdd00", "images/covers/amongus.jpg"], ["Animal Crossing: New Horizons", 10.9, "🌱 Simulación", 2020, "Simulación", "#00ff99", "images/covers/animalcrossingnewhorizons.jpg"], ["Apex Legends", 27.0, "🔫 Shooter", 2021, "Shooter", "#00aaff", "images/covers/apexlegends.jpg"], ["Arms", 2.2, "🥊 Pelea", 2017, "Pelea", "#ff2a2a", "images/covers/arms.jpg"], ["Assassin's Creed III Remastered", 12.1, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", "images/covers/assassinscreediiiremastered.jpg"], ["Assassin's Creed IV: Black Flag", 11.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", "images/covers/assassinscreedivblackflag.jpg"], ["Assassin's Creed: The Ezio Collection", 35.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/assassinscreedtheeziocollection.jpg"], ["Astral Chain", 9.6, "💥 Acción", 2019, "Acción", "#ffaa00", "images/covers/astralchain.jpg"], ["Balatro", 0.1, "♟️ Estrategia", 2024, "Estrategia", "#00ffff", null], ["Batman: Arkham Trilogy", 45.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/batmanarkhamtrilogy.jpg"], ["Bayonetta 2", 12.4, "💥 Acción", 2018, "Acción", "#ffaa00", "images/covers/bayonetta2.jpg"], ["Bayonetta 3", 15.0, "💥 Acción", 2022, "Acción", "#ffaa00", "images/covers/bayonetta3.jpg"], ["Bayonetta Origins: Cereza and the Lost Demon", 3.5, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/bayonettaoriginscerezaandthelostdemon.jpg"], ["Bioshock: The Collection", 31.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", "images/covers/bioshockthecollection.jpg"], ["Borderlands Legendary Collection", 48.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", "images/covers/borderlandslegendarycollection.jpg"], ["Captain Toad: Treasure Tracker", 1.6, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", "images/covers/captaintoadtreasuretracker.jpg"], ["Castlevania Advance Collection", 0.8, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", "images/covers/castlevaniaadvancecollection.jpg"], ["Castlevania Anniversary Collection", 0.6, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", "images/covers/castlevaniaanniversarycollection.jpg"], ["Celeste", 1.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/celeste.jpg"], ["Clubhouse Games: 51 Worldwide Classics", 2.1, "🎉 Party", 2020, "Party", "#ffdd00", "images/covers/clubhousegames51worldwideclassics.jpg"], ["Cocoon", 1.8, "🧩 Puzzle", 2023, "Puzzle", "#d400ff", "images/covers/cocoon.jpg"], ["Contra Anniversary Collection", 0.4, "🔫 Shooter", 2019, "Shooter", "#00aaff", "images/covers/contraanniversarycollection.jpg"], ["Crash Bandicoot 4: It's About Time", 9.4, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", "images/covers/crashbandicoot4itsabouttime.jpg"], ["Crash Bandicoot N. Sane Trilogy", 5.2, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/crashbandicootnsanetrilogy.jpg"], ["Crash Team Racing Nitro-Fueled", 9.3, "🏎️ Carreras", 2019, "Carreras", "#fff200", "images/covers/crashteamracingnitrofueled.jpg"], ["Cult of the Lamb", 1.5, "💀 Roguelike", 2022, "Roguelike", "#ff5500", "images/covers/cultofthelamb.jpg"], ["Cuphead", 3.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", "images/covers/cuphead.jpg"], ["Dark Souls Remastered", 3.9, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/darksoulsremastered.jpg"], ["Dave the Diver", 2.5, "🌱 Simulación", 2023, "Simulación", "#00ff99", "images/covers/davethediver.jpg"], ["Dead Cells", 2.1, "💀 Roguelike", 2018, "Roguelike", "#ff5500", "images/covers/deadcells.jpg"], ["Dead by Daylight", 15.0, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/deadbydaylight.jpg"], ["Deltarune Ch1+2", 0.4, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/deltarunech12.jpg"], ["Demon Slayer: The Hinokami Chronicles", 9.0, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", "images/covers/demonslayerthehinokamichronicles.jpg"], ["Detective Pikachu Returns", 10.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/detectivepikachureturns.jpg"], ["Diablo II: Resurrected", 7.8, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/diabloiiresurrected.jpg"], ["Diablo III: Eternal Collection", 13.3, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/diabloiiieternalcollection.jpg"], ["Disney Dreamlight Valley", 4.5, "🌱 Simulación", 2023, "Simulación", "#00ff99", "images/covers/disneydreamlightvalley.jpg"], ["Disney Illusion Island", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/disneyillusionisland.jpg"], ["Donkey Kong Country: Tropical Freeze", 6.6, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/donkeykongcountrytropicalfreeze.jpg"], ["Doom (2016)", 22.0, "🔫 Shooter", 2017, "Shooter", "#00aaff", "images/covers/doom2016.jpg"], ["Doom Eternal", 33.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", "images/covers/doometernal.jpg"], ["Dragon Ball FighterZ", 9.8, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", "images/covers/dragonballfighterz.jpg"], ["Dragon Ball Xenoverse 2", 18.0, "🥊 Pelea", 2017, "Pelea", "#ff2a2a", "images/covers/dragonballxenoverse2.jpg"], ["Dragon Ball Z: Kakarot", 16.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/dragonballzkakarot.jpg"], ["Dragon Quest Treasures", 3.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/dragonquesttreasures.jpg"], ["Dragon Quest XI S", 13.8, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/dragonquestxis.jpg"], ["Dredge", 0.8, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/dredge.jpg"], ["Dying Light: Platinum Edition", 15.5, "👻 Terror", 2021, "Terror", "#ff0000", "images/covers/dyinglightplatinumedition.jpg"], ["FIFA 23 / EA Sports FC 24", 30.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff", "images/covers/fifa23easportsfc24.jpg"], ["Final Fantasy IX", 5.0, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/finalfantasyix.jpg"], ["Final Fantasy VII", 3.8, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/finalfantasyvii.jpg"], ["Final Fantasy VIII Remastered", 2.6, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/finalfantasyviiiremastered.jpg"], ["Final Fantasy X/X-2 HD Remaster", 26.9, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/finalfantasyxx2hdremaster.jpg"], ["Final Fantasy XII The Zodiac Age", 12.6, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/finalfantasyxiithezodiacage.jpg"], ["Fire Emblem Engage", 13.4, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/fireemblemengage.jpg"], ["Fire Emblem Warriors: Three Hopes", 13.4, "💥 Acción", 2022, "Acción", "#ffaa00", "images/covers/fireemblemwarriorsthreehopes.jpg"], ["Fire Emblem: Three Houses", 11.9, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/fireemblemthreehouses.jpg"], ["Five Nights at Freddy's: Core Collection", 2.0, "👻 Terror", 2021, "Terror", "#ff0000", "images/covers/fivenightsatfreddyscorecollection.jpg"], ["Five Nights at Freddy's: Security Breach", 10.0, "👻 Terror", 2023, "Terror", "#ff0000", "images/covers/fivenightsatfreddyssecuritybreach.jpg"], ["Fortnite", 15.6, "🔫 Shooter", 2018, "Shooter", "#00aaff", "images/covers/fortnite.jpg"], ["Friday the 13th: The Game", 4.5, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/fridaythe13ththegame.jpg"], ["Grand Theft Auto: The Trilogy", 20.5, "💥 Acción", 2021, "Acción", "#ffaa00", "images/covers/grandtheftautothetrilogy.jpg"], ["Gris", 1.8, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/gris.jpg"], ["Hades", 5.8, "💀 Roguelike", 2020, "Roguelike", "#ff5500", "images/covers/hades.jpg"], ["Hatsune Miku: Project DIVA Mega Mix", 15.0, "🎵 Ritmo", 2020, "Ritmo", "#ff0044", "images/covers/hatsunemikuprojectdivamegamix.jpg"], ["Hogwarts Legacy", 15.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/hogwartslegacy.jpg"], ["Hollow Knight", 5.3, "🦇 Metroidvania", 2018, "Metroidvania", "#9900ff", "images/covers/hollowknight.jpg"], ["Hotline Miami Collection", 0.8, "💥 Acción", 2019, "Acción", "#ffaa00", "images/covers/hotlinemiamicollection.jpg"], ["Hyrule Warriors: Age of Calamity", 10.9, "💥 Acción", 2020, "Acción", "#ffaa00", "images/covers/hyrulewarriorsageofcalamity.jpg"], ["Hyrule Warriors: Definitive Edition", 12.9, "💥 Acción", 2018, "Acción", "#ffaa00", "images/covers/hyrulewarriorsdefinitiveedition.jpg"], ["Inside", 1.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", "images/covers/inside.jpg"], ["It Takes Two", 9.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/ittakestwo.jpg"], ["JoJo's Bizarre Adventure: All-Star Battle R", 4.5, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", "images/covers/jojosbizarreadventureallstarbattler.jpg"], ["Jump Force: Deluxe Edition", 12.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a", "images/covers/jumpforcedeluxeedition.jpg"], ["Just Dance 2024", 0.6, "🎵 Ritmo", 2024, "Ritmo", "#ff0044", "images/covers/justdance2024.jpg"], ["Katana ZERO", 0.3, "💥 Acción", 2019, "Acción", "#ffaa00", "images/covers/katanazero.jpg"], ["Kirby Star Allies", 4.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/kirbystarallies.jpg"], ["Kirby and the Forgotten Land", 5.8, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", "images/covers/kirbyandtheforgottenland.jpg"], ["Kirby's Return to Dream Land Deluxe", 6.2, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/kirbysreturntodreamlanddeluxe.jpg"], ["L.A. Noire", 27.4, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", "images/covers/lanoire.jpg"], ["LEGO Harry Potter Collection", 7.5, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", "images/covers/legoharrypottercollection.jpg"], ["LEGO Star Wars: The Skywalker Saga", 14.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/legostarwarstheskywalkersaga.jpg"], ["Layers of Fear: Legacy", 3.0, "👻 Terror", 2018, "Terror", "#ff0000", "images/covers/layersoffearlegacy.jpg"], ["Limbo", 0.2, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", "images/covers/limbo.jpg"], ["Little Nightmares Complete", 3.5, "👻 Terror", 2018, "Terror", "#ff0000", "images/covers/littlenightmarescomplete.jpg"], ["Little Nightmares II", 7.6, "👻 Terror", 2021, "Terror", "#ff0000", "images/covers/littlenightmaresii.jpg"], ["Luigi's Mansion 2 HD", 3.2, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/luigismansion2hd.jpg"], ["Luigi's Mansion 3", 6.4, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", "images/covers/luigismansion3.jpg"], ["Mario Golf: Super Rush", 4.9, "⚽ Deportes", 2021, "Deportes", "#2a59ff", "images/covers/mariogolfsuperrush.jpg"], ["Mario Kart 8 Deluxe", 12.5, "🏎️ Carreras", 2017, "Carreras", "#fff200", "images/covers/mariokart8deluxe.jpg"], ["Mario Party Superstars", 2.9, "🎉 Party", 2021, "Party", "#ffdd00", "images/covers/mariopartysuperstars.jpg"], ["Mario Strikers: Battle League", 3.0, "⚽ Deportes", 2022, "Deportes", "#2a59ff", "images/covers/mariostrikersbattleleague.jpg"], ["Mario Tennis Aces", 2.0, "⚽ Deportes", 2018, "Deportes", "#2a59ff", "images/covers/mariotennisaces.jpg"], ["Mario vs. Donkey Kong", 1.7, "🧩 Puzzle", 2024, "Puzzle", "#d400ff", "images/covers/mariovsdonkeykong.jpg"], ["Mega Man 11", 2.5, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/megaman11.jpg"], ["Mega Man Legacy Collections", 10.0, "🏃 Plataformas", 2018, "Plataformas", "#ff0088", "images/covers/megamanlegacycollections.jpg"], ["Metal Gear Solid: Master Collection Vol.1", 25.0, "💥 Acción", 2023, "Acción", "#ffaa00", "images/covers/metalgearsolidmastercollectionvol1.jpg"], ["Metroid Dread", 4.1, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff", "images/covers/metroiddread.jpg"], ["Metroid Prime Remastered", 6.1, "🔫 Shooter", 2023, "Shooter", "#00aaff", "images/covers/metroidprimeremastered.jpg"], ["Minecraft", 2.5, "🧱 Sandbox", 2017, "Sandbox", "#aa5500", "images/covers/minecraft.jpg"], ["Monster Hunter Generations Ultimate", 11.8, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/monsterhuntergenerationsultimate.jpg"], ["Monster Hunter Rise (+Sunbreak)", 18.2, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/monsterhunterrisesunbreak.jpg"], ["Mortal Kombat 1", 34.0, "🥊 Pelea", 2023, "Pelea", "#ff2a2a", "images/covers/mortalkombat1.jpg"], ["Mortal Kombat 11 (Ultimate)", 32.5, "🥊 Pelea", 2019, "Pelea", "#ff2a2a", "images/covers/mortalkombat11ultimate.jpg"], ["My Hero One's Justice 2", 6.0, "🥊 Pelea", 2020, "Pelea", "#ff2a2a", "images/covers/myheroonesjustice2.jpg"], ["NBA 2K24", 58.0, "⚽ Deportes", 2023, "Deportes", "#2a59ff", "images/covers/nba2k24.jpg"], ["Naruto Shippuden: UNS 4 Road to Boruto", 13.2, "🥊 Pelea", 2020, "Pelea", "#ff2a2a", "images/covers/narutoshippudenuns4roadtoboruto.jpg"], ["Naruto Trilogy", 17.6, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", "images/covers/narutotrilogy.jpg"], ["New Pokémon Snap", 6.0, "🌱 Simulación", 2021, "Simulación", "#00ff99", "images/covers/newpokmonsnap.jpg"], ["New Super Mario Bros. U Deluxe", 2.5, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", "images/covers/newsupermariobrosudeluxe.jpg"], ["NieR: Automata", 10.9, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/nierautomata.jpg"], ["Nintendo Switch Sports", 3.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff", "images/covers/nintendoswitchsports.jpg"], ["No Man's Sky", 5.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/nomanssky.jpg"], ["One Piece: Pirate Warriors 4", 15.0, "💥 Acción", 2020, "Acción", "#ffaa00", "images/covers/onepiecepiratewarriors4.jpg"], ["Ori and the Blind Forest", 3.5, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff", "images/covers/oriandtheblindforest.jpg"], ["Ori and the Will of the Wisps", 4.2, "🦇 Metroidvania", 2020, "Metroidvania", "#9900ff", "images/covers/oriandthewillofthewisps.jpg"], ["Outlast 2", 9.6, "👻 Terror", 2018, "Terror", "#ff0000", "images/covers/outlast2.jpg"], ["Outlast: Bundle of Terror", 5.7, "👻 Terror", 2018, "Terror", "#ff0000", "images/covers/outlastbundleofterror.jpg"], ["Overcooked! 2", 3.5, "🎉 Party", 2018, "Party", "#ffdd00", "images/covers/overcooked2.jpg"], ["Overcooked! All You Can Eat", 8.8, "🎉 Party", 2021, "Party", "#ffdd00", "images/covers/overcookedallyoucaneat.jpg"], ["Overwatch 2", 23.0, "🔫 Shooter", 2019, "Shooter", "#00aaff", "images/covers/overwatch2.jpg"], ["Paper Mario: The Origami King", 6.0, "⚔️ RPG", 2020, "RPG", "#bd00ff", "images/covers/papermariotheorigamiking.jpg"], ["Paper Mario: The Thousand-Year Door", 5.1, "⚔️ RPG", 2024, "RPG", "#bd00ff", "images/covers/papermariothethousandyeardoor.jpg"], ["Persona 3 Portable", 4.0, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/persona3portable.jpg"], ["Persona 4 Golden", 3.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/persona4golden.jpg"], ["Persona 5 Royal", 12.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/persona5royal.jpg"], ["Pikmin 1+2", 2.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", "images/covers/pikmin12.jpg"], ["Pikmin 3 Deluxe", 6.5, "♟️ Estrategia", 2020, "Estrategia", "#00ffff", "images/covers/pikmin3deluxe.jpg"], ["Pikmin 4", 10.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", "images/covers/pikmin4.jpg"], ["Plants vs. Zombies: Battle for Neighborville", 6.5, "🔫 Shooter", 2021, "Shooter", "#00aaff", "images/covers/plantsvszombiesbattleforneighborville.jpg"], ["Pokémon Brilliant Diamond / Shining Pearl", 6.9, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/pokmonbrilliantdiamondshiningpearl.jpg"], ["Pokémon Legends: Arceus", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/pokmonlegendsarceus.jpg"], ["Pokémon Let's Go Pikachu / Eevee", 4.2, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/pokmonletsgopikachueevee.jpg"], ["Pokémon Scarlet / Violet", 10.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", null], ["Pokémon Sword / Shield", 12.8, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/pokmonswordshield.jpg"], ["Pokémon Unite", 1.5, "♟️ Estrategia", 2021, "Estrategia", "#00ffff", "images/covers/pokmonunite.jpg"], ["Prince of Persia: The Lost Crown", 6.8, "🦇 Metroidvania", 2024, "Metroidvania", "#9900ff", "images/covers/princeofpersiathelostcrown.jpg"], ["Princess Peach: Showtime!", 4.7, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/princesspeachshowtime.jpg"], ["Red Dead Redemption", 11.4, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/reddeadredemption.jpg"], ["Resident Evil", 3.6, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/residentevil.jpg"], ["Resident Evil 0", 3.6, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/residentevil0.jpg"], ["Resident Evil 4 (Original)", 4.0, "👻 Terror", 2019, "Terror", "#ff0000", null], ["Resident Evil 5", 18.7, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/residentevil5.jpg"], ["Resident Evil 6", 17.6, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/residentevil6.jpg"], ["Resident Evil Revelations 1+2", 35.0, "👻 Terror", 2017, "Terror", "#ff0000", "images/covers/residentevilrevelations12.jpg"], ["Ring Fit Adventure", 2.8, "⚽ Deportes", 2019, "Deportes", "#2a59ff", "images/covers/ringfitadventure.jpg"], ["Rocket League", 21.0, "⚽ Deportes", 2017, "Deportes", "#2a59ff", "images/covers/rocketleague.jpg"], ["Sea of Stars", 3.9, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/seaofstars.jpg"], ["Shovel Knight: Treasure Trove", 0.5, "🏃 Plataformas", 2017, "Plataformas", "#ff0088", "images/covers/shovelknighttreasuretrove.jpg"], ["Sid Meier's Civilization VI", 12.0, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", "images/covers/sidmeierscivilizationvi.jpg"], ["Slay the Spire", 0.5, "♟️ Estrategia", 2019, "Estrategia", "#00ffff", "images/covers/slaythespire.jpg"], ["Sonic Frontiers", 10.4, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", "images/covers/sonicfrontiers.jpg"], ["Sonic Mania", 0.4, "🏃 Plataformas", 2017, "Plataformas", "#ff0088", "images/covers/sonicmania.jpg"], ["Sonic Superstars", 4.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/sonicsuperstars.jpg"], ["South Park: Snow Day!", 9.0, "💥 Acción", 2024, "Acción", "#ffaa00", "images/covers/southparksnowday.jpg"], ["South Park: The Fractured But Whole", 14.5, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/southparkthefracturedbutwhole.jpg"], ["South Park: The Stick of Truth", 4.8, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/southparkthestickoftruth.jpg"], ["Spiritfarer", 1.4, "🌱 Simulación", 2020, "Simulación", "#00ff99", "images/covers/spiritfarer.jpg"], ["Splatoon 2", 6.1, "🔫 Shooter", 2017, "Shooter", "#00aaff", "images/covers/splatoon2.jpg"], ["Splatoon 3", 8.2, "🔫 Shooter", 2022, "Shooter", "#00aaff", "images/covers/splatoon3.jpg"], ["SpongeBob SquarePants: Battle for Bikini Bottom", 10.0, "🏃 Plataformas", 2020, "Plataformas", "#ff0088", "images/covers/spongebobsquarepantsbattleforbikinibottom.jpg"], ["SpongeBob SquarePants: The Cosmic Shake", 6.0, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/spongebobsquarepantsthecosmicshake.jpg"], ["Spyro Reignited Trilogy", 15.0, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", "images/covers/spyroreignitedtrilogy.jpg"], ["Star Wars: Battlefront Classic", 25.0, "🔫 Shooter", 2024, "Shooter", "#00aaff", "images/covers/starwarsbattlefrontclassic.jpg"], ["Stardew Valley", 1.5, "🌱 Simulación", 2017, "Simulación", "#00ff99", "images/covers/stardewvalley.jpg"], ["Street Fighter 30th Anniversary", 5.1, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", "images/covers/streetfighter30thanniversary.jpg"], ["Subnautica", 6.2, "🌱 Simulación", 2021, "Simulación", "#00ff99", "images/covers/subnautica.jpg"], ["Subnautica: Below Zero", 5.0, "🌱 Simulación", 2021, "Simulación", "#00ff99", "images/covers/subnauticabelowzero.jpg"], ["Super Mario 3D World + Bowser's Fury", 3.0, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", "images/covers/supermario3dworldbowsersfury.jpg"], ["Super Mario Bros. Wonder", 3.6, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/supermariobroswonder.jpg"], ["Super Mario Maker 2", 2.8, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", "images/covers/supermariomaker2.jpg"], ["Super Mario Odyssey", 5.7, "🏃 Plataformas", 2017, "Plataformas", "#ff0088", "images/covers/supermarioodyssey.jpg"], ["Super Mario Party", 2.7, "🎉 Party", 2018, "Party", "#ffdd00", "images/covers/supermarioparty.jpg"], ["Super Mario RPG", 6.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", null], ["Super Smash Bros. Ultimate", 17.5, "🥊 Pelea", 2018, "Pelea", "#ff2a2a", "images/covers/supersmashbrosultimate.jpg"], ["Taiko no Tatsujin: Rhythm Festival", 3.5, "🎵 Ritmo", 2022, "Ritmo", "#ff0044", "images/covers/taikonotatsujinrhythmfestival.jpg"], ["Teenage Mutant Ninja Turtles: Cowanbunga", 2.8, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", "images/covers/teenagemutantninjaturtlescowanbunga.jpg"], ["Teenage Mutant Ninja Turtles: Shredder's Revenge", 0.9, "🥊 Pelea", 2022, "Pelea", "#ff2a2a", "images/covers/teenagemutantninjaturtlesshreddersrevenge.jpg"], ["Terraria", 0.4, "🧱 Sandbox", 2019, "Sandbox", "#aa5500", "images/covers/terraria.jpg"], ["The Binding of Isaac: Repentance", 1.8, "💀 Roguelike", 2021, "Roguelike", "#ff5500", "images/covers/thebindingofisaacrepentance.jpg"], ["The Elder Scrolls V: Skyrim", 14.5, "⚔️ RPG", 2017, "RPG", "#bd00ff", "images/covers/theelderscrollsvskyrim.jpg"], ["The Legend of Zelda: Breath of the Wild", 16.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", "images/covers/thelegendofzeldabreathofthewild.jpg"], ["The Legend of Zelda: Echoes of Wisdom", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/thelegendofzeldaechoesofwisdom.jpg"], ["The Legend of Zelda: Link's Awakening", 5.8, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", "images/covers/thelegendofzeldalinksawakening.jpg"], ["The Legend of Zelda: Skyward Sword HD", 7.1, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", "images/covers/thelegendofzeldaskywardswordhd.jpg"], ["The Legend of Zelda: Tears of the Kingdom", 16.3, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/thelegendofzeldatearsofthekingdom.jpg"], ["The Witcher 3: Wild Hunt (Complete)", 32.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/thewitcher3wildhuntcomplete.jpg"], ["Tomb Raider I-III Remastered", 5.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/tombraideriiiiremastered.jpg"], ["Tony Hawk's Pro Skater 1+2", 10.0, "⚽ Deportes", 2021, "Deportes", "#2a59ff", "images/covers/tonyhawksproskater12.jpg"], ["Tunic", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/tunic.jpg"], ["Undertale", 0.3, "⚔️ RPG", 2018, "RPG", "#bd00ff", "images/covers/undertale.jpg"], ["Unicorn Overlord", 6.5, "⚔️ RPG", 2024, "RPG", "#bd00ff", "images/covers/unicornoverlord.jpg"], ["Unpacking", 0.6, "🌱 Simulación", 2021, "Simulación", "#00ff99", "images/covers/unpacking.jpg"], ["Untitled Goose Game", 0.8, "🧩 Puzzle", 2019, "Puzzle", "#d400ff", "images/covers/untitledgoosegame.jpg"], ["Vampire Survivors", 0.4, "💀 Roguelike", 2023, "Roguelike", "#ff5500", null], ["Warframe", 19.5, "🔫 Shooter", 2018, "Shooter", "#00aaff", "images/covers/warframe.jpg"], ["WarioWare: Get It Together!", 1.3, "🎉 Party", 2021, "Party", "#ffdd00", "images/covers/wariowaregetittogether.jpg"], ["WarioWare: Move It!", 1.5, "🎉 Party", 2023, "Party", "#ffdd00", "images/covers/wariowaremoveit.jpg"], ["Wolfenstein II: The New Colossus", 23.0, "🔫 Shooter", 2018, "Shooter", "#00aaff", "images/covers/wolfensteiniithenewcolossus.jpg"], ["XCOM 2 Collection", 24.0, "♟️ Estrategia", 2020, "Estrategia", "#00ffff", "images/covers/xcom2collection.jpg"], ["Xenoblade Chronicles 2", 13.2, "⚔️ RPG", 2017, "RPG", "#bd00ff", "images/covers/xenobladechronicles2.jpg"], ["Xenoblade Chronicles 3", 15.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/xenobladechronicles3.jpg"], ["Xenoblade Chronicles: Definitive Edition", 13.7, "⚔️ RPG", 2020, "RPG", "#bd00ff", "images/covers/xenobladechroniclesdefinitiveedition.jpg"], ["Yoshi's Crafted World", 5.3, "🏃 Plataformas", 2019, "Plataformas", "#ff0088", "images/covers/yoshiscraftedworld.jpg"], ["Advance Wars 1+2: Re-Boot Camp", 6.7, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", "images/covers/advancewars12rebootcamp.jpg"], ["Another Code: Recollection", 6.0, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/anothercoderecollection.jpg"], ["Apollo Justice: Ace Attorney Trilogy", 2.0, "📖 Visual Novel", 2024, "Visual Novel", "#ff66aa", "images/covers/apollojusticeaceattorneytrilogy.jpg"], ["Arceus Legends", 6.1, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/arceuslegends.jpg"], ["Assassin's Creed Rogue Remastered", 8.8, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", "images/covers/assassinscreedrogueremastered.jpg"], ["Astroneer", 1.2, "🧱 Sandbox", 2022, "Sandbox", "#aa5500", "images/covers/astroneer.jpg"], ["Atelier Ryza 3", 8.0, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/atelierryza3.jpg"], ["Axion Verge 1+2", 0.8, "🦇 Metroidvania", 2021, "Metroidvania", "#9900ff", "images/covers/axionverge12.jpg"], ["Baba Is You", 0.2, "🧩 Puzzle", 2019, "Puzzle", "#d400ff", "images/covers/babaisyou.jpg"], ["Baten Kaitos I & II HD Remaster", 7.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/batenkaitosiiihdremaster.jpg"], ["Batman: The Telltale Series", 6.0, "🗺️ Aventura", 2017, "Aventura", "#0aff6c", "images/covers/batmanthetelltaleseries.jpg"], ["Beacon Pines", 1.5, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", null], ["Bear and Breakfast", 1.0, "🌱 Simulación", 2022, "Simulación", "#00ff99", "images/covers/bearandbreakfast.jpg"], ["BioShock 2 Remastered", 10.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", "images/covers/bioshock2remastered.jpg"], ["BioShock Infinite", 18.0, "🔫 Shooter", 2020, "Shooter", "#00aaff", "images/covers/bioshockinfinite.jpg"], ["Blasphemous 2", 2.5, "🦇 Metroidvania", 2023, "Metroidvania", "#9900ff", "images/covers/blasphemous2.jpg"], ["Blasphemous", 4.0, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff", "images/covers/blasphemous.jpg"], ["Bloodstained: Ritual of the Night", 8.0, "🦇 Metroidvania", 2019, "Metroidvania", "#9900ff", "images/covers/bloodstainedritualofthenight.jpg"], ["Bomb Rush Cyberfunk", 1.8, "💥 Acción", 2023, "Acción", "#ffaa00", "images/covers/bombrushcyberfunk.jpg"], ["Bravely Default II", 12.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/bravelydefaultii.jpg"], ["Broforce", 0.5, "💥 Acción", 2018, "Acción", "#ffaa00", "images/covers/broforce.jpg"], ["Bug Fables", 0.3, "⚔️ RPG", 2020, "RPG", "#bd00ff", "images/covers/bugfables.jpg"], ["Burnout Paradise Remastered", 4.0, "🏎️ Carreras", 2020, "Carreras", "#fff200", "images/covers/burnoutparadiseremastered.jpg"], ["Cadence of Hyrule", 1.0, "🎵 Ritmo", 2019, "Ritmo", "#ff0044", "images/covers/cadenceofhyrule.jpg"], ["Captain Tsubasa: Rise of New Champions", 12.0, "⚽ Deportes", 2020, "Deportes", "#2a59ff", "images/covers/captaintsubasariseofnewchampions.jpg"], ["Carrion", 0.5, "👻 Terror", 2020, "Terror", "#ff0000", "images/covers/carrion.jpg"], ["Catherine: Full Body", 11.0, "🧩 Puzzle", 2020, "Puzzle", "#d400ff", "images/covers/catherinefullbody.jpg"], ["Chained Echoes", 0.6, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/chainedechoes.jpg"], ["Chicory: A Colorful Tale", 0.9, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", "images/covers/chicoryacolorfultale.jpg"], ["Children of Morta", 1.2, "💀 Roguelike", 2019, "Roguelike", "#ff5500", "images/covers/childrenofmorta.jpg"], ["Chrono Cross: The Radical Dreamers", 4.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/chronocrosstheradicaldreamers.jpg"], ["Cities: Skylines", 3.2, "🌱 Simulación", 2018, "Simulación", "#00ff99", "images/covers/citiesskylines.jpg"], ["Civilization VI", 10.5, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", "images/covers/civilizationvi.jpg"], ["Coffee Talk Ep. 2", 0.5, "📖 Visual Novel", 2023, "Visual Novel", "#ff66aa", "images/covers/coffeetalkep2.jpg"], ["Collection of Mana", 0.4, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/collectionofmana.jpg"], ["Cult of the Lamb: Unholy Alliance", 1.8, "💀 Roguelike", 2024, "Roguelike", "#ff5500", null], ["Cyber Shadow", 0.3, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", "images/covers/cybershadow.jpg"], ["Danganronpa Decadence", 12.0, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", "images/covers/danganronpadecadence.jpg"], ["Darkwood", 1.5, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/darkwood.jpg"], ["Disco Elysium: The Final Cut", 7.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/discoelysiumthefinalcut.jpg"], ["Disgaea 7", 6.5, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", "images/covers/disgaea7.jpg"], ["Divinity: Original Sin 2", 10.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/divinityoriginalsin2.jpg"], ["Doki Doki Literature Club Plus!", 1.6, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", "images/covers/dokidokiliteratureclubplus.jpg"], ["Don't Starve Together", 1.5, "🌱 Simulación", 2022, "Simulación", "#00ff99", null], ["Doom 64", 0.1, "🔫 Shooter", 2020, "Shooter", "#00aaff", "images/covers/doom64.jpg"], ["Doraemon Story of Seasons", 1.5, "🌱 Simulación", 2019, "Simulación", "#00ff99", "images/covers/doraemonstoryofseasons.jpg"], ["Dragon's Dogma: Dark Arisen", 13.0, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/dragonsdogmadarkarisen.jpg"], ["Dredge: The Pale Reach", 1.0, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", null], ["Eastward", 1.5, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/eastward.jpg"], ["Eiyuden Chronicle: Hundred Heroes", 10.0, "⚔️ RPG", 2024, "RPG", "#bd00ff", "images/covers/eiyudenchroniclehundredheroes.jpg"], ["Endless Ocean Luminous", 3.0, "🌱 Simulación", 2024, "Simulación", "#00ff99", "images/covers/endlessoceanluminous.jpg"], ["Enter the Gungeon", 0.5, "💀 Roguelike", 2017, "Roguelike", "#ff5500", "images/covers/enterthegungeon.jpg"], ["Etrian Odyssey Origins Collection", 2.2, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/etrianodysseyoriginscollection.jpg"], ["Factorio", 1.8, "🌱 Simulación", 2022, "Simulación", "#00ff99", null], ["Famicom Detective Club", 1.5, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", null], ["Fatal Frame: Mask of the Lunar Eclipse", 6.8, "👻 Terror", 2023, "Terror", "#ff0000", "images/covers/fatalframemaskofthelunareclipse.jpg"], ["Fatal Frame: Maiden of Black Water", 14.5, "👻 Terror", 2021, "Terror", "#ff0000", "images/covers/fatalframemaidenofblackwater.jpg"], ["FEZ", 0.5, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", "images/covers/fez.jpg"], ["Final Fantasy Pixel Remaster I-VI", 6.0, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/finalfantasypixelremasterivi.jpg"], ["Firewatch", 2.2, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", "images/covers/firewatch.jpg"], ["Game Builder Garage", 1.0, "🌱 Simulación", 2021, "Simulación", "#00ff99", "images/covers/gamebuildergarage.jpg"], ["Gargoyles Remastered", 2.5, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/gargoylesremastered.jpg"], ["Ghost Trick: Phantom Detective", 2.5, "🧩 Puzzle", 2023, "Puzzle", "#d400ff", "images/covers/ghosttrickphantomdetective.jpg"], ["Ghosts 'n Goblins Resurrection", 2.5, "🏃 Plataformas", 2021, "Plataformas", "#ff0088", "images/covers/ghostsngoblinsresurrection.jpg"], ["Goat Simulator 3", 3.5, "🧱 Sandbox", 2023, "Sandbox", "#aa5500", "images/covers/goatsimulator3.jpg"], ["Golf Story", 0.8, "⚔️ RPG", 2017, "RPG", "#bd00ff", "images/covers/golfstory.jpg"], ["Good Job!", 0.5, "🧩 Puzzle", 2020, "Puzzle", "#d400ff", "images/covers/goodjob.jpg"], ["Grandia HD Collection", 4.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/grandiahdcollection.jpg"], ["Grid Autosport", 6.4, "🏎️ Carreras", 2019, "Carreras", "#fff200", "images/covers/gridautosport.jpg"], ["Grim Fandango Remastered", 3.9, "🗺️ Aventura", 2018, "Aventura", "#0aff6c", "images/covers/grimfandangoremastered.jpg"], ["Grounded", 4.0, "🌱 Simulación", 2024, "Simulación", "#00ff99", "images/covers/grounded.jpg"], ["Gunbrella", 0.8, "💥 Acción", 2023, "Acción", "#ffaa00", "images/covers/gunbrella.jpg"], ["Have a Nice Death", 1.5, "💀 Roguelike", 2023, "Roguelike", "#ff5500", "images/covers/haveanicedeath.jpg"], ["Heaven's Vault", 4.5, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", "images/covers/heavensvault.jpg"], ["Hellblade: Senua's Sacrifice", 18.2, "💥 Acción", 2019, "Acción", "#ffaa00", "images/covers/hellbladesenuassacrifice.jpg"], ["Hello Kitty Island Adventure", 2.5, "🌱 Simulación", 2025, "Simulación", "#00ff99", "images/covers/hellokittyislandadventure.jpg"], ["House Flipper 2", 4.0, "🌱 Simulación", 2024, "Simulación", "#00ff99", "images/covers/houseflipper2.jpg"], ["Human Fall Flat", 1.5, "🧩 Puzzle", 2017, "Puzzle", "#d400ff", "images/covers/humanfallflat.jpg"], ["Hyper Light Drifter", 0.8, "🎮 Action", 2018, "Action", "#00f3ff", "images/covers/hyperlightdrifter.jpg"], ["Ib", 0.2, "👻 Terror", 2023, "Terror", "#ff0000", "images/covers/ib.jpg"], ["Inscryption", 1.8, "♟️ Estrategia", 2022, "Estrategia", "#00ffff", "images/covers/inscryption.jpg"], ["Into the Breach", 0.3, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", "images/covers/intothebreach.jpg"], ["It's Quiz Time", 1.5, "🎉 Party", 2017, "Party", "#ffdd00", "images/covers/itsquiztime.jpg"], ["Jackbox Party Pack 10", 2.0, "🎉 Party", 2023, "Party", "#ffdd00", "images/covers/jackboxpartypack10.jpg"], ["Jenny LeClue", 1.5, "🗺️ Aventura", 2020, "Aventura", "#0aff6c", "images/covers/jennyleclue.jpg"], ["Journey to the Savage Planet", 2.6, "🗺️ Aventura", 2020, "Aventura", "#0aff6c", "images/covers/journeytothesavageplanet.jpg"], ["Jurassic World Evolution", 5.5, "🌱 Simulación", 2020, "Simulación", "#00ff99", "images/covers/jurassicworldevolution.jpg"], ["Kentucky Route Zero", 1.5, "🗺️ Aventura", 2002, "Aventura", "#0aff6c", "images/covers/kentuckyroutezero.jpg"], ["Kingdom Come Deliverance", 16.0, "⚔️ RPG", 2024, "RPG", "#bd00ff", "images/covers/kingdomcomedeliverance.jpg"], ["Kingdom Two Crowns", 1.2, "♟️ Estrategia", 2018, "Estrategia", "#00ffff", "images/covers/kingdomtwocrowns.jpg"], ["Klonoa Phantasy Reverie Series", 8.0, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", "images/covers/klonoaphantasyreverieseries.jpg"], ["Laika: Aged Through Blood", 3.0, "🦇 Metroidvania", 2023, "Metroidvania", "#9900ff", "images/covers/laikaagedthroughblood.jpg"], ["Life is Strange: Arcadia Bay Collection", 18.0, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/lifeisstrangearcadiabaycollection.jpg"], ["Life is Strange: True Colors", 10.0, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", "images/covers/lifeisstrangetruecolors.jpg"], ["Little Kitty, Big City", 1.5, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/littlekittybigcity.jpg"], ["Live A Live", 4.5, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/livealive.jpg"], ["Loop Hero", 0.4, "♟️ Estrategia", 2021, "Estrategia", "#00ffff", "images/covers/loophero.jpg"], ["Lost in Random", 3.6, "🗺️ Aventura", 2021, "Aventura", "#0aff6c", "images/covers/lostinrandom.jpg"], ["Luigi's Mansion 1 (Pending)", 2.5, "🗺️ Aventura", 2024, "Aventura", "#0aff6c", "images/covers/luigismansion1pending.jpg"], ["Lumines Remastered", 0.8, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", "images/covers/luminesremastered.jpg"], ["Machinarium", 0.3, "🧩 Puzzle", 2018, "Puzzle", "#d400ff", "images/covers/machinarium.jpg"], ["Manifold Garden", 1.5, "🧩 Puzzle", 2020, "Puzzle", "#d400ff", "images/covers/manifoldgarden.jpg"], ["Mark of the Ninja", 3.0, "💥 Acción", 2018, "Acción", "#ffaa00", "images/covers/markoftheninja.jpg"], ["Marvel Ultimate Alliance 3", 14.5, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/marvelultimatealliance3.jpg"], ["Marvel's Midnight Suns", 20.0, "♟️ Estrategia", 2024, "Estrategia", "#00ffff", "images/covers/marvelsmidnightsuns.jpg"], ["Mega Man Battle Network Legacy Collection", 2.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/megamanbattlenetworklegacycollection.jpg"], ["Metal Slug Tactics", 0.8, "♟️ Estrategia", 2024, "Estrategia", "#00ffff", "images/covers/metalslugtactics.jpg"], ["Metroid Prime 4: Beyond", 12.0, "🔫 Shooter", 2025, "Shooter", "#00aaff", "images/covers/metroidprime4beyond.jpg"], ["Miitopia", 3.0, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/miitopia.jpg"], ["Minecraft Dungeons", 3.5, "⚔️ RPG", 2020, "RPG", "#bd00ff", "images/covers/minecraftdungeons.jpg"], ["Minecraft Legends", 6.8, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", "images/covers/minecraftlegends.jpg"], ["Monster Hunter Stories 2", 14.0, "⚔️ RPG", 2021, "RPG", "#bd00ff", "images/covers/monsterhunterstories2.jpg"], ["Nobody Saves the World", 0.8, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/nobodysavestheworld.jpg"], ["Octopath Traveler II", 8.5, "⚔️ RPG", 2023, "RPG", "#bd00ff", "images/covers/octopathtravelerii.jpg"], ["OlliOlli World", 2.2, "⚽ Deportes", 2022, "Deportes", "#2a59ff", "images/covers/olliolliworld.jpg"], ["OMORI", 1.6, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/omori.jpg"], ["Outer Wilds", 2.2, "🗺️ Aventura", 2023, "Aventura", "#0aff6c", "images/covers/outerwilds.jpg"], ["Persona 5 Tactica", 8.0, "♟️ Estrategia", 2023, "Estrategia", "#00ffff", "images/covers/persona5tactica.jpg"], ["Pizza Tower", 0.4, "🏃 Plataformas", 2024, "Plataformas", "#ff0088", "images/covers/pizzatower.jpg"], ["Portal Companion Collection", 12.0, "🧩 Puzzle", 2022, "Puzzle", "#d400ff", "images/covers/portalcompanioncollection.jpg"], ["Rain World", 2.5, "🗺️ Aventura", 2019, "Aventura", "#0aff6c", "images/covers/rainworld.jpg"], ["Resident Evil 4", 12.0, "👻 Terror", 2019, "Terror", "#ff0000", "images/covers/residentevil4.jpg"], ["Return to Monkey Island", 2.8, "🗺️ Aventura", 2022, "Aventura", "#0aff6c", "images/covers/returntomonkeyisland.jpg"], ["Risk of Rain 2", 1.8, "💀 Roguelike", 2019, "Roguelike", "#ff5500", "images/covers/riskofrain2.jpg"], ["Rune Factory 5", 8.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/runefactory5.jpg"], ["Shin Megami Tensei V: Vengeance", 14.0, "⚔️ RPG", 2024, "RPG", "#bd00ff", "images/covers/shinmegamitenseivvengeance.jpg"], ["Signalis", 1.5, "👻 Terror", 2022, "Terror", "#ff0000", "images/covers/signalis.jpg"], ["Slime Rancher: Plortable Edition", 0.8, "🌱 Simulación", 2021, "Simulación", "#00ff99", "images/covers/slimerancherplortableedition.jpg"], ["Stars Wars: KOTOR II", 12.0, "⚔️ RPG", 2022, "RPG", "#bd00ff", "images/covers/starswarskotorii.jpg"], ["Super Mario Wonder", 4.5, "🏃 Plataformas", 2023, "Plataformas", "#ff0088", "images/covers/supermariowonder.jpg"], ["The Great Ace Attorney Chronicles", 3.5, "📖 Visual Novel", 2021, "Visual Novel", "#ff66aa", "images/covers/thegreataceattorneychronicles.jpg"], ["The Witcher 3: Wild Hunt", 32.0, "⚔️ RPG", 2019, "RPG", "#bd00ff", "images/covers/thewitcher3wildhunt.jpg"], ["Thirteen Sentinels: Aegis Rim", 4.0, "📖 Visual Novel", 2022, "Visual Novel", "#ff66aa", "images/covers/thirteensentinelsaegisrim.jpg"], ["Tinykin", 2.0, "🏃 Plataformas", 2022, "Plataformas", "#ff0088", "images/covers/tinykin.jpg"], ["Triangle Strategy", 6.5, "♟️ Estrategia", 2022, "Estrategia", "#00ffff", "images/covers/trianglestrategy.jpg"], ["Trombome Champ", 0.5, "🎵 Ritmo", 2023, "Ritmo", "#ff0044", "images/covers/trombomechamp.jpg"], ["Two Point Campus", 2.5, "🌱 Simulación", 2022, "Simulación", "#00ff99", "images/covers/twopointcampus.jpg"]]; } catch (e) { GAMES_DATA = []; }

const CATEGORIES = ["Acción", "Action", "Aventura", "Carreras", "Deportes", "Estrategia", "Metroidvania", "Party", "Pelea", "Plataformas", "Puzzle", "RPG", "Ritmo", "Roguelike", "Sandbox", "Shooter", "Simulación", "Terror", "Visual Novel"];
const PHONE_NUMBER = "528115139018";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100092204889914";
const SD_PRESETS = { "64": 58, "128": 119, "256": 238, "512": 476, "1024": 930 };

let GAMES = GAMES_DATA;
let activeCategory = 'all';
let currentSort = 'size_desc';
let selected = new Set();



function init() {
    // FILTRO: Eliminar juegos Online Only y actualizar Just Dance
    const BLACKLIST = ["Apex Legends", "Fortnite", "Overwatch 2", "Warframe", "Rocket League", "Fall Guys", "F-Zero 99", "Palia", "Smite", "Disney Speedstorm"];

    GAMES_DATA = GAMES_DATA.filter(g => !BLACKLIST.includes(g[0]));

    // Actualizar Just Dance
    const jdIndex = GAMES_DATA.findIndex(g => g[0].includes("Just Dance"));
    if (jdIndex !== -1) {
        GAMES_DATA[jdIndex][0] = "Just Dance (Todas las Versiones)";
        GAMES_DATA[jdIndex][1] = 70.0;
        GAMES_DATA[jdIndex][4] = "Ritmo (Próximamente)";
    }

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

    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        const type = Math.random() > 0.5 ? 'left' : 'right';
        el.className = `joycon ${type}`;

        const stick = document.createElement('div'); stick.className = 'analog-stick'; el.appendChild(stick);

        if (type === 'left') {
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
        if (currentSort === 'name_asc') return a[0].localeCompare(b[0]);
        if (currentSort === 'name_desc') return b[0].localeCompare(a[0]);
        if (currentSort === 'size_desc') return b[1] - a[1];
        if (currentSort === 'size_asc') return a[1] - b[1];
        return 0;
    });
    renderGames(filtered);
}

function renderGames(list) {
    const container = document.getElementById('gameList');
    if (!list.length) { container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">NO SE ENCONTRARON JUEGOS</div>'; GAMES = []; return; }
    GAMES = list;

    const preset = document.getElementById('sdPreset').value;
    const sdReal = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;
    let selectedSize = 0;
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if (g) selectedSize += g[1]; });
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
                <div class="check-circle" style="${isSel ? 'background:' + color + ';border-color:' + color : ''}"></div>
            </div>
        </div>`;
    }).join('');
    container.innerHTML = html;
}

function toggleGame(name) {
    const preset = document.getElementById('sdPreset').value;
    const sdSize = SD_PRESETS[preset] || 119;
    const sysReserved = parseFloat(document.getElementById('systemSpace').value) || 17;

    if (!selected.has(name)) {
        let currentTotal = 0;
        selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if (g) currentTotal += g[1]; });
        const game = GAMES_DATA.find(x => x[0] === name);
        if ((currentTotal + sysReserved + game[1]) > sdSize) {
            alert("⚠️ MEMORIA LLENA: No cabe este juego.");
            // viewOrder(); // Removed since button is gone
            return;
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
    selected.forEach(n => { const g = GAMES_DATA.find(x => x[0] === n); if (g) gamesTotal += g[1]; });

    const free = sdSize - (gamesTotal + sysReserved);
    const sysP = Math.min((sysReserved / sdSize) * 100, 100);
    const gameP = Math.min((gamesTotal / sdSize) * 100, 100 - sysP);

    document.getElementById('selectedCount').innerText = selected.size;
    document.getElementById('totalSize').innerText = gamesTotal.toFixed(1) + " GB";
    document.getElementById('freeSpace').innerText = free.toFixed(1) + " GB";

    const bar = document.getElementById('sdProgress');
    const p1 = sysP.toFixed(1);
    const p2 = (sysP + gameP).toFixed(1);

    if (free < 0) {
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
    if (!selected.size) { container.innerHTML = '<span style="color:#888">No has seleccionado juegos aún.</span>'; return; }
    let html = '';
    [...selected].sort().forEach(name => {
        html += `<div class="review-item"><span>${name}</span><span class="btn-delete" onclick="toggleGame('${name.replace(/'/g, "\\'")}'); renderReviewList()">❌</span></div>`;
    });
    container.innerHTML = html;
}

function openWhatsAppModal() {
    if (!selected.size) return alert("Selecciona juegos primero.");
    document.getElementById('whatsappModal').classList.add('active');
    document.getElementById('clientName').focus(); // Auto-focus input
}
function closeModal() { document.getElementById('whatsappModal').classList.remove('active'); }

function sendWhatsApp() {
    const name = document.getElementById('clientName').value;
    // Get Checked Radio Button
    const modelInput = document.querySelector('input[name="consoleModel"]:checked');
    const model = modelInput ? modelInput.value : "Desconocido";

    const preset = document.getElementById('sdPreset').value;
    const sdReal = SD_PRESETS[preset] || 119;

    if (!name) return alert("Por favor escribe tu Nombre."); // Basic Validation

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
