import '../assets/css/App.css';
import {ProfilePic} from '../components/ProfilePic';
import {Bio} from '../components/Bio';
import {Name} from '../components/Name';

const AboutMePage = () => {
    return (
        <div className="flex flex-col h-full">
            <Name/>
            <div className="flex items-center justify-center space-y-6 flex-row flex-wrap">
                <ProfilePic/>
                <Bio/>
            </div>
        </div>
    );
};

export default AboutMePage;