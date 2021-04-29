import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItems = (topic) => {
    return (
      <div className="sidebar_recentItems">
        <span className="sidebar_recentItem">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="bg picture"
        />
        <Avatar className="sidebar_avatar" />
        <h2>Shariar Nahid</h2>
        <h4>shariar-nahid@gmail.com</h4>

        {/* sidebar_stats start */}
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_stat_number">3,430</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_stat_number">2,130</p>
          </div>
        </div>
        {/* sidebar_stats end */}
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("react js")}
        {recentItems("programming")}
        {recentItems("software engineer")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
