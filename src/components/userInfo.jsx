import React from 'react';
import { Field} from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { Box, FormHelperText} from '@material-ui/core';

 const UserInfo = () => {
  const countries = ["USA","Canada"];

    return(
        <>
          <Box paddingBottom={2}>
          <Field fullWidth name="firstName" component={TextField} label="First Name" />
        </Box>
        <Box paddingBottom={2}>
          <Field fullWidth name="lastName" component={TextField} label="Last Name" />
        </Box>
        <Box paddingBottom={2}>
          <Field fullWidth name="email" component={TextField} label="Email" />
        </Box>
        <Box paddingBottom={2}>
          <Field fullWidth name="password" type="password" component={TextField} label="Password" />
        </Box>
        <Box paddingBottom={2}>
          <Field fullWidth name="confirmpassword" type="password" component={TextField} label="Confirm Password" />
        </Box>
        <Box paddingBottom={2}>
        
                    <Field as="select"  name='country' label='Country' >
                      <option value=''> none </option>
                      {countries.map((country)=><option key={country} value={country}>{country}</option>)}
                    </Field>
        
        </Box>
        <Box paddingBottom={2}>
          <Field fullWidth name="phoneNumber" component={TextField} label="Phone Number" />
          <FormHelperText>optional</FormHelperText>
        </Box>
        <Box paddingBottom={2}>
          <Field
            name="acceptedTerms"
            type="checkbox"
            component={CheckboxWithLabel}
            Label={{ label: `I accept terms and conditions`  }}
          />
        </Box>
  </>
    );    
}


    export default UserInfo;