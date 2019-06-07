import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clientSaga from 'containers/ClientList/saga';
import phoneSaga from 'containers/PhoneList/saga';
import paymentSaga from 'containers/Payment/saga';
import modelSaga from 'containers/ModelList/saga';
import serviceSaga from 'containers/ServiceList/saga';
import tariffSaga from 'containers/TariffList/saga';
import Component from './App';

const withConnect = connect(state => state.toJS());

const withClientSaga = injectSaga({
  key: 'clients',
  saga: clientSaga,
  mode: RESTART_ON_REMOUNT,
});

const withPhoneSaga = injectSaga({
  key: 'phones',
  saga: phoneSaga,
  mode: RESTART_ON_REMOUNT,
});

const withPaymentSaga = injectSaga({
  key: 'payments',
  saga: paymentSaga,
  mode: RESTART_ON_REMOUNT,
});

const withTariffSaga = injectSaga({
  key: 'tariffs',
  saga: tariffSaga,
  mode: RESTART_ON_REMOUNT,
});

const withModelSaga = injectSaga({
  key: 'models',
  saga: modelSaga,
  mode: RESTART_ON_REMOUNT,
});

const withServiceSaga = injectSaga({
  key: 'services',
  saga: serviceSaga,
  mode: RESTART_ON_REMOUNT,
});

export default compose(
  withConnect,
  withClientSaga,
  withPaymentSaga,
  withModelSaga,
  withTariffSaga,
  withServiceSaga,
  withPhoneSaga,
  withRouter,
)(Component);
