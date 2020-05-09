import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export type IRootState = ReturnType<typeof reducers>