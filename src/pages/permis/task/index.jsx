import { Button, message } from "antd";
import axios from "@/utils/axios";
import ProTable from "@/components/ProTable";
import { PlusOutlined } from "@ant-design/icons";

export default function Page() {
  const columns = [
    {
      title: "序号",
      dataIndex: "number",
    },
    {
      title: "胶轮车运行记录单号",
      dataIndex: "id",
    },
    {
      title: "所属班组",
      dataIndex: "class",
    },
    {
      title: "驾驶员姓名",
      dataIndex: "name",
    },
    {
      title: "车辆编号",
      dataIndex: "carId",
    },
    {
      title: "运行状态",
      dataIndex: "carStatus",
    },
    {
      title: "自检进度",
      dataIndex: "action",
    },
    {
      title: "检查详情",
      dataIndex: "detail",
      render: (_, record) => {
        return (
          /* eslint-disable */
          <div>
            1.车体检查  2.胎压检查  3.灭火器检查 4.上电自检  5.车载数据检查  6.制动气压检查
          </div>
        );
      },
    },
    {
      title: "最后更新时间",
      dataIndex: "time",
    },
  ];

  return (
    <ProTable
      rowKey="id"
      columns={columns}
      headerTitle="菜单列表"
      request={() => {
        return axios.get("/api/get-rundata").then((value) => {
          const { result: data } = value;
          return {
            list: data,
          };
        });
      }}
      toolBarRender={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => message.warning("演示功能")}
        >
          新增
        </Button>
      }
      pagination={false}
    ></ProTable>
  );
}
