"use client";

import Title from "antd/es/typography/Title";
import React from "react";
import styles from "./page.module.scss";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import TableSection from "@/containers/form-page/table-section";

interface UserInterface {
  title: string;
  firstname: string;
  lastname: string;
  birthday: Date;
  nationality: string;
  citizen_id: number[];
  gender: string;
  mobile_phone: string[];
  passport: string;
  salary: string;
}

export default function FormPage() {
  const [form] = Form.useForm();

  const onFinish = (values: UserInterface) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <div className="page">
      <header>
        <Title level={2}>Form & Table</Title>
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
          <Form form={form} onFinish={onFinish}>
            {/* Title , FirstName , LastName */}
            <Row gutter={6}>
              <Col span={4}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[
                    { required: true, message: "Please input your title!" },
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
                    { required: true, message: "Please input your firstname!" },
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
                    { required: true, message: "Please input your lastname!" },
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
                      message: "Please input your birthday date!",
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
                      message: "Please input your nationality.",
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
            <Form.Item label="CitizenID">
              <Row gutter={6}>
                <Col span={2}>
                  <Form.Item name={["citizen_id", "first"]} noStyle>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={1} style={{ textAlign: "center" }}>
                  <Title level={5}>-</Title>
                </Col>

                <Col span={4}>
                  <Form.Item name={["citizen_id", "second"]} noStyle>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={1} style={{ textAlign: "center" }}>
                  <Title level={5}>-</Title>
                </Col>

                <Col span={4}>
                  <Form.Item name={["citizen_id", "third"]} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={1} style={{ textAlign: "center" }}>
                  <Title level={5}>-</Title>
                </Col>

                <Col span={3}>
                  <Form.Item name={["citizen_id", "forth"]} noStyle>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={1} style={{ textAlign: "center" }}>
                  <Title level={5}>-</Title>
                </Col>

                <Col span={2}>
                  <Form.Item name={["citizen_id", "fifth"]} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            {/* Gender */}
            <Row gutter={6}>
              <Col span={24}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Radio.Group
                    name="gender"
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                      { value: "Unsex", label: "Unsex" },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Mobile phone */}
            <Form.Item label="Mobile Phone">
              <Row gutter={6}>
                <Col span={4}>
                  <Form.Item
                    name={["mobile_phone", "code"]}
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please select your country code!",
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

                <Col span={5}>
                  <Form.Item
                    name={["mobile_phone", "phone"]}
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile phone!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            {/* Passport No */}
            <Row gutter={6}>
              <Col span={11}>
                <Form.Item name="passport" label="Passport No">
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
                      message: "Please input your expect salary!",
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
