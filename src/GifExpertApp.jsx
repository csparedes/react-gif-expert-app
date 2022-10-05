import { useState } from "react";
import {AddCategory, GifGrid} from "./components";


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory))return;
        // setCategories(cat=>[...cat,newCategory]);
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory}/>

            {categories.map((item, index)=>(
                <div key={item+index}>
                    <GifGrid key={item} category={item}/>
                </div>
            ))}
                {/* gif item */}
        </>
    )
}

export default GifExpertApp;