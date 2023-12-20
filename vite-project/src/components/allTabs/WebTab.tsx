const WebTab = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/PortfolioJaafarRodgers.jpg";

    return (
        <div className="WebTab mt-8 bg-black rounded py-2 px-4 w-11/12 m-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex justify-center my-3">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={`${baseUrl}${imagePath}`}
                            alt="Picture of the Portfolio Website"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Portfolio-Jaafar-Rodgers</h2>
                            <p>Code for this website</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Github</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center my-3">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                                     alt="City"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WebTab;