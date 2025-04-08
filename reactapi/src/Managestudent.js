import React, { useState } from "react";
import { Modal, Form, Button, Table, Navbar, Nav, Container } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import s from './phone.png';

function ManageStudent() {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const [students, setStudents] = useState([
    { id: 1, name: "Tanu", course: "React JS" },
    { id: 2, name: "Priya", course: "Java" },
    { id: 3, name: "Rahul", course: "Python" },
    { id: 4, name: "Sneha", course: "Data Science" },
  ]);

  // Function to handle logout
  const handleLogout = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="grey" variant="white" expand="lg ">
        <Container>
          <Navbar.Brand href="#">
            <img src={s} alt="logo" width="40" height="40" className="d-inline-block align-top" />
            {' '} Cashify
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Button variant="danger" onClick={handleLogout}> {/* Attach logout function */}
            <FaSignOutAlt /> Logout
          </Button>
        </Container>
      </Navbar>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: "250px", background: "grey", color: "white", height: "100vh", padding: "20px" }}>
          <h4><MdDashboard /> Dashboard</h4>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li><a href="" style={{ color: "white", textDecoration: "none" }}>Manage User</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Manage Student</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Manage Course</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Manage Teacher</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <h2>Manage Students</h2>
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <Button variant="primary" onClick={() => setShowModal(true)}>Add Student</Button>
          </div>

          {/* Table */}
          <Table striped bordered hover>
            <thead style={{ backgroundColor: "grey", color: "white" }}>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>
                    <Button variant="info" size="sm" onClick={() => setShowModal(true)} style={{ marginRight: "5px" }}>
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => {}}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for Adding/Editing Students */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{editIndex !== null ? "Edit Student" : "Add Student"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
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
      </div>
    </div>
  );
}

export default ManageStudent;
