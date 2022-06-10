import { useState } from "react";
import PatientRecord from "./PatientRecord";
import axios from "axios";
const RecordsGallery = () => {
  const [patData, setPatData] = useState([]);

  axios
    .get("http://localhost:1337/api/patients", {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_Strapi_ApiToken,
      },
    })
    .then((res) => {
      console.log(111, res.data.data[0].attributes);
      setPatData(res.data.data)
      console.log(222, patData);
    })
    .catch((err) => console.log(err));
  return (
    <div className="grid grid-col-3 gap-x-3 gap-y-2">
      <PatientRecord />
    </div>
  );
};

export default RecordsGallery;
