/* eslint-disable */ 
const mock = [
  {
    // 登录
    url: "/api/login",
    type: "post",
    handler({ body }) {
      const { userAccount, userPassword } = JSON.parse(body);
      if (userAccount === "admin" && userPassword === "password") {
        return {
          status: "success",
          result: {
            token: true,
          },
        };
      } else {
        return {
          status: "error",
          result: null,
          msg: "用户名或密码错误！",
        };
      }
    },
  },

  {
    // 获取权限菜单
    url: "/api/get-menu-all",
    type: "get",
    handler() {
      return {
        status: "success",
        result: [
          {
            id: "1",
            title: "首页",
            path: "/index",
            type: "1",
            icon: "HomeFilled",
          },
          {
            id: "2",
            title: "权限管理",
            type: "2",
            icon: "SettingFilled",
            children: [
              {
                id: "2-1",
                title: "菜单管理",
                path: "/permis/menu",
                type: "1",
              },
              {
                id: "2-2",
                title: "角色管理",
                path: "/permis/role",
                type: "1",
              },
              {
                id: "2-3",
                title: "用户管理",
                path: "/permis/account",
                type: "1",
              },
              {
                id: "2-4",
                title: "部门管理",
                path: "/permis/dept",
                type: "1",
              },
            ],
          },
          {
            id: "4",
            title: "pro-table",
            type: "1",
            path: "/pro-table",
            icon: "AppstoreFilled",
          },
          {
            id: "3",
            title: "错误页面",
            type: "2",
            icon: "CloseCircleFilled",
            children: [
              {
                id: "3-1",
                title: "401",
                path: "/error/401",
                type: "1",
              },
              {
                id: "3-2",
                title: "404",
                path: "/error/404",
                type: "1",
              },
            ],
          },
        ],
        msg: "成功！",
      };
    },
  },
  {
    // 获取权限菜单
    url: "/api/get-menu",
    type: "get",
    handler() {
      return {
        status: "success",
        result: [
          {
            id: "1",
            title: "胶轮车标准化运行记录",
            path: "/permis/menu",
            type: "1",
            icon: "HomeFilled",
          },
          {
            id: "2",
            title: "车辆自检运行控制单",
            path: "/permis/role",
            type: "1",
            icon: "SettingFilled",
          },
        ],
        msg: "成功！",
      };
    },
  },
  {
    // 获取权限菜单
    url: "/api/get-rundata",
    type: "get",
    handler() {
      return {
        status: "success",
        result: [
          {
            number: "1",
            id: "101",
            class: "井下一队",
            name: "张师傅",
            carId: "JL97001",
            carStatus: "已完成",
            action: "气压表检查",
            detail: "1",
            time: "2023-08-19 01:10:42",
          },
        ],
        msg: "成功！",
      };
    },
  },
  {
    url: "/api/get-itemdata",
    type: "get",
    handler() {
      return {
        status: "success",
        result: [
          {
            number: "1",
            item: "车体检查",
            carId: "JL97001",
            status: "已完成",
            name: "张师傅",
            time: "2023-08-19 01:10:42",
            action: "https://pressuretest-1300159373.cos.ap-beijing.myqcloud.com/%E8%83%B6%E8%BD%AE%E8%BD%A6%E5%A4%96%E8%A7%82.jpg",
          },
          {
            number: "2",
            item: "胎压检查",
            carId: "JL97001",
            status: "已完成",
            name: "张师傅",
            time: "2023-08-19 01:11:00",
            action: "https://pressuretest-1300159373.cos.ap-beijing.myqcloud.com/%E8%83%8E%E5%8E%8B.png",
          },
          {
            number: "3",
            item: "灭火器检查",
            carId: "JL97001",
            status: "已完成",
            name: "张师傅",
            time: "2023-08-19 02:10:42",
            action: "https://pressuretest-1300159373.cos.ap-beijing.myqcloud.com/%E7%81%AD%E7%81%AB%E5%99%A8.png",
          },
          {
            number: "4",
            item: "机油油位检查",
            carId: "JL97001",
            status: "已完成",
            name: "张师傅",
            time: "2023-08-19 01:17:42",
            action: "https://pressuretest-1300159373.cos.ap-beijing.myqcloud.com/%E6%9C%BA%E6%B2%B9%E6%B2%B9%E4%BD%8D%E6%A3%80%E6%9F%A5.png",
            text:"液压油位：正常  柴油位：032  油压：过低"
          },
          {
            number: "5",
            item: "车载电子数据检查",
            carId: "JL97001",
            status: "已完成",
            name: "张师傅",
            time: "2023-08-19 01:10:51",
            action: "https://pressuretest-1300159373.cos.ap-beijing.myqcloud.com/%E6%9C%BA%E6%B2%B9%E6%B2%B9%E4%BD%8D%E6%A3%80%E6%9F%A5.png",
            text:"甲烷（%）：0.00   水温（℃）：028   表温（℃）：029  排温（℃）：027  油温（℃）：027"
          },
          {
            number: "6",
            item: "气压表检查",
            carId: "JL97001",
            status: "已完成",
            name: "张师傅",
            time: "2023-08-19 01:10:42",
            action: "https://pressuretest-1300159373.cos.ap-beijing.myqcloud.com/%E8%83%B6%E8%BD%AE%E8%BD%A6%E5%A4%96%E8%A7%82.jpg",
          },
        ],
        msg: "成功！",
      };
    },
  }
];

export default mock;
