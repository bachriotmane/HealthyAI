import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Nos Services
          </h1>
          
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} desc="Téléchargez vos analyses et scanners en un clin d'œil et recevez des recommandations de médicaments précises grâce à notre technologie avancée d'intelligence artificielle." title="Explication des analyses medicales" lien="/analyse" />
        <ServicesCard icon={icon2} desc="Capturez vos consultations avec les médecins et recevez des conseils personnalisés ainsi qu'un résumé clair de chaque rendez-vous pour une prise en charge médicale complète et simplifiée." title="Enregistrement et analyse de consultations médicales" lien="/consultation"/>
      </div>
    </div>
  );
};

export default Services;
