import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { navigate } from "vite-plugin-ssr/client/router";
import logo from "@/assets/logo.png";
// import { isMobile } from "@/configs";
import { throttle } from "@/configs/utils";
import "./index.less";

interface IProps {
  isHidden?: boolean;
}

const Header: React.FC<IProps> = ({ isHidden }) => {
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const { t, i18n } = useTranslation();
  // const locale = i18n.language;

  const menuList = [
    {
      name: t("menu.driver"),
      key: "driver",
    },
    {
      name: t("menu.car"),
      key: "car",
    },
    {
      name: t("menu.aboutus"),
      key: "about-us",
    },
  ];

  const changeMenu = (item: { key: string; name: string }) => () => {
    navigate(`/${item.key}`);
    setCurrentMenu(item.key);
  };

  const toggleLanguage = () => {
    window.location.href = `/?lang=${i18n.language === "en" ? "cn" : "en"}`;
  };

  const toggleHeaderBar = () => {
    const clientHeight = window.innerHeight;
    const headerDom: any = document.getElementsByClassName("g-header")[0];
    const footerDom = document.getElementsByClassName("g-footer");

    let footerTop = 0;

    if (footerDom.length > 0) {
      footerTop = footerDom[0].getBoundingClientRect().top;
    }
    //
    // if (document.body.getBoundingClientRect().top === 0) {
    //   headerDom.style.background = "none";
    // } else {
    //   headerDom.style.background = "#000";
    // }
    if (
      document.getElementsByClassName("g-footer").length > 0 &&
      footerTop < clientHeight
    ) {
      headerDom.style.display = "none";
    } else {
      headerDom.style.display = "flex";
    }
  };

  useEffect(() => {
    // const {
    //   location: { pathname },
    // } = window;

    // setCurrentMenu(pathname.split("/")[1]);
    const func = throttle(toggleHeaderBar, 200);

    window.addEventListener("scroll", func);

    return () => {
      window.removeEventListener("scroll", func);
    };
  }, []);

  useEffect(() => {
    setCurrentMenu(window.location.pathname.split("/")[1]);
  });

  return (
    <header
      className={classNames({
        "g-header": true,
        hidden: isHidden,
      })}
    >
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <div className="menu">
        {menuList.map((item) => (
          <a
            onClick={changeMenu(item)}
            key={item.key}
            className={classNames({
              "menu-item": true,
              active: currentMenu === item.key,
              "about-us": item.key === "aboutus",
            })}
          >
            {item.name}
          </a>
        ))}
        <a className="menu-item language-toggle" onClick={toggleLanguage}>
          {i18n.language === "en" ? "中文" : "EN"}
        </a>
      </div>
    </header>
  );
};

export default Header;
