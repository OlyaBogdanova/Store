import React from 'react';
interface inputProps {
    title: string;
    onChange(newValue:string):void,
    value:string
}
const Input = ({ title, onChange, value }: inputProps) => {
    return (
        <input
            required
            name={title}
            type='text'
            className='border py-2 px-4 mb-2 w-full outline-0'
            placeholder={`Enter product ${title}...`}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
        />
    );
};

export default Input;
