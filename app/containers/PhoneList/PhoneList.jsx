import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { TableListView, PhoneForm } from 'components/DataListCommon';
import { Row } from 'antd';
import AuthLayout from 'containers/AuthLayout';
import { getTableColumns, format } from './utils';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: {
        ...this.props.phones,
        data: format(props.phones.data),
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.phones, state.phones)) {
      return {
        phones: {
          ...props.phones,
          data: format(props.phones.data),
        },
      };
    }

    return null;
  }

  componentDidMount() {
    const { fetch, fetchClients, fetchModels, fetchTariffs } = this.props;
    fetchClients();
    fetch();
    fetchTariffs();
    fetchModels();
  }

  render() {
    const {
      state: {
        phones: { data, isLoading },
      },
      props: { push, create, clients, remove, tariffs, models },
    } = this;

    const columns = getTableColumns(remove);
    const rowKey = record => record.id;

    return (
      <AuthLayout>
        <Row>
          <PhoneForm
            clients={clients}
            tariffs={tariffs}
            models={models}
            onSubmit={values =>
              create({
                ...values,
                balans: 100,
              })
            }
          />
        </Row>
        <TableListView
          dataSource={data}
          columns={columns}
          loading={isLoading}
          push={push}
          entity="phones"
          rowKey={rowKey}
        />
      </AuthLayout>
    );
  }
}

Payment.propTypes = {
  fetchClients: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  fetchModels: PropTypes.func.isRequired,
  fetchTariffs: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  phones: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  clients: PropTypes.any,
  tariffs: PropTypes.any,
  models: PropTypes.any,
};

export default Payment;
