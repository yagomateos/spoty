export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  audioUrl: string;
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Top 50 Global',
    artist: 'Various Artists',
    album: 'Top 50 Global',
    coverUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3'
  },
  {
    id: '2',
    title: 'Dance Mix',
    artist: 'Various Artists',
    album: 'Dance Mix',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3'
  },
  {
    id: '3',
    title: 'Chill Vibes',
    artist: 'Various Artists',
    album: 'Chill Vibes',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-chill-gaming-loop-132.mp3'
  }
];