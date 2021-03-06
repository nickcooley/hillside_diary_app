import React from 'react';
import { View, Text } from 'react-native';
import { SUDEntity } from '../../types';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';

export type EntityViewProps = {
    sudEntity: SUDEntity,
}

export default function SUDEntityView(props: EntityViewProps) {
    const {sudEntity} = props;
    const {colors} = useTheme();

    const determineColor = () => {
        const score = sudEntity.score
        if (score >= 0 && score < 3){
            return 'green';
        }
        if (score >= 3 && score < 6){
            return 'orange';
        }
        if (score >= 6 && score < 9){
            return 'orangered';
        }
        else{
            return 'red';
        }
    }

    const bubbleColor = determineColor();

    return (
        <View style={styles.sudEnties}>
            <View style={styles.container}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color: colors.primary, fontSize: 25, fontWeight: 'bold'}}>{moment(sudEntity.date_added).format("MMM DD, YYYY")}</Text>
                    <Text style={{color: 'gray', fontSize: 16, paddingTop: 5}}>{moment(sudEntity.date_added).format("hh:mm A")}</Text>
                </View>
                <View>
                    <View style={[styles.scoreBubble, {backgroundColor: bubbleColor, borderColor: bubbleColor}]}>
                        <Text style={styles.bubbleText}>{sudEntity.score}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}