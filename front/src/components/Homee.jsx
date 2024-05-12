import React, { useState } from 'react';

const Home = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-6">
          <nav className="flex justify-between items-center">
            <div>
              <a href="/" className="font-semibold text-xl">HealthAi</a>
            </div>
            <div className="hidden md:block">
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 ml-4">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 ml-4">Solution</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 ml-4">Contact Us</a>
            </div>
            <div className="md:hidden">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <span className="text-gray-600 hover:text-gray-900"><i className="fas fa-bars"></i></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('hero-image.jpg')"}}>
        <section className="h-screen flex items-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Votre santé est notre priorité</h1>
            <p className="text-lg text-white mb-8">Welcome to HealthAi</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Get Started
            </a>
          </div>
        </section>
      </div>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About HealthAi</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            HealthAi is a web application that allows users to import their health analysis files and provides them with a summary of the analysis results. Users can also save their medical consultations and have a summary of those consultations. HealthAi provides various health-related tips and information.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
              <i className="fas fa-handshake text-white text-2xl"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold mb-2">Customer's Dream</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
          <div className="flex flex-wrap justify-center">
            {/* Feature 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
              <div className="rounded-lg bg-white shadow-lg p-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold my-4">Detailed Analysis</h3>
                <p className="text-gray-600 mb-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href='/analyse' className='bg-sky-500 rounded-lg p-3 text-black'>Visiter</a>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
              <div className="rounded-lg bg-white shadow-lg p-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-file-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold my-4">Save Consultations</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className='bg-sky-500 rounded-lg p-3 text-black'>Visiter</a>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
              <div className="rounded-lg bg-white shadow-lg p-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-info-circle text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold my-4">Health Tips</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href='/' className='bg-sky-500 rounded-lg p-3 text-black '>Visiter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Solution</h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold mb-2">Addressing Customer's Problem</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-wrap justify-center">
            <form className="w-full max-w-lg">
              <div className="flex items-center py-2">
                <label className="w-1/3 text-right mr-6">Name:</label>
                <input type="text" className="w-2/3 px-4 py-2 border rounded" />
              </div>
              <div className="flex items-center py-2">
                <label className="w-1/3 text-right mr-6">Email:</label>
                <input type="email" className="w-2/3 px-4 py-2 border rounded" />
              </div>
              <div className="flex items-center py-2">
                <label className="w-1/3 text-right mr-6">Message:</label>
                <textarea className="w-2/3 px-4 py-2 border rounded"></textarea>
              </div>
              <div className="flex justify-center mt-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-wrap justify-between py-4 px-6">
          <div className="w-full sm:w-1/2">
            <h3 className="text-xl font-bold mb-2">HealthAi</h3>
            <p className="text-gray-400">Votre santé est notre priorité</p>
          </div>
          <div className="w-full sm:w-1/2 sm:text-right">
            <ul className="flex justify-end">
              <li className="ml-4">
                <a href="#"><i className="fab fa-facebook text-white"></i></a>
              </li>
              <li className="ml-4">
                <a href="#"><i className="fab fa-twitter text-white"></i></a>
              </li>
              <li className="ml-4">
                <a href="#"><i className="fab fa-instagram text-white"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      
    </>
  );
};

export default Home;
