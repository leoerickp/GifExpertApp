import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//Es js porque sólo devolverá un js, si devolviera un componente sería jsx
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);// Si las llaves están vacias, el hook se dispara la primera vez que se construye el componente

    return {
        images,
        isLoading
    }
}