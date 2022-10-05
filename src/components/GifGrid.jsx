import React, { useEffect, useState } from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading&&(<h2>Cargando...</h2>)}
            {images.map( (images)=>(
                <div key={images.id}>
                    {/* <p>{title}</p>
                    <img src={url} alt={title} /> */}
                    <GifItem {...images}/>
                </div>
            ))}
        </>
    )
}

export default GifGrid;