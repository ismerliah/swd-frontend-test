"use client";

import { Flex } from "antd";
import styles from "./page.module.scss";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <header className="header" style={{ justifyContent: "flex-end" }}>
        <LanguageSwitcher />
      </header>
      <main className={styles.main}>
        <Flex justify="center" align="center" gap="large">
          <Link href="/layout" className={styles.box}>
            <p>{t("Test 1")}</p>
            <p>{t("Layout & Style")}</p>
          </Link>

          <Link href="/form" className={styles.box}>
            <p>{t("Test 2")}</p>
            <p>{t("Form & Table")}</p>
          </Link>
        </Flex>
      </main>
    </div>
  );
}
