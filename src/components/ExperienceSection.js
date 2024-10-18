import * as React from "react";
import ExperienceCard from "./experience";
import companayimg1 from "../assets/img/school1.jpg";
import companayimg2 from "../assets/img/school2.jpg";



const experiences = [
    {
        companyImage: companayimg1,
        role: "IT in Diploma",
        companyName: "Jharsuguda Engineering School",
        jobDuration:"Oct 2022 - July 2025",
     
    },
    {
        companyImage: companayimg2  ,
        role: "Schooling",
        companyName: "S.A.I.C.E Matrubhaban",
        jobDuration:"July 2022 - Present",

        
    },

];

const ExperienceSection = () => {
    return (
        <div className="experience-section">
            {experiences.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    companyImage={experience.companyImage}
                    role={experience.role}
                    companyName={experience.companyName}
                    jobDuration={experience.jobDuration}

                />
            ))}
        </div>
    );
};

export default ExperienceSection;
