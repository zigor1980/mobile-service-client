import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { TableListView, PayForm } from 'components/DataListCommon';
import { Row } from 'antd';
import AuthLayout from 'containers/AuthLayout';
import { getTableColumns, format } from './utils';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: {
        ...this.props.payments,
        data: format(props.payments.data),
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.payments, state.payments)) {
      return {
        payments: {
          ...props.payments,
          data: format(props.payments.data),
        },
      };
    }

    return null;
  }

  componentDidMount() {
    const { fetch, fetchNumbers } = this.props;
    fetch();
    fetchNumbers();
  }

  render() {
    const {
      state: {
        payments: { data, isLoading },
      },
      props: { push, phones, create, remove },
    } = this;

    const columns = getTableColumns(remove);
    const rowKey = record => record.id;

    return (
      <AuthLayout>
        <Row>
          <PayForm phones={phones} onSubmit={values => create(values)} />
        </Row>
        <TableListView
          dataSource={data}
          columns={columns}
          loading={isLoading}
          push={push}
          entity="users"
          rowKey={rowKey}
        />
      </AuthLayout>
    );
  }
}

Payment.propTypes = {
  fetchNumbers: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  payments: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  phones: PropTypes.any,
};

export default Payment;
