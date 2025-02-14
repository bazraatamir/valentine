import Envelope from "./components/Envelope";
import "./Yes.css";
import {useState, useEffect, useRef} from "react";

const Yes = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Initial mute state

  // Handle unmute action
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

  // Gifts inside the envelopes
  const messages = [
    "You're the best part of my day, every day. Happy Valentine’s Day 💖",
  ];

  const envelopes = messages.map((message, index) => (
    <div key={index} className='flex flex-col items-center'>
      <Envelope id={index}>{message}</Envelope>
      <p className='text-slate-100 mb-2 text-2xl'>
        {["For today", "Anytime", "Romantic time!"][index]}
      </p>
    </div>
  ));

  return (
    <>
      <div className='bg-red-950 w-screen flex flex-col justify-center h-screen'>
        {/* Audio with proper source path */}
        <audio ref={audioRef} autoPlay muted={isMuted}>
          <source
            src='/audio/Stephen_Sanchez_Until_I_Found_You.mp3' // Path relative to public folder
            type='audio/mp3'
          />
          Your browser does not support the audio element.
        </audio>

        <div className='bg-black pt-14 pb-11 mx-4 md:mx-24 md:my-20 my-10 rounded-3xl shadow-2xl opacity-70 shadow-red-600'>
          <div>
            <h1 className='text-slate-100 md:text-5xl text-3xl text-center red-shadow'>
              Happy Valentine's Day!
            </h1>
            <p className='text-slate-100 text-center mt-10 text-xl '>
              Happy Valentine’s Day, crush! Just thinking about you makes my
              heart smile. 😊💕
            </p>
          </div>
          <div className='envelopes-container flex justify-center flex-col xl:flex-row gap-4 mt-4'>
            {envelopes}
          </div>
        </div>
      </div>
    </>
  );
};

export default Yes;
