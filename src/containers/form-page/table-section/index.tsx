"use client";

import { useAppDispatch, useAppSelector } from "@/hook";
import {
  deleteUser,
  setDelete,
  setSelectedUser,
} from "@/lib/feature/form/formSlice";
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
import React, { useEffect, useState } from "react";

interface UserInterface {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  birthday: string;
  nationality: string;
  citizen_id: string[];
  gender: string;
  mobile_phone: string[];
  passport: string;
  salary: string;
}

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  name: string;
  gender: string;
  mobile_phone: string;
  nationality: string;
}

function TableSection() {
  const users = useAppSelector((state) => state.form.users);
  const isDelete = useAppSelector((state) => state.form.isDelete);
  const dispatch = useAppDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isChecked, setISChecked] = useState(false);

  const handleSelectAll = () => {
    const allRowData = dataSource.map((item: any) => item.key);
    setSelectedRowKeys(isChecked ? [] : allRowData);
    setISChecked(!isChecked);
  };

  const handleDeleteAll = () => {
    localStorage.removeItem("users");
  }

  const handleEdit = (record: any) => {
    console.log("Edit");
    dispatch(setSelectedUser(record));
  };

  const handleDelete = async (record: any) => {
    await dispatch(deleteUser(record));
    // dispatch(setDelete(true))
    window.alert("Delete Success");
    // dispatch(setDelete(false));
  };

  const columns = [
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
      render: (record: any) => (
        <Space size="middle">
          <Button
            color="default"
            variant="text"
            onClick={() => handleEdit(record.key + 1)}
          >
            EDIT
          </Button>
          <Button
            color="default"
            variant="text"
            onClick={() => {
              handleDelete(record.key + 1);
            }}
          >
            DELETE
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource =
    users?.map((user: any, index: any) => ({
      key: index,
      name: `${user.firstname} ${user.lastname}`,
      gender: user.gender,
      mobile_phone: `${user.mobile_phone.code}${user.mobile_phone.phone}`,
      nationality: user.nationality,
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
          PREV
        </Button>
      );
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
        <Checkbox checked={isChecked} onClick={handleSelectAll}>
          Select All
        </Checkbox>
        <Button variant="outlined" onClick={handleDeleteAll}>DELETE</Button>
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
