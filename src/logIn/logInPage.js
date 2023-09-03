
function Login() {
  return (
    <div className="App">
      <label>UserName</label>
      <input type="text" id="userName" name="userName"/>
      <label>Password</label>
      <input type="password" id="password" name="password"/>
      <button id="Submit">Login</button>
    </div>

  );
}

export default Login;
