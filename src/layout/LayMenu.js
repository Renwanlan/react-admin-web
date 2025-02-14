import { createElement, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Skeleton, theme } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import { selectTheme } from "@/store/system";
import { useSelector } from "react-redux";

// import * as Icon from "@ant-design/icons";
import * as Icon from "@ant-design/icons";

// 动态渲染icon
const antdIcon = function (icon) {
  return icon && createElement(Icon[icon]);
};

const getItem = function ({ id, type, title, path, children, icon }) {
  return {
    key: path || id,
    label: title,
    icon: icon ? antdIcon(icon) : "",
    children:
      type === "2" ? (children || []).map((item) => getItem(item)) : undefined,
  };
};

export default function LayMenu({ initialMenuList, loading }) {
  const navigate = useNavigate();

  const location = useLocation();

  const menuList = useMemo(
    () => initialMenuList.map((item) => getItem(item)),
    [initialMenuList]
  );

  const themeName = useSelector(selectTheme);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Skeleton
      active
      loading={loading}
      paragraph={{ rows: 6 }}
      title={false}
      style={{ padding: 20 }}
    >
      <Scrollbars style={{ height: "calc(100% - 64px)" }} autoHide>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuList}
          onClick={({ key }) => navigate(key)}
          style={{ border: "none", background: colorBgContainer }}
          theme={themeName === "dark" ? "dark" : "light"}
        ></Menu>
      </Scrollbars>
    </Skeleton>
  );
}
