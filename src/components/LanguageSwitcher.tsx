import { Select } from "antd";
import i18next from "i18next";
import React from "react";

function LanguageSwitcher() {
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
          { value: "en", label: "EN" },
          { value: "th", label: "TH" },
        ]}
      />
    </div>
  );
}

export default LanguageSwitcher;
