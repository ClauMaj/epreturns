
// an action creator, return an object with TYPE and data
export const setMonth = (n) => {
    return {
        type: "SETMONTH",
        data: n
    }
}

export const setYear = (n) => {
    return {
        type: "SETYEAR",
        data: n
    }
}

export const addCraftEntry = (n) => {
    return {
        type: "ADDCRAFTENTRY",
        data: n
    }
}

export const deleteCraftEntry = (n) => {
    return {
        type: "DELETECRAFTENTRY",
        data: n
    }
}

export const addMu = (n) => {
    return {
        type: "ADDMU",
        data: n
    }
}

