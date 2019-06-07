import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router/immutable';
import { fetch as fetchServices } from 'containers/ServiceList/actions';
import { fetch, create, remove } from './actions';
import Component from './TariffList';

const withConnect = connect(
  state => ({
    tariffs: state.getIn(['tariffs']).toJS(),
    services: state.getIn(['services', 'data']) || [],
  }),
  { fetch, create, push, remove, fetchServices },
);

export default compose(
  withConnect,
  withRouter,
)(Component);
