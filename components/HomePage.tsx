"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { playlists } from "@/lib/songs";

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(playlists.top50Global.songs[0].audioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex-1 overflow-auto bg-black p-6">
      <h1 className="text-3xl font-bold mb-6">Spoty Tech</h1>

      {/* Featured Playlists - Horizontal Cards */}
      <div className="flex gap-6 mb-10">
        <div className="flex items-center gap-4 bg-[#181818] hover:bg-[#252525] transition-colors rounded overflow-hidden cursor-pointer p-4 flex-1 relative group">
          <div className="w-16 h-16 relative flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="Top 50 Global" 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-bold">Top 50 Global</h3>
          </div>
          
          {/* Botón de reproducción */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="absolute right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#1DB954] text-black hover:scale-105 transition"
          >
            {isPlaying ? 
              <Pause size={20} /> : 
              <Play size={20} fill="black" className="ml-1" />
            }
          </button>
        </div>
        
        <div className="flex items-center gap-4 bg-[#181818] hover:bg-[#252525] transition-colors rounded overflow-hidden cursor-pointer p-4 flex-1">
          <div className="w-16 h-16 relative flex-shrink-0">
            <img 
              src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg" 
              alt="Dance Mix" 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-bold">Dance Mix</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-[#181818] hover:bg-[#252525] transition-colors rounded overflow-hidden cursor-pointer p-4 flex-1">
          <div className="w-16 h-16 relative flex-shrink-0">
            <img 
              src="https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e" 
              alt="Chill Vibes" 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-bold">Chill Vibes</h3>
          </div>
        </div>
      </div>

      {/* Techno Mixes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mixes de techno</h2>
        <div className="grid grid-cols-4 gap-6">
          {/* Mix 1 - Techno Rave */}
          <div className="bg-[#181818] rounded hover:bg-[#252525] transition-colors cursor-pointer overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg" 
                alt="Mix Techno Rave" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Mix Techno Underground</h3>
              <p className="text-sm text-zinc-400">Ben Klock, Marcel Dettmann, Jeff Mills</p>
            </div>
          </div>

          {/* Mix 2 - Minimal Techno */}
          <div className="bg-[#181818] rounded hover:bg-[#252525] transition-colors cursor-pointer overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg" 
                alt="Mix Minimal Techno" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Mix Minimal Techno</h3>
              <p className="text-sm text-zinc-400">Richie Hawtin, Dubfire, Paco Osuna</p>
            </div>
          </div>

          {/* Mix 3 - Tech House */}
          <div className="bg-[#181818] rounded hover:bg-[#252525] transition-colors cursor-pointer overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg" 
                alt="Mix Tech House" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Mix Tech House</h3>
              <p className="text-sm text-zinc-400">Fisher, Solardo, Hot Since 82</p>
            </div>
          </div>

          {/* Mix 4 - Techno Rave */}
          <div className="bg-[#181818] rounded hover:bg-[#252525] transition-colors cursor-pointer overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg" 
                alt="Mix Techno Rave" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Mix Techno Rave</h3>
              <p className="text-sm text-zinc-400">Amelie Lens, Charlotte de Witte, FJAAK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}