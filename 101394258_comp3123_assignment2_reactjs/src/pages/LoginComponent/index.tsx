import React, { useState } from 'react';

interface LoginProps {
  onLogin: (formData: LoginFormData) => void;
}

interface LoginFormData {
  emailId: string;
  password: string;
}

// Create the Login component
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  // State to manage form data
  const [formData, setFormData] = useState<LoginFormData>({
    emailId: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the onLogin prop with the form data
    onLogin(formData);
  };

  // JSX for the Login form
  return (
    <div id="form" style={styles.formStyles}>
      <div className="card-body">
        <form onSubmit={handleSubmit} className='justify-content-center d-flex flex-column align-items-center'>
          <h4>Login Form</h4>
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
               autoComplete="on"/>
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
              autoComplete="on"/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
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
    border: "black",
    backgroundColor: "#ccc"
  }
};

export default Login;
