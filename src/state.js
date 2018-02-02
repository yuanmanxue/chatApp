/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 02:58:43
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 03:30:03
 */

import { createStore } from 'redux'

function counter(state=0, action) {
  switch (action.type) {
    case 'add' :
      return state+1
    case 'desc':
      return state-1
    default:
      return 100
  }
}
const store = createStore(counter)
export default store
