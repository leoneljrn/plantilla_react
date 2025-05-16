import styled from "styled-components";
import logo from "../assets/react.svg"
import { v } from "../styles/Variables"
import { AiOutlineLeft, AiOutlineHome, AiOutlineApartment, AiOutlineSetting } from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md"
import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../App";
export function SidebarMenu({ sidebarOpen, setSidebarOpen }) {

  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen)
  }
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }

  return (
    <Container isOpen={sidebarOpen}>
      <button className="sidebarbutton" onClick={ModSidebaropen}>

        <AiOutlineLeft />
      </button>
      <div className="logocontent">
        <div className="imgcontent">
          <img src={logo} alt="Logo" />
        </div>
        <h2>BCV2025</h2>
      </div>

      {linksArray.map(({ label, icon, to }) => (
        <div className="linkContainer" key={label}>
          <NavLink to={to} className={({ isActive }) => `links${isActive ? ` active` : ``}`}>
            <div className="linkicon">{icon}</div>
            {sidebarOpen && (<span>{label}</span>)}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondarylinksArray.map(({ label, icon, to }) => (
        <div className="linkContainer" key={label}>
          <NavLink to={to} className={({ isActive }) => `links${isActive ? ` active` : ``}`}>
            <div className="linkicon">{icon}</div>
            {sidebarOpen && (<span>{label}</span>)}
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}>
                  </input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estadisticas",
    icon: <MdOutlineAnalytics />,
    to: "/estadisticas",
  },
  {
    label: "Productos",
    icon: <AiOutlineApartment />,
    to: "/productos",
  },
];

const secondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/estadisticas",
  },
];

//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;
  .sidebarbutton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }

  .logocontent{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    .imgcontent{
      display: flex;
      img{
        max-width: 100%;
        height: auto;
      }
      cursor:pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1)`)};
   }
    h2{
      display:${({ isOpen }) => (isOpen ? `block` : `none`)}
    }
  }

  .linkContainer {
    margin: 8px 0;
   
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
     
      height:50px;
      .linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }
      &.active{
        .linkicon{
        svg{
        color: ${(props) => props.theme.bg4};
        }
        }
      }
    }
  }
  .Themecontent{
    display:flex;
    align-items:center;
    justify-content: space-between; 
    span{
    display: block;
    padding: 10px;
    font-weight: 700;
    }
      .togglecontent {
          margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
          width: 36px;
          height: 20px;
          border-radius: 10px;
          transition: all 0.3s
          position: relative;
          }
 }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
//#endregion
