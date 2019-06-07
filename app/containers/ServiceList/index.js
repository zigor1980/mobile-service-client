import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router/immutable';
import { fetch, create, remove } from './actions';
import Component from './ServiceList';

const withConnect = connect(
  state => ({ services: state.getIn(['services']).toJS() }),
  { fetch, create, push, remove },
);

export default compose(
  withConnect,
  withRouter,
)(Component);
