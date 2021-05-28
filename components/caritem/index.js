import React from 'react' 
import {View , Text , ImageBackground} from 'react-native';
import styles from './styles'

const CarItem = (props) => {
    return (
        <View style={styles.carcontainer}>
        <ImageBackground source={require('../../assets/images/273311.jpg')} 
        style={styles.image}/>

        <View style= {styles.titles}>
          <Text style={styles.title}>Model s</Text>
          <Text style={styles.subtitle}>starting at $69,420</Text>
          </View>

      </View>


    )
}

export default CarItem;