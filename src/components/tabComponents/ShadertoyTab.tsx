import SunCard from "../cardComponents/SunCard";
import MoonCard from "../cardComponents/MoonCard.tsx";

const ShadertoyTab = () => {
    return (
        <div className="WebTab mt-8 bg-black rounded py-2 px-4 w-11/12 m-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex justify-center my-3">
                    <SunCard />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center my-3">
                    <MoonCard />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ShadertoyTab;