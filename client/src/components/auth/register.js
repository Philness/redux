import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { registerUser }     from '../../actions/auth'

const form = reduxForm({
  form: 'register',
  validate
})

const renderField = field => (
  <div>
    <input className='form-control' { ...field.input } />
    {field.touched && field.error && <div className='error'>{field.error}</div>}
  </div>
)
const renderSelect = field => (
  <div>
    <select className='form-control' { ...field.input } />
    {field.touched && field.error && <div className='error'>{field.error}</div>}
  </div>
)

function validate (formProps) {
  const errors = {}

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name.'
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name.'
  }

  if (!formProps.email) {
    errors.email = 'Please enter email.'
  }

  if (!formProps.country) {
    errors.country = 'Please enter a country.'
  }

  if (!formProps.username) {
    errors.username = 'Please enter a username.'
  }

  if (!formProps.organization) {
    errors.organization = 'Please enter a organization.'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password.'
  }

  if (formProps.confirmPass !== formProps.password) {
    errors.confirmPass= 'Passwords do not match, please make sure your passwords match.'
  }

  return errors
}

class Register extends Component {
  handleFormSubmit(formProps) {
    this.props.registerUser(formProps)
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span className='error'><strong>Error! </strong> {this.props.errorMessage}</span>
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className='container push-down'>
        <form className='form-horizontal' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
        <div className='form-group'>
          <div className="col-md-6">
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' className='form-control' component={renderField} type='text' />
          </div>
          <div className='col-md-6'>
            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' className='form-control' component={renderField} type='text' />
          </div>
        </div>
				<div className='form-group'>
					<div className="col-md-6">
						<label htmlFor='email'>Email</label>
						<Field name='email' className='form-control' component={renderField} type='text' />
					</div>
					<div className='col-md-6'>
						<label htmlFor='country'>Country</label>
						<Field name='country' className='form-control' component={renderSelect}  type='select'>
							<option value=''>Please select a country</option>
							<option value='Afghanistan'>Afghanistan</option>
							<option value='Albania'>Albania</option>
							<option value='Algeria'>Algeria</option>
							<option value='America Samoa'>American Samoa</option>
							<option value='Andorra'>Andorra</option>
							<option value='Angolilla'>Angolilla</option>
							<option value='Augilla'>Augilla</option>
							<option value='Antartica'>Antartica</option>
							<option value='Antigua and Barbuda'>Antigua & Barbuda</option>
							<option value="Argentina">Argentina</option>
							<option value="Armenia">Armenia</option>
							<option value="Aruba">Aruba</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahamas">Bahamas</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Barbados">Barbados</option>
							<option value="Belarus">Belarus</option>
							<option value="Belguim">Belgium</option>
							<option value="Belize">Belize</option>
							<option value="Benin">Benin</option>
							<option value="Bermuda">Bermuda</option>
							<option value="Bhutan">Bhutan</option>
							<option value="Bolivia">Bolivia</option>
							<option value="Bosnia and Herzegowia">Bosnia and Herzegowina</option>
							<option value="Botswana">Botswana</option>
							<option value="Bouvet Island">Bouvet Island</option>
							<option value="Brazil">Brazil</option>
							<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
							<option value="Brunei Darussalam">Brunei Darussalam</option>
							<option value="Bulgaria">Bulgaria</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Cambodia">Cambodia</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Canada">Canada</option>
							<option value="Cape Verde">Cape Verde</option>
							<option value="Caymen Islands">Cayman Islands</option>
							<option value="Central African Republic">Central African Republic</option>
							<option value="Chad">Chad</option>
							<option value="Chile">Chile</option>
							<option value="China">China</option>
							<option value="Christmas Island">Christmas Island</option>
							<option value="Cocos Islands">Cocos (Keeling) Islands</option>
							<option value="Columbia">Colombia</option>
							<option value="Comoros">Comoros</option>
							<option value="Congo">Congo</option>
							<option value="Democratic Republic of the Congo">Congo, the Democratic Republic of the</option>
							<option value="Cook Islands">Cook Islands</option>
							<option value="Costa Rica">Costa Rica</option>
							<option value="Cote d'Ivoire">Cote d'Ivoire</option>
							<option value="Croatia">Croatia (Hrvatska)</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czech Republic">Czech Republic</option>
							<option value="Denmark">Denmark</option>
							<option value="Djhouti">Djibouti</option>
							<option value="Dominica">Dominica</option>
							<option value="Dominican Republic">Dominican Republic</option>
							<option value="East Timor">East Timor</option>
							<option value="Ecuador">Ecuador</option>
							<option value="Egypt">Egypt</option>
							<option value="El Salvador">El Salvador</option>
							<option value="Equatorial Guinea">Equatorial Guinea</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Estonia">Estonia</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
							<option value="Faroe Islands">Faroe Islands</option>
							<option value="Fiji">Fiji</option>
							<option value="Finland">Finland</option>
							<option value="France">France</option>
							<option value="French Guiana">French Guiana</option>
							<option value="French Polynesia">French Polynesia</option>
							<option value="French Southren Territories">French Southern Territories</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Georgia">Georgia</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Gibraltar">Gibraltar</option>
							<option value="Greece">Greece</option>
							<option value="Greenland">Greenland</option>
							<option value="Grenada">Grenada</option>
							<option value="Gudeloupe">Guadeloupe</option>
							<option value="Guam">Guam</option>
							<option value="Guatemala">Guatemala</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Guyana">Guyana</option>
							<option value="Haiti">Haiti</option>
							<option value="Heard &amp; McDonald Islands">Heard and Mc Donald Islands</option>
							<option value="Vatican City">Holy See (Vatican City State)</option>
							<option value="Honduras">Honduras</option>
							<option value="Hong Kong">Hong Kong</option>
							<option value="Hungary">Hungary</option>
							<option value="Iceland">Iceland</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran">Iran (Islamic Republic of)</option>
							<option value="Iraq">Iraq</option>
							<option value="Ireland">Ireland</option>
							<option value="Israel">Israel</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jordan">Jordan</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kiribati">Kiribati</option>
							<option value="North Korea">Korea, Democratic People's Republic of</option>
							<option value="Korea">Korea, Republic of</option>
							<option value="Kuwait">Kuwait</option>
							<option value="Kyrgyzstan">Kyrgyzstan</option>
							<option value="Lao People\'s Democratic Republic">Lao People's Democratic Republic</option>
							<option value="Latvia">Latvia</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
							<option value="Liechenstein">Liechtenstein</option>
							<option value="Lithuania">Lithuania</option>
							<option value="Luxembourg">Luxembourg</option>
							<option value="Macau">Macau</option>
							<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malwi">Malawi</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Maldives">Maldives</option>
							<option value="Mali">Mali</option>
							<option value="Malta">Malta</option>
							<option value="Marshall Islands">Marshall Islands</option>
							<option value="Martinique">Martinique</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Mayotte">Mayotte</option>
							<option value="Mexico">Mexico</option>
							<option value="Micronesia">Micronesia, Federated States of</option>
							<option value="Moldova">Moldova, Republic of</option>
							<option value="Monaco">Monaco</option>
							<option value="Mongolia">Mongolia</option>
							<option value="Montserrat">Montserrat</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Myanmar">Myanmar</option>
							<option value="Namibia">Namibia</option>
							<option value="Nauru">Nauru</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="Netherlands Antilles">Netherlands Antilles</option>
							<option value="New Caledonia">New Caledonia</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nicaragua">Nicaragua</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Niue">Niue</option>
							<option value="Norfolk Island">Norfolk Island</option>
							<option value="Northern Mariana Islands">Northern Mariana Islands</option>
							<option value="Norway">Norway</option>
							<option value="Oman">Oman</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Palau">Palau</option>
							<option value="Panama">Panama</option>
							<option value="Papua New Guinea">Papua New Guinea</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Peru">Peru</option>
							<option value="Philippines">Philippines</option>
							<option value="Pitcairn">Pitcairn</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Puerto Rico">Puerto Rico</option>
							<option value="Qatar">Qatar</option>
							<option value="Reunion">Reunion</option>
							<option value="Romania">Romania</option>
							<option value="Russia">Russian Federation</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
							<option value="Saint LUCIA">Saint LUCIA</option>
							<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">Sao Tome and Principe</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="Senegal">Senegal</option>
							<option value="Seychelles">Seychelles</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="Singapore">Singapore</option>
							<option value="Slovakia">Slovakia (Slovak Republic)</option>
							<option value="Slovenia">Slovenia</option>
							<option value="Solomon Islands">Solomon Islands</option>
							<option value="Somalia">Somalia</option>
							<option value="South Africa">South Africa</option>
							<option value="South Georgia and the South Sandwich Islands">
								South Georgia and the South Sandwich Islands
							</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="St. Helena">St. Helena</option>
							<option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
							<option value="Sudan">Sudan</option>
							<option value="Suriname">Suriname</option>
							<option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
							<option value="Swaziland">Swaziland</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syrian Arab Republic">Syrian Arab Republic</option>
							<option value="Taiwan">Taiwan, Province of China</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Tanzania">Tanzania, United Republic of</option>
							<option value="Thailand">Thailand</option>
							<option value="Togo">Togo</option>
							<option value="Tokelau">Tokelau</option>
							<option value="Tonga">Tonga</option>
							<option value="Trinidad and Tobago">Trinidad and Tobago</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">United Arab Emirates</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States">United States</option>
							<option value="United States Minor Outlying Islands">
								United States Minor Outlying Islands
							</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Uzbekistan">Uzbekistan</option>
							<option value="Vanuatu">Vanuatu</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Viet Nam">Viet Nam</option>
							<option value="Virgin Islands (British)">Virgin Islands (British)</option>
							<option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
							<option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
							<option value="Western Sahara">Western Sahara</option>
							<option value="Yemen">Yemen</option>
							<option value="Yugoslavia">Yugoslavia</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</Field>
					</div>
				</div>
				<div className='form-group'>
					<div className="col-md-6">
						<label htmlFor='organization'>organization</label>
						<Field name='organization' className='form-control' component={renderField} type='text' />
					</div>
					<div className="col-md-6">
						<label htmlFor='username'>Username</label>
						<Field name='username' className='form-control' component={renderField} type='text' />
					</div>
				</div>
				<div className='form-group'>
					<div className="col-md-6">
						<label htmlFor='password'>Password</label>
						<Field name='password' className='form-control' component={renderField} type='password' />
					</div>
					<div className='col-md-6'>
						<label htmlFor='confirmPass'>Confirm</label>
						<Field name='confirmPass' className='form-control' component={renderField} type='password' />
					</div>
				</div>
				<button type='submit' className='btn btn-primary'>Register</button>
			</form>
		</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  }
}

export default connect(mapStateToProps, { registerUser })(form(Register))
