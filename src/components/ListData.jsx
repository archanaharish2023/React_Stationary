import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";

function ListData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //   Create
  const [modal1, setModal1] = useState(false);
  const toggleModal1 = () => setModal1(!modal1);

  //   Edit
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [searchEmail, setSearchEmail] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstName1, setFirstName1] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [email1, setEmail1] = useState("");

  const [selectedUserId, setSelectedUserId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //   Creation Validation
  const validateForm = () => {
    const errors = { firstName: "", lastName: "", email: "" };
    let isValid = true;

    if (firstName.trim() === "") {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (lastName.trim() === "") {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  //   Adding user
  const handleCreateSubmit = async () => {
    try {
      if (!validateForm()) {
        return; // Do not proceed if validation fails
      }

      // Create a new user using POST method
      setIsCreating(true);
      const response = await axios.post("https://reqres.in/api/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
      });
      if (response.status === 201) {
        // Show SweetAlert on successful creation
        Swal.fire({
          icon: "success",
          title: "Successfully Created",
          text: "User has been created successfully.",
        });
      }
      toggleModal1();
      setFirstName("");
      setLastName("");
      setEmail("");
      fetchUsers();
      setFormErrors({
        firstName: "",
        lastName: "",
        email: "",
      });
      setIsCreating(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  //   Get user -------------
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`
      );
      setData(response?.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, perPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchEmail(e.target.value);
  };

  const filteredData = data.filter((user) =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  const handleUpdate = (userdata) => {
    setSelectedUserId(userdata?.id);
    setFirstName1(userdata?.first_name);
    setLastName1(userdata?.last_name);
    setEmail1(userdata?.email);
    toggleModal();
  };

  const handleUpdateSubmit = async () => {
    try {
      // Update user using PUT or PATCH method
      setIsUpdating(true);
      const response = await axios.put(
        `https://reqres.in/api/users/${selectedUserId}`,
        {
          first_name: firstName1,
          last_name: lastName1,
          email: email1,
        }
      );

      if (response.status === 200) {
        // Show SweetAlert on successful update
        Swal.fire({
          icon: "success",
          title: "Successfully Updated",
          text: "User has been updated successfully.",
        });
      }
      toggleModal();
      setFirstName1("");
      setLastName1("");
      setEmail1("");
      setIsUpdating(false);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="mt-2 justify-content-end">
        <Button color="primary" onClick={() => toggleModal1()}>
          Add user
        </Button>
      </div>
      <Container className="text-center mt-2">
        <Input
          type="text"
          value={searchEmail}
          onChange={handleSearchChange}
          placeholder="Search by email..."
        />

        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <Button color="warning" onClick={() => handleUpdate(user)}>
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink
              previous
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          <PaginationItem disabled={filteredData.length < perPage}>
            <PaginationLink
              next
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </Pagination>

        {loading && <div>Loading...</div>}
      </Container>

      {/* modal For creating user*/}
      <Modal isOpen={modal1} toggle={toggleModal1}>
        <ModalHeader toggle={toggleModal1}>Create User</ModalHeader>
        <ModalBody>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {formErrors.firstName && (
              <div
                className="invalid-feedback"
                style={{ display: formErrors.firstName ? "block" : "none" }}
              >
                {formErrors.firstName}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {formErrors.lastName && (
              <div
                className="invalid-feedback"
                style={{ display: formErrors.lastName ? "block" : "none" }}
              >
                {formErrors.lastName}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <div
                className="invalid-feedback"
                style={{ display: formErrors.email ? "block" : "none" }}
              >
                {formErrors.email}
              </div>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          {isCreating ? (
            <Button color="primary" disabled="true">
              Add
            </Button>
          ) : (
            <Button color="primary" onClick={handleCreateSubmit}>
              Add
            </Button>
          )}{" "}
          <Button color="secondary" onClick={toggleModal1}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/*-------------- Modal for editing user -------------- */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Edit User</ModalHeader>
        <ModalBody>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Input
              type="text"
              id="firstName1"
              className="form-control"
              placeholder="First Name"
              value={firstName1}
              onChange={(e) => setFirstName1(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Input
              type="text"
              id="lastName1"
              className="form-control"
              placeholder="Last Name"
              value={lastName1}
              onChange={(e) => setLastName1(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email1"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          {isUpdating ? (
            <Button color="primary" disabled="true">
              Update
            </Button>
          ) : (
            <Button color="primary" onClick={handleUpdateSubmit}>
              Update
            </Button>
          )}{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default ListData;
