import PortfolioCard from "../cardComponents/PortfolioCard.tsx";
import OldPortfolioCard from "../cardComponents/OldPortfolioCard.tsx";
import F1Card from "../cardComponents/F1Card.tsx";
import SAFECard from "../cardComponents/SAFECard.tsx";
import GifiksWebsiteCard from "../cardComponents/GifiksWebsiteCard.tsx";
const WebTab = () => {
    return (
        <div className="tabArea">
            <div className= "tabWindow">
                <PortfolioCard/>
            </div>

            <div className= "tabWindow">
                <OldPortfolioCard/>
            </div>

            <div className= "tabWindow">
                <F1Card/>
            </div>

            <div className= "tabWindow">
                <SAFECard/>
            </div>

            <div className= "tabWindow">
                <GifiksWebsiteCard/>
            </div>
        </div>
    );
};
export default WebTab;