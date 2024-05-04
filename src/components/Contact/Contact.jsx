import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const hendleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={hendleDelete}>
        Delete
      </button>
    </div>
  );
}
