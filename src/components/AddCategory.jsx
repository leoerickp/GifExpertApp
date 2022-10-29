import { useState } from 'react';

export const AddCategory = ({ onNewCategory /*setCategories*/ }) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //esot es un hook con callback()
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                //onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )
}
