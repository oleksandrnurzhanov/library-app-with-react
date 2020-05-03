import React from "react";
import { Field, FieldProps } from "formik";

interface FormikCheckboxProps {
    name: string;
    label: string;
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, label }): JSX.Element => {
    return (
        <div className="FormikCheckbox">
            <Field
                name={name}
                render={({ field }: FieldProps) => (
                    <label htmlFor={name}>
                        <input
                            id={name}
                            {...field}
                            type="checkbox"
                            name={name}
                            checked={field.value} />
                        {label}
                    </label>
                )}
            />
        </div>
    );
};

export default FormikCheckbox;
