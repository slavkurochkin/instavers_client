const profileReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PROFILE":
            return action.payload;
        case "CREATE_PROFILE":
            return [...state, action.payload];
        case "UPDATE_PROFILE":
            return state.map(user => user._id === action.payload._id ? action.payload : user);
        case "DELETE_PROFILE":
            return state.filter(user => user._id !== action.payload);
        default:
            return state;
    }
};

export default profileReducer;