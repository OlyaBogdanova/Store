import React, { createElement, useState } from 'react';
import Input from './Input';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';
import Error from './Error';

interface createProductProps{
    onCreate:(product:IProduct)=>void
}

const CreateProduct = ({onCreate}:createProductProps) => {
    const [values, setValues] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    });
    const [error, setError] = useState('');

   async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        setError('');

        Object.values(values).map((elem) => {
            if (elem.trim().length === 0) {
                setError('Введите корректные данные');
            }
        });


       const response=await axios.post<IProduct>('https://fakestoreapi.com/products', values);
        onCreate(response.data);
    }

    function changeHandler(value: string, key: string) {
        setValues((prevValues) => {
            return {
                ...prevValues,
                [key]: value,
            };
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                value={values.title}
                title={'title'}
                onChange={(value) => changeHandler(value, 'title')}
            />
            <Input
                value={values.price}
                title={'price'}
                onChange={(value) => changeHandler(value, 'price')}
            />
            <Input
                value={values.description}
                title={'decription'}
                onChange={(value) => changeHandler(value, 'description')}
            />
            <Input
                value={values.image}
                title={'image'}
                onChange={(value) => changeHandler(value, 'image')}
            />
            <Input
                value={values.category}
                title={'category'}
                onChange={(value) => changeHandler(value, 'category')}
            />
            {{ error } ? <Error error={error} /> : null}

            <button
                type='submit'
                className='py-2 px-4 border bg-yellow-400 hover:text-white'>
                Create
            </button>
        </form>
    );
};

export default CreateProduct;
