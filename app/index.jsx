import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link} from 'expo-router'

import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,{fontSize: 30}]}>SHELFIE</Text>
      <Image source={Logo} style={styles.img}/>
      {/*<Image source={uri:'yourimage'}/>*/}

      <Text style={[styles.title, {color: 'black'}]}>The Number 1</Text>

      <Text style={{marginTop: 10, marginBottom: 30}}>
        {/*in line style*/}
        Reading List App
      </Text>
        
      <Link href='/about' style={styles.link}>About Page</Link>
      
      <Link href='/contact' style={styles.link}>Contact Page</Link>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    //rules defined inside it
    //container will contain CSS properties, camelcase because it is JS
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        marginVertical:20,
        width: 150,
        height: 150,
    },
    link:{
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})