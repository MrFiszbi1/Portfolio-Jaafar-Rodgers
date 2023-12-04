import '../assets/css/PortfolioStyles.css';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

const ResumePage = () => {
    return (
        <div>
            <Education />
            <Experience />
        </div>
    );
};

export default ResumePage;