import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">À propos de nous</h1>
        <p className=" text-justify lg:text-start">
        Notre application est le fruit d'une ambition : rendre la santé plus accessible et compréhensible pour tous. Conçue avec soin, elle intègre des technologies de pointe pour permettre aux utilisateurs de télécharger leurs analyses et scanners en toute simplicité. Notre IA analyse ces données pour fournir des recommandations de médicaments et des explications claires des résultats. Avec nous, la santé devient transparente, pratique et personnalisée.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
