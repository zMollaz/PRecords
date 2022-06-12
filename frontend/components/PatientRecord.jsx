const PatientRecord = ({ patient }) => {
  const patientInitials = `${patient.First_name[0]}${patient.Last_name[0]}`;
  return (
    // <div className="bg-blue-50 my-3 mx-3 flex flex-col items-center shadow-xl rounded-xl w-40">
    //   <h1 className="font-bold text-[#053ad8]">{patientInitials}</h1>
    //   <h1>Name: {patient.First_name}</h1>
    //   <h1>Surname: {patient.Last_name}</h1>
    //   <h1>Age: {patient.Age}</h1>
    //   <h1>Blood Type: {patient.Blood_type}</h1>
    //  </div>
    <div className=" flex flex-col rounded-md shadow-2xl">
    <div className=" p-6 flex flex-col items-center">
      <h1 className=" text-4xl font-black text-blue-600 uppercase">{patientInitials}</h1>
      <h3 className=" mt-6 mb-2 text-xl">{patient.First_name} {patient.Last_name}</h3>
      <hr className=" w-2/5 border-b border-blue-600"></hr>
      <div className=" flex p-6">
        <button className=" btn hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2">
          More Info
        </button>
      </div>
    </div>
  </div>
  );
};

export default PatientRecord;
