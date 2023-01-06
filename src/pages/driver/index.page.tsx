import React from "react";
import { useTranslation } from "react-i18next";
import "../../configs/i18n";

function Page() {
  const { t, i18n } = useTranslation();
  // const locale = i18n.language;

  return (
    <>
      <div className="home-container">
        <div className="first-floor">
          <div className="left">
            <div className="h1">{t("driver.first.title")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default { Page };
