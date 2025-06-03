function Login() {
    return (
    <main>
        <div className="log-in">
            <h2>Sign In</h2>
            <form>
                <label>
                  Username:
                  <input type="text" name="username" required> 
                </label>
                <label>
                  Password:
                  <input type="text" name="password" required>
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </main>
  
}

export default Login;