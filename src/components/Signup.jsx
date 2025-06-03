function Signup() {
    return (
    <main>
        <div className="sign-up">
            <h2>Create Your Streamline Account</h2>
            <form>
                <label>
                  Username:
                  <input type="text" name="username" required/> 
                </label>
                <label>
                  Email:
                  <input type="text" name="email" required/>
                </label>
                <label>
                  Password:
                  <input type="text" name="password" required/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href='#'>Log in here</a>.</p>
        </div>
    </main>
    )
}

export default Signup;