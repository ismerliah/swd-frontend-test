"use client";

import Title from "antd/es/typography/Title";
import React from "react";
import styles from "./page.module.scss";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import TableSection from "@/containers/form-page/table-section";

type Props = {};

export default function FormPage({}: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="page">
      <header>
        <Title level={2}>Form & Table</Title>
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
          <Form
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {/* Title , FirstName , LastName */}
            <Row gutter={6}>
              <Col span={4}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[
                    { required: true, message: "Please input your Firstname" },
                  ]}
                >
                  <Select
                    placeholder="Title"
                    options={[
                      { value: "mr", label: "Mr." },
                      { value: "mrs", label: "Mrs." },
                      { value: "ms", label: "Ms." },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  label="Firstname"
                  name="firstname"
                  rules={[
                    { required: true, message: "Please input your Firstname" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  label="Lastname"
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your Lastname" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Birthday , Nationality */}
            <Row gutter={6}>
              <Col span={6}>
                <Form.Item
                  name="birthday"
                  label="Birthday"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Birthday date.",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="mm//dd//yy"
                    format={{
                      format: "MM-DD-YYYY",
                      type: "mask",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  name="nationality"
                  label="Nationality"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Nationality.",
                    },
                  ]}
                >
                  <Select
                    placeholder="-- Please Select --"
                    options={[
                      { value: "thai", label: "Thai" },
                      { value: "france", label: "France" },
                      { value: "ms", label: "American" },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* citizen */}
            <Row gutter={6}>
              <Col span={4}>
                <Form.Item name="citizen-1" label="CitizenID">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={1} style={{ textAlign: "center" }}>
                <Title level={5}>-</Title>
              </Col>
              <Col span={4}>
                <Form.Item name="citizen-2">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={1} style={{ textAlign: "center" }}>
                <Title level={5}>-</Title>
              </Col>
              <Col span={4}>
                <Form.Item name="citizen-3">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={1} style={{ textAlign: "center" }}>
                <Title level={5}>-</Title>
              </Col>
              <Col span={3}>
                <Form.Item name="citizen-4">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={1} style={{ textAlign: "center" }}>
                <Title level={5}>-</Title>
              </Col>
              <Col span={2}>
                <Form.Item name="citizen-5">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Gender */}
            <Row gutter={6}>
              <Col span={8}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select your Gender" },
                  ]}
                >
                  <Radio.Group
                    name="gender"
                    options={[
                      { value: 1, label: "Male" },
                      { value: 2, label: "Female" },
                      { value: 3, label: "Unsex" },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Mobile phone */}
            <Row gutter={6}>
              <Col span={8}>
                <Form.Item
                  name="code"
                  label="Mobile Phone"
                  rules={[
                    {
                      required: true,
                      message: "Please select your code country.",
                    },
                  ]}
                >
                  <Select
                    options={[
                      { value: "+66", label: "+66" },
                      { value: "+1", label: "+1" },
                      { value: "+33", label: "+33" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={1} style={{ textAlign: "center" }}>
                <Title level={5}>-</Title>
              </Col>
              <Col span={9}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please fill your Mobile Phone.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Password No */}
            <Row gutter={6}>
              <Col span={11}>
                <Form.Item name="password" label="Password No">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Expected Salary */}
            <Row gutter={6}>
              <Col span={11}>
                <Form.Item
                  name="salary"
                  label="Expected Salary"
                  rules={[
                    {
                      required: true,
                      message: "Please fill your expect salary.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={4} offset={4}>
                <Form.Item>
                  <Button variant="outlined" htmlType="reset">
                    RESET
                  </Button>
                </Form.Item>
              </Col>

              <Col span={4}>
                <Form.Item>
                  <Button variant="outlined" htmlType="submit">
                    SUBMIT
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div className={styles.table}>
          <TableSection />
        </div>
      </main>
    </div>
  );
}
