import React from "react";
import { useFormikContext } from "formik";

import DatePicker from "./DatePicker1";
import ErrorMessage from "./ErrorMessage";

function FormFieldDate({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched,values } = useFormikContext();
  const fieldvalue = values[name];

  return (
    <>
      <DatePicker
        onBlur={() => setFieldTouched(name)}
        onChangeText={(e)=>{}}
        width={width}
        value={fieldvalue}
        name={name}
        {...otherProps}

      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormFieldDate;
