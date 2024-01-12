import Card from "./Card.tsx";

const SunCard = () => {
    return (
        <Card
            imagePath="/images/My Basic Sun.jpg"
            altText="Picture of the sun"
            title="Basic Sun"
            description="Shadertoy learning project. A basic sun with moving and flaring sun animations"
            websiteUrl="https://www.shadertoy.com/view/mlfBDf"
            projectStack="OpenGL Shading Language (GLSL)"
        />
    );
}

export default SunCard;