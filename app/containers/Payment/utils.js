import React from 'react';
import { Button } from 'antd';
import moment from 'moment';

export const getTableColumns = onRemove => [
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    className: 'table__column',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
    className: 'table__column',
  },
  {
    title: 'Date',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: creationDate => moment(creationDate).format('MMM Do YY HH:mm'),
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
  const formatter = memo => ({
    ...memo,
    number: memo.Phone.number,
  });

  if (Array.isArray(data)) {
    return data.map(el => formatter(el));
  }

  return formatter(data);
};
