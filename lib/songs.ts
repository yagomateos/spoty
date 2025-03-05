// lib/songs.ts
export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  coverUrl?: string;
  audioUrl: string;
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Durch Die Haare Die Stirn",
    artist: "Schwefelgelb",
    album: "Dahinter Das Gesicht",
    duration: 328, // 5:28
    coverUrl: "https://i.scdn.co/image/ab67616d00001e02e0c8a8e7c5f3e2c0a4f75b8a",
    audioUrl: "https://s19.aconvert.com/convert/p3r68-cdx67/drb44-ahxdi.mp3"
    
  },
  {
    id: "2",
    title: "Holier - Street Fever Remix",
    artist: "† † † (Crosses), Street Fever",
    album: "PERMANENT.RADIANT.REMIXED",
    duration: 244, // 4:04
    coverUrl: "https://i.scdn.co/image/ab67616d00001e02f5e7b2e5adbc8d68e1cf4b4c",
    audioUrl: "https://example.com/audio/holier-street-fever-remix.mp3"
  },
  // Añadir una canción para Top 50 Global
  {
    id: "top50-1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200, // 3:20
    coverUrl: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a4",
    audioUrl: "https://p.scdn.co/mp3-preview/31f2b1824cd3ee598618a7c1b343862e4a44be7d"
  }
];

// Añadir una lista de reproducción para Top 50 Global
export const playlists = {
  top50Global: {
    id: "top50Global",
    title: "Top 50 Global",
    coverUrl: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a4",
    songs: [songs.find(song => song.id === "top50-1")!]
  }
};