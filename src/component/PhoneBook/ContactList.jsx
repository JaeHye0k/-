import React from "react";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const searchList = useSelector((state) => state.searchList);
  return (
    <ul>
      {searchList.length === 0
        ? contactList.map((item, i) => (
            <li key={i}>
              <ContactItem item={item} />
            </li>
          ))
        : searchList.map((item, i) => (
            <li key={i}>
              <ContactItem item={item} />
            </li>
          ))}
    </ul>
  );
};

export default ContactList;
