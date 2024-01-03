import { GitButton } from "../buttonComponents/GitButton.tsx";
import {LinkButton} from "../buttonComponents/LinkButton.tsx";
import {DemoButton} from "../buttonComponents/DemoButton.tsx";

interface CardProps {
    imagePath: string;
    altText: string;
    title: string;
    description: string;
    gitHubUrl?: string;
    projectStack: string;
    websiteUrl?: string;
    demoUrl?: string;
}

const Card: React.FC<CardProps> = ({
       imagePath,
       altText,
       title,
       description, projectStack,
       gitHubUrl, websiteUrl, demoUrl
   }) => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={`${baseUrl}${imagePath}`}
                    alt={altText}
                    className="w-full h-full object-cover object-top"
                />
            </figure>
            <div className="card-body pt-3">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-300">{description}</p>
                <p className="text-xs text-gray-500">Using: {projectStack}</p>
                <div className="flex card-actions justify-end">
                    {demoUrl && <DemoButton href={demoUrl}/>}
                    {websiteUrl && <LinkButton href={websiteUrl}/>}
                    {gitHubUrl && <GitButton href={gitHubUrl}/>}
                </div>
            </div>
        </div>
    );
};

export default Card;