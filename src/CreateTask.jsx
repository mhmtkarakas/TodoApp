import React from "react";

const CreateTask = () => {
  return (
    <div className="todoDivArea">
      <form>
        <input
          className="form-control todoText mb-2"
          name="input"
          type="text"
          placeholder="Please enter task.."
        />
        <textarea
          type="text"
          name="textarea"
          className="form-control todoText mb-2"
          placeholder="Please enter detail.."
          rows={3}
        ></textarea>
        <button className="btn btn-primary todoBtn">Enter</button>
      </form>
    </div>
  );
};

export default CreateTask;
