import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/register.css';

function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('🎉 Registration successful!');

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <main className="container auth-container">
      <h1 className="auth-title">Create an Account</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="btn">Register</button>

        <p className="auth-note">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;