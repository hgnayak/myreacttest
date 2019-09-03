import React,{compose} from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 }):compose;
 
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
