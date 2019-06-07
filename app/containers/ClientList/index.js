import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router/immutable';
import { fetch, create, remove } from './actions';
import Component from './ClientsList';

const withConnect = connect(
  state => ({ clients: state.getIn(['clients']).toJS() }),
  { fetch, create, push, remove },
);

export default compose(
  withConnect,
  withRouter,
)(Component);
