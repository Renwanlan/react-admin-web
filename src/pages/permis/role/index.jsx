import axios from "@/utils/axios";
import ProTable from "@/components/ProTable";
import { Modal, Button } from "antd";
import { useState } from "react";
/* eslint-disable */
export default function Page() {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');

  const handleClick = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "序号",
      dataIndex: "number",
    },
    {
      title: "巡检项",
      dataIndex: "item",
    },
    {
      title: "车牌号",
      dataIndex: "carId",
    },
    {
      title: "执行状态",
      dataIndex: "status",
    },
    {
      title: "执行人",
      dataIndex: "name",
    },
    {
      title: "完成时间",
      dataIndex: "time",
    },
    {
      title: "详细信息",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <>
            <Button type="primary" onClick={() => {
              handleClick();
              setUrl(record.action);
              setText(record.text);
            }}>
              {"查看"}
            </Button>
            <Modal
              title="详细信息"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>{text}</p>
              <img src={url} style={{ width: '500px', height: 'auto' }}/>
            </Modal>
    </>
        );
      },
    },
  ];

  return (
    <ProTable
      rowKey="id"
      columns={columns}
      headerTitle="菜单列表"
      request={() => {
        return axios.get("/api/get-itemdata").then((value) => {
          const { result: data } = value;
          return {
            list: data,
          };
        });
      }}
      toolBarRender={
        <div style={{display: "flex"}}>
          <p style={{ marginRight: '5em' }}><strong>{'胶轮车运行记录单号:101    '}</strong></p>
          <p style={{ marginRight: '5em' }}><strong>{'所属班组:井下一队    '}</strong></p>
          <p  style={{ marginRight: '5em' }}><strong>{'驾驶员：张师傅    '}</strong></p>
        </div>
      }
      pagination={false}
    ></ProTable>
  );
}
