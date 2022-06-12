import { useState, useEffect } from "react";
import PatientRecord from "./PatientRecord";
import axios from "axios";
const RecordsGallery = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const recordsGetter = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/patients", {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_Strapi_ApiToken,
          },
        });

        setPatients(res.data.data);

      } catch (error) {
        console.log(error);
      }
    };
    recordsGetter();
  }, []);

  return (
    // <div className="grid grid-cols-3 gap-x-3 gap-y-2">
    <div className=" bg-gray-100 grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full py-12">
      {patients.map((patient, index) => (
        <PatientRecord patient={patient.attributes} key={index} />
      ))}
    </div>
  );
};

export default RecordsGallery;
