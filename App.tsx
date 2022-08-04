import React from 'react';
import AppNavigator from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import watchlistReducer from './src/store/reducers/watchlist';
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
  watchList : watchlistReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

