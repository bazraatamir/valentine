import "./App.css";
import {useState, useRef, useEffect} from "react";
import {Howl} from "howler";
import Yes from "./Yes";
// import AudioPlayer from "./components/audio";

function App() {
  const [audio, setAudio] = useState<Howl | null>(null);
  useEffect(() => {
    const newAudio = new Howl({
      src: [
        "../audio/Stephen Sanchez - _Until I Found You_ (Official Audio) (mp3cut.net) (1).mp3",
      ], // Your audio path
      volume: 0.5,
      autoplay: false, // Don't autoplay on load
      onend: () => console.log("Audio playback ended"),
    });

    setAudio(newAudio);

    // Trigger auto-play after first user interaction (like scroll or page focus)
    const handleUserInteraction = () => {
      if (newAudio) {
        newAudio.play();
      }
      // Remove event listener after the first interaction
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("focus", handleUserInteraction);
    };

    // Add event listeners for user interaction
    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("focus", handleUserInteraction);

    // Clean up the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("focus", handleUserInteraction);
    };
  }, []);
  return (
    <>
      {/* <div></div> */}
      <Yes />
    </>
  );
}

export default App;
