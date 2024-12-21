import React, { useState, useEffect } from "react";
import "./userdashboard.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import RightSideBlock from "../../comp/RightSideBlock.js"; // استيراد المكوّن الجديد

const UserDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const mainScript = document.createElement("script");
    mainScript.src = process.env.PUBLIC_URL + "/js/main.js";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(mainScript);
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`dashboard ${isCollapsed ? "collapsed" : ""}`}>
      <>
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        {/* استخدام المكوّن الجديد */}
        <RightSideBlock isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
        <div className="left-side-block">
          <header className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 header-block">
                  <div className="header__right">
                    <a
                      href="#"
                      className="menu-icon bars"
                      onClick={toggleSidebar}
                    >
                      <div className="material-icons md-24 material-icons-outlined">
                        menu
                      </div>
                    </a>
                  </div>
                  <div className="header__left">
                    <a href="../login" id="logout-icon">
                      <span
                        className="material-icons material-icons-outlined"
                        title="logout"
                      >
                        exit_to_app
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className="row mt-3">
              <div className="col-12 col-lg-6 col-xl-3 my-2">
                <div className="top-card jf-box row">
                  <div className="col-3 top-card-number">
                    <p>01</p>
                  </div>
                  <div className="col-9">
                    <b> حجز مقعد جديد</b>
                    <br />
                    <Link to="/new-ticket">
                      اضغط هنا <span>»</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3 my-2">
                <div className="top-card jf-box row">
                  <div className="col-3 top-card-number">
                    <p>02</p>
                  </div>
                  <div className="col-9">
                    <b> الغاء حجز</b>
                    <br />
                    <a href="reservations.html" target="_blank">
                      {" "}
                      اضغط هنا <span>»</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3 my-2">
                <div className="top-card jf-box row">
                  <div className="col-3 top-card-number">
                    <p>03</p>
                  </div>
                  <div className="col-9">
                    <b>استعلام عن حجوزاتك</b>
                    <br />
                    <a href="reservations.html">
                      {" "}
                      اضغط هنا <span>»</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3 my-2">
                <div className="top-card jf-box row">
                  <div className="col-3 top-card-number">
                    <p>04</p>
                  </div>
                  <div className="col-9">
                    <b>للمساعدة</b>
                    <br />
                    <a href="">
                      اضغط هنا<span>»</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    </div>
  );
};

export default UserDashboard;
