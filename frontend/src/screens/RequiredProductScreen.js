import React, { useState } from "react";
import axios from 'axios';

const RequiredProductScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("file", file);
    formData.append("description", description);
    formData.append("size", size);

    try{
      const response = await axios.post("http://localhost:5000/api/request", formData);
      console.log(response)
    }
    catch(e)
    {
      console.log(e);
    }
    setName("");
    setEmail("");
    setFile(null);
    setDescription("");
    setSize("-1");
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Required Product & Design</h1>
          {/* <!-- contact form --> */}
          <form onSubmit={handleSubmit}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleNameChange}
                required
                pattern="^(\d|\w)+$"
                title="should not include spaces and special characters"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Product Design:</label>
              {/* <input
          type="text"
          name="subject"
          class="form-control"
          id="subject"
         
        /> */}
              <input
                id="file"
                type="file"
                class="form-control"
                onChange={handleFileChange}
                
              />
            </div>

            <div class="form-group">
              <label for="email_body">Description:</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
                placeholder="Enter Your Details"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>

            <div class="form-group">
            <select onChange={e => setSize(e.target.value)} value={size}>
            
              <option value="-1">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              </select>
            </div>

            <button id="submit_button" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequiredProductScreen;
