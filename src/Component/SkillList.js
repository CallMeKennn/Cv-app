import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faSolidCircle } from "@fortawesome/free-solid-svg-icons";

const SkillList = ({ toggle }) => {
    const createDivs = (toggle) => {
        const divs = [];
        for (let i = 0; i < 5; i++) {
            if (i < toggle) {
                divs.push(<div className="mr-4"><FontAwesomeIcon size="lg" icon={faSolidCircle} /></div>);
            } else {
                divs.push(<div className="mr-4"><FontAwesomeIcon size="lg" icon={faCircle} /></div>);
            }
        }
        return divs;
    };

    return <div className="flex">{createDivs(toggle)}</div>;
};

export default SkillList;
