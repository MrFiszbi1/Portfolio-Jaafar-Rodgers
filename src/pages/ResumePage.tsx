import '../assets/css/PortfolioStyles.css';
import {Experience} from '../components/Experience';
import {Education} from '../components/Education';
import {Skills} from '../components/Skills';

const ResumePage = () => {
    return (
        <div>
            <Education/>
            <Skills/>
            <Experience/>
        </div>
    );
};

export default ResumePage;