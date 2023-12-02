import React, { useState } from 'react';

interface SignupProps {
  onSignup: (formData: SignupFormData) => void;
}

interface SignupFormData {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add additional validation logic here before calling onSignup
    onSignup(formData);
  };

  return (
    <div style={styles.formStyles}>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="justify-content-center d-flex flex-column align-items-center">
          <h4>Signup Form</h4>
          <div className="col-4 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control mx-2"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.inputStyle}
              autoComplete="on" />
          </div>
          <div className="col-4 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control mx-2"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.inputStyle}
              autoComplete="on" />
          </div>
          <div className="col-4 mb-3">
            <label className="form-label">Email</label>
            <input
              type="emailId"
              className="form-control mx-2"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
              style={styles.inputStyle}
              autoComplete="on" />
          </div>
          <div className="col-4 mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control mx-2"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.inputStyle}
              autoComplete="on" />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  formStyles: {
    margin: '20px auto',
    padding: '20px 20px',
  },
  inputStyle: {
    border: 'black',
    backgroundColor: '#ccc',
  },
};

export default Signup;
