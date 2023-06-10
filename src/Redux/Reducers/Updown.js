const inititalState = 0;
const ChangeTheNumber = (state = inititalState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            if (state === 0) {
                return state
            }
            else {
                return state - 1;
            }
        default:
            return state;
    }

}

const ChangeDoubleInc = (state = inititalState, action) => {
    switch (action.type) {
        case "DOUBLEPLUS":
            return state + 2
        default:
            return state
    }
}

export default ChangeTheNumber;
export { ChangeDoubleInc }