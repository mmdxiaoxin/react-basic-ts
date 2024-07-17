import * as React from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to={"/"}>主页</Link>, "home", <PieChartOutlined />),
    getItem(<Link to={"/about"}>关于</Link>, "about", <DesktopOutlined />),
    getItem(<Link to={"/contact"}>联系</Link>, "contact", <UserOutlined />),
];

function DefaultLayout(): React.ReactElement {
    //--------------------------------------------------------------------
    // state
    //--------------------------------------------------------------------

    const [collapsed, setCollapsed] = React.useState(false);

    //--------------------------------------------------------------------
    // hooks
    //--------------------------------------------------------------------

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    //--------------------------------------------------------------------
    // function
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // render
    //--------------------------------------------------------------------

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
