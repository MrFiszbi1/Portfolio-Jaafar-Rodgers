import {GitButton} from "../GitButton.tsx";

const OldPortfolioCard = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/OldPortfolioJaafarRodgers.jpg";

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={`${baseUrl}${imagePath}`}
                     alt="Picture of the Old Portfolio Website"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Old Portfolio</h2>
                <p>My previous Portfolio website. Made as a class project for intro into web devlopment</p>
                <div className="card-actions justify-end">
                    <GitButton href="https://github.com/MrFiszbi1/portfolio"/>
                </div>
            </div>
        </div>
    );
}

export default OldPortfolioCard;