import Card from "./Card.tsx";

const SAFECard = () => {
    return (
        <Card
            imagePath="src/assets/images/Safe.jpg"
            altText="Picture of the SAFE Website"
            title="SAFE - System for Anonymous Feedback"
            description="Collaborated with an 8-member team to develop a website for PSU's CS department, enabling anonymous student feedback."
            gitHubUrl="https://github.com/PSU-MCECS-SAFE/SAFE"
            projectStack="React.js + TypeScript + Material UI + Jest"
        />
    );
}

export default SAFECard;