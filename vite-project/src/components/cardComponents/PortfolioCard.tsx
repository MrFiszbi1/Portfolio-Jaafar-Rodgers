import {GitButton} from "../GitButton.tsx";

const PortfolioCard = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/PortfolioJaafarRodgers.jpg";

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={`${baseUrl}${imagePath}`}
                     alt="Picture of the Portfolio Website"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Portfolio-Jaafar-Rodgers</h2>
                <p>Code for this website</p>
                <div className="card-actions justify-end">
                    <GitButton href="https://github.com/MrFiszbi1/Portfolio-Jaafar-Rodgers"/>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;