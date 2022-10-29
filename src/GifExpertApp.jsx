import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    /*const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
        //setCategories(cat => [...cat, 'Valorant']);
    }*/
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
    }
    return (
        <>
            {/* Título*/}
            <h1>GifExpertApp</h1>
            {/*Input* una manera <AddCategory setCategories={setCategories} />*/}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />
            {/*Listado de Gift*/}

            {
                categories.map((category, i) => (
                    //la categoría crea nuevamente todo el componente
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/*Gif Item*/}
        </>
    )
}
