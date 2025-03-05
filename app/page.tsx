"use client";

import { Play, Pause, Volume2 } from "lucide-react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { songs } from "@/lib/songs";

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function Home() {
  const { currentSong, isPlaying, progress, duration, playSong, setVolume, seekTo } = useAudioPlayer();

  return (
    <div className="h-screen bg-[#121212]">
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr]">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <aside className="hidden lg:block bg-black p-6">
          <nav className="space-y-6">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 78 24" height="24"><path d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.592-1.388a1.077 1.077 0 0 1-1.164-.363 1.14 1.14 0 0 1-.119-1.237c.136-.262.37-.46.648-.548 4.132-1.287 11-1.038 15.342 1.605a1.138 1.138 0 0 1 .099 1.863 1.081 1.081 0 0 1-.813.213c-.142-.02-.28-.07-.4-.145Zm-.124 3.402a.915.915 0 0 1-.563.42.894.894 0 0 1-.69-.112c-3.144-1.983-7.937-2.557-11.657-1.398a.898.898 0 0 1-.971-.303.952.952 0 0 1-.098-1.03.929.929 0 0 1 .54-.458c4.248-1.323 9.53-.682 13.14 1.595a.95.95 0 0 1 .3 1.286Zm-1.43 3.267a.73.73 0 0 1-.45.338.712.712 0 0 1-.553-.089c-2.748-1.722-6.204-2.111-10.276-1.156a.718.718 0 0 1-.758-.298.745.745 0 0 1-.115-.265.757.757 0 0 1 .092-.563.737.737 0 0 1 .457-.333c4.455-1.045 8.277-.595 11.361 1.338a.762.762 0 0 1 .241 1.028ZM11.696 0C5.237 0 0 5.373 0 12c0 6.628 5.236 12 11.697 12 6.46 0 11.698-5.372 11.698-12 0-6.627-5.238-12-11.699-12h.001Z" fill="currentColor"/></svg>
            </div>

            <nav className="space-y-3">
              <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Inicio
              </a>
              <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0-4.8V21m0-4.8H7.8M3 21h4.8"/><path d="M21 7.8V3m0 4.8V3m0 4.8H16.2M21 3h-4.8"/><path d="M3 7.8V3m0 4.8V3m0 4.8H7.8M3 3h4.8"/></svg>
                Buscar
              </a>
              <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                Tu Biblioteca
              </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits España</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniver Funk</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #13</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            </nav>
          </nav>
        </aside>

        {/* Mobile Navigation Bar */}
        <div className="fixed bottom-[72px] left-0 right-0 bg-gradient-to-t from-black to-black/80 p-4 lg:hidden">
          <nav className="flex justify-around">
            <a href="" className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="text-xs text-zinc-200">Inicio</span>
            </a>
            <a href="" className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0-4.8V21m0-4.8H7.8M3 21h4.8"/><path d="M21 7.8V3m0 4.8V3m0 4.8H16.2M21 3h-4.8"/><path d="M3 7.8V3m0 4.8V3m0 4.8H7.8M3 3h4.8"/></svg>
              <span className="text-xs text-zinc-200">Buscar</span>
            </a>
            <a href="" className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              <span className="text-xs text-zinc-200">Tu Biblioteca</span>
            </a>
          </nav>
        </div>

        {/* Main content */}
        <main className="bg-[#121212] p-4 lg:p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <h1 className="font-semibold text-2xl lg:text-3xl mt-8 text-white">Good Afternoon</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {songs.map((song) => (
              <a key={song.id} href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src={song.coverUrl} width={104} height={104} alt={`${song.title} cover`} className="lg:w-[104px] lg:h-[104px]" />
                <strong className="text-white">{song.title}</strong>
                <button 
                  className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1DB954] text-black ml-auto mr-4 lg:mr-8 invisible group-hover:visible"
                  onClick={() => playSong(song)}
                >
                  {currentSong?.id === song.id && isPlaying ? (
                    <Pause fill="black" size={20} />
                  ) : (
                    <Play fill="black" size={20} />
                  )}
                </button>
              </a>
            ))}
          </div>

          <h2 className="font-semibold text-xl lg:text-2xl mt-8 text-white">Made for You</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" className="w-full" width={120} height={120} alt="Album cover" />
              <strong className="font-semibold text-white">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="https://images.unsplash.com/photo-1671726203449-ad3279d25921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" className="w-full" width={120} height={120} alt="Album cover" />
              <strong className="font-semibold text-white">Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">Imagine Dragons, AJR, OneRepublic</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" className="w-full" width={120} height={120} alt="Album cover" />
              <strong className="font-semibold text-white">Daily Mix 3</strong>
              <span className="text-sm text-zinc-400">Coldplay, The Lumineers, Vance Joy</span>
            </a>
          </div>
        </main>
      </div>

      {/* Footer with player */}
      <footer className="bg-black border-t border-zinc-900 px-3 py-3 lg:px-6 lg:py-4 fixed bottom-0 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            {currentSong && (
              <>
                <Image src={currentSong.coverUrl} width={56} height={56} alt={`${currentSong.title} cover`} className="lg:w-[56px] lg:h-[56px]" />
                <div className="flex flex-col">
                  <strong className="text-sm lg:text-base text-white">{currentSong.title}</strong>
                  <span className="text-xs text-zinc-400">{currentSong.artist}</span>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 lg:gap-6">
              <button className="text-zinc-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 5-7 7 7 7"/><path d="m4 12h16"/></svg>
              </button>
              <button 
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black"
                onClick={() => currentSong && playSong(currentSong)}
              >
                {isPlaying ? (
                  <Pause size={20} />
                ) : (
                  <Play size={20} />
                )}
              </button>
              <button className="text-zinc-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 19 7-7-7-7"/><path d="M20 12H4"/></svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center gap-2 mt-2">
              <span className="text-xs text-zinc-400">
                {currentSong ? formatTime(duration * (progress / 100)) : "0:00"}
              </span>
              <Slider
                value={[progress]}
                max={100}
                step={0.1}
                onValueChange={(value) => seekTo(value[0])}
                className="w-96"
              />
              <span className="text-xs text-zinc-400">
                {currentSong ? formatTime(duration) : "0:00"}
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Volume2 className="text-zinc-200 w-5 h-5" />
              <Slider
                defaultValue={[100]}
                max={100}
                step={1}
                onValueChange={(value) => setVolume(value[0] / 100)}
                className="w-24"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}