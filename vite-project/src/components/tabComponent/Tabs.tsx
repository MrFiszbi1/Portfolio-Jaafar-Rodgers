const Tabs = () => {
    return (
        <div className="Tabs mt-8 bg-primary rounded py-2 px-4 sm:w-1/2 m-auto">
            {/* Tab nav */}
            <ul className="nav flex justify-center space-x-6 px-5">
                <li className="tabButton">C++</li>
                <li className="tabButton">Web Dev</li>
                <li className="tabButton">Java</li>
            </ul>
            <div className="outlet">
                {/* content will be shown here */}
            </div>
        </div>
    );
};
export default Tabs;