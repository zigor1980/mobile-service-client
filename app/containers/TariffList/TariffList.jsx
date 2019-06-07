import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { TableListView, TariffForm } from 'components/DataListCommon';
import { Row } from 'antd';
import AuthLayout from 'containers/AuthLayout';
import { getTableColumns, format } from './utils';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tariffs: {
        ...this.props.tariffs,
        data: format(props.tariffs.data),
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.tariffs, state.tariffs)) {
      return {
        tariffs: {
          ...props.tariffs,
          data: format(props.tariffs.data),
        },
      };
    }

    return null;
  }

  componentDidMount() {
    const { fetch, fetchServices } = this.props;
    fetch();
    fetchServices();
  }

  render() {
    const {
      state: {
        tariffs: { data, isLoading },
      },
      props: { push, create, remove, services },
    } = this;

    const columns = getTableColumns(remove);
    const rowKey = record => record.id;

    return (
      <AuthLayout>
        <Row>
          <TariffForm services={services} onSubmit={values => create(values)} />
        </Row>
        <TableListView
          dataSource={data}
          columns={columns}
          loading={isLoading}
          push={push}
          entity="clients"
          rowKey={rowKey}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>
              {record.Services.map(service => (
                <span
                  key={service.id}
                  style={{ display: 'inline-block', padding: '5px' }}
                >
                  {service.name}
                </span>
              ))}
            </p>
          )}
        />
      </AuthLayout>
    );
  }
}

ClientList.propTypes = {
  services: PropTypes.any,
  fetch: PropTypes.func.isRequired,
  tariffs: PropTypes.object.isRequired,
  create: PropTypes.func.isRequired,
  fetchServices: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default ClientList;
