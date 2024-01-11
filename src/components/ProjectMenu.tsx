import {useState} from 'react';

interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({label, active, onClick}) => (
    <button
        className={`tab ${active ? 'active-tab' : ''}`}
        onClick={onClick}
        role="tab"
    >
        {label}
    </button>
);

interface TabContentProps {
    activeTab: number;
}

const TabContent: React.FC<TabContentProps> = ({activeTab}) => (
    <div className="tab-content mt-8 bg-black rounded py-2 px-4 w-5/6 m-auto">
        {activeTab === 0 && <p>C++/C content goes here</p>}
        {activeTab === 1 && <p>Web dev content goes here</p>}
        {activeTab === 2 && <p>Java content goes here</p>}
    </div>
);

export const ProjectMenu: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        // Add logic to handle tab click, such as changing content
    };

    return (
        <div>
            <div className="mt-8 bg-black rounded py-2 px-4 w-1/2 m-auto">
                <div role="tablist" className="tabs tabs-lifted flex justify-center">
                    <Tab
                        label="C++/C"
                        active={activeTab === 0}
                        onClick={() => handleTabClick(0)}
                    />
                    <Tab
                        label="Web dev"
                        active={activeTab === 1}
                        onClick={() => handleTabClick(1)}
                    />
                    <Tab
                        label="Java"
                        active={activeTab === 2}
                        onClick={() => handleTabClick(2)}
                    />
                </div>
            </div>
            <TabContent activeTab={activeTab}/>
        </div>
    );
};

  