import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Prod } from '../Homescreen'
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { ModalProduct } from './ModalProduct';


//interface
interface Props {
    product: Prod;
    changestockproduct:(idproduct: number, quantity: number)=>void

}

export const CardProductos = ({ product,changestockproduct }: Props) => {

    const [showModal, setshowModal] = useState<boolean>(false)

    return (
        <View>
            <View style={styles.contendcard}>
                <Image source={{ uri: product.pathimage }}
                    style={styles.imagecard} />

                <View>
                    <Text style={styles.titlecard}>{product.name}</Text>
                    <Text >Precio: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.icon} >
                    <Icon name='add-shopping-cart'
                        size={30}
                        color={PRIMARY_COLOR}
                        onPress={() => setshowModal(!showModal)}
                    />
                </View>
            </View>
            
                <ModalProduct
                    isvisible={showModal}
                    setshowModal={() => setshowModal(!showModal)}
                    Produc={product} 
                    changestockproduct={changestockproduct}/>
           
        </View>

    )
}
