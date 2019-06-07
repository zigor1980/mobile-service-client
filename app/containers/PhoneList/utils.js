import React from 'react';
import { Button } from 'antd';

export const getTableColumns = onRemove => [
  {
    title: 'Client',
    dataIndex: 'client',
    key: 'client',
    className: 'table__column',
  },
  {
    title: 'Tariff',
    dataIndex: 'tariff',
    key: 'tariff',
    className: 'table__column',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    className: 'table__column',
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    className: 'table__column',
  },
  {
    title: 'Balans',
    dataIndex: 'balans',
    key: 'balans',
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
  const formatter = memo => ({
    ...memo,
    tariff: memo.Tariff.name,
    model: memo.Model.name,
    client: `${memo.Client.name} ${memo.Client.lastName}`,
  });

  if (Array.isArray(data)) {
    return data.map(el => formatter(el));
  }

  return formatter(data);
};
