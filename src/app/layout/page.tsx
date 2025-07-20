"use client";

import { Card, Col, Divider, Flex, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./page.module.scss";
import React from "react";

type Props = {};

export default function LayoutPage({}: Props) {
  return (
    <div className="page">
      <header>
        <Title level={2}>Layout & Style</Title>
      </header>
      <main className={styles.main}>
        <Row justify="center" gutter={16}>
          <Col span={7}>
            <Card
              className={styles.card}
              onClick={() => console.log("move left")}
            >
              <div className={styles["shape-triangle-left"]}></div>
              <div className={styles.badge}>Move Shape</div>
            </Card>
          </Col>
          <Col span={10}>
            <Card className={styles.card} onClick={() => console.log("swap")}>
              <div className={styles["shape-column"]}>
                <div className={styles["shape-triangle-up"]}></div>
                <div className={styles["shape-triangle-down"]}></div>
              </div>

              <div className={styles.badge}>Move Position</div>
            </Card>
          </Col>

          <Col span={7}>
            <Card
              className={styles.card}
              onClick={() => console.log("move right")}
            >
              <div className={styles["shape-triangle-right"]}></div>
              <div className={styles.badge}>Move Shape</div>
            </Card>
          </Col>
        </Row>

        <Divider size="middle" style={{ marginRight: 24 }} />

        <Flex gap="middle" vertical>
          <Row justify="center" gutter={16}>
            <Col span={7}>
              <Card className={styles.card}>
                <div className={styles["shape-square"]}></div>
              </Card>
            </Col>
            <Col span={7}>
              <Card className={styles.card}>
                <div className={styles["shape-circle"]}></div>
              </Card>
            </Col>
            <Col span={7}>
              <Card className={styles.card}>
                <div className={styles["shape-oval"]}></div>
              </Card>
            </Col>
          </Row>
          <Row justify="end" gutter={16}>
            <Col span={7}>
              <Card className={styles.card}>
                <div className={styles["shape-trapezoid"]}></div>
              </Card>
            </Col>
            <Col span={7}>
              <Card className={styles.card}>
                <div className={styles["shape-rectangle"]}></div>
              </Card>
            </Col>
            <Col span={7}>
              <Card className={styles.card}>
                <div className={styles["shape-parallelogram"]}></div>
              </Card>
            </Col>
          </Row>
        </Flex>
      </main>
    </div>
  );
}
