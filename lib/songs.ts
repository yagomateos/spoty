// lib/songs.ts
export interface Song {
  id: string
  title: string
  artist: string
  album?: string
  duration: number
  coverUrl: string
  audioUrl: string
}

// Using royalty-free music from Pixabay and other free sources
export const songs: Song[] = [
  {
    id: "1",
    title: "Electronic Future Beats",
    artist: "Alex Productions",
    album: "Electronic Vibes",
    duration: 178, // 2:58
    coverUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
    audioUrl:
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c9a4a1d10b.mp3?filename=electronic-future-beats-117997.mp3",
  },
  {
    id: "2",
    title: "Techno Dystopia",
    artist: "QubeSounds",
    album: "Digital Dreams",
    duration: 144, // 2:24
    coverUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    audioUrl:
      "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1eab.mp3?filename=techno-dystopia-126329.mp3",
  },
  {
    id: "3",
    title: "Cyber Technology",
    artist: "Lexin Music",
    album: "Future Tech",
    duration: 119, // 1:59
    coverUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    audioUrl:
      "https://cdn.pixabay.com/download/audio/2021/11/23/audio_cb31eb1517.mp3?filename=cyber-technology-122074.mp3",
  },
  {
    id: "4",
    title: "Stomping Electro Sport",
    artist: "Coma Media",
    album: "Electro Beats",
    duration: 140, // 2:20
    coverUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    audioUrl:
      "https://cdn.pixabay.com/download/audio/2021/10/25/audio_77f2b31506.mp3?filename=stomping-electro-sport-118649.mp3",
  },
  {
    id: "5",
    title: "Tech House Vibes",
    artist: "Coma Media",
    album: "House Sessions",
    duration: 166, // 2:46
    coverUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl:
      "https://cdn.pixabay.com/download/audio/2022/03/19/audio_270f8b9e87.mp3?filename=tech-house-vibes-130bpm-130306.mp3",
  },
]

// Create category-specific song lists
const createCategorySongs = (categoryId: string, startIndex: number, count: number) => {
  return songs.slice(startIndex, startIndex + count).map((song) => ({
    ...song,
    id: `${categoryId}-${song.id}`,
  }))
}

// Playlists organized by category
export const playlists = {
  top50Global: {
    id: "top50Global",
    title: "Top 50 Global",
    coverUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    songs: [songs[0], songs[1], songs[2]],
  },
  industrial: {
    id: "industrial",
    title: "Industrial Vibes",
    coverUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    songs: createCategorySongs("industrial", 0, 3),
  },
  electronica: {
    id: "electronica",
    title: "Electrónica Mix",
    coverUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
    songs: createCategorySongs("electronica", 1, 3),
  },
  tecno: {
    id: "tecno",
    title: "Darklist",
    coverUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    songs: createCategorySongs("tecno", 2, 3),
  },
  house: {
    id: "house",
    title: "House Classics",
    coverUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    songs: createCategorySongs("house", 3, 2),
  },
  minimal: {
    id: "minimal",
    title: "Minimal Selection",
    coverUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    songs: createCategorySongs("minimal", 0, 3),
  },
  remixes: {
    id: "remixes",
    title: "Remix Collection",
    coverUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
    songs: createCategorySongs("remixes", 1, 3),
  },
  tecnoRave: {
    id: "tecnoRave",
    title: "Techno Rave Party",
    coverUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    songs: createCategorySongs("tecnoRave", 2, 3),
  },
  techoHouse: {
    id: "techoHouse",
    title: "Tech House Beats",
    coverUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    songs: createCategorySongs("techoHouse", 3, 2),
  },
}

