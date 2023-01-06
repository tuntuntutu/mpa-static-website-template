import React from "react";
import { useTranslation } from "react-i18next";
import "./index.less";
// import { navigate } from 'vite-plugin-ssr/client/router'

function Page() {
  const { t, i18n } = useTranslation();
  // const locale = i18n.language;
  //
  // navigate(['/markdown', '/star-wars', '/hello/alice'][randomIndex])

  return (
    <div className="home-container">
      <div className="first-floor">
        <div className="h1">{t("home.first.title")}</div>
        <div className="subTitle">{t("home.first.subTitle")}</div>
      </div>
    </div>
  );
}
const documentProps = {
  title: "首页",
};

export default { Page };
export { documentProps };
