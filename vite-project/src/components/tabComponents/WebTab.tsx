import PortfolioCard from "../cardComponents/PortfolioCard.tsx";
import OldPortfolioCard from "../cardComponents/OldPortfolioCard.tsx";
import F1Card from "../cardComponents/F1Card.tsx";
import SAFECard from "../cardComponents/SAFECard.tsx";
import GifiksWebsiteCard from "../cardComponents/GifiksWebsiteCard.tsx";
const WebTab = () => {
    return (
        <div className="WebTab mt-8 bg-black rounded py-2 px-4 w-11/12 m-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex justify-center my-3">
                    <PortfolioCard/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center my-3">
                    <OldPortfolioCard/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center my-3">
                    <F1Card/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex justify-center my-3">
                    <SAFECard/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full flex justify-center my-3">
                    <GifiksWebsiteCard/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WebTab;