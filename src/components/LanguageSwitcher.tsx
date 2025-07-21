import { Select } from "antd";
import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);
  const handleLanguageChange = (newLanguage: string) => {
    i18next.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };
  return (
    <div>
      <Select
        value={selectedLanguage}
        style={{ width: 100 }}
        onChange={handleLanguageChange}
        options={[
          { value: "en", label: t("EN", { lng: i18next.language }) },
          { value: "th", label: t("TH", { lng: i18next.language }) },
        ]}
      />
    </div>
  );
}

export default LanguageSwitcher;
