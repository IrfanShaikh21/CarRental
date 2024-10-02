import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Cars.css"; // Import the CSS file

function Cars() {
  const location = useLocation();
  const [formDataList, setFormDataList] = useState([]);

  // Load data from location.state or localStorage when the component mounts
  useEffect(() => {
    if (location.state && location.state.formDataList) {
      setFormDataList(location.state.formDataList);
    } else {
      const savedData = localStorage.getItem("formDataList");
      if (savedData) {
        setFormDataList(JSON.parse(savedData));
      }
    }
  }, [location.state]);

  // Calculate the number of days between startDate and endDate
  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return diffDays;
  };

  // Handle deletion of a specific entry
  const handleDelete = (indexToDelete) => {
    const updatedList = formDataList.filter(
      (_, index) => index !== indexToDelete
    ); // Filter out the deleted entry
    setFormDataList(updatedList); // Update state with the remaining entries
    localStorage.setItem("formDataList", JSON.stringify(updatedList)); // Update localStorage with the new list
  };

  return (
    <div className="container">
      <h2 className="heading">Submitted Car Rental Information</h2>
      {formDataList.length === 0 ? (
        <div>No data available.</div>
      ) : (
        formDataList.map((formData, index) => {
          const days = calculateDays(formData.startDate, formData.endDate);
          const totalCharge = days * 1000;

          return (
            <div key={index} className="info">
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Phone Number:</strong> {formData.phone}
              </p>
              <p>
                <strong>License ID:</strong> {formData.licenseId}
              </p>
              <p>
                <strong>Start Date:</strong> {formData.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {formData.endDate}
              </p>
              <p>
                <strong>Selected Car:</strong> {formData.car}
              </p>
              <p>
                <strong>Total Charge:</strong> ₹{totalCharge} (₹1000 per day
                for {days} days)
              </p>
              <button
                className="deleteButton"
                onClick={() => handleDelete(index)} // Call handleDelete with the entry's index
              >
                Delete
              </button>
              <hr /> 
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cars;
