import React, { Component } from 'react'
import { login } from './User'
import jwt_decode from 'jwt-decode'

class Login extends Component {
  constructor(props) {
    super(props)
    console.log(props.alert_status)
    this.state = {
      email: '',
      password: '',
      errors: {},
      showError: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  status_alert(e) {
    this.setState({alert_status: true })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (res.status) {
        this.setState((prevState, props) => {
          return { showError: !prevState.showError }
        });
    
      }else{
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);  
        console.log(decoded.rol)
        if(decoded.rol === 'ALUMNO'){
          this.props.history.push(`/profile`)
        }else{
          this.props.history.push(`/academicos`)
        }
      }
    })
  }

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
          <DivWithErrorHandling showError={this.state.showError}>
          {console.log(this.state.status_alert)}
            <form noValidate onSubmit={this.onSubmit}>
              <h2 className="h3 mb-3 font-weight-normal">Iniciar Sesion</h2>
              <div className="form-group">
                <label htmlFor="email">Ingrese email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingresar email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
            </DivWithErrorHandling>
          </div>
          
        </div>
      </div>
    )
  }
}


const withErrorHandling = WrappedComponent => ({ showError, children }) => {
  return (
    <WrappedComponent>
      {showError && <div class="alert alert-danger" role="alert">
Ingrese sus datos correctamente
</div>}
      {children}
    </WrappedComponent>
  );
};

const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)

export default Login