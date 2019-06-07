import { actionFactory } from 'redux/factories';
import types from './constants';

export const fetch = actionFactory(types.FETCH);
export const create = actionFactory(types.CREATE);
export const remove = actionFactory(types.REMOVE);
