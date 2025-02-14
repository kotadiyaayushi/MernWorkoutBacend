import { createContext, useReducer } from "react";

const WorkoutsContext = createContext();

const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUT':
            return { workouts: action.payload };

        case 'CREATE_WORKOUT':
            return { workouts: [action.payload, ...state.workouts] };

        default:
            return state;
    }
};

const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

    return (
        <WorkoutsContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export { WorkoutsContextProvider, WorkoutsContext };