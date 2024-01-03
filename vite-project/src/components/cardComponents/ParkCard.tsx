import Card from "./Card.tsx";

const ParkCard = () => {
    return (
        <Card
            imagePath="src/assets/images/Amusement Park.jpg"
            altText="Picture of a 3D Amusement-Park"
            title="3D Amusement-Park"
            description="Course project for CS 447 (Computer Graphics) at PSU, Fall 2022. A project that renders a 3D model of an Amusement Park"
            gitHubUrl="https://github.com/MrFiszbi1/3D-Amusement-Park"
            projectStack="C++ + OpenGL + Blender + FLTK"
        />
    );
}

export default ParkCard;