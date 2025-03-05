"use client"

import { useState, useRef, useEffect } from "react"
import type { Song } from "@/lib/songs"

export const useAudioPlayer = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0
        audio.play()
      } else {
        playNextSong()
      }
    }

    const handleError = (e: Event) => {
      console.error("Audio error:", e)
      setIsPlaying(false)
    }

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    progressIntervalRef.current = setInterval(() => {
      if (audio && isPlaying) {
        setProgress(audio.currentTime)
      }
    }, 100)

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [isPlaying, isRepeat])

  const playNextSong = () => {
    if (playlist.length === 0) return

    const currentIndex = playlist.findIndex((song) => song.id === currentSong?.id)
    let nextIndex = currentIndex + 1

    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * playlist.length)
    } else if (nextIndex >= playlist.length) {
      nextIndex = 0
    }

    playSong(playlist[nextIndex])
  }

  const playPreviousSong = () => {
    if (playlist.length === 0) return

    const currentIndex = playlist.findIndex((song) => song.id === currentSong?.id)
    let previousIndex = currentIndex - 1

    if (isShuffle) {
      previousIndex = Math.floor(Math.random() * playlist.length)
    } else if (previousIndex < 0) {
      previousIndex = playlist.length - 1
    }

    playSong(playlist[previousIndex])
  }

  const playSong = (song: Song) => {
    if (!audioRef.current) return

    if (currentSong?.id === song.id) {
      togglePlay()
    } else {
      if (isPlaying) {
        audioRef.current.pause()
      }

      try {
        audioRef.current.src = song.audioUrl
        audioRef.current.load()

        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              setCurrentSong(song)
            })
            .catch((error) => {
              console.error("Playback prevented by browser:", error)
              setCurrentSong(song)
              setIsPlaying(false)
            })
        }
      } catch (error) {
        console.error("Error playing song:", error)
      }
    }
  }

  const togglePlay = () => {
    if (!audioRef.current || !currentSong) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              console.error("Playback prevented by browser:", error)
            })
        }
      }
    } catch (error) {
      console.error("Error toggling playback:", error)
    }
  }

  const setAudioVolume = (value: number) => {
    if (audioRef.current) {
      const newVolume = Math.max(0, Math.min(1, value))
      audioRef.current.volume = newVolume
      setVolume(newVolume)
    }
  }

  const seekTo = (seconds: number) => {
    if (audioRef.current && !isNaN(seconds)) {
      try {
        audioRef.current.currentTime = Math.max(0, Math.min(seconds, audioRef.current.duration || 0))
        setProgress(audioRef.current.currentTime)
      } catch (error) {
        console.error("Error seeking:", error)
      }
    }
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle)
  }

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat)
  }

  const setCurrentPlaylist = (newPlaylist: Song[]) => {
    setPlaylist(newPlaylist)
  }

  return {
    currentSong,
    isPlaying,
    progress,
    duration,
    volume,
    isShuffle,
    isRepeat,
    playSong,
    togglePlay,
    setAudioVolume,
    seekTo,
    playNextSong,
    playPreviousSong,
    toggleShuffle,
    toggleRepeat,
    setCurrentPlaylist,
  }
}

