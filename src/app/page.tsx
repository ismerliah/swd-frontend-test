import { Flex } from "antd";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <header></header>
      <main className={styles.main}>
        <Flex justify="center" align="center" gap="large">
          <Link href="/layout" className={styles.box}>
            <p>แบบทดสอบที่ 1</p>
            <p>การจัดการหน้าเว็บ</p>
          </Link>

          <Link href="/form" className={styles.box}>
            <p>แบบทดสอบที่ 2</p>
            <p>การจัดการหน้าฟอร์ม</p>
          </Link>
        </Flex>
      </main>
    </div>
  );
}
