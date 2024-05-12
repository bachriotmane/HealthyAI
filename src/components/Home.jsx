import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Votre santé, notre priorité : Découvrez notre application intelligente pour une prise en charge médicale sur mesure !
        </h1>
        <p>
        Plongez dans l'avenir de la santé avec notre application révolutionnaire. Importer vos analyses et scanners, recevez des recommandations de médicaments et un résumé clair de vos consultations médicales. Votre bien-être entre de bonnes mains avec nous.
        </p>

        {/* <Button title="See Services" /> */}
      </div>
    </div>
  );
};

export default Home;
