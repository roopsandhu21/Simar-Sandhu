import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";
import { FaUser, FaUserGraduate, FaBook, FaChalkboardTeacher, FaCar } from "react-icons/fa";


function Managejs() {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Tanu", course: "React JS" },
    { id: 2, name: "Priya", course: "Java" },
    { id: 3, name: "Rahul", course: "Python" },
    { id: 4, name: "Sneha", course: "Data Science" },
  ]);

  // Function to handle Add or Edit User
  const handleAddOrEditUser = (e) => {
    e.preventDefault();
    if (name.trim() === "" || course.trim() === "") return;

    if (editIndex !== null) {
      let updatedUsers = [...users];
      updatedUsers[editIndex] = { id: users[editIndex].id, name, course };
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, { id: users.length + 1, name, course }]);
    }

    setName("");
    setCourse("");
    setShowModal(false);
  };

  // Function to delete user
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  // Function to edit user
  const handleEditUser = (index) => {
    setName(users[index].name);
    setCourse(users[index].course);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <div style={{ backgroundColor: "grey", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", position: "sticky", top: 0, width: "100%", zIndex: 1000 }}>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>Cashify</span>
        <Link to="/login" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
          Logout <FaCar style={{ marginLeft: "8px" }} />
        </Link>
      </div>

      {/* Sidebar and Content */}
      <div style={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <div style={{ width: "250px", backgroundColor: "grey", color: "white", padding: "20px", height: "100vh", display: "flex", flexDirection: "column" }}>
          <h2>Dashboard</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/manageuser" style={styles.link}><FaUser /> Manage User</Link></li>
            <li><Link to="/managestudent" style={styles.link}><FaUserGraduate /> Managestudent</Link></li>
            <li><Link to="/managecourse" style={styles.link}><FaBook /> Manage Course</Link></li>
            <li><Link to="/manageteacher" style={styles.link}><FaChalkboardTeacher /> Manage Teacher</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
          <div style={styles.header}>
            <h2>Manage Users</h2>
            <button style={styles.addButton} onClick={() => setShowModal(true)}>Add</button>
          </div>

          {/* Table */}
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} style={styles.tableRow}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.course}</td>
                  <td>
                    <button style={styles.editButton} onClick={() => handleEditUser(index)}>Edit</button>
                    <button style={styles.deleteButton} onClick={() => handleDeleteUser(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding/Editing Users */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddOrEditUser}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="course" className="mt-3">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              {editIndex !== null ? "Update" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// Styles
const styles = {
  link: {
    display: "block",
    padding: "10px",
    color: "white",
    textDecoration: "none",
  },
  header: {
    backgroundColor: "grey",
    padding: "15px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
  },
  addButton: {
    backgroundColor: "white",
    color: "grey",
    fontWeight: "bold",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  tableHeader: {
    backgroundColor: "grey",
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    border: "1px solid #ddd",
  },
  tableRow: {
    textAlign: "center",
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "blue",
    color: "white",
    padding: "5px 10px",
    marginRight: "5px",
    border: "none",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
  },
};

export default Managejs;
