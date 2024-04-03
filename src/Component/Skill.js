import React from "react";
import { skills } from "../Data/Data";
import SkillList from "./SkillList";

const Skill = () => {
    return (
        <div>
            <div className="text-2xl font-sans font-extrabold uppercase">Skill</div>
            <div className="first:mt-2">
                {skills.map((skill, index) => (
                    <div className="mt-4" key={index}>
                        <div className="text-sky-700 font-bold">{skill.name}</div>
                        <div>
                            {skill.list.map((skillList, index) =>
                                skillList.nameLanguage ? (
                                    <div key={index} className="flex mt-2">
                                        <span className="w-40">{skillList.nameLanguage}</span>
                                        <SkillList toggle={skillList.toggle} />
                                    </div>
                                ) : (
                                    <div className="mt-2" key={index}>
                                        - {skillList}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
