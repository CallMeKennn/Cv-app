import React from "react";
import { extraCurricular } from "../Data/Data";

const ExtraCurricular = () => {
    return (
        <div className="mt-4 font-normal font-serif">
            <div className="text-2xl font-sans font-extrabold uppercase">Extra Curricular</div>
            {extraCurricular.map((value, index) => (
                <div className="mt-4" key={index}>
                    <div className="text-sky-700 font-bold">{value.name}</div>
                    <div className="opacity-75">{value.during}</div>
                    <div>Role: {value.role}</div>
                    <ul>
                        {value.list.map((activity, index) => (
                            <li key={index}>
                                <span className="text-2xl">&middot;</span> {activity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExtraCurricular;
