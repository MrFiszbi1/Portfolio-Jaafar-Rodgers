import Card from "./Card.tsx";

const F1Card = () => {
    return (
        <Card
            imagePath="images/F1 Around The World.jpg"
            altText="Picture of the F1 Around The World Website"
            title="F1 Around The World Website"
            description="Group project for CS 464 (frontend web dev) at PSU, Spring 2023. A dashboard using F1 APIs and it’s data visualized"
            gitHubUrl="https://github.com/MrFiszbi1/F1-Around-The-World"
            websiteUrl="https://f1-around-the-world.vercel.app/"
            projectStack="JavaScript + React.js + Material UI + Chart.js + Google Geo Chart"
        />
    );
}

export default F1Card;