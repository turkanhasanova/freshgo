const initialState = []


export const movieReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state,action.movie];

        case "REMOVE_MOVIE":
            return state.filter(item=>item.id !== action.id);

        case "EDIT_MOVIE":
            return state.map(i=>{
                if (i.id === action.id) {
                    return {
                        ...i,...action.update
                    }
                }else{
                    return i;
                }
            })
        case "GET_MOVIES":
            return action.movies;

        default:
            return state;
            
    }
}
