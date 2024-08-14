
import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Prod } from '../Homescreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';

interface Props {
  Produc: Prod;
  isvisible: boolean;
  setshowModal: () => void;
  changestockproduct:(idproduct: number, quantity: number)=>void;

}

export const ModalProduct = ({ isvisible, setshowModal, Produc,changestockproduct }: Props) => {
  // Hook useWindowDimensions() para obtener el tamaño de la pantalla
  const { width } = useWindowDimensions();
  //hook usestate manipular la cantidad de productos 
  const [quantity, setquantity] = useState<number>(1);
  //funcion para actualizar 
  const handlechangecuantity = (value: number) => {
    setquantity(quantity + value);

  }
  //funcion agregar producto al carrito
  const handleaddproduct=()=>{
    changestockproduct(Produc.id,quantity);
    //cerrar el modal
    setshowModal();



  }

  return (
    <Modal visible={isvisible} animationType='fade' transparent={true}>
      <View style={styles.contentPrincipal}>
        <View
          style={{
            ...styles.modal,
            width: width * 0.80
          }}>
          <View style={styles.headerModal}>
            <Text style={styles.titlemodal}>{Produc.name} -${Produc.price.toFixed(2)}</Text>
            <View style={styles.icon2}>
              <Icon
                name='close'
                size={25}
                color={PRIMARY_COLOR}
                onPress={setshowModal}
              />
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: Produc.pathimage }}
              style={styles.imagemodel}
            />
          </View>
          {
            (Produc.stock === 0)
              ? <Text style={styles.messagestock}>
                Producto Agotado</Text>
              : <View>
                <View style={styles.contentQuantity}>
                  <TouchableOpacity
                    onPress={() => handlechangecuantity(1)}
                    disabled={quantity === Produc.stock}
                    style={styles.buttonquantity}>
                    <Text style={styles.texbuttonquantity}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Text style={styles.texquantity}>{quantity}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handlechangecuantity(-1)}
                    disabled={quantity === 1}
                    style={styles.buttonquantity}>
                    <Text style={styles.texbuttonquantity}>-</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={styles.texbutton}>Total :${(Produc.price * quantity).toFixed(2)}</Text>
                </View>

                <TouchableOpacity
                  style={styles.buttonaddcart}>

                  <Text style={styles.texbutton}>Agregar carrito</Text>
                </TouchableOpacity>

              </View>
          }

        </View>
      </View>
    </Modal>
  );
};
