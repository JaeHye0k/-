import React from "react";
import RemoteController from "../../../../common/RemoteController/RemoteController";
import PannelGroup from "../PannelGroup/PannelGroup";
import { useSelector } from "react-redux";

const IsOnController = () => {
  const isOnController = useSelector(
    (state) => state.remoteController.isOnController
  );
  return isOnController ? (
    <RemoteController PannelGroup={<PannelGroup />} />
  ) : (
    <></>
  );
};

export default IsOnController;
