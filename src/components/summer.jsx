import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import SpeechToText from "./SpeechToText";
import axiosInstance from "../helpers/api.call";
import { ProgressSpinner } from "primereact/progressspinner";

function Summer() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [object, setObject] = useState(null);

  const [recordedText, setRecordText]= useState('');
  
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAbovg7EqlQ_z7Izm7pk9oDrluROTIgZ1k"
  );
  
  const fetchData = async () => {
    console.log(recordedText);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Here is a conversation between me and my doctor try to give me the summarization and some advices says in it but ensure that this is in the JSON format and do not add any extra text to the output only JSON text here an example :
        !!!! Do not add any extra text in the end or in the begin just a JSON format no extra text please !
        !!!! In the summery part  act like you are talking with me 
        Input :
        ${recordedText}
        Output :
        { "summary": "Le patient consulte son médecin pour une douleur à la gorge. Le médecin diagnostique une pharyngite et prescrit des antibiotiques. Le médecin recommande également au patient de se reposer et de boire beaucoup de liquides.", "advice": [ "Prenez les antibiotiques tels que prescrits par le médecin.", "Reposez-vous suffisamment.", "Buvez beaucoup de liquides.", "Évitez les aliments irritants comme les épices et les agrumes.", "Gargarisez-vous avec de l'eau salée.", "Consultez un médecin si la douleur à la gorge persiste après quelques jours." ] }`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setApiData(text);
    setLoading(false);
    let res = JSON.parse(text);
    setObject(prev => res);
    const resp = await axiosInstance.post("/consultation", {conversation : recordedText.join(' '), summer : res.summary, conseils : res.advice.join(' '),});
    console.log(resp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    fetchData();
    
    
  };
  const setRecorded = (text)=>{
    setRecordText(text);
  }
  console.log(recordedText);
  return (

    <div className="p-4">
  <SpeechToText setFinalRecordedText={setRecorded} />
  <div className="mt-4">
    <form onSubmit={handleSubmit} className="flex justify-center">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  </div>
  <div className="mt-4">
    {loading && <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0"><ProgressSpinner/></div>}
  </div>
  {object && (
    <div className="mt-4">
      <h1 className="text-2xl font-bold mb-2">Resume</h1>
      <p>{object.summary}</p>
      <h1 className="text-2xl font-bold mt-4 mb-2">Advices:</h1>
      <ul>
        {object.advice.map((e, index) => (
          <li key={index} className="list-disc ml-4">{e}</li>
        ))}
      </ul>
    </div>
  )}
</div>


  );
}
export default Summer;