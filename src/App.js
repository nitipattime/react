import React from 'react';
// import logo from './logo.svg';
import {Route,Link, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
// import home from './home';
import a from './a';
import b from './gg/b';
import Bisection from './root/bisection';
import False from './root/falseposition';
import Onepoint from './root/onepoint';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Numer</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={280}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Root of Equation">
              {/* <Menu.Item key="1">Graphical Method</Menu.Item> */}
              <Menu.Item key="2" ><Link to = '/Bisection'>Bisection Method</Link></Menu.Item>
              <Menu.Item key="3"><Link to = '/False'>False-Position Method</Link></Menu.Item>
              <Menu.Item key="4"><Link to = '/Onepoint'>One-Point Iteration Method</Link></Menu.Item>
              <Menu.Item key="5">Newton-Raphson Method</Menu.Item>
              <Menu.Item key="6">Secant Method</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Linear Algebraic Equations">
              <SubMenu key="sub2-1" icon={<NotificationOutlined />} title="Direct Method">
                <Menu.Item key="7">Cramer's Rule</Menu.Item>
                <Menu.Item key="8">Gauss Elimination Method</Menu.Item>
                <Menu.Item key="9">Gauss-Jordan Method</Menu.Item>
                <Menu.Item key="10">LU Decomposition Method</Menu.Item>
                <Menu.Item key="10">Cholesky Decomposition Method</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2-2" icon={<NotificationOutlined />} title="Iterative Method">
                <Menu.Item key="11">option14</Menu.Item>
                <Menu.Item key="12">option15</Menu.Item>
                <Menu.Item key="13">option16</Menu.Item>
                <Menu.Item key="14">option17</Menu.Item>
              </SubMenu>
            </SubMenu>

            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Interpolation and Extrapolation">
              <Menu.Item key="">Trapzoidal's Rule</Menu.Item>
              <Menu.Item key="">Composite Trapzoidal's Rule</Menu.Item>
              <Menu.Item key="">Simpson's Rule</Menu.Item>
              <Menu.Item key="">Composite Simpson's Rule</Menu.Item>
            </SubMenu>

            <SubMenu key="Regession" icon={<NotificationOutlined />} title="Leat-Squares Regression">
              <Menu.Item key="">Linear Regession</Menu.Item>
              <Menu.Item key="">Polynomial Regession</Menu.Item>
              <Menu.Item key="">Multiple Linear Regression</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>

        <Content style={{ padding: '0 24px', minHeight: 280 }}>

          {/* Content */}
          <Switch>
          <Route path = "/Bisection" component={Bisection}/>
          <Route path = "/False" component={False}/>
          <Route path = "/Onepoint" component={Onepoint}/>
          </Switch>
        </Content>

      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
  </Layout>
  </BrowserRouter>

    );
  }
}







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
