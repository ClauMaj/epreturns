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
        case "SETYEAR":
            return {
                ...state,
                selectedYear: action.data
            }
        case "ADDCRAFTENTRY":
            let selectedYear = action.data.year
            let newEntry = {
                id: uuidv1(),
                dayOfWeek: action.data.dayOfWeek,
                mth: action.data.mth,
                dayName: action.data.dayName,
                year: action.data.year,
                ttIn: action.data.ttIn,
                ttOut: action.data.ttOut,
                bp: action.data.bp,
            }
            return {
                ...state,
                [selectedYear]: {
                    ...state[selectedYear],
                    craft: [...state[selectedYear].craft, newEntry]
                }
            }
        case "DELETECRAFTENTRY":
            let deleteFromYear = state.selectedYear;
            let deleteEntry = state[deleteFromYear].craft.filter((entry) => {
                return entry.id !== action.data;
            });
            return {
                ...state,
                [deleteFromYear]: {
                    ...state[deleteFromYear],
                    craft: deleteEntry
                }
            }

        case "ADDMU":
            let addMuToYear = action.data.year;
            let selectActiv = '';
            if (action.data.activity === 'hunt') {
                selectActiv = 'huntMu';
            }
            else if (action.data.activity === 'mining') {
                selectActiv = 'mineMu';
            }
            else {
                selectActiv = 'craftMu';
            }
            let newMuEntry = {
                id: uuidv1(),
                mth: action.data.mth,
                year: action.data.year,
                mu: action.data.mu,
            }
            return {
                ...state,
                [addMuToYear]: {
                    ...state[addMuToYear],
                    [selectActiv]: [...state[addMuToYear][selectActiv], newMuEntry]
                }
            }
        default:
            return state;
    }
}

export default reducer