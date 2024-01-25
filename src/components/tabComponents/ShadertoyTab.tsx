import SunCard from "../cardComponents/SunCard";
import MoonCard from "../cardComponents/MoonCard.tsx";

const ShadertoyTab = () => {
    return (
        <div className="tabArea">
            <div className= "tabWindow">
                <SunCard />
            </div>
            <div className="tabWindow">
                <MoonCard />
            </div>
        </div>
    );
};
export default ShadertoyTab;