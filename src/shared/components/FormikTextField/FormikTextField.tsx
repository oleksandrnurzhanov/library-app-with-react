import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";

interface FormikTextFieldProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({ name, label, type = 'text', required = false}): JSX.Element => {
    return (
        <div className="FormikTextField">
            <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required={required}
                fullWidth
                id={name}
                label={label}
                name={name}
                type={type}
                autoComplete={name}
                helperText={<ErrorMessage name={name}/>}
            />
        </div>
    )
};

export default FormikTextField;
