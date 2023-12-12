import '../assets/css/PortfolioStyles.css';
import { ProjectMenu } from '../components/ProjectMenu';
import Tabs from '../components/tabComponent/Tabs';

const ProjectsPage = () => {
    return (
        <div className="flex flex-col h-full">
            <Tabs />
            <ProjectMenu />
        </div>
    );
};

export default ProjectsPage;