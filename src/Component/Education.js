import React from "react";
import { education } from "../Data/Data";

const Education = () => {
    return (
        <div className="">
            <div className="text-2xl font-sans font-extrabold uppercase">Education</div>
            {education.map((education, index) => (
                <div className="mt-4" key={index}>
                    <div className="text-sky-700 font-bold">{education.nameSchool}</div>
                    <div className="opacity-75">{education.during}</div>
                    <div>{education.address}</div>
                    <ul>
                        {education.GPA === "" ? "" : <li>- GPA: {education.GPA}</li>}
                        <li>- {education.other}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Education;
