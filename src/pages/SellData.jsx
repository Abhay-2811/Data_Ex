import { useState } from "react";
import "./selldata.css";
// import Form from "../components/Selldata/Form";
// import Pending from "../components/Selldata/Pending";
// import Uploaded from "../components/Selldata/Uploaded"

const SellData = () => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredFile, setEnteredFile] = useState("");
  const [enteredDescription, setEnteredDescription] = useState(" ");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const fileChangeHandler = (event) => {
    setEnteredFile(event.target.value);
  };
  const desChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: enteredTitle,
      description: enteredDescription,
      amount: enteredAmount,
      file: enteredFile,
    };
    console.log(data);
    setEnteredAmount(" ");
    setEnteredFile("");
    setEnteredTitle(" ");
    setEnteredDescription(" ");
  };
  return (
    <div className="selldata_container">
      <form onSubmit={submitHandler}>
        <div className="formSubmission">
          <div className="form_comp">
            <label>Enter file name</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              placeholder="Enter value"
            ></input>
          </div>
          <div className="form_comp">
            <label>Decription </label>
            <textarea
              rows="3"
              cols="20"
              value={enteredDescription}
              onChange={desChangeHandler}
            ></textarea>
          </div>
          <div className="form_comp">
            <label>Enter price(fil)</label>
            <input
              type="number"
              min="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
              placeholder="Enter value"
            ></input>
          </div>

          <div className="form_comp">
            <label>Upload file</label>
            <input
              type="file"
              value={enteredFile}
              onChange={fileChangeHandler}
            ></input>
          </div>
        </div>
        <div className="button">
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default SellData;
