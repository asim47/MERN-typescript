import axios from "axios";
import {
    GETTING_USERS
} from "./actions/types";


const initialState = {
    //data

    start: "Getting Started"
};

const reducer: any = (state = initialState, action) => {

    switch (action.type) {
        case "value":

            break;

        default:
            return state;
    }


}

export default reducer;
