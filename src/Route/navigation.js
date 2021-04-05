import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  chat from '../component/chat'
import  News from '../component/News'




const ChatUIapp = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <ChatUIapp.Navigator componentOptions={{ headerShown: true }} >
    <ChatUIapp.component name="chat" component={chat} />
    <ChatUIapp.component name="News" component={News} />
    </ChatUIapp .Navigator>

    </NavigationContainer>
    );
}