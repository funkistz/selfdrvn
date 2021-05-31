import { useState } from "react";

// useForm functional componen
export const UseForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('change');
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    // onSubmit
    const onSubmit = async (event: any) => {
        event.preventDefault();
        await callback(event); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };

}