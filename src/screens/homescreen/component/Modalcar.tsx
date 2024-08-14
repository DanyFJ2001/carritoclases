import React from 'react'
import { FlatList, FlatListComponent, Modal } from 'react-native'
import { Text, View } from 'react-native'
import { Car } from '../Homescreen';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';



interface Props {
    isvisible: boolean;
    setshowmodal: () => void
    car: Car[]; //areglo con la lista de productos del carrito
}

export const Modalcar = ({ isvisible, car, setshowmodal }: Props) => {
    return (
        <Modal visible={isvisible} animationType='fade' transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={
                    styles.modal

                }>
                    <View style={styles.headerModal}>
                        <Text style={styles.titlemodal}>{Produc.name} -${Produc.price.toFixed(2)}</Text>
                        <View style={styles.icon2}>
                            <Icon
                                name='close'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={setshowmodal}
                            />
                        </View>
                    </View>
                    <View style={styles.headertable}>
                        <Text>Producto</Text>
                        <View style={styles.headerinformation}>
                            <Text style={styles.texinformation}>prex</Text>
                            <Text style={styles.texinformation}>cant</Text>
                            <Text style={styles.texinformation}>tant</Text>
                        </View>

                    </View>





                    <FlatList
                        data={car}
                        renderItem={({ item }) => <Text onPress={setshowmodal}>{item.name}</Text>}
                        keyExtractor={item => item.id.toString()} />


                </View>

            </View>
        </Modal>
    )
}
