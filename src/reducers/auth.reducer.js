// { type: 'LOGGED_IN_USER', payload: {name: 'Ryan', roles: 'Seller'}}
const authReducer = (state = { name: 'Rudolph', role: 'Seller' }, action) => {
    switch(action.type) {
      case "LOGGED_IN_USER":
        return { ...state, ...action.payload };
      case "LOGOUT":
        return action.payload;
      default:
        return state;
    }
};

export default authReducer;