// var request = require('request'),
var db = require('../models');



var champions = [ 
           {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Monkey King",
            "id": 62,
            "key": "MonkeyKing",
            "name": "Wukong"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "Grandmaster at Arms",
            "id": 24,
            "key": "Jax",
            "name": "Jax"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Harbinger of Doom",
            "id": 9,
            "key": "Fiddlesticks",
            "name": "Fiddlesticks"
        }, {"tags": [
                "Assassin"
            ],
            "title": "the Demon Jester",
            "id": 35,
            "key": "Shaco",
            "name": "Shaco"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Uncaged Wrath of Zaun",
            "id": 19,
            "key": "Warwick",
            "name": "Warwick"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Rebel",
            "id": 498,
            "key": "Xayah",
            "name": "Xayah"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Bestial Huntress",
            "id": 76,
            "key": "Nidalee",
            "name": "Nidalee"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "Rise of the Thorns",
            "id": 143,
            "key": "Zyra",
            "name": "Zyra"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Cantankerous Cavalier",
            "id": 240,
            "key": "Kled",
            "name": "Kled"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Burning Vengeance",
            "id": 63,
            "key": "Brand",
            "name": "Brand"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "the Armordillo",
            "id": 33,
            "key": "Rammus",
            "name": "Rammus"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Kraken Priestess",
            "id": 420,
            "key": "Illaoi",
            "name": "Illaoi"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Daring Bombardier",
            "id": 42,
            "key": "Corki",
            "name": "Corki"
        }, {"tags": [
                "Support",
                "Tank"
            ],
            "title": "the Heart of the Freljord",
            "id": 201,
            "key": "Braum",
            "name": "Braum"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Hand of Noxus",
            "id": 122,
            "key": "Darius",
            "name": "Darius"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Barbarian King",
            "id": 23,
            "key": "Tryndamere",
            "name": "Tryndamere"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Bounty Hunter",
            "id": 21,
            "key": "MissFortune",
            "name": "Miss Fortune"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "Shepherd of Souls",
            "id": 83,
            "key": "Yorick",
            "name": "Yorick"
        }, {"tags": [
                "Mage",
                "Assassin"
            ],
            "title": "the Magus Ascendant",
            "id": 101,
            "key": "Xerath",
            "name": "Xerath"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Battle Mistress",
            "id": 15,
            "key": "Sivir",
            "name": "Sivir"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Exile",
            "id": 92,
            "key": "Riven",
            "name": "Riven"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Lady of Clockwork",
            "id": 61,
            "key": "Orianna",
            "name": "Orianna"
        }, {"tags": [
                "Fighter"
            ],
            "title": "the Saltwater Scourge",
            "id": 41,
            "key": "Gangplank",
            "name": "Gangplank"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "Shard of the Monolith",
            "id": 54,
            "key": "Malphite",
            "name": "Malphite"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "Keeper of the Hammer",
            "id": 78,
            "key": "Poppy",
            "name": "Poppy"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Deathsinger",
            "id": 30,
            "key": "Karthus",
            "name": "Karthus"
        }, {"tags": [
                "Fighter",
                "Marksman"
            ],
            "title": "the Defender of Tomorrow",
            "id": 126,
            "key": "Jayce",
            "name": "Jayce"
        }, {"tags": [
                "Support",
                "Fighter"
            ],
            "title": "the Yeti Rider",
            "id": 20,
            "key": "Nunu",
            "name": "Nunu"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Troll King",
            "id": 48,
            "key": "Trundle",
            "name": "Trundle"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Outlaw",
            "id": 104,
            "key": "Graves",
            "name": "Graves"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "Fallen Angel",
            "id": 25,
            "key": "Morgana",
            "name": "Morgana"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Missing Link",
            "id": 150,
            "key": "Gnar",
            "name": "Gnar"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Lady of Luminosity",
            "id": 99,
            "key": "Lux",
            "name": "Lux"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Half-Dragon",
            "id": 102,
            "key": "Shyvana",
            "name": "Shyvana"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Butcher of the Sands",
            "id": 58,
            "key": "Renekton",
            "name": "Renekton"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Grand Duelist",
            "id": 114,
            "key": "Fiora",
            "name": "Fiora"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Loose Cannon",
            "id": 222,
            "key": "Jinx",
            "name": "Jinx"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Spear of Vengeance",
            "id": 429,
            "key": "Kalista",
            "name": "Kalista"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Tidal Trickster",
            "id": 105,
            "key": "Fizz",
            "name": "Fizz"
        }, {"tags": [
                "Assassin",
                "Mage"
            ],
            "title": "the Void Walker",
            "id": 38,
            "key": "Kassadin",
            "name": "Kassadin"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "Maven of the Strings",
            "id": 37,
            "key": "Sona",
            "name": "Sona"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Will of the Blades",
            "id": 39,
            "key": "Irelia",
            "name": "Irelia"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Machine Herald",
            "id": 112,
            "key": "Viktor",
            "name": "Viktor"
        }, {"tags": [
                "Support"
            ],
            "title": "The Charmer",
            "id": 497,
            "key": "Rakan",
            "name": "Rakan"
        }, {"tags": [
                "Marksman"
            ],
            "title": "The Eternal Hunters",
            "id": 203,
            "key": "Kindred",
            "name": "Kindred"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Serpent's Embrace",
            "id": 69,
            "key": "Cassiopeia",
            "name": "Cassiopeia"
        }, {"tags": [
                "Tank",
                "Mage"
            ],
            "title": "the Twisted Treant",
            "id": 57,
            "key": "Maokai",
            "name": "Maokai"
        }, {"tags": [
                "Support",
                "Fighter"
            ],
            "title": "the Chain Warden",
            "id": 412,
            "key": "Thresh",
            "name": "Thresh"
        }, {"tags": [
                "Fighter",
                "Support"
            ],
            "title": "The Judicator",
            "id": 10,
            "key": "Kayle",
            "name": "Kayle"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Shadow of War",
            "id": 120,
            "key": "Hecarim",
            "name": "Hecarim"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Voidreaver",
            "id": 121,
            "key": "Khazix",
            "name": "Kha'Zix"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Berserker",
            "id": 2,
            "key": "Olaf",
            "name": "Olaf"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Hexplosives Expert",
            "id": 115,
            "key": "Ziggs",
            "name": "Ziggs"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Dark Sovereign",
            "id": 134,
            "key": "Syndra",
            "name": "Syndra"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Madman of Zaun",
            "id": 36,
            "key": "DrMundo",
            "name": "Dr. Mundo"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Enlightened One",
            "id": 43,
            "key": "Karma",
            "name": "Karma"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Dark Child",
            "id": 1,
            "key": "Annie",
            "name": "Annie"
        }, {"tags": [
                "Assassin"
            ],
            "title": "the Fist of Shadow",
            "id": 84,
            "key": "Akali",
            "name": "Akali"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Thunder's Roar",
            "id": 106,
            "key": "Volibear",
            "name": "Volibear"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Unforgiven",
            "id": 157,
            "key": "Yasuo",
            "name": "Yasuo"
        }, {"tags": [
                "Mage",
                "Marksman"
            ],
            "title": "the Heart of the Tempest",
            "id": 85,
            "key": "Kennen",
            "name": "Kennen"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Pridestalker",
            "id": 107,
            "key": "Rengar",
            "name": "Rengar"
        }, {"tags": [
                "Mage",
                "Fighter"
            ],
            "title": "the Rune Mage",
            "id": 13,
            "key": "Ryze",
            "name": "Ryze"
        }, {"tags": [
                "Tank,melee"
            ],
            "title": "the Eye of Twilight",
            "id": 98,
            "key": "Shen",
            "name": "Shen"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "the Secret Weapon",
            "id": 154,
            "key": "Zac",
            "name": "Zac"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Blade's Shadow",
            "id": 91,
            "key": "Talon",
            "name": "Talon"
        }, {"tags": [
                "Mage",
                "Fighter"
            ],
            "title": "the Master Tactician",
            "id": 50,
            "key": "Swain",
            "name": "Swain"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Wandering Caretaker",
            "id": 432,
            "key": "Bard",
            "name": "Bard"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "The Undead Juggernaut",
            "id": 14,
            "key": "Sion",
            "name": "Sion"
        }, {"tags": [
                "Marksman",
                "Assassin"
            ],
            "title": "the Night Hunter",
            "id": 67,
            "key": "Vayne",
            "name": "Vayne"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Curator of the Sands",
            "id": 75,
            "key": "Nasus",
            "name": "Nasus"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Shadow Reaper",
            "id": 141,
            "key": "Kayn",
            "name": "Kayn"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Card Master",
            "id": 4,
            "key": "TwistedFate",
            "name": "Twisted Fate"
        }, {"tags": [
                "Tank",
                "Mage"
            ],
            "title": "the Terror of the Void",
            "id": 31,
            "key": "Chogath",
            "name": "Cho'Gath"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Spirit Walker",
            "id": 77,
            "key": "Udyr",
            "name": "Udyr"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Purifier",
            "id": 236,
            "key": "Lucian",
            "name": "Lucian"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Green Father",
            "id": 427,
            "key": "Ivern",
            "name": "Ivern"
        }, {"tags": [
                "Tank",
                "Support"
            ],
            "title": "the Radiant Dawn",
            "id": 89,
            "key": "Leona",
            "name": "Leona"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Sheriff of Piltover",
            "id": 51,
            "key": "Caitlyn",
            "name": "Caitlyn"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "Fury of the North",
            "id": 113,
            "key": "Sejuani",
            "name": "Sejuani"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Eternal Nightmare",
            "id": 56,
            "key": "Nocturne",
            "name": "Nocturne"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Chronokeeper",
            "id": 26,
            "key": "Zilean",
            "name": "Zilean"
        }, {"tags": [
                "Mage",
                "Marksman"
            ],
            "title": "the Emperor of the Sands",
            "id": 268,
            "key": "Azir",
            "name": "Azir"
        }, {"tags": [
                "Fighter",
                "Mage"
            ],
            "title": "the Mechanized Menace",
            "id": 68,
            "key": "Rumble",
            "name": "Rumble"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Stoneweaver",
            "id": 163,
            "key": "Taliyah",
            "name": "Taliyah"
        }, {"tags": [
                "Marksman",
                "Assassin"
            ],
            "title": "the Swift Scout",
            "id": 17,
            "key": "Teemo",
            "name": "Teemo"
        }, {"tags": [
                "Fighter",
                "Marksman"
            ],
            "title": "the Dreadnought",
            "id": 6,
            "key": "Urgot",
            "name": "Urgot"
        }, {"tags": [
                "Tank",
                "Mage"
            ],
            "title": "the Sad Mummy",
            "id": 32,
            "key": "Amumu",
            "name": "Amumu"
        }, {"tags": [
                "Tank",
                "Mage"
            ],
            "title": "the Colossus",
            "id": 3,
            "key": "Galio",
            "name": "Galio"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Revered Inventor",
            "id": 74,
            "key": "Heimerdinger",
            "name": "Heimerdinger"
        }, {"tags": [
                "Mage",
                "Support"
            ],
            "title": "the Cryophoenix",
            "id": 34,
            "key": "Anivia",
            "name": "Anivia"
        }, {"tags": [
                "Marksman",
                "Support"
            ],
            "title": "the Frost Archer",
            "id": 22,
            "key": "Ashe",
            "name": "Ashe"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Eye of the Void",
            "id": 161,
            "key": "Velkoz",
            "name": "Vel'Koz"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "the Mad Chemist",
            "id": 27,
            "key": "Singed",
            "name": "Singed"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Crystal Vanguard",
            "id": 72,
            "key": "Skarner",
            "name": "Skarner"
        }, {"tags": [
                "Marksman",
                "Mage"
            ],
            "title": "the Arrow of Retribution",
            "id": 110,
            "key": "Varus",
            "name": "Varus"
        }, {"tags": [
                "Marksman",
                "Assassin"
            ],
            "title": "the Plague Rat",
            "id": 29,
            "key": "Twitch",
            "name": "Twitch"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "The Might of Demacia",
            "id": 86,
            "key": "Garen",
            "name": "Garen"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "the Great Steam Golem",
            "id": 53,
            "key": "Blitzcrank",
            "name": "Blitzcrank"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Wuju Bladesman",
            "id": 11,
            "key": "MasterYi",
            "name": "Master Yi"
        }, {"tags": [
                "Mage",
                "Fighter"
            ],
            "title": "the Spider Queen",
            "id": 60,
            "key": "Elise",
            "name": "Elise"
        }, {"tags": [
                "Tank",
                "Support"
            ],
            "title": "the Minotaur",
            "id": 12,
            "key": "Alistar",
            "name": "Alistar"
        }, {"tags": [
                "Assassin",
                "Mage"
            ],
            "title": "the Sinister Blade",
            "id": 55,
            "key": "Katarina",
            "name": "Katarina"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Boy Who Shattered Time",
            "id": 245,
            "key": "Ekko",
            "name": "Ekko"
        }, {"tags": [
                "Fighter"
            ],
            "title": "the Iron Revenant",
            "id": 82,
            "key": "Mordekaiser",
            "name": "Mordekaiser"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Fae Sorceress",
            "id": 117,
            "key": "Lulu",
            "name": "Lulu"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Steel Shadow",
            "id": 164,
            "key": "Camille",
            "name": "Camille"
        }, {"tags": [
                "Fighter",
                "Tank"
            ],
            "title": "the Darkin Blade",
            "id": 266,
            "key": "Aatrox",
            "name": "Aatrox"
        }, {"tags": [
                "Marksman"
            ],
            "title": "the Glorious Executioner",
            "id": 119,
            "key": "Draven",
            "name": "Draven"
        }, {"tags": [
                "Support",
                "Tank"
            ],
            "title": "the River King",
            "id": 223,
            "key": "TahmKench",
            "name": "Tahm Kench"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Artisan of War",
            "id": 80,
            "key": "Pantheon",
            "name": "Pantheon"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Seneschal of Demacia",
            "id": 5,
            "key": "XinZhao",
            "name": "Xin Zhao"
        }, {"tags": [
                "Mage",
                "Fighter"
            ],
            "title": "The Star Forger",
            "id": 136,
            "key": "AurelionSol",
            "name": "Aurelion Sol"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Blind Monk",
            "id": 64,
            "key": "LeeSin",
            "name": "Lee Sin"
        }, {"tags": [
                "Support",
                "Fighter"
            ],
            "title": "the Shield of Valoran",
            "id": 44,
            "key": "Taric",
            "name": "Taric"
        }, {"tags": [
                "Mage",
                "Assassin"
            ],
            "title": "the Prophet of the Void",
            "id": 90,
            "key": "Malzahar",
            "name": "Malzahar"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Ice Witch",
            "id": 127,
            "key": "Lissandra",
            "name": "Lissandra"
        }, {"tags": [
                "Fighter",
                "Mage"
            ],
            "title": "Scorn of the Moon",
            "id": 131,
            "key": "Diana",
            "name": "Diana"
        }, {"tags": [
                "Marksman",
                "Assassin"
            ],
            "title": "the Yordle Gunner",
            "id": 18,
            "key": "Tristana",
            "name": "Tristana"
        }, {"tags": [
                "Fighter"
            ],
            "title": "the Void Burrower",
            "id": 421,
            "key": "RekSai",
            "name": "Rek'Sai"
        }, {"tags": [
                "Mage",
                "Tank"
            ],
            "title": "the Crimson Reaper",
            "id": 8,
            "key": "Vladimir",
            "name": "Vladimir"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "the Exemplar of Demacia",
            "id": 59,
            "key": "JarvanIV",
            "name": "Jarvan IV"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Tidecaller",
            "id": 267,
            "key": "Nami",
            "name": "Nami"
        }, {"tags": [
                "Marksman",
                "Assassin"
            ],
            "title": "the Virtuoso",
            "id": 202,
            "key": "Jhin",
            "name": "Jhin"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Starchild",
            "id": 16,
            "key": "Soraka",
            "name": "Soraka"
        }, {"tags": [
                "Mage"
            ],
            "title": "the Tiny Master of Evil",
            "id": 45,
            "key": "Veigar",
            "name": "Veigar"
        }, {"tags": [
                "Support",
                "Mage"
            ],
            "title": "the Storm's Fury",
            "id": 40,
            "key": "Janna",
            "name": "Janna"
        }, {"tags": [
                "Tank",
                "Fighter"
            ],
            "title": "the Titan of the Depths",
            "id": 111,
            "key": "Nautilus",
            "name": "Nautilus"
        }, {"tags": [
                "Assassin",
                "Mage"
            ],
            "title": "the Widowmaker",
            "id": 28,
            "key": "Evelynn",
            "name": "Evelynn"
        }, {"tags": [
                "Fighter",
                "Mage"
            ],
            "title": "the Rabble Rouser",
            "id": 79,
            "key": "Gragas",
            "name": "Gragas"
        }, {"tags": [
                "Assassin",
                "Fighter"
            ],
            "title": "the Master of Shadows",
            "id": 238,
            "key": "Zed",
            "name": "Zed"
        }, {"tags": [
                "Fighter",
                "Assassin"
            ],
            "title": "the Piltover Enforcer",
            "id": 254,
            "key": "Vi",
            "name": "Vi"
        }, {"tags": [
                "Marksman",
                "Mage"
            ],
            "title": "the Mouth of the Abyss",
            "id": 96,
            "key": "KogMaw",
            "name": "Kog'Maw"
        }, {"tags": [
                "Mage",
                "Assassin"
            ],
            "title": "the Nine-Tailed Fox",
            "id": 103,
            "key": "Ahri",
            "name": "Ahri"
        }, {"tags": [
                "Marksman",
                "Fighter"
            ],
            "title": "Demacia's Wings",
            "id": 133,
            "key": "Quinn",
            "name": "Quinn"
        }, {"tags": [
                "Assassin",
                "Mage"
            ],
            "title": "the Deceiver",
            "id": 7,
            "key": "Leblanc",
            "name": "LeBlanc"
        }, {"tags": [
                "Marksman",
                "Mage"
            ],
            "title": "the Prodigal Explorer",
            "id": 81,
            "key": "Ezreal",
            "name": "Ezreal"
        }
];

console.log(champions);

// db.Champion.remove({}, function(err, champions) {
//     db.Champion.create(champion_list, function(err, champions) {
//         console.log(champions);
//     });
// });

//EXPRESS
     // var express = require('express');
// v  ar app = express();  
  
// //BODY-PARSER
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());


// var apiKey = require('../apikey.js');
// var champPath= "https://na1.api.riotgames.com/lol/static-data/v3/champions?"
// };
// request(champPath + champQuery + apiKey, function(error, response, body) {
//     JSON.parse(body);
//   va  r new_body = body.data;
//   co  nsole.log(new_body);
//   //   console.log(JSON.parse(body));
// });

    
    // db.Champion.remove({}, function(err, champions) {
    	// for(var i = 0; i < body.length; i++){
            
    		// champion_list.forEach(function(data) {
    		// var champion = new db.Champion({
    		// 	name : data.name
    		// });
    		// champion.save(function(err) {
    		// 	if (err) throw err;
    		// 	console.log( "champion: " + champion.name + " saved" );
    		// });
      // });
    // });  	
// db.Champion.find(function(err, champions) {
// if (err) {
//     return console.log("index error: " + err);
// }
// });



