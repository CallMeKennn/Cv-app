import React from "react";
import Avater from "../Assets/huynguyen.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton, faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div>
            <div className="flex justify-around mt-6">
                <div className="w-60 h-60 rounded-full">
                    <img className="rounded-full" src={Avater} />
                </div>
                <div>
                    <div className="font-semibold text-2xl uppercase">Nguyễn Trần Huy Nguyên</div>
                    <div className="uppercase-text text-lg uppercase">Front-end Developer</div>
                    <div className="mt-4">
                        <FontAwesomeIcon className="mr-1.5" icon={faCalendarDays} />
                        <span>19/05/1992</span>
                    </div>
                    <div>
                        <FontAwesomeIcon className="mr-1.5" icon={faEnvelope} />
                        <spna>huyynguyen0111@gmail.com</spna>
                    </div>
                    <div>
                        <FontAwesomeIcon className="mr-1.5" icon={faMobileScreenButton} />
                        <spna>+358 46077927</spna>
                    </div>
                    <div>
                        <FontAwesomeIcon className="mr-1.5" icon={faHouse} />
                        <spna>Ahventie 22-24, 65200 Vaasa, Finland</spna>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-6">
                As a first-year college student, I am eager to establish a solid basis for my academic educational goals
                and future job. I am determined to thrive in my education, job and actively participate in
                extracurricular activities that will help me develop my abilities and character.
            </div>
        </div>
    );
};

export default Header;
