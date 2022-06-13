const axios = require("axios");

const data = [
  {
    "First_name": "John",
    "Last_name": "Doe",
    "Age": 25,
    "Blood_type": "O",
    "Ailment": "Cancer",
    "Medication": "Aspirin",
    "Last_visit": "2020-06-01",
    "Allergies": "None",
    "Emergency_contact_name": "Isaac Doe",
    "Emergency_contact_number": "07000000",
    "Gender": "Male",
    "Address": "1, Main Street, Dublin, Ireland"
  },
  {
    "First_name": "Newton",
    "Last_name": "Dannet",
    "Age": 46,
    "Blood_type": "AB",
    "Ailment": "none",
    "Medication": "Aspirin",
    "Last_visit": "2020-03-12",
    "Allergies": "None",
    "Emergency_contact_name": "Clover Dannet",
    "Emergency_contact_number": "071111111",
    "Gender": "Male",
    "Address": "1, Main Street, Dublin, Ireland"
  },
  {
    "First_name": "Grace",
    "Last_name": "Dommy",
    "Age": 64,
    "Blood_type": "A",
    "Ailment": "Diabetes",
    "Medication": "Aspirin",
    "Last_visit": "2020-01-01",
    "Allergies": "None",
    "Emergency_contact_name": "Anny Dommy",
    "Emergency_contact_number": "0722222",
    "Gender": "Female",
    "Address": "1, Main Street, Dublin, Ireland"
  },
  {
    "First_name": "Henry",
    "Last_name": "Derry",
    "Age": 19,
    "Blood_type": "AB",
    "Ailment": "none",
    "Medication": "none",
    "Last_visit": "2021-09-01",
    "Allergies": "None",
    "Emergency_contact_name": "Ben Derry",
    "Emergency_contact_number": "07333333",
    "Gender": "Male",
    "Address": "1, Main Street, Dublin, Ireland"
  },
  {
    "First_name": "Fred",
    "Last_name": "Eddy",
    "Age": 28,
    "Blood_type": "B",
    "Ailment": "none",
    "Medication": "Aspirin",
    "Last_visit": "2022-01-011",
    "Allergies": "None",
    "Emergency_contact_name": "Eddy Edd",
    "Emergency_contact_number": "07444444",
    "Gender": "Male",
    "Address": "1, Main Street, Dublin, Ireland"
  },
  {
    "First_name": "Stella",
    "Last_name": "Morico",
    "Age": 14,
    "Blood_type": "O",
    "Ailment": "none",
    "Medication": "none",
    "Last_visit": "2021-05-23",
    "Allergies": "Peanuts",
    "Emergency_contact_name": "Ella Morico",
    "Emergency_contact_number": "07555555",
    "Gender": "Female",
    "Address": "1, Main Street, Dublin, Ireland"
  }
]

const seeder = () => {
  data.forEach((patient) => {
    axios.post("http://localhost:1337/api/patients", {
      data: patient
    }).catch(err => console.log(err));

  })
  console.log("Seeding completed");
}

seeder();