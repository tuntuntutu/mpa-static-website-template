import React from "react";
import { useTranslation } from "react-i18next";
import "@/configs/i18n";

export default { Page };

function Page() {
  const { t, i18n } = useTranslation();
  // const locale = i18n.language;

  return (
    <>
      <div className="car-container">
        <div className="first-floor">
          <div className="h1">{t("car.first.title")}</div>
        </div>
      </div>
    </>
  );
}
