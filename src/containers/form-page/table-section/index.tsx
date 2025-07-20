"use client";

import { useAppDispatch, useAppSelector } from "@/hook";
import {
  Button,
  Checkbox,
  Flex,
  PaginationProps,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import React, { useState } from "react";

interface UserInterface {
  title: string;
  firstname: string;
  lastname: string;
  birthday: string;
  nationality: string;
  citizen_id: number[];
  gender: string;
  mobile_phone: string[];
  passport: string;
  salary: string;
}

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
  const users = useAppSelector((state) => state.form.users);
  const dispatch = useAppDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Mobile Phone",
      dataIndex: "mobile_phone",
      key: "mobile_phone",
    },
    { title: "Nationality", dataIndex: "nationality", key: "nationality" },
    {
      title: "MANAGE",
      key: "manage",
      render: () => (
        <Space size="middle">
          <Button color="default" variant="text">
            EDIT
          </Button>
          <Button color="default" variant="text">
            DELETE
          </Button>
        </Space>
      ),
    },
  ];

  // Get data from localStorage
  const getData = localStorage.getItem("users");
  const dataSource = getData
    ? JSON.parse(getData).map((user: any, index: any) => ({
        key: index,
        name: `${user.firstname} ${user.lastname}`,
        gender: user.gender,
        mobile_phone: `${user.mobile_phone.code}${user.mobile_phone.phone}`,
        nationality: user.nationality,
      }))
    : [];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSelectAll = () => {
    const allRowData = dataSource.map((item : any) => item.key);
    setSelectedRowKeys(allRowData);
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <Button size="small" variant="link" color="default">PREV</Button>;
    }
    if (type === "next") {
      return (
        <Button size="small" variant="link" color="default">
          NEXT
        </Button>
      );
    }
    return originalElement;
  };
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="small">
        <Checkbox onClick={handleSelectAll}>Select All</Checkbox>
        <Button variant="outlined">DELETE</Button>
      </Flex>
      <Table<DataType>
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
