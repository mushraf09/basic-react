import { useState } from "react"
import StudentForm from "./components/StudentForm"

function UseStateExample() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [savedStudent, setSavedStudent] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const updateStudent = () => {
    setSavedStudent(student)
    setMessage("Student updated successfully.")
  }

  const editStudent = () => {
    setStudent(savedStudent)
    setMessage("Editing saved student. Update the fields and click Update.")
  }

  return (
    <section className="student-form">
      <div className="student-form__header">
        <span className="student-form__badge">React useState</span>
        <h3 className="student-form__title">Student Profile</h3>
        <p className="student-form__subtitle">
          Add a student’s name, email, and phone number, then use the Update button to save.
        </p>
      </div>

      <div className="student-form__fields">
        <label className="student-form__label">
          Name
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="student-form__input"
            placeholder="Enter student name"
          />
        </label>
        <label className="student-form__label">
          Email
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="student-form__input"
            placeholder="Enter student email"
          />
        </label>
        <label className="student-form__label">
          Phone Number
          <input
            type="tel"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            className="student-form__input"
            placeholder="Enter student phone"
          />
        </label>
      </div>

      <div className="student-form__actions">
        <button
          className="student-form__button student-form__button--secondary"
          onClick={editStudent}
          disabled={!savedStudent.name && !savedStudent.email && !savedStudent.phone}
        >
          Edit
        </button>
        <button className="student-form__button student-form__button--primary" onClick={updateStudent}>
          Update
        </button>
      </div>

      {message && <div className="student-form__message">{message}</div>}

      <div className="student-details">
        <h4 className="student-details__title">Saved Student</h4>
        {savedStudent.name || savedStudent.email || savedStudent.phone ? (
          <div className="student-details__grid">
            <p>
              <strong>Name:</strong> {savedStudent.name}
            </p>
            <p>
              <strong>Email:</strong> {savedStudent.email}
            </p>
            <p>
              <strong>Phone:</strong> {savedStudent.phone}
            </p>
          </div>
        ) : (
          <p className="student-details__empty">No student saved yet. Fill the form and click Update.</p>
        )}
      </div>
    </section>
  )
}

export default UseStateExample