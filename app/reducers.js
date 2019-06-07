/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import clientReducer from 'containers/ClientList/reducer';
import phoneReducer from 'containers/PhoneList/reducer';
import paymentsReducer from 'containers/Payment/reducer';
import modelReducer from 'containers/ModelList/reducer';
import serviceReducer from 'containers/ServiceList/reducer';
import tariffReducer from 'containers/TariffList/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    clients: clientReducer,
    phones: phoneReducer,
    payments: paymentsReducer,
    models: modelReducer,
    tariffs: tariffReducer,
    services: serviceReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
