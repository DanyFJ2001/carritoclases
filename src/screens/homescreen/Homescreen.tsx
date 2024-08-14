import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductos } from './component/CardProductos';




export interface Prod {
    id: number,
    name: string;
    price: number;
    stock: number;
    pathimage: string;
}

export const Homescreen = () => {




    const products: Prod[] = [
        { id: 1, name: 'premium1', price: 3.30, stock: 0, pathimage: 'https://agripac.com.ec/wp-content/uploads/2023/12/4001600-1-1200x1200-1.jpg' },
        { id: 2, name: 'premium2', price: 3.30, stock: 5, pathimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04i9GDMLV20oYY4656jM3PxvSpDQkQA8zZA&s' },
        { id: 3, name: 'premium3', price: 3.30, stock: 5, pathimage: 'https://http2.mlstatic.com/D_NQ_NP_635139-MLA52964225116_122022-O.webp' },
        { id: 4, name: 'premium4', price: 3.30, stock: 5, pathimage: 'https://petsec.vteximg.com.br/arquivos/ids/160470-400-400/PS4997-3.png?v=638283206010670000' },
        { id: 5, name: 'premium5', price: 3.30, stock: 5, pathimage: 'https://cemacogt.vtexassets.com/arquivos/ids/670017-800-800?v=638438978104430000&width=800&height=800&aspect=true' },
        { id: 6, name: 'premium6', price: 3.30, stock: 5, pathimage: 'https://purina.com.co/sites/default/files/styles/simple_card/public/2022-08/adulto_pollo_alimento_humedo_frente_pro_plan.png.webp?itok=BHVIlnwr' },
        { id: 7, name: 'premium6', price: 3.30, stock: 5, pathimage: 'https://purina.com.co/sites/default/files/styles/simple_card/public/2022-08/adulto_pollo_alimento_humedo_frente_pro_plan.png.webp?itok=BHVIlnwr' },
        { id: 10, name: 'premium6', price: 3.30, stock: 5, pathimage: 'https://purina.com.co/sites/default/files/styles/simple_card/public/2022-08/adulto_pollo_alimento_humedo_frente_pro_plan.png.webp?itok=BHVIlnwr' },
        { id: 8, name: 'premium6', price: 3.30, stock: 5, pathimage: 'https://purina.com.co/sites/default/files/styles/simple_card/public/2022-08/adulto_pollo_alimento_humedo_frente_pro_plan.png.webp?itok=BHVIlnwr' },
        { id: 9, name: 'premium6', price: 3.30, stock: 5, pathimage: 'https://purina.com.co/sites/default/files/styles/simple_card/public/2022-08/adulto_pollo_alimento_humedo_frente_pro_plan.png.webp?itok=BHVIlnwr' },
    ];
    const [productsstate, setproducts] = useState(products);

    //crear una fucnion para actualizar el stock del producto
    const changestockproduct = (idproduct: number, quantity: number) => {
        //generar un arreglo con las actualizacviones del stock
        const updatestock = productsstate.map(product => product.id === idproduct


            ? { ...product, stock: product.stock - quantity }
            : product
        );
        setproducts(updatestock)



    }




    return (



        <View>
            <TitleComponent title='productos' />
            <BodyComponent>
                <FlatList
                    data={productsstate}
                    renderItem={({ item }) => <CardProductos product={item} changestockproduct={changestockproduct} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
        </View>


    )
}

