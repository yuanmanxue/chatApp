/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 04:52:16
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 05:16:24
 */

import todoApp from './reducers';
import { createStore } from 'redux';
import * as actions from './action'

let store = createStore(todoApp);

console.log(store.getState());
store.dispatch(actions.addTodo('我学会了redux1'))
store.dispatch(actions.addTodo('我学会了redux2'))
store.dispatch(actions.addTodo('我学会了redux3'))
store.dispatch(actions.toggleTodo(2))
console.log(actions.setVisibilityFilter);
store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED))
console.log(store.getState());
