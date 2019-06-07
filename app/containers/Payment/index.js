import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router/immutable';
import { fetch as fetchNumbers } from 'containers/PhoneList/actions';
import { fetch, create, remove } from './actions';
import Component from './Payment';

const withConnect = connect(
  state => ({
    payments: state.getIn(['payments']).toJS(),
    phones: state.getIn(['phones', 'data']),
  }),
  { fetch, push, fetchNumbers, create, remove },
);

export default compose(
  withConnect,
  withRouter,
)(Component);
