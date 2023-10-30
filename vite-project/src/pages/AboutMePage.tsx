import '../assets/css/App.css';
import { ProfilePic } from '../components/ProfilePic';
import { Bio } from '../components/Bio';

const AboutMePage = () => {
    return (
        <div className="flex flex-row">
            <ProfilePic />
            <Bio />
        </div>
    );
};

export default AboutMePage;