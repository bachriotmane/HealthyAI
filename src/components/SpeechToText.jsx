import React, { useState } from 'react';

const SpeechToText = ({ setFinalRecordedText }) => {
  const [recognizedTexts, setRecognizedTexts] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const startRecognition = () => {
    const recognitionInstance = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognitionInstance.lang = 'fr-FR';
    recognitionInstance.continuous = true;

    recognitionInstance.onstart = () => {
      console.log('Speech recognition started');
      setIsListening(true);
    };

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setRecognizedTexts(prevTexts => [...prevTexts, transcript]);
      setFinalRecordedText(prevTexts => [...prevTexts, transcript]); // Pass the new transcript directly to setFinalRecordedText
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognitionInstance.onend = () => {
      console.log('Speech recognition ended');
      setIsListening(false);
    };

    setRecognition(recognitionInstance); // Set the recognition instance to the state
    recognitionInstance.start();
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop(); // Stop the recognition instance if it exists
      setIsListening(false);
    }
  };

  
  return (

    <div className="flex justify-center align-content-center">
  <div className="flex items-center">
    <button onClick={startRecognition} disabled={isListening} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
      {isListening ? 'Listening...' : 'Start'}
    </button>
    <button onClick={stopRecognition} disabled={!isListening} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Stop
    </button>
  </div>
</div>

  );
};

export default SpeechToText;
