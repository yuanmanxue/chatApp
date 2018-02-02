/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 04:29:12
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 05:16:53
 */
 import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './action'
 import { combineReducers } from 'redux'
 const { SHOW_ALL } = VisibilityFilters

 function todos(state = [], action) {
   switch (action.type) {
     case ADD_TODO:
      return  [...state,{
        text:action.text,
        completed: false
      }]
    case TOGGLE_TODO:
      return state.map((item,index) => {
        if(index === action.index) {
          Object.assign({},item,{
            completed: !item.completed
          })
        }
        return item
      })
    default:
      return state
   }
  }

function VisibilityFilter(state = SHOW_ALL,action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  VisibilityFilter
})

export default todoApp
