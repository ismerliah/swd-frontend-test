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

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  mobile_phone: string;
  nationality: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Name", dataIndex: "name" },
  { title: "Gender", dataIndex: "gender" },
  { title: "Mobile Phone", dataIndex: "mobile_phone" },
  { title: "Nationality", dataIndex: "nationality" },
  {
    title: "MANAGE",
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

//mock up data
const dataSource = Array.from<DataType>({ length: 12 }).map<DataType>(
  (_, i) => ({
    key: i,
    name: "Anna Smith",
    gender: "Female",
    mobile_phone: "+66123456789",
    nationality: "Thai",
  })
);

function TableSection() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSelectAll = () => {
    const allRowData = dataSource.map((item) => item.key);
    setSelectedRowKeys(allRowData);
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>PREV</a>;
    }
    if (type === "next") {
      return <a>NEXT</a>;
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
        pagination={{
          position: ["topRight"],
          itemRender: itemRender,
          pageSize: 5,
        }}
      />
    </Flex>
  );
}

export default TableSection;
