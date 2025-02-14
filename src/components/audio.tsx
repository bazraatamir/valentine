import React from "react";
import {useRef, useEffect, useState} from "react";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Initial mute state

  const handleUnmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Unmute the audio
      setIsMuted(false); // Update state
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Try autoplay on mount
    }
  }, []);
  return (
    <div>
      <audio autoPlay>
        <source
          src='C:\Users\Acer\Downloads\wannabemyvalentine-main\src\audio\Stephen Sanchez - _Until I Found You_ (Official Audio) (mp3cut.net) (1).mp3'
          type='audio/mp3'
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
