const INITIALE_STATE = {
    meteo:'coucou',
}


function meteoReducer(state = INITIALE_STATE, action) {
    
    switch (action.type) {
        case 'UPDATE_METEO':
            return {
                ...state,
                meteo: action.value,
            }
            
    
        default:
            return state
            
    }
    
}

export default meteoReducer; 