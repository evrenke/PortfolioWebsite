// Filename - Tab.js
const Tab = ({ label, onClick, isActive }) => (
    <div
        className={`tab ${isActive ? "active" : ""}`}
        onClick={onClick}
    >
        {label}
    </div>
);

export default Tab;