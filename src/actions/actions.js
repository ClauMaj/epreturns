
// an action creator, return an object with TYPE and data
export const setMonth = (n) => {
    return {
        type: "SETMONTH",
        data: n
    }
}

export const addEp2Entry = (n) => {
    return {
        type: "ADDEPENTRY",
        data: n
    }
}

export const deleteEntry = (n) => {
    return {
        type: "DELETEENTRY",
        data: n
    }
}