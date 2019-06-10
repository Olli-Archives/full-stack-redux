const initialSate = {
  loading: false;
  list: []
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case NEW_NOTE_PENDING:
      return{...state, loading:true};
      case NEW_NOTE:
        return{}
      default:
         return state
  }
}