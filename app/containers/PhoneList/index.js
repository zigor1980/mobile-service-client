import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router/immutable';
import { fetch as fetchClients } from 'containers/ClientList/actions';
import { fetch as fetchModels } from 'containers/ModelList/actions';
import { fetch as fetchTariffs } from 'containers/TariffList/actions';
import { fetch, create, remove } from './actions';
import PhoneList from './PhoneList';

const withConnect = connect(
  state => ({
    phones: state.getIn(['phones']).toJS(),
    clients: state.getIn(['clients', 'data']) || [],
    models: state.getIn(['models', 'data']) || [],
    tariffs: state.getIn(['tariffs', 'data']) || [],
  }),
  { fetch, create, push, fetchClients, remove, fetchModels, fetchTariffs },
);

export default compose(
  withConnect,
  withRouter,
)(PhoneList);
