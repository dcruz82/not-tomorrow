import { useState } from "react";

export const AddTask = ({ onAdd, closeModal }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toJSON().split("T")[0]);
  const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5));
  const [notes, setNotes] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      throw new Error("You need to put a name in order to create a task");
    }

    onAdd({ name, date, time, notes });
    console.log("Submit");

    setName("");
    setNotes("");
    closeModal();
  };

  return (
    <section className="container-create-form">
      <div className="form-create-task">
        <form className="form-task" id="create-task" onSubmit={onSubmit}>
          <input
            placeholder="Task Name"
            type="text"
            className="task-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            className="task-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="task-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <textarea
            className="task-notes"
            placeholder="Notes"
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </form>
        <div className="btn-options">
          <button className="btn-close" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit" className="btn-submit" form="create-task">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};
