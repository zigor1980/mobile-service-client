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
      models: {
        ...this.props.models,
        data: format(props.models.data),
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.models, state.models)) {
      return {
        models: {
          ...props.models,
          data: format(props.models.data),
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
        models: { data, isLoading },
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
  models: PropTypes.object.isRequired,
  create: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default ClientList;
