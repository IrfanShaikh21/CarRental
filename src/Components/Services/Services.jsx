import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    licenseId: "",
    startDate: "",
    endDate: "",
    car: "",
  });

  const [formDataList, setFormDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("formDataList");
    if (savedData) {
      setFormDataList(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...formDataList, formData];
    setFormDataList(updatedList);

    localStorage.setItem("formDataList", JSON.stringify(updatedList));

    navigate("/carlist", { state: { formDataList: updatedList } });
    setFormData({
      name: "",
      phone: "",
      licenseId: "",
      startDate: "",
      endDate: "",
      car: "",
    }); // Reset form
  };

  return (
    <div className="container">
      <h2 className="heading">Car Rental Service Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label>Phone Number :</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label>License ID :</label>
          <input
            type="text"
            name="licenseId"
            value={formData.licenseId}
            onChange={handleChange}
            placeholder="Enter your license ID"
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label>Start Date :</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label>End Date :</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label>Select Car : </label>
          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            required
            className="select"
          >
            <option value="">Select a car</option>
            <option value="Tata Nexon">Tata Nexon</option>
            <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
            <option value="Hyundai Creta">Hyundai Creta</option>
            <option value="Mahindra Thar">Mahindra Thar</option>
            <option value="Kia Seltos">Kia Seltos</option>
            <option value="Toyota Innova">Toyota Innova</option>
            <option value="Maruti Suzuki Baleno">Maruti Suzuki Baleno</option>
            <option value="Honda City">Honda City</option>
            <option value="MG Hector">MG Hector</option>
            <option value="Skoda Kushaq">Skoda Kushaq</option>
          </select>
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Services;
