import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/ReduxCounter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const CounterBox = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  let gap = 1;

  const increase = () => {
    dispatch({
      type: "INCREMENT",
      payload: { gap },
    });
  };

  const decrease = () => {
    dispatch({
      type: "DECREMENT",
      payload: { gap },
    });
  };

  return (
    <div id={style.counter_box}>
      <div>{count}</div>
      <div className={style.increase_decrease}>
        <button onClick={increase}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button onClick={decrease}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
};

export default CounterBox;
