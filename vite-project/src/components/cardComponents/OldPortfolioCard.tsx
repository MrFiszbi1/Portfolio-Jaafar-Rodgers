import Card from "./Card.tsx";

const OldPortfolioCard = () => {
    return (
        <Card
            imagePath="src/assets/images/OldPortfolioJaafarRodgers.jpg"
            altText="Picture of the Old Portfolio Website"
            title="Old Portfolio Website"
            description="My previous Portfolio website. Made as a class project for intro into web devlopment"
            gitHubUrl="https://github.com/MrFiszbi1/portfolio"
            websiteUrl="https://mrfiszbi1.github.io/portfolio/"
            projectStack="React.js + TypeScript + Tailwind"
        />
    );
}

export default OldPortfolioCard;