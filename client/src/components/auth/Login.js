import React from 'react'

const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const {email, password} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
          setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
          setAlert('Passwords do not match', 'danger');
        } else {
          register({
            name,
            email,
            password
          });
        }
      };

    return (
        <div className ="form-container">
        <h1>
            Account <span className="text-primary">Login</span>
        </h1>
            <form onSubmit={onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange}/>
                </div>
                
                <input type='submit' value='login' className='btn btn-primary btn-block'
        />
            </form>
        </div>
    )
}

export default Login;
