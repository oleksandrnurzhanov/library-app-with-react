import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import { Checkbox, TextField } from "@material-ui/core";

interface FormikTextFieldProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
}

const FormikTextField: React.FC<FormikTextFieldProps> = (props: FormikTextFieldProps): JSX.Element => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";

    return (
        <TextField
            {...props}
            {...field}
            helperText={errorText}
            error={!!errorText}
            variant="outlined"
            margin="normal"
            required={props.required}
            fullWidth
            id={props.name}
            label={props.label}
            name={props.name}
            type={props.type}
            autoComplete={props.name}
        />
    );
};

export default FormikTextField;
