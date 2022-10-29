
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFechGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);//hook personalizado


    return (
        <>
            <h3>{category}</h3>
            {
                //isLoading ? (<h2>Cargando...</h2>) : null
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} // Para enviar las propiedades de la image como props y se puede desestructurar de la props
                        />
                    ))
                }
            </div>
        </>
    )
}
