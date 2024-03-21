import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth, faHeart, faPeace, faHammer } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Anaesthesiology"
          description="Anesthesiology is a medical specialty focused on providing pain relief and managing unconsciousness during surgical procedures or other medical interventions. Anesthesiologists carefully administer various types of anesthesia to ensure patients remain comfortable and safe throughout their procedures. They also monitor vital signs and adjust anesthesia levels as needed to maintain optimal patient stability and well-being."
          icon={faHeart}
        />

        <InformationCard
          title="Cardiology"
          description="Cardiology is the medical specialty focusing on heart and circulatory system disorders. Cardiologists diagnose and treat conditions like heart disease, arrhythmias, and heart failure using medication and procedures like angioplasty. They aim to optimize heart health and prevent complications for their patients."

          
          icon={faHammer}
        />

        <InformationCard
          title="Sexual Medicine"
          description="Andrology and Sexual Medicine is a field focused on male reproductive health and sexual function. Specialists diagnose and treat issues like erectile dysfunction and infertility, aiming to restore sexual health and fertility in men."
          icon={faPeace}
        />
      </div>
    </div>
  );
}

export default Info;
