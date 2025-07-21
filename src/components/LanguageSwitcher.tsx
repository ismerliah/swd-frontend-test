import { Select } from "antd";
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t } = useTranslation();
  const handleLanguageChange = (newLanguage: string) => {
    i18next.changeLanguage(newLanguage);
  };
  return (
    <div>
      <Select
        defaultValue="en"
        style={{ width: 100 }}
        onChange={handleLanguageChange}
        options={[
          { value: "en", label: `${t("EN")}` },
          { value: "th", label: `${t("TH")}` },
        ]}
      />
    </div>
  );
}

export default LanguageSwitcher;
