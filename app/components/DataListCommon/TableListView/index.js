import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import styles from './styles.scss';

const rowKey = record => record.id;

const TableViewList = ({ entity, push, ...props }) => (
  <div className={styles.container}>
    <Table
      rowKey={rowKey}
      className={styles.table}
      rowClassName={styles.table__row}
      scroll={{ x: true }}
      {...props}
    />
  </div>
);

TableViewList.propTypes = {
  entity: PropTypes.string,
  push: PropTypes.func,
};

export default TableViewList;
