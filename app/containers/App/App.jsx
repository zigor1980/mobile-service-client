import React from 'react';
import { Layout } from 'antd';
import Routes from '../../routes';
import styles from './styles.scss';

import GlobalStyle from '../../global-styles';

function App() {
  return (
    <Layout className={styles.layout} hasSider>
      <Routes />
      <GlobalStyle />
    </Layout>
  );
}

export default App;
