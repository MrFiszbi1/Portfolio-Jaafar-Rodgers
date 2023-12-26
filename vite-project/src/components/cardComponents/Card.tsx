import { GitButton } from "../GitButton.tsx";

interface CardProps {
    imagePath: string;
    altText: string;
    title: string;
    description: string;
    gitHubUrl: string;
}

const Card: React.FC<CardProps> = ({
       imagePath,
       altText,
       title,
       description,
       gitHubUrl,
   }) => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={`${baseUrl}${imagePath}`} alt={altText} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <GitButton href={gitHubUrl} />
                </div>
            </div>
        </div>
    );
};

export default Card;