import { v1 as uuidv1 } from "uuid";

// gets called by actions
// reducer returns a new global state
// reducer must be passed into Store in the index file
const reducer = (state, action) => {
    switch (action.type) {
        case "SETMONTH":
            return {
                ...state,
                selectedMonth: action.data
            }
        case "ADDEPENTRY":
            let newEntry = {
                id: uuidv1(),
                dayOfWeek: action.data.dayOfWeek,
                mth: action.data.mth,
                dayName: action.data.dayName,
                year: action.data.year,
                ttIn: action.data.ttIn,
                ttOut: action.data.ttOut,
            }
            return {
                ...state,
                year2021: {
                    ...state.year2021,
                    ep2: [...state.year2021.ep2, newEntry]
                }
            }
        case "DELETEENTRY":
            let deleteEntry = state.year2021.ep2.filter((entry) => {
                return entry.id !== action.data;
            });
            return {
                ...state,
                year2021: {
                    ...state.year2021,
                    ep2: deleteEntry
                }
            }
        default:
            return state;
    }
}

export default reducer