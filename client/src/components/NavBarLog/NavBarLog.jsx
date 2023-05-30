import { useDispatch } from "react-redux";
import { findPerName } from "../../Redux/Actions/actionsFunction/actionsSearchBar";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";
import style from "./NavBarLog.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBarCliente = ({ setValidateState, setCurrentUserStore2 }) => {
  const navigate = useNavigate();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const abrirNav = () => {
    setIsNavVisible(true);
  };
  const cerrarNav = () => {
    setIsNavVisible(false);
  };

  const handlerLogin = () => {
    setValidateState(false);
    setCurrentUserStore2("");
    navigate("/");
  };

  const userLocalStorage = JSON.parse(localStorage.getItem("currentUser2"));

  return (
    <div className={`${style.fixed} ${isNavVisible ? style.fixedOpen : ""}`}>
      <div className={style.container}>
        <h2 className={style.title}>
          {
          userLocalStorage?.profile === "Admin" 
          ? (<a href="/">JobPortalX</a>) 
          : userLocalStorage?.profile === "applicant" 
            ? (<a href="/Applicant">JobPortalX</a>) 
            : (<a href="/empresa">JobPortalX</a>)
          }
        </h2>
        <button className={style.abrirNav} onClick={abrirNav}>
          <i className="bi bi-arrow-bar-right"></i>
        </button>
        <nav className={`${style.nav} ${isNavVisible ? style.navVisible : ""}`}>
          <button className={style.cerrarNav} onClick={cerrarNav}>
            <i className="bi bi-arrow-bar-left"></i>
          </button>
          <ul className={style.navList}>
            <li>
              <h3 onClick={handlerLogin}>
                Cerrar sesion
              </h3>
            </li>
            {userLocalStorage?.profile === "Admin" ? (
              <li>
                {<a
                  href="https://jobportalx-adminpanel.vercel.app"
                  target="_blank"
                >
                  Dashboard
                </a>}
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarCliente;
