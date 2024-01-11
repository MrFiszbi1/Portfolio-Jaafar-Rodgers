import Card from "./Card.tsx";

const PortfolioCard = () => {
    return (
        <Card
            imagePath="src/assets/images/PortfolioJaafarRodgers.jpg"
            altText="Picture of the Portfolio Website"
            title="Portfolio-Jaafar-Rodgers"
            description="Code for this website"
            gitHubUrl="https://github.com/MrFiszbi1/Portfolio-Jaafar-Rodgers"
            projectStack="React.js + TypeScript + Tailwind + DaisyUI + Vite"
        />
    );
}

export default PortfolioCard;