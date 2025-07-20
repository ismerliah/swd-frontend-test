"use client";

import { Card, Col, Divider, Flex, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./page.module.scss";
import React, { useState } from "react";

export default function LayoutPage() {
  const [shapeArray, setShapeArray] = useState([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);

  const moveLeft = () => {
    console.log("move left");
    const newShapeArray = [...shapeArray];
    const first = newShapeArray.shift();
    if (first) {
      newShapeArray.push(first);
    }
    setShapeArray(newShapeArray);
    console.log(newShapeArray);
  };

  const moveRight = () => {
    console.log("move right");
    const newShapeArray = [...shapeArray];
    const last = newShapeArray.pop();
    if (last) {
      newShapeArray.unshift(last);
    }
    setShapeArray(newShapeArray);
    console.log(newShapeArray);
  };

  const swapGrid = () => {
    console.log("swap");
  };

  const shuffleShape = () => {
    console.log("shuffle");
  };
  return (
    <div className="page">
      <header>
        <Title level={2}>Layout & Style</Title>
      </header>
      <main className={styles.main}>
        <Row justify="center" gutter={16}>
          <Col span={7}>
            <Card className={styles.card} onClick={moveLeft}>
              <div className={styles["shape-triangle-left"]}></div>
              <div className={styles.badge}>Move Shape</div>
            </Card>
          </Col>
          <Col span={10}>
            <Card className={styles.card} onClick={swapGrid}>
              <div className={styles["shape-column"]}>
                <div className={styles["shape-triangle-up"]}></div>
                <div className={styles["shape-triangle-down"]}></div>
              </div>

              <div className={styles.badge}>Move Position</div>
            </Card>
          </Col>

          <Col span={7}>
            <Card className={styles.card} onClick={moveRight}>
              <div className={styles["shape-triangle-right"]}></div>
              <div className={styles.badge}>Move Shape</div>
            </Card>
          </Col>
        </Row>

        <Divider size="middle" style={{ marginRight: 24 }} />

        <Flex gap="middle" vertical>
          <Row justify="center" gutter={16}>
            {shapeArray.slice(0, 3).map((shape, index) => (
              <Col span={7} key={index}>
                <Card className={styles.card}>
                  <div className={styles[`shape-${shape}`]}></div>
                </Card>
              </Col>
            ))}
          </Row>
          <Row justify="end" gutter={16}>
            {shapeArray.slice(3).map((shape, index) => (
              <Col span={7} key={index}>
                <Card className={styles.card}>
                  <div className={styles[`shape-${shape}`]}></div>
                </Card>
              </Col>
            ))}
          </Row>
        </Flex>
      </main>
    </div>
  );
}
