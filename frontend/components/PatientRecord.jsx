
const PatientRecord = ({patient}) => {
  return (
    <div>
      <h1>Name: {patient.First_name}</h1>
      <h1>Surname: {patient.Last_name}</h1>
      <h1>Age: {patient.Age}</h1>
      <h1>Blood Type: {patient.Blood_type}</h1>
    </div>
  )
}

export default PatientRecord