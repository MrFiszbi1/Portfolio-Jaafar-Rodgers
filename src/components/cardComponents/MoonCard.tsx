import Card from "./Card.tsx";

const MoonCard = () => {
    return (
        <Card
            imagePath="src/assets/images/My Basic Moon.jpg"
            altText="Picture of the sun"
            title="Basic Moon"
            description="Shadertoy learning project. A basic moon with changing moon visibility and rainbow halo animations"
            websiteUrl="https://www.shadertoy.com/view/mtBfDW"
            projectStack="OpenGL Shading Language (GLSL)"
        />
    );
}

export default MoonCard;