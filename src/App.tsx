import "./App.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Background from "./components/Background";
import {negativeTexts, positiveTexts} from "./buttonTexts";
import Yes from "./Yes";

function App() {
  const navigate = useNavigate();
  // No button
  const [size, setSize] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  // Yes button
  const [yesClicks, setYesClicks] = useState(0);
  const [yesText, setYesText] = useState(0);

  const handleNoClick = () => {
    if (size < 0) {
      return;
    }
    setSize((prevSize) => Math.round((prevSize - 0.05) * 100) / 100);
    setTextIndex((prevIndex) => (prevIndex + 1) % negativeTexts.length);
  };

  const handleYesClick = () => {
    setYesClicks((prevClick) => prevClick + 1);
    setYesText((prevText) => prevText + 1);
    if (yesClicks === positiveTexts.length - 1) {
      // Alert message
      alert("You have been warned.");
      navigate("/yes");
    }
  };

  return (
    <>
      <Yes />
    </>
  );
}

export default App;
