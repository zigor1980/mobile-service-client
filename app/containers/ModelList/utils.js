import React from 'react';
import { Button } from 'antd';

export const getTableColumns = onRemove => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    className: 'table__column',
  },
  {
    title: 'Descripyion',
    dataIndex: 'desc',
    key: 'desc',
    className: 'table__column',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => (
      <Button type="danger" onClick={() => onRemove(record.id)}>
        Delete
      </Button>
    ),
  },
];

export const format = data => {
  const formatter = memo => memo;

  if (Array.isArray(data)) {
    return data.map(el => formatter(el));
  }

  return formatter(data);
};
