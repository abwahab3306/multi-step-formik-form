import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import FormStepper from './components/stepper.jsx'
import * as Yup from 'yup';
import UserInfo from './components/userInfo.jsx';
import CompanyInfo from './components/companyInfo.jsx';
 

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

let validationSchema = Yup.object().shape({
  firstName:Yup.string()
  .lowercase()
  .required('Required!'),
  lastName:Yup.string()
  .lowercase()
  .required('Required!'),
  email: Yup.string()
      .lowercase()
      .email('Must be a valid email')
      .required('Required!'),
  password: Yup.string()
      .required('Required!')
      .min(8,'Minimum 8 Characters'),
      confirmpassword: Yup.string()
  .required('Required!') 
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
 ,
 acceptedTerms: Yup.boolean()
 .required('Required')
 .oneOf([true], 'You must accept the terms and conditions.'),
 country: Yup.string()
 .required()
})


function App() {

  return(
  <Card>
  <CardContent>
    <FormStepper
      initialValues={{
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        confirmpassword:'',
        phoneNumber: "",
        acceptedTerms: false,
        businessName: "",
        taxId:'',
        country:"",
        street:'',
        city:'',
        state:'',
        postalCode:'',
      }}
      onSubmit={async (values) => {
        await sleep(3000);
        console.log('values', values);
      }}
        >    
      < UserInfo
        label="User Info"
        validationSchema={validationSchema}
      />
      <CompanyInfo
        label="Company Info"
        validationSchema={validationSchema}
      />
    </FormStepper>
  </CardContent>
</Card>
);
}

export default App;



