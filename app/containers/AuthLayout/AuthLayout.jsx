import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu /* , Avatar, Icon, Dropdown */ } from 'antd';
import styles from './styles.scss';

const { Header, Content } = Layout;

const menuItems = [
  {
    key: 0,
    name: 'Phones',
    href: '/phones',
  },
  {
    key: 1,
    name: 'Services',
    href: '/services',
  },
  {
    key: 2,
    name: 'Tariffs',
    href: '/tariffs',
  },
  {
    key: 3,
    name: 'Clients',
    href: '/clients',
  },
  {
    key: 4,
    name: 'Models',
    href: '/models',
  },
  {
    key: 5,
    name: 'Pay',
    href: '/pay',
  },
];

/* eslint-disable react/prefer-stateless-function */
export default class AuthLayout extends React.Component {
  state = {
    collapsed: true,
    selectedMenuKey: 1,
  };

  static getDerivedStateFromProps(props, state) {
    const {
      location: { pathname, search },
    } = props;

    if (pathname !== state.pathname || search !== state.search) {
      const menuItem = menuItems.find(
        menu =>
          pathname.includes(menu.href) ||
          `${pathname}${search}`.includes(menu.href),
      );

      return {
        pathname: props.location.pathname,
        search: props.location.pathname,
        selectedMenuKey: menuItem
          ? menuItem.key.toString()
          : state.selectedMenuKey,
      };
    }
    return null;
  }

  handleToggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const {
      props: { children },
      state: { selectedMenuKey },
    } = this;

    return (
      <Layout className={styles.contentLayout}>
        <Header className={styles.header}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedMenuKey]}
            className={styles.menu}
            defaultSelectedKeys={['1']}
          >
            {menuItems.map(item => (
              <Menu.Item key={item.key}>
                <Link to={item.href}>{item.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    );
  }
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
