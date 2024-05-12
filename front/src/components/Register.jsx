import axios from 'axios';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

export const Register = () => {
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const sexRef = useRef(null);
  const telRef = useRef(null);
  const passwordRef = useRef(null);
  const nomRef = useRef(null);
  const [error, setError] = useState(null);
  const confirmPasswordRef = useRef(null);
  const [isLoading, setIsloading] = useState(false);
  
  
  const navigate = useNavigate();
  const handleLoginClicked = ()=>{
    navigate("/");
  }
  const handleRegisterSubmit =async (e)=>{
    e.preventDefault();
    
    try{
      setIsloading(true);
      const response = await axios.post('http://localhost:8282/api/authentication/register', {username : nomRef.current.value , email : emailRef.current.value, password : passwordRef.current.value, tel : telRef.current.value, age : ageRef.current.value});
      if(response.status === 200){
        navigate("/confirmation");
      }
    }catch(err){
      setError(err);
    }
    setIsloading(false);
  }
  if(error){
    return <h1>{error}</h1>;
  }
  if(isLoading){
    return <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0"><ProgressSpinner/></div>;
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              S'inscrire
            </h1>
            <form className="space-y-4 md:space-y-6">
            <div>
                <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                <input type="text" name="nom" ref={nomRef} id="nom" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" ref={emailRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                <input type="password" ref={passwordRef} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmation du Mot de passe</label>
                <input type="password"  name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Télephone</label>
                <input type="text"  ref={telRef} name="tel" id="tel" placeholder="number phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input type="text" ref={ageRef} name="password" id="age" placeholder="Age" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="sexe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexe</label>
                <select name="sexe" id="sexe" ref={sexRef} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" onClick={handleRegisterSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleLoginClicked} >Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


