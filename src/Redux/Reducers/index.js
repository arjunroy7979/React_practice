import ChangeTheNumber from "./Updown";
import { ChangeDoubleInc } from "./Updown";

import { combineReducers } from "redux";

const rootReducer=combineReducers({
    ChangeTheNumber,
    ChangeDoubleInc
})

export default rootReducer;