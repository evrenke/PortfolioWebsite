// Filename  - Tabs.js

import React, { useState } from "react";
import Tab from "./Tab";
import "./App.css";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                    />
                ))}
            </div>
            <div className="tab-content">
                Tab {activeTab + 1} is Active
            </div>
        </div>
    );
};

export default Tabs;