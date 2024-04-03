import "./App.css";
import Header from "./Component/Header";
import Education from "./Component/Education";
import ExtraCurricular from "./Component/ExtraCurricular";
import Skill from "./Component/Skill";
import Award from "./Component/Award";

function App() {
    return (
        <div className="App flex justify-center">
            <div className="bg w-1/2">
                <div className="">
                    <Header />
                </div>
                <div className="flex mt-4">
                    {/* Education, EXTRA CURRICULAR */}
                    <div className="w-3/5 text-right">
                        <Education />
                        <ExtraCurricular />
                    </div>

                    {/* line */}
                    <div className="bg-cyan-600 w-1/20 mx-5">
                        <div className="bg-black w-0.5 h-full"></div>
                    </div>

                    {/* AWARD, SKILLS */}
                    <div className="w-3/5 text-left">
                        <Skill />
                        <Award/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
