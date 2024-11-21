import { ChevronDoubleDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { ErrorMessage, Field, FieldProps } from "formik";
import { ChangeEvent, FC } from "react";



interface SelectBoxOptionsInterface {
    label : string
    value : any
}

interface SelectBoxProps {
    name : string,
    label : string,
    options : SelectBoxOptionsInterface[]
    inputClassName? : string,
    labelClassName? : string,
    errorClassName? : string
    onChange? : (e : ChangeEvent) => void
}

const SelectBox : FC<SelectBoxProps> = ({
    name,
    label,
    options,
    inputClassName,
    labelClassName,
    errorClassName,
    onChange
}) => {

    return (
        <>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>
                {label}
            </label>
            {/*  */}
            <div className="flex justify-between items-center border border-gray-300 rounded bg-white">
                <Field id={name} name={name}>
                    {
                        ({ field , meta } : FieldProps) => (
                            <select
                                {...field}
                                className={`mt-1 appearance-none block px-3 py-2  rounded-md shadow-sm placeholder-gray-400 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${ inputClassName ?? ''}`}
                                onChange={onChange || field.onChange }
                            >
                                {
                                    options?.map((option : SelectBoxOptionsInterface , index) => (
                                        <option key={index} value={option.value} defaultValue={option.value}>{option.label}</option>
                                    ))
                                }
                            </select>
                        )
                    }
                </Field>


                <ChevronDownIcon className="h-8 w-8"/>
            </div>
            <ErrorMessage name={name} className={`text-red-500 text-sm ${errorClassName ?? ''}`} component="div"/>
        </>
    );

}


export default SelectBox;
