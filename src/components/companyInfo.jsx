import React from 'react';
import {useFormikContext, Field} from 'formik';
import { TextField } from 'formik-material-ui';
import { Box} from '@material-ui/core';

 const CompanyInfo = () => {
      const { values } = useFormikContext();

    return(
        <>
        <Box paddingBottom={2}>
        <Field
          fullWidth
          name="businessName"
          type="text"
          component={TextField}
          label="Business Name"
        />
      </Box>

      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="taxId"
          type="text"
          component={TextField}
          label="Tax ID"
        />
      </Box>
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="street"
          type="text"
          component={TextField}
          label="Street"
        />
      </Box>
      
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="state"
          type="text"
          component={TextField}
          label={values.country==="USA" ? ("State"):("Province")}
        />
      </Box>
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="postalCode"
          type="text"
          component={TextField}
          label="Postal Code"
        />
      </Box>
  </>
    );    
}


    export default CompanyInfo;