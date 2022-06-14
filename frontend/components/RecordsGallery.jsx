import RecordCover from "./RecordCover";

const RecordsGallery = ({patients}) => {
  return (
    // <div className="grid grid-cols-3 gap-x-3 gap-y-2">
    <div className=" bg-gray-100 grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full py-12">
      {patients.map((patient, index) => (
        <RecordCover patient={patient.attributes} key={index} />
      ))}
    </div>
  );
};

export default RecordsGallery;
