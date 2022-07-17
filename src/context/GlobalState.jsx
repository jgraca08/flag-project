import React, {createContext,useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],  
}

//create context

export const GlobalContext = createContext(initialState);

//provider components

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Sempre que o estado muda no nosso provider o useEffect é disparado, ou seja sempre que um item e add à watchlist ele vai salvar na localstorage
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    },[state]); 

    //actions
    const addTurboToWatchlist = turbo => {
        dispatch({type: "ADD_TURBO_TO_WATCHLIST", payload: turbo})
    }

    const removeTurboFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_TURBO_FROM_WATCHLIST", payload: id });
      };

    //Dá acesso a este conteúdo a outros componentes
    return (
        <GlobalContext.Provider value={{
        watchlist: state.watchlist,
        addTurboToWatchlist,
        removeTurboFromWatchlist,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
};