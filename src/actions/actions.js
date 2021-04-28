
// an action creator, return an object with TYPE and data
export const increment = (n) => {
    return {
        type: "INCREMENT",
        data: n
    }
}