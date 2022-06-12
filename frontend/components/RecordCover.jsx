import {useState} from "react";
import PatientRecord from "../components/PatientRecord";

const RecordCover = ({ patient }) => {
  const [showDetails, setShowDetails] = useState(false)
  const patientInitials = `${patient.First_name[0]}${patient.Last_name[0]}`;
  
  return (
    <div className="flex flex-col rounded-md shadow-2xl">
      <div className="p-6 flex flex-col items-center">
        {/* patient details div shows on click */}
        {showDetails && <PatientRecord patient={patient} setShowDetails={setShowDetails} patientInitials={patientInitials}/>}
        <h1 className="text-4xl font-black text-blue-600 uppercase">
          {patientInitials}
        </h1>
        <h3 className="mt-6 mb-2 text-xl">
          {patient.First_name} {patient.Last_name}
        </h3>
        <hr className="w-2/5 border-b border-blue-600"></hr>
        <div className="flex p-6">
          <button onClick={()=> setShowDetails(prev => !prev)} className="w-20 rounded-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordCover;
