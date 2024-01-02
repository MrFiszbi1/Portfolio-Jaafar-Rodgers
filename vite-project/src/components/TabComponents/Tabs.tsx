import { useState } from "react";
import CTab from "./CTab.tsx";
import JavaTab from "./JavaTab.tsx";
import WebTab from "./WebTab.tsx";
import ShadertoyTab from "./ShadertoyTab.tsx";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("WebTab");

    const handleCTab = () => {
        // update the state to JavaTab
        setActiveTab("CTab");
    };
    const handleJavaTab = () => {
        // update the state to JavaTab
        setActiveTab("JavaTab");
    };

    const handleWebTab = () => {
        // update the state to WebTab
        setActiveTab("WebTab");
    };

    const handleShadertoyTab = () => {
        // update the state to WebTab
        setActiveTab("ShadertoyTab");
    };


    return (
        <div>
            <div className="Tabs mt-8 bg-primary rounded py-2 px-4 sm:w-1/2 m-auto">
                {/* Tab nav */}
                <ul className="nav flex justify-center space-x-6 px-5">
                    <li
                        className={`tabButton ${activeTab === "CTab" ? "active" : "tabButton"}`}
                        onClick={handleCTab}
                    >
                        C++
                    </li>
                    <li
                        className={`tabButton ${activeTab === "WebTab" ? "active" : "tabButton"}`}
                        onClick={handleWebTab}
                    >
                        Web
                    </li>
                    <li
                        className={`tabButton ${activeTab === "JavaTab" ? "active" : "tabButton"}`}
                        onClick={handleJavaTab}
                    >
                        Java
                    </li>
                    <li
                        className={`tabButton ${activeTab === "ShadertoyTab" ? "active" : "tabButton"}`}
                        onClick={handleShadertoyTab}
                    >
                        Shadertoy
                    </li>
                </ul>
            </div>
            <div>
                {activeTab === "CTab" ? <CTab/> : null}
                {activeTab === "JavaTab" ? <JavaTab/> : null}
                {activeTab === "WebTab" ? <WebTab/> : null}
                {activeTab === "ShadertoyTab" ? <ShadertoyTab/> : null}
            </div>
        </div>
    );
};
export default Tabs;