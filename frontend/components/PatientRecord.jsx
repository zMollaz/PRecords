const PatientRecord = ({ patient, setShowDetails, patientInitials }) => {

  const {
    First_name,
    Last_name,
    Age,
    Address,
    Allergies,
    Medication,
    Blood_type,
    Gender,
    Ailment,
    Emergency_contact_name,
    Emergency_contact_number,
    Last_visit,
  } = patient;
  
  return (
    <div className="absolute h-full flex justify-center items-center w-full top-0 backdrop-blur-md flex-col">
      <div className="rounded-xl relative py-3 px-6 bg-white font-Roboto font-medium shadow-2xl">
        {/* <button
          className="w-20 absolute top-0 right-0 rounded-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          Close
        </button> */}
        <span
          className="material-icons absolute text-4xl top-0 right-0 text-blue-600  hover:text-blue-700 cursor-pointer"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          cancel
        </span>
        <h1 className=" text-center text-3xl font-extrabold mb-5">
          {patientInitials}
        </h1>
        <h3 className=" mb-1">Name: {First_name}</h3>
        <h3 className=" mb-1">Surname: {Last_name}</h3>
        <p className=" mb-1">Age: {Age}</p>
        <p className=" mb-1">Blood Type: {Blood_type}</p>
        <p className=" mb-1">Allergies: {Allergies}</p>
        <p className=" mb-1">Ailment: {Ailment}</p>
        <p className=" mb-1">Medication: {Medication}</p>
        <p className=" mb-1">Last visit: {Last_visit}</p>
        <p className=" mb-1">Emergency contact: {Emergency_contact_name}</p>
        <p className=" mb-1">
          Emergency contact number: {Emergency_contact_number}
        </p>
        <p className=" mb-1">Address: {Address}</p>
      </div>
    </div>
  );
};

export default PatientRecord;
