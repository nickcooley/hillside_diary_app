import React, { useState } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import emotionData from '../../data/emotionData';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';

export default function NoteInput({ navigation }: RecordingStackScreenProps<'RecordFive'>)  {

    const [value, onChangeText] = useState('Type here...');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Private Note</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.txtInput}
                    editable
                    maxLength={35}
                    multiline
                    numberOfLines={35}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>
            
        </View>
    )
}