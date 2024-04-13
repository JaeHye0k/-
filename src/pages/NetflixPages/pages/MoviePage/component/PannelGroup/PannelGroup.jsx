import React from "react";
import SortPannel from "./component/SortPannel/SortPannel";
import GenrePannel from "./component/GenrePannel/GenrePannel";
import { useSelector } from "react-redux";

const PannelGroup = () => {
  const selectedButton = useSelector(
    (state) => state.remoteController.selectedButton
  );
  return selectedButton === "filter" ? <GenrePannel /> : <SortPannel />;
};

export default PannelGroup;
