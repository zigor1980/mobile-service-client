import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { TableListView, ModelForm } from 'components/DataListCommon';
import { Row } from 'antd';
import AuthLayout from 'containers/AuthLayout';
import { getTableColumns, format } from './utils';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: {
        ...this.props.services,
        data: format(props.services.data),
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.services, state.services)) {
      return {
        services: {
          ...props.services,
          data: format(props.services.data),
        },
      };
    }

    return null;
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const {
      state: {
        services: { data, isLoading },
      },
      props: { push, create, remove },
    } = this;

    const columns = getTableColumns(remove);
    const rowKey = record => record.id;

    return (
      <AuthLayout>
        <Row>
          <ModelForm onSubmit={values => create(values)} />
        </Row>
        <TableListView
          dataSource={data}
          columns={columns}
          loading={isLoading}
          push={push}
          entity="clients"
          rowKey={rowKey}
        />
      </AuthLayout>
    );
  }
}

ClientList.propTypes = {
  fetch: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired,
  create: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default ClientList;
