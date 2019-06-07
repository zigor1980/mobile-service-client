import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import API from 'utils/api';
import { message } from 'antd';
import types from './constants';

function* fetch({ payload }) {
  try {
    const response = yield call(API.fetchTariffs, payload);
    yield put({
      type: types.FETCH_SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({ type: types.FETCH_FAILED, err });
  }
}

const selector = state => state.getIn(['tariffs', 'data']);

function* create({ payload }) {
  try {
    const response = yield call(API.createTariff, payload);
    const data = yield select(selector);
    yield put({
      type: types.CREATE_SUCCESS,
      payload: [response.data, ...data],
    });
    message.success('Success!');
  } catch (err) {
    message.error('Error!');
    yield put({ type: types.CREATE_FAILED, err });
  }
}
function* remove({ payload }) {
  try {
    yield call(API.deleteTariff, payload);
    const data = yield select(selector);
    yield put({
      type: types.CREATE_SUCCESS,
      payload: data.filter(entity => entity.id !== payload),
    });
    message.success('Success!');
  } catch (err) {
    message.error('Error!');
    yield put({ type: types.CREATE_FAILED, err });
  }
}

export default function* saga() {
  yield all([
    takeLatest(types.FETCH, fetch),
    takeLatest(types.CREATE, create),
    takeLatest(types.REMOVE, remove),
  ]);
}
