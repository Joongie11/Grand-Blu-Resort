import React from 'react';

function LoginPage() {
  return (
    <section className="login">
      <div className="container">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
