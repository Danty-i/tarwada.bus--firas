import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../pages/UserDashboard/img/profile-image.png";


const RightSideBlock = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`right-side-block ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <aside>
        <div className="profile-block">
          <div className="profile__img">
            <img src={ProfileImage} alt="Profile" />
          </div>
          <span className="profile__name" id="username">
            اسم العميل
          </span>
        </div>
        <ul>
          <li id="home" className="is-active">
            <Link to="/userdashboard">
              <span className="material-icons material-icons-outlined ic">dashboard</span>
              الرئيسية
            </Link>
          </li>
          <li id="reservations">
            <Link to="/reservations">
              <span className="material-icons material-icons-outlined ic">table_view</span>
              جدول حجوزاتي
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default RightSideBlock;
