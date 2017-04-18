import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link }             from 'react-router';
import { loginUser }        from '../../actions/auth';

const form = reduxForm({
  form: 'login'
});

class Login extends Component {
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container push-down'>
        <form className='form-horizontal' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
          <div className='form-group'>
            <div className='col-md-6'>
              <label htmlFor="email">Email</label>
              <Field name='email' className='form-control' component='input' type='text' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-md-6'>
              <label htmlFor="username">Username</label>
              <Field name='username' className='form-control' component='input' type='text' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-md-6'>
              <label htmlFor='password'>Password</label>
              <Field name='password' className='form-control' component='input' type='password' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-md-6'>
              <label htmlFor='confirm'>Confirm Password</label>
              <Field name='confirm' className='form-control' component='input' type='password' />
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Login</button>
        </form>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
