import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ConfirmationCode = () => {
  const navigate = useNavigate();
  const codeRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(codeRef.current.value);
    try{
      setLoading(true);
      const response = await axios.post('http://localhost:8282/api/authentication/activation', {code : codeRef.current.value});
      console.log(response.data);
      if(response.status === 200){
        navigate('/');
      }else if(response.status === 400){
        setError("Invalide code");
      }else if(respose.status === 406){
        setError(response.statusText);
      }
    }catch(err){
      setError(err);
    }
    setLoading(false);
  }
  if(error){
    return <h1>{error.toString()}</h1>
  }
  if(loading){
    return  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0"><ProgressSpinner/></div>;;
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Confirmer votre Email
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code de confirmation</label>
                <input  name="code" ref={codeRef} id="code" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
              </div>
              
              
              <button type="submit" onClick ={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Valider</button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


