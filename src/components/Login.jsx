import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('')
  const navigate = useNavigate();
  const handleSignUpClicked = ()=>{
    navigate("/register");
  }
  const handleLogin =async  (e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      const resp =await axios.post("http://localhost:8282/api/authentication/login",{
        username : usernameRef.current.value,
        password : passwordRef.current.value,
        withRefreshToken : false,
        grantType : "password",
      },);
      console.log(resp.data);
      if(resp.status === 200){
        console.log(resp.data.accessToken);
        localStorage.setItem("token",resp.data.accessToken);
        const decode = jwtDecode(resp.data.accessToken)
        localStorage.setItem('user', decode.sub);
        window.location.reload();
      
      }
    }catch(err){
      if(err.response.status === 401){
        setError("Bad Credentilas, Try Agin");
      }
    }
    setLoading(false);
  }
  if(error){
    return <h1>{error.toString()}</h1>;
  }if(loading){
    return  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0"><ProgressSpinner/></div>;;
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Se connecter
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" ref={usernameRef} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                <input type="password"  ref = {passwordRef} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Se souvenir de moi</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" onClick={handleLogin} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleSignUpClicked} >Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


