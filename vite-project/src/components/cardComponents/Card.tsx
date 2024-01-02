import { GitButton } from "../GitButton.tsx";
import {LinkButton} from "../LinkButton.tsx";

interface CardProps {
    imagePath: string;
    altText: string;
    title: string;
    description: string;
    gitHubUrl: string;
    projectStack: string;
    websiteUrl?: string;
}

const Card: React.FC<CardProps> = ({
       imagePath,
       altText,
       title,
       description, projectStack,
       gitHubUrl, websiteUrl,
   }) => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={`${baseUrl}${imagePath}`}
                    alt={altText}
                    className="w-full h-[124px] object-cover object-top"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-300">{description}</p>
                <p className="text-xs text-gray-500">Using: {projectStack}</p>
                <div className="flex card-actions justify-end">
                    {websiteUrl && <LinkButton href={websiteUrl}/>}
                    <GitButton href={gitHubUrl}/>
                </div>
            </div>
        </div>
    );
};

export default Card;