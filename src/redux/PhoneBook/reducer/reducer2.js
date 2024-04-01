/**
 * @param {Array} initialState.contactList : 이름과 전화번호 객체가 저장된 배열
 */

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
    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: deleteContact(state.contactList, payload),
        searchList: deleteContact(state.searchList, payload),
      };
    default:
      return { ...state };
  }
}

function deleteContact(contactList, payload) {
  return contactList.filter((contact) => {
    return contact.tel !== payload.tel;
  });
}
export default reducer;
