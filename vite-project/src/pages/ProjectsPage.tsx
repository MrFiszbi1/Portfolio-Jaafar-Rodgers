import '../assets/css/PortfolioStyles.css';
import { ProjectMenu } from '../components/ProjectMenu';
import { Name } from '../components/Name';

const ProjectsPage = () => {
    return (
        <div className="flex flex-col h-full">
            <Name />
            <ProjectMenu />
        </div>
    );
};

export default ProjectsPage;