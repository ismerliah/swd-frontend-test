"use client";

import { useAppDispatch, useAppSelector } from "@/hook";
import {
  deleteAll,
  deleteUser,
  setSelectedUser,
} from "@/lib/feature/form/formSlice";
import {
  Button,
  Checkbox,
  Flex,
  PaginationProps,
  Space,
  Table,
  TableProps,
} from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  mobile_phone: string;
  nationality: string;
}

function TableSection() {
  const { t } = useTranslation();
  const users = useAppSelector((state) => state.form.users);
  const dispatch = useAppDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isChecked, setISChecked] = useState(false);

  const handleSelectAll = () => {
    const allRowData = dataSource.map((item: { key: React.Key }) => item.key);
    setSelectedRowKeys(isChecked ? [] : allRowData);
    setISChecked(!isChecked);
  };

  const handleDeleteAll = () => {
    if (isChecked && selectedRowKeys.length > 0) {
      dispatch(deleteAll());
      window.alert("Delete Success");
    }
  };

  const handleEdit = (record: number) => {
    console.log("Edit");
    dispatch(setSelectedUser(record));
  };

  const handleDelete = (record: number) => {
    dispatch(deleteUser(record));
    window.alert("Delete Success");
  };

  const columns = [
    {
      title: `${t("Name")}`,
      dataIndex: "name",
      key: "name",
    },
    {
      title: `${t("Gender")}`,
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: `${t("Mobile Phone")}`,
      dataIndex: "mobile_phone",
      key: "mobile_phone",
    },
    {
      title: `${t("Nationality")}`,
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: `${t("Manage")}`,
      key: "manage",
      render: (record: { key: number }) => (
        <Space size="middle">
          <Button
            color="default"
            variant="text"
            onClick={() => handleEdit(record.key + 1)}
          >
            {t("Edit")}
          </Button>
          <Button
            color="default"
            variant="text"
            onClick={() => {
              handleDelete(record.key + 1);
            }}
          >
            {t("Delete")}
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource =
    users?.map((user: any, index: any) => ({
      key: index,
      name: `${user.firstname} ${user.lastname}`,
      gender: t(user.gender),
      mobile_phone: `${t(user.mobile_phone.code)}${user.mobile_phone.phone}`,
      nationality: t(user.nationality),
    })) ?? [];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <Button size="small" variant="link" color="default">
          {t("Prev")}
        </Button>
      );
    }
    if (type === "next") {
      return (
        <Button size="small" variant="link" color="default">
          {t("Next")}
        </Button>
      );
    }
    return originalElement;
  };
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="small">
        <Checkbox checked={isChecked} onClick={handleSelectAll}>
          {t("Select All")}
        </Checkbox>
        <Button variant="outlined" onClick={handleDeleteAll}>
          DELETE
        </Button>
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        size="small"
        pagination={{
          position: ["topRight"],
          itemRender: itemRender,
          size: "default",
          pageSize: 10,
        }}
      />
    </Flex>
  );
}

export default TableSection;
