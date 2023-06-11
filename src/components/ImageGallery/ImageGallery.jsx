import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
// import { Component } from 'react'
import css from './ImageGallery.module.css'
export function ImageGallery ({list}) {

     return (
       <>
         <ul className={css.gallery}>
           {list.map(item => (
             <ImageGalleryItem
               key={item.id}
               smallImage={item.webformatURL}
               description={item.tags}
               largeImage={item.largeImageURL}
             />
           ))}
         </ul>
       </>
     );
  }
  
