import '../assets/css/PortfolioStyles.css';
import {Experience} from '../components/Experience';
import {Education} from '../components/Education';
import {Skills} from '../components/Skills';
import {ResumeButton} from "../components/buttonComponents/ResumeButton.tsx";

const ResumePage = () => {
    return (
        <div>
            <ResumeButton/>
            <Education/>
            <Skills/>
            <Experience/>
        </div>
    );
};

export default ResumePage;