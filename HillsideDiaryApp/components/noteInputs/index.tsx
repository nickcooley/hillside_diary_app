import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, ScrollView, Keyboard } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import emotionData from '../../data/emotionData';
import globals from '../../global/globals';
import { RecordingStackScreenProps } from '../../types';
import AttrInputs from '../attrInputs/index';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

export default function NoteInput({ navigation }: RecordingStackScreenProps<'RecordFive'>)  {

    const {colors} = useTheme();

    const startMsg = 'Type here...'
    const [value, onChangeText] = useState(startMsg);

    const updateNoteMsg = (text: string) => {
        if (text != startMsg) {
            globals.DiaryLog.note = text;
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <Text style={[styles.title, {color: colors.primary}]}>Private Note</Text>
            </TouchableWithoutFeedback>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.txtInput}
                    multiline
                    editable
                    textAlignVertical={'top'}
                    maxLength={35}
                    numberOfLines={35}
                    onChangeText={text => {
                        onChangeText(text);
                        updateNoteMsg(text);
                    }}
                    value={value}
                />
            </View>
            
        </View>
    )
}