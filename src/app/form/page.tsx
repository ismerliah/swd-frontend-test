"use client";

import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import TableSection from "@/containers/form-page/table-section";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/hook";
import {
  addUser,
  editUser,
  setSelectedUser,
} from "@/lib/feature/form/formSlice";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface UserInterface {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  birthday: dayjs.Dayjs;
  nationality: string;
  citizen_id: number[];
  gender: string;
  mobile_phone: string[];
  passport: string;
  salary: string;
}

export default function FormPage() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const users: UserInterface[] = useAppSelector((state) => state.form.users);
  const selectedUser = useAppSelector((state) => state.form.selectedUser);
  const dispatch = useAppDispatch();

  const onFinish = (fieldValue: UserInterface) => {
    const values = {
      ...fieldValue,
      birthday: fieldValue["birthday"].format("MM-DD-YYYY"),
    };

    const { id, ...valuesWithoutId } = values;

    if (selectedUser) {
      dispatch(editUser({ id: selectedUser, ...valuesWithoutId }));
    } else {
      dispatch(addUser({ ...values, id: users.length + 1 }));
      console.log("value", values);
    }
    form.resetFields();
    dispatch(setSelectedUser(0));
    window.alert("Save Success");
  };

  const onReset = () => {
    form.resetFields();
    dispatch(setSelectedUser(0));
    console.log(selectedUser);
  };

  useEffect(() => {
    if (selectedUser) {
      const user = users.find(
        (user: { id: number }) => user.id === selectedUser
      );
      form.setFieldsValue({
        ...user,
        birthday: dayjs(user?.birthday),
      });
      console.log(selectedUser);
    }
  }, [selectedUser, users]);

  return (
    <div className="page">
      <header className="header">
        <Title level={2}>{t("Form & Table")}</Title>
        <LanguageSwitcher />
      </header>
      <Flex justify="end">
        <Button href="/">{t("Home")}</Button>
      </Flex>
      <main className={styles.main}>
        <div className={styles.form}>
          <Form form={form} onFinish={onFinish} onReset={onReset}>
            {/* Title , FirstName , LastName */}
            <Row gutter={6}>
              <Col span={4}>
                <Form.Item
                  name="title"
                  label={t("Title")}
                  rules={[
                    { required: true, message: "Please input your title!" },
                  ]}
                >
                  <Select
                    placeholder={t("Title")}
                    options={[
                      { value: "mr", label: `${t("Mr")}` },
                      { value: "mrs", label: `${t("Mrs")}` },
                      { value: "ms", label: `${t("Ms")}` },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  label={t("Firstname")}
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
                  label={t("Lastname")}
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
                  label={t("Birthday")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your birthday date!",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder={t("Month Day Year")}
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
                  label={t("Nationality")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your nationality.",
                    },
                  ]}
                >
                  <Select
                    placeholder={t("Pls Select")}
                    options={[
                      { value: "Thai", label: `${t("Thai")}` },
                      { value: "France", label: `${t("France")}` },
                      { value: "America", label: `${t("America")}` },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* citizen */}
            <Form.Item label={t("CitizenID")}>
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
                  label={t("Gender")}
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Radio.Group
                    name="gender"
                    options={[
                      { value: "Male", label: `${t("Male")}` },
                      { value: "Female", label: `${t("Female")}` },
                      { value: "Unsex", label: `${t("Unsex")}` },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Mobile phone */}
            <Form.Item label={t("Mobile Phone")} required>
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
                <Form.Item name="passport" label={t("Passport")}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Expected Salary */}
            <Row gutter={6}>
              <Col span={11}>
                <Form.Item
                  name="salary"
                  label={t("Salary")}
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
                    {t("Reset")}
                  </Button>
                </Form.Item>
              </Col>

              <Col span={4}>
                <Form.Item>
                  <Button variant="outlined" htmlType="submit">
                    {t("Submit")}
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
