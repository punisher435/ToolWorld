import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";
import styles from './SubmitButton.style';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} buttonstyle={styles.buttonstyle}
    textstyle={styles.textstyle}/>;
}

export default SubmitButton;
