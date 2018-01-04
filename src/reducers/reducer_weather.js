import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      //since we don't want to manipulate the state it is best to create a new array
      //and return that
      return [action.payload.data, ...state]; //similar to state.concat([action.payload.data])

    default:

  }
  console.log('Action received', action);
  return state;

}
