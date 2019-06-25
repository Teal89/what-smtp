import React from 'react';

import './components.css';

const sidebarContent = {
  error: 'Error Codes',
  tools: 'Tools',
  bestPractices: 'Best Practices',
};

const renderContent = category => {
  const filteredContent = Object.keys(sidebarContent).filter(
    key => key !== category,
  );
  return filteredContent.map(key => {
    return (
      <div key={key} className="sidebar-item">
        {sidebarContent[key]}
      </div>
    );
  });
};

const Sidebar = ({ category }) => {
  return <div className="sidebar">{renderContent(category)}</div>;
};

export default Sidebar;
