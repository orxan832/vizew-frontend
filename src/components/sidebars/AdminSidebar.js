import React, { useState } from "react";
import { FaBookOpen, FaTags, FaLink, FaUserAlt, FaBell } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { RiArticleFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const navs = [
  {
    nav: "v-pills-ayah",
    label: "Ayətlər",
    icon: <FaBookOpen size="1.5rem" className="pr-2" />,
  },
  {
    nav: "v-pills-hadith",
    label: "Hədislər",
    icon: <ImBooks size="1.5rem" className="pr-2" />,
  },
  {
    nav: "v-pills-article",
    label: "Məqalələr",
    icon: <RiArticleFill size="1.5rem" className="pr-2" />,
  },
  {
    nav: "v-pills-link",
    label: "Keçidlər",
    icon: <FaLink size="1.5rem" className="pr-2" />,
  },
  {
    nav: "v-pills-user",
    label: "İstifadəçilər",
    icon: <FaUserAlt size="1.5rem" className="pr-2" />,
  },
  {
    nav: "v-pills-tag",
    label: "Teqlər",
    icon: <FaTags size="1.5rem" className="pr-2" />,
  },
  {
    nav: "v-pills-offer",
    label: "Şikayət və təkliflər",
    icon: <FaBell size="1.5rem" className="pr-2" />,
  },
];

const AdminSidebar = (props) => {

  const [tab, setTab] = useState("v-pills-ayah");

  const { role } = useSelector(state => state.user.user);

  const clickHandler = (nav, label) => {
    setTab(nav);
    props.getData(nav, label);
  };

  const renderTabs = () => navs.map((item, i) => {
    if (role !== 0 && item.nav === 'v-pills-user') return false;
    else return (
      <a
        key={i}
        className={`nav-link ${item.nav === tab && "active"}`}
        onClick={() => clickHandler(item.nav, item.label)}
        data-toggle="pill"
        href={`#${item.nav}`}
        role="tab"
      >
        {item.icon}
        {item.label}
      </a>
    )
  })

  return (
    <div className="col-sm-2 table-dark border-right border-secondary">
      <h2 className="text-center font-weight-bold font-italic text-light mt-5">
        Vizew Admin Panel
      </h2>
      <div className="nav flex-column nav-pills mt-5 pt-5">
        {renderTabs()}
      </div>
    </div>
  );
};

export default AdminSidebar;