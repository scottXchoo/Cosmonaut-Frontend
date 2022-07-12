import React from "react";
import { useParams } from "react-router-dom";
import DescSchema from "../../schema/DescSchema";
import UnDescSchema from "../../schema/UnDescSchema";
import LsDescSchema from "../../schema/LsDescSchema";
import ChDescSchema from "../../schema/ChDescSchema";

function UnitPage() {
  const { lessonID, chID, uID } = useParams();

  if (lessonID === "0") {
    return <DescSchema />;
  } else if (uID === "0") {
    return <LsDescSchema />;
  } else if (lessonID === "1" && (chID === "1" || "2" || "3") && uID === "1") {
    return <ChDescSchema />;
  } else {
    return <UnDescSchema />;
  }
}

export default UnitPage;
