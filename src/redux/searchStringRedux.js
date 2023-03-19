// selectors
export const getSearchString = (state) => state.searchString;

// actions
//const ADD_LIST = 'app/lists/ADD_LIST';
const createActionName = actionName => `app/searchForm/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// actions creators
export const updateSearch = payload => ({ type: UPDATE_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;