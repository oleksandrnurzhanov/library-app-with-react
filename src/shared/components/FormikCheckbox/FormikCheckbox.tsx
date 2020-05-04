import React from "react";
import {
    Checkbox,
    CheckboxProps,
    FormControlLabel
} from "@material-ui/core";
import { useField } from "formik";

interface FormikCheckboxProps extends CheckboxProps {
    name: string;
    label: string;
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = (props: FormikCheckboxProps): JSX.Element => {
    const [field] = useField({
        name: props.name,
        type: "checkbox"
    })

    return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label} />;
};

export default FormikCheckbox;
