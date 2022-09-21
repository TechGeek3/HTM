import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import "./MedicineDetails.css";
import FormData from 'form-data'

function MedicineDetails() {

  const [medicine, setMedicine] = useState({
    name: "",
    expiry: "",
    quantity: 0,
    price: 0
  });

  const [selectedFile, setSelectedFile] = useState();

  const handleChange = (e) => {
    console.log(e);
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
    console.log(medicine);
  }

  const handleSubmit = (e) => {
    console.log(medicine);
    e.preventDefault();

    const formData = new FormData();

    formData.append('file', selectedFile);
    formData.append('remark', 'test');

    fetch(
      'http://127.0.0.1:8000/file/upload/',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        if (!result.remark) {
          addMedicine();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const addMedicine = async () => {
    try {
      await addDoc(collection(db, 'medicines'), medicine)
    } catch (err) {
      alert(err)
    }
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };


  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <label for="myfile">Select a file:</label><br></br>
        <input type="file" id="myfile" name="myfile" onChange={changeHandler} /><br></br>

        <label for="med-name">Medicine Name: </label><br></br>
        <input type="text" name="name" value={medicine.name} onChange={handleChange} /><br></br>
        <label for="med-name">Expiry date: </label><br></br>
        <input type="date" name="expiry" value={medicine.expiry} onChange={handleChange} /><br></br>

        <label for="med-name">Quantity: </label><br></br>
        <input type="number" name="quantity" value={medicine.quantity} onChange={handleChange} /><br></br>

        <label for="med-name">Price: </label><br></br>
        <input type="number" name="price" value={medicine.price} onChange={handleChange} /><br></br>

        <button className="submit-button" type="submit">Submit</button>
      </form >
    </div>
  );

}

export default MedicineDetails;


