import React from 'react';
import { Image, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function chat() {
    
    const navigation = useNavigation();

    function navigateToNews() {
        navigation.navigate("News");
    }
    
    return (
            
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Image style={styles.imgContainer
    }
    source = {require('./assets/screenshot.png')}/>
    
    <Button title="Open Article"
    onPress= {()=>navigateToNews()}
    />
    
    </View>
    
    );
}