"use client";

import { Button, Card, Col, Divider, Flex, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./page.module.scss";
import React, { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function LayoutPage() {
  const { t } = useTranslation();
  const [shapeArray, setShapeArray] = useState([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);

  const [swap, isSwap] = useState<boolean>();

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

  const swapPosition = () => {
    console.log("swap");
    isSwap((prev) => !prev);
  };

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [array[i], array[random]] = [array[random], array[i]];
    }
    return array
  };

  const randomShape = () => {
    const newPosition = shuffle(shapeArray);
    setShapeArray([...newPosition])
    console.log(shapeArray)
  }

  return (
    <div className="page">
      <header className="header">
        <Title level={2}>{t("Layout & Style")}</Title>
        <LanguageSwitcher />
      </header>
      <Flex justify="end">
        <Button href="/">{t("Home")}</Button>
      </Flex>
      <main className={styles.main}>
        <Row justify="center" gutter={16}>
          <Col span={7}>
            <Card className={styles.card} onClick={moveLeft}>
              <div className={styles["shape-triangle-left"]}></div>
              <div className={styles.badge}>{t("Move Shape")}</div>
            </Card>
          </Col>
          <Col span={10}>
            <Card className={styles.card} onClick={swapPosition}>
              <div className={styles["shape-column"]}>
                <div className={styles["shape-triangle-up"]}></div>
                <div className={styles["shape-triangle-down"]}></div>
              </div>

              <div className={styles.badge}>{t("Move Position")}</div>
            </Card>
          </Col>

          <Col span={7}>
            <Card className={styles.card} onClick={moveRight}>
              <div className={styles["shape-triangle-right"]}></div>
              <div className={styles.badge}>{t("Move Shape")}</div>
            </Card>
          </Col>
        </Row>

        <Divider size="middle" style={{ marginRight: 24 }} />

        <Flex gap="middle" vertical>
          <Row justify={swap ? "center" : "end"} gutter={16}>
            {shapeArray.slice(0, 3).map((shape, index) => (
              <Col span={7} key={index}>
                <Card className={styles.card} onClick={randomShape}>
                  <div className={styles[`shape-${shape}`]}></div>
                </Card>
              </Col>
            ))}
          </Row>
          <Row justify={swap ? "end" : "center"} gutter={16}>
            {shapeArray.slice(3).map((shape, index) => (
              <Col span={7} key={index}>
                <Card className={styles.card} onClick={randomShape}>
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
