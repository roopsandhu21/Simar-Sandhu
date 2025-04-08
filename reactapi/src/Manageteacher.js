import React, { useState } from "react";
import { Modal, Form, Button, Table, Navbar, Nav, Container } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import s from './phone.png';

function ManageTeacher() {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const [teacher, setTeacher] = useState([
    { id: 1, name: "Tanu", qualification: "Graduation" },
    { id: 2, name: "Priya",  qualification:"Gbt" },
    { id: 3, name: "Rahul", qualification:"Ctect" },
    { id: 4, name: "Sneha", qualification: "Graduation" },
  ]);

  // Function to handle logout
  const handleLogout = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
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
        <div style={{ width: "250px", background: "#343a40", color: "white", height: "100vh", padding: "20px" }}>
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
          <h2>Manage Teachers</h2>
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <Button variant="primary" onClick={() => setShowModal(true)}>Add Teacher</Button>
          </div>

          {/* Table */}
          <Table striped bordered hover>
            <thead style={{ backgroundColor: "grey", color: "white" }}>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Qualification</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teacher.map((teacher, index) => (
                <tr key={teacher.id}>
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.qualification}</td>
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
              <Modal.Title>{editIndex !== null ? "Edit Teacher" : "Add Teacher"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="qualification" className="mt-3">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} required />
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

export default ManageTeacher;
