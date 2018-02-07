import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  data = {
    "artists": [
      {
        "artistName": "Lupe Fiasco",
        "artistsPicture": "../assets/artists-images/lupe.jpg",
        "genre": "Hip-Hop",
        "albums": [
          { "name": "The Cool",
            "genre": "Hip-Hop",
            "artistName": "Lupe Fiasco",
            "year": "2006",
            "isExplicit": "true",
            "albumCover": "../assets/album-covers/thecool.jpeg",
            "songs": [
              { "name": "Baba Says Cool for Thought",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :"0:47",
                "isExplicit" : "true"
                },
              { "name": "Free Chilly ft Sarah Green and GemStones",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :"1:02",
                "isExplicit" : "true"
                },
              { "name": "Go Go Gadget Flow",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :"4:10",
                "isExplicit" : "true"
                },
              { "name": "The Coolest",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :"5:13",
                "isExplicit" : "true"
                },
              { "name": "Superstar ft Matthew Santos",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :"4:49",
                "isExplicit" : "true"
                },
              { "name": "Paris, Tokyo",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :"4:31",
                "isExplicit" : "true"
                },
              { "name": "Hi-Definition ft Snoop Dogg and Pooh Bear",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :"3:52",
                "isExplicit" : "true"
                },
              { "name": "Gold Watch",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :"4:13",
                "isExplicit" : "true"
                },
              { "name": "Hip-Hop Saved My Life ft Nikki Jean",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :"4:03",
                "isExplicit" : "true"
                },
              { "name": "Intruder Alert ft Sarah Green",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :"4:00",
                "isExplicit" : "true"
                },
              { "name": "Streets on Fire ft Matthew Santos",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :"4:40",
                "isExplicit" : "true"
                },
              { "name": "Little Weapon ft Bishop G and Nikki Jean",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :"4:06",
                "isExplicit" : "true"
                },
              { "name": "Gotta Eat",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :"3:24",
                "isExplicit" : "true"
                },
              { "name": "Dumb It Down ft GemStones and Graham Burris",
                "tracknumber" : "14",
                "file": "mp3",
                "length" :"4:04",
                "isExplicit" : "true"
                },
              { "name": "Hello / Goodbye (Uncool) ft Unkle",
                "tracknumber" : "15",
                "file": "mp3",
                "length" :"4:27",
                "isExplicit" : "true"
                },
              { "name": "The Die ft GemStones",
                "tracknumber" : "16",
                "file": "mp3",
                "length" :"3:23",
                "isExplicit" : "true"
                },
              { "name": "Put You on Game",
                "tracknumber" : "17",
                "file": "mp3",
                "length" :"3:03",
                "isExplicit" : "true"
                },
              { "name": "Fighters ft Matthew Santos",
                "tracknumber" : "18",
                "file": "mp3",
                "length" :"3:33",
                "isExplicit" : "true"
                },
              { "name": "Go Baby ft GemStones",
                "tracknumber" : "19",
                "file": "mp3",
                "length" :"3:38",
                "isExplicit" : "true"
                },
            ]
          },
          { "name": "Food & Liquor",
            "artistName": "Lupe Fiasco",
            "genre": "Hip-Hop",
            "year": "2006",
            "isExplicit": "true",
            "albumCover": "../assets/album-covers/f&l.jpg",
            "songs": [
              { "name": "Intro",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "Real ft Sarah Green",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "Just Might Be O.K. ft Gemini",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "Kick, Push",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "I Gotcha",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "The Instrumental",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "He Say, She Say",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "Sunshine",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "Daydreamin' ft Jill Scott",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "The Cool",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "Hurt Me Soul",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "Pressure ft Jay-Z",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              },
              { "name": "American Terrorist ft Matthew Santos",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :""
              },
              { "name": "The Emperor's Soundtrack",
                "tracknumber" : "14",
                "file": "mp3",
                "length" :""
              },
              { "name": "Kick, Push II",
                "tracknumber" : "15",
                "file": "mp3",
                "length" :""
              },
              { "name": "Outro",
                "tracknumber" : "16",
                "file": "mp3",
                "length" :""
              }
            ]

          }
        ]
      },
      {
        "artistName": "Flume",
        "artistsPicture": "../assets/artists-images/flume.jpg",
        "genre": "Electronic",
        "albums": [
          { "name": "Flume",
            "artistName": "Flume",
            "genre": "Electronic",
            "year": "2012",
            "isExplicit": "true",
            "albumCover": "../assets/album-covers/flume.jpg",
            "songs": [
              { "name": "Sintra",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "Holdin On",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "Left Alone ft Chet Faker",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "Sleepless",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "On Top",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "Stay Close",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "Insane",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "Change",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "Ezra",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "More Than You Thought",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "Space Cadet",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "Bring You Down ft George Maple",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              },
              { "name": "Warm Thoughts",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :""
              },
              { "name": "What You Need",
                "tracknumber" : "14",
                "file": "mp3",
                "length" :""
              },
              { "name": "Star Eyes",
                "tracknumber" : "15",
                "file": "mp3",
                "length" :""
              },
          ]
          },
          { "name": "Skin",
            "artistName": "Flume",
            "isExplicit": "true",
            "genre": "Electronic",
            "year": "2016",
            "albumCover": "../assets/album-covers/skin.png",
            "songs": [
              { "name": "Helix",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "Never Be like You ft Kai",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "Lose It ft Vic Mensa",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "Numb & Getting Colder ft Kučka",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "Say It ft Tove Lo",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "Wall Fuck",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "Pika",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "Smoke & Retribution ft Vince Staples and Kučka",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "3",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "When Everything Was New",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "You Know ft Allan Kingdom and Raekwon",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "Take a Chance ft Little Dragon",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              },
              { "name": "Innocence ft AlunaGeorge",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :""
              },
              { "name": "Like Water ft MNDR",
                "tracknumber" : "14",
                "file": "mp3",
                "length" :""
              },
              { "name": "Free",
                "tracknumber" : "15",
                "file": "mp3",
                "length" :""
              },
              { "name": "Tiny Cities ft Beck",
                "tracknumber" : "16",
                "file": "mp3",
                "length" :""
              },
          ]
          }
        ]
      },
      {
        "artistName": "Linkin Park",
        "artistsPicture": "../assets/artists-images/linkinpark.jpg",
        "genre": "Nu-Metal",
        "albums": [
          { "name": "Hybrid Theory",
            "artistName": "Linkin Park",
            "isExplicit": "true",
            "genre": "Nu-Metal",
            "year": "2000",
            "albumCover": "../assets/album-covers/meteora.jpg",
            "songs": [
              { "name": "Papercut",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "One Step Closer",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "With You",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "Points of Authority",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "Crawling",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "Runaway",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "By Myself",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "In the End",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "A Place for My Head",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "Forgotten",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "Cure for the Itch",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "Pushing Me Away",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              }
          ]
          }
        ]
      },
      {
        "artistName": "Drake",
        "artistsPicture": "../assets/artists-images/drake.jpg",
        "genre": "Hip-Hop",
        "albums": [
          { "name": "Views",
            "artistName": "Drake",
            "genre": "Hip-Hop",
            "year": "2016",
            "isExplicit": "true",
            "albumCover": "../assets/album-covers/views.png",
            "songs":[
              { "name": "Keep the Family Close",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "9",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "U with Me?",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "Feel No Ways",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "Hype",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "Weston Road Flows",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "Redemption",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "With You ft PartyNextDoor",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "Faithful ft Pimp C and Dvsn",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "Still Here",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "Controlla",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "One Dance ft Wizkid and Kyla",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              },
              { "name": "Grammys ft Future",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :""
              },
              { "name": "Childs Play",
                "tracknumber" : "14",
                "file": "mp3",
                "length" :""
              },
              { "name": "Pop Style",
                "tracknumber" : "15",
                "file": "mp3",
                "length" :""
              },
              { "name": "Too Good ft Rihanna",
                "tracknumber" : "16",
                "file": "mp3",
                "length" :""
              },
              { "name": "Summers Over Interlude",
                "tracknumber" : "17",
                "file": "mp3",
                "length" :""
              },
              { "name": "Fire & Desire",
                "tracknumber" : "18",
                "file": "mp3",
                "length" :""
              },
              { "name": "Views",
                "tracknumber" : "19",
                "file": "mp3",
                "length" :""
              },
              { "name": "Hotline Bling",
                "tracknumber" : "20",
                "file": "mp3",
                "length" :""
              },
          ]
          }
        ]
      },
      {
        "artistName": "J.Cole",
        "artistsPicture": "../assets/artists-images/jcole.jpg",
        "genre": "",
        "albums": [
          { "name": "2014 Forest Hills Drive",
            "artistName": "J.Cole",
            "isExplicit": "true",
            "genre": "Hip-Hop",
            "year": "2014",
            "albumCover": "../assets/album-covers/fhd.jpg",
            "songs": [
              { "name": "Intro",
                "track umber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "January 28th",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "Wet Dreamz",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "03' Adolescence",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "A Tale of 2 Citiez",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "Fire Squad",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "St. Tropez",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "G.O.M.D.",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "No Role Modelz",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "Hello",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "Apparently",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "Love Yourz",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              },
              { "name": "Note to Self",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :""
              }
          ]
          }
        ]
      },
      {
        "artistName": "Eminem",
        "artistsPicture": "../assets/artists-images/eminem.jpg",
        "genre": "Hip-Hop",
        "albums": [
          { "name": "Marshal Matthers LP",
            "artistName": "Eminem",
            "isExplicit": "true",
            "genre": "Hip-Hop",
            "year": "2000",
            "albumCover": "../assets/album-covers/mmlp.jpg",
            "songs": [
              { "name": "Public Service Announcement 2000",
                "tracknumber" : "1",
                "file": "mp3",
                "length" :""
              },
              { "name": "Kill You",
                "tracknumber" : "2",
                "file": "mp3",
                "length" :""
              },
              { "name": "Stan ft Dido",
                "tracknumber" : "3",
                "file": "mp3",
                "length" :""
              },
              { "name": "Paul (skit)",
                "tracknumber" : "4",
                "file": "mp3",
                "length" :""
              },
              { "name": "Who Knew",
                "tracknumber" : "5",
                "file": "mp3",
                "length" :""
              },
              { "name": "Steve Berman (skit)",
                "tracknumber" : "6",
                "file": "mp3",
                "length" :""
              },
              { "name": "The Way I Am",
                "tracknumber" : "7",
                "file": "mp3",
                "length" :""
              },
              { "name": "The Real Slim Shady",
                "tracknumber" : "8",
                "file": "mp3",
                "length" :""
              },
              { "name": "Remember Me? ft RBX and Sticky Fingaz",
                "tracknumber" : "9",
                "file": "mp3",
                "length" :""
              },
              { "name": "I'm Back",
                "tracknumber" : "10",
                "file": "mp3",
                "length" :""
              },
              { "name": "Marshall Mathers",
                "tracknumber" : "11",
                "file": "mp3",
                "length" :""
              },
              { "name": "Ken Kaniff (skit)",
                "tracknumber" : "12",
                "file": "mp3",
                "length" :""
              },
              { "name": "Drug Ballad ft Dina Rae",
                "tracknumber" : "13",
                "file": "mp3",
                "length" :""
              },
              { "name": "Amityville ft Bizarre",
                "tracknumber" : "14",
                "file": "mp3",
                "length" :""
              },
              { "name": "Bitch Please II ft Dr. Dre, Snoop Dogg, Xzibit and Nate Dogg",
                "tracknumber" : "15",
                "file": "mp3",
                "length" :""
              },
              { "name": "Kim",
                "tracknumber" : "16",
                "file": "mp3",
                "length" :""
              },
              { "name": "Under the Influence ft D12",
                "tracknumber" : "17",
                "file": "mp3",
                "length" :""
              },
              { "name": "Criminal",
                "tracknumber" : "18",
                "file": "mp3",
                "length" :""
              },
          ]
          }
        ]
      },
    ]
  }


}
