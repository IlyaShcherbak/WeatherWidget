/* eslint-disable no-nested-ternary */

// Core
import { useState, ChangeEvent } from 'react';

type HandleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  | null, isNumber?: boolean) => void;

export const useForm
= <T, K extends T[keyof T]>(initialValue: T)
: [T, HandleChange, (groupName: keyof T, value: K) => void, (newInitialValue: T) => void, Function] => {
    const [ form, setForm ] = useState(initialValue);

    const handleChange: HandleChange = (event) => {
        if (event === null) {
            return void setForm(initialValue);
        }

        let value: string | number | null = event.target.value || null;

        const isNumber = event.target.type === 'number';

        if (value && isNumber) {
            value = parseInt(value, 10) >= 0  ? parseInt(value, 10) : null;
        }

        return void setForm({ ...form, [ event.target.name ]: value });
    };

    const handeRadioGroupChange = (groupName: keyof T, value: K) => {
        if (!value) {
            return;
        }

        const formValue = form[ groupName ];

        let result = null;

        if (!formValue || formValue !== value) {
            result = value;
        }

        return void setForm({ ...form, [ groupName ]: result });
    };

    const setInitialForm = (newInitialValue: T) => void setForm(newInitialValue);

    const resetForm = () => void setForm(initialValue);

    return [ form, handleChange, handeRadioGroupChange, setInitialForm, resetForm ];
};

type ArrayOfStringsForm = (initialValues: Array<string>) => [
    Array<string>,
    (newString: string) => void,
    (newInnitialValues: Array<string>) => void
];

export const useArrayOfStringsForm: ArrayOfStringsForm = (initialValues)  => {
    const [ arrayOfStrings, setArrayOfStrings ] = useState<Array<string>>(initialValues);

    const arrayOfStringsHandle = (newString: string) => {
        if (arrayOfStrings.includes(newString)) {
            setArrayOfStrings((prevState) => prevState.filter((string) => string !== newString));
        } else {
            setArrayOfStrings((prevState) => [ ...prevState, newString ]);
        }
    };

    const setNewInnitialValues = (newInnitialValues: Array<string>) => {
        setArrayOfStrings(newInnitialValues);
    };

    return [ arrayOfStrings, arrayOfStringsHandle, setNewInnitialValues ];
};
