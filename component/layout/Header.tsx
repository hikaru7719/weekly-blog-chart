import { Layout, Menu } from "antd";

const styles = {
  p: { fontSize: "20px", color: "#fff" },
  userMenu: {
    float: "right"
  }
} as const;

export const Header = () => {
  const { Header } = Layout;
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="0" style={styles.p}>
          MyBlogChart
        </Menu.Item>
      </Menu>
    </Header>
  );
};
