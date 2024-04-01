const initialState = {
  contactList: [],
  searchList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, tel: payload.tel },
        ],
      };
    case "SEARCH_CONTACT":
      return {
        ...state,
        searchList: payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
