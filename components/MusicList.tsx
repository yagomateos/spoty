"use client";

import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

// Definir la estructura de una canción
interface Song {
  id: string;
  number: number;
  title: string;
  artist: string;
  album: string;
  dateAdded: string;
  duration: string;
  coverUrl: string;
}

// Definir la estructura de una playlist
interface Playlist {
  title: string;
  coverUrl: string;
  creator: string;
  songCount: number;
  duration: string;
  songs: Song[];
}

// Datos de ejemplo para las playlists
const playlists: Record<string, Playlist> = {
  "industrial": {
    title: "Industrial Vibes",
    coverUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "ind-1",
        number: 1,
        title: "Durch Die Haare Die Stirn",
        artist: "Schwefelgelb",
        album: "Dahinter Das Gesicht",
        dateAdded: "hace 1 semana",
        duration: "5:28",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d"
      },
      {
        id: "ind-2",
        number: 2,
        title: "Holier - Street Fever Remix",
        artist: "† † † (Crosses), Street Fever",
        album: "PERMANENT.RADIANT.REMIXED",
        dateAdded: "hace 1 semana",
        duration: "4:04",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d8b9980db67272cb4d2c3daf"
      },
      {
        id: "ind-3",
        number: 3,
        title: "Chaos (Wax Wings Remix)",
        artist: "Louisahhh, Wax Wings",
        album: "The Practice of Freedom (Deluxe)",
        dateAdded: "hace 1 semana",
        duration: "5:09",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "ind-4",
        number: 4,
        title: "Oxygen",
        artist: "Alexander Kowalski",
        album: "K-Dubs",
        dateAdded: "hace 1 semana",
        duration: "5:27",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
      },
      {
        id: "ind-5",
        number: 5,
        title: "Anal Destruction",
        artist: "David Granero, Onyx - K",
        album: "Anal Destruction",
        dateAdded: "hace 1 semana",
        duration: "5:54",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      }
    ]
  },
  "electronica": {
    title: "Electrónica Mix",
    coverUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "elec-1",
        number: 1,
        title: "Electric Dreams",
        artist: "Aphex Twin",
        album: "Electronic Visions",
        dateAdded: "hace 2 semanas",
        duration: "6:12",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "elec-2",
        number: 2,
        title: "Digital Love",
        artist: "Daft Punk",
        album: "Discovery",
        dateAdded: "hace 2 semanas",
        duration: "4:58",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e9c9b2e25b05a77b6b462d39"
      },
      {
        id: "elec-3",
        number: 3,
        title: "Flim",
        artist: "Aphex Twin",
        album: "Come to Daddy",
        dateAdded: "hace 2 semanas",
        duration: "2:57",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "elec-4",
        number: 4,
        title: "Windowlicker",
        artist: "Aphex Twin",
        album: "Windowlicker",
        dateAdded: "hace 2 semanas",
        duration: "6:07",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "elec-5",
        number: 5,
        title: "Around The World",
        artist: "Daft Punk",
        album: "Homework",
        dateAdded: "hace 2 semanas",
        duration: "7:09",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e9c9b2e25b05a77b6b462d39"
      }
    ]
  },
  "tecno": {
    title: "Darklist",
    coverUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "tec-1",
        number: 1,
        title: "Durch Die Haare Die Stirn",
        artist: "Schwefelgelb",
        album: "Dahinter Das Gesicht",
        dateAdded: "hace 1 semana",
        duration: "5:28",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d"
      },
      {
        id: "tec-2",
        number: 2,
        title: "Holier - Street Fever Remix",
        artist: "† † † (Crosses), Street Fever",
        album: "PERMANENT.RADIANT.REMIXED",
        dateAdded: "hace 1 semana",
        duration: "4:04",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d8b9980db67272cb4d2c3daf"
      },
      {
        id: "tec-3",
        number: 3,
        title: "Chaos (Wax Wings Remix)",
        artist: "Louisahhh, Wax Wings",
        album: "The Practice of Freedom (Deluxe)",
        dateAdded: "hace 1 semana",
        duration: "5:09",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "tec-4",
        number: 4,
        title: "Oxygen",
        artist: "Alexander Kowalski",
        album: "K-Dubs",
        dateAdded: "hace 1 semana",
        duration: "5:27",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
      },
      {
        id: "tec-5",
        number: 5,
        title: "Anal Destruction",
        artist: "David Granero, Onyx - K",
        album: "Anal Destruction",
        dateAdded: "hace 1 semana",
        duration: "5:54",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      }
    ]
  },
  "house": {
    title: "House Classics",
    coverUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "house-1",
        number: 1,
        title: "Deep House Vibes",
        artist: "Disclosure",
        album: "House Nation",
        dateAdded: "hace 3 semanas",
        duration: "5:45",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      },
      {
        id: "house-2",
        number: 2,
        title: "House Classics",
        artist: "Frankie Knuckles",
        album: "House Origins",
        dateAdded: "hace 3 semanas",
        duration: "6:12",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e7be8a8650e4391af8e3762e"
      },
      {
        id: "house-3",
        number: 3,
        title: "Latch",
        artist: "Disclosure, Sam Smith",
        album: "Settle",
        dateAdded: "hace 3 semanas",
        duration: "4:16",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      },
      {
        id: "house-4",
        number: 4,
        title: "Your Love",
        artist: "Frankie Knuckles",
        album: "House Masters",
        dateAdded: "hace 3 semanas",
        duration: "7:34",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e7be8a8650e4391af8e3762e"
      },
      {
        id: "house-5",
        number: 5,
        title: "White Noise",
        artist: "Disclosure, AlunaGeorge",
        album: "Settle",
        dateAdded: "hace 3 semanas",
        duration: "5:21",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      }
    ]
  },
  "minimal": {
    title: "Minimal Selection",
    coverUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "min-1",
        number: 1,
        title: "Minimal Structure",
        artist: "Richie Hawtin",
        album: "Minimal Expressions",
        dateAdded: "hace 1 mes",
        duration: "6:45",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d"
      },
      {
        id: "min-2",
        number: 2,
        title: "Less Is More",
        artist: "Ricardo Villalobos",
        album: "Minimal Techno",
        dateAdded: "hace 1 mes",
        duration: "8:32",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d8b9980db67272cb4d2c3daf"
      },
      {
        id: "min-3",
        number: 3,
        title: "Spastik",
        artist: "Plastikman",
        album: "Sheet One",
        dateAdded: "hace 1 mes",
        duration: "7:28",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d"
      },
      {
        id: "min-4",
        number: 4,
        title: "Fizheuer Zieheuer",
        artist: "Ricardo Villalobos",
        album: "Fizheuer Zieheuer",
        dateAdded: "hace 1 mes",
        duration: "9:15",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d8b9980db67272cb4d2c3daf"
      },
      {
        id: "min-5",
        number: 5,
        title: "Consumed",
        artist: "Plastikman",
        album: "Consumed",
        dateAdded: "hace 1 mes",
        duration: "7:56",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d"
      }
    ]
  },
  "remixes": {
    title: "Remix Collection",
    coverUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "remix-1",
        number: 1,
        title: "Remix Culture",
        artist: "Various Artists",
        album: "Remix Collection",
        dateAdded: "hace 2 meses",
        duration: "5:23",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "remix-2",
        number: 2,
        title: "Classic Remixed",
        artist: "DJ Shadow",
        album: "Remix Anthology",
        dateAdded: "hace 2 meses",
        duration: "6:18",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e9c9b2e25b05a77b6b462d39"
      },
      {
        id: "remix-3",
        number: 3,
        title: "Blue Monday (Hardfloor Remix)",
        artist: "New Order, Hardfloor",
        album: "Blue Monday Remixed",
        dateAdded: "hace 2 meses",
        duration: "8:34",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      },
      {
        id: "remix-4",
        number: 4,
        title: "Voodoo Ray (A Guy Called Gerald Remix)",
        artist: "A Guy Called Gerald",
        album: "Voodoo Ray Remixes",
        dateAdded: "hace 2 meses",
        duration: "7:12",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e9c9b2e25b05a77b6b462d39"
      },
      {
        id: "remix-5",
        number: 5,
        title: "Strings of Life (Soul Clap Remix)",
        artist: "Derrick May, Soul Clap",
        album: "Strings of Life Remixed",
        dateAdded: "hace 2 meses",
        duration: "6:45",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a0c33c8c253b660c6c5942b8"
      }
    ]
  },
  "tecnoRave": {
    title: "Techno Rave Party",
    coverUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "tr-1",
        number: 1,
        title: "Rave Night",
        artist: "Amelie Lens",
        album: "Techno Rave",
        dateAdded: "hace 3 meses",
        duration: "5:56",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
      },
      {
        id: "tr-2",
        number: 2,
        title: "Warehouse Rave",
        artist: "Charlotte de Witte",
        album: "Rave Culture",
        dateAdded: "hace 3 meses",
        duration: "6:23",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
      },
      {
        id: "tr-3",
        number: 3,
        title: "Hypnotic",
        artist: "Amelie Lens",
        album: "Hypnotic EP",
        dateAdded: "hace 3 meses",
        duration: "5:12",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
      },
      {
        id: "tr-4",
        number: 4,
        title: "The Age Of Love (Charlotte de Witte & Enrico Sangiuliano Remix)",
        artist: "Age Of Love, Charlotte de Witte, Enrico Sangiuliano",
        album: "The Age Of Love Remixes",
        dateAdded: "hace 3 meses",
        duration: "7:45",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
      },
      {
        id: "tr-5",
        number: 5,
        title: "Weight Of The World",
        artist: "Amelie Lens",
        album: "Weight Of The World EP",
        dateAdded: "hace 3 meses",
        duration: "6:34",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
      }
    ]
  },
  "techoHouse": {
    title: "Tech House Beats",
    coverUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    creator: "",
    songCount: 5,
    duration: "25min",
    songs: [
      {
        id: "th-1",
        number: 1,
        title: "Tech House Fusion",
        artist: "Fisher",
        album: "Tech House Movement",
        dateAdded: "hace 4 meses",
        duration: "5:34",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      },
      {
        id: "th-2",
        number: 2,
        title: "Tech House Groove",
        artist: "Solardo",
        album: "Tech House Essentials",
        dateAdded: "hace 4 meses",
        duration: "6:12",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e7be8a8650e4391af8e3762e"
      },
      {
        id: "th-3",
        number: 3,
        title: "Losing It",
        artist: "Fisher",
        album: "Losing It",
        dateAdded: "hace 4 meses",
        duration: "6:43",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      },
      {
        id: "th-4",
        number: 4,
        title: "XTC",
        artist: "Solardo",
        album: "XTC",
        dateAdded: "hace 4 meses",
        duration: "5:23",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e7be8a8650e4391af8e3762e"
      },
      {
        id: "th-5",
        number: 5,
        title: "You Little Beauty",
        artist: "Fisher",
        album: "You Little Beauty",
        dateAdded: "hace 4 meses",
        duration: "6:32",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e25147a0e"
      }
    ]
  }
};

interface MusicListProps {
  category: string;
}

export default function MusicList({ category }: MusicListProps) {
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);

  useEffect(() => {
    // Actualizar la playlist cuando cambia la categoría
    if (playlists[category]) {
      setCurrentPlaylist(playlists[category]);
    } else {
      // Si la categoría no existe, usar tecno como fallback
      setCurrentPlaylist(playlists.tecno);
    }
  }, [category]);

  if (!currentPlaylist) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-6">
      {/* Playlist header */}
      <div className="flex items-end gap-6 mb-6">
        <div className="w-56 h-56 shadow-lg">
          <img 
            src={currentPlaylist.coverUrl} 
            alt={currentPlaylist.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase mb-2">Lista pública</p>
          <h1 className="text-7xl font-bold mb-6">{currentPlaylist.title}</h1>
          <div className="flex items-center text-sm text-zinc-300">
            <span>{currentPlaylist.creator}</span>
            <span className="mx-1">•</span>
            <span>{currentPlaylist.songCount} canciones,</span>
            <span className="ml-1">{currentPlaylist.duration}</span>
          </div>
        </div>
      </div>

      {/* Playlist controls */}
      <div className="flex items-center gap-6 mb-6">
        <button 
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1DB954] text-black hover:scale-105 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
        <button className="text-zinc-400 hover:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </button>
        <div className="flex items-center ml-auto">
          <button className="text-zinc-400 hover:text-white mr-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <div className="flex items-center text-zinc-400">
            <span className="text-sm mr-2">Orden personalizado</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* Songs table */}
      <table className="w-full text-left text-sm text-zinc-400 mt-4">
        <thead className="border-b border-zinc-700">
          <tr>
            <th className="pb-2 w-10">#</th>
            <th className="pb-2">Título</th>
            <th className="pb-2">Álbum</th>
            <th className="pb-2">Fecha en la que se añadió</th>
            <th className="pb-2 text-right">
              <Clock size={16} />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPlaylist.songs.map((song) => (
            <tr 
              key={song.id} 
              className="hover:bg-white/10 group"
            >
              <td className="py-3 align-middle">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="group-hover:hidden">{song.number}</span>
                  <button className="hidden group-hover:block">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <img 
                    src={song.coverUrl} 
                    alt={song.title} 
                    className="w-10 h-10 mr-4"
                  />
                  <div>
                    <div className="text-white font-medium">{song.title}</div>
                    <div>{song.artist}</div>
                  </div>
                </div>
              </td>
              <td className="py-3">{song.album}</td>
              <td className="py-3">{song.dateAdded}</td>
              <td className="py-3 text-right">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}