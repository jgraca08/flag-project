export default (state, action) => {
    switch(action.type) {
        case "ADD_TURBO_TO_WATCHLIST":
          return {
            ...state,
            watchlist: [action.payload, ...state.watchlist],
          };
          case "REMOVE_TURBO_FROM_WATCHLIST":
            return {
              ...state,
              watchlist: state.watchlist.filter(
                (turbo) => turbo.id !== action.payload
              ),
            };  
        default:
            return state;
    }
}

//conforme obtemos mais ações, essas ações vao dizer ao reducer como mudar o estado