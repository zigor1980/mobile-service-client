import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import styles from './styles.scss';

const Loader = ({ loading, global = false, children }) => {
  if (!loading) {
    return children;
  }

  return global ? (
    <div className={styles.globalLoader}>
      <Spin size="large" />
    </div>
  ) : (
    <div className={styles.loaderContainer}>
      <div className={styles.loadingChildren}>{children}</div>
      <div className={styles.loader}>
        <Spin />
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  global: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

export default Loader;
