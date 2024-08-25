import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

type signProps = PropsWithChildren <{
    type: string
}>


const Sign = ({type}:signProps) => {
    switch (type) {
        case 'circle':
            return <FontAwesome name="circle-thin" size={30} color="#900" />
            break;
        case 'cross':
            return <FontAwesome name="times" size={30} color="#900" />
            break;
        default:
            return <FontAwesome name="pencil" size={30} color="#900" />
            break;
    }
}

const styles = StyleSheet.create({
    
})

export default Sign;
