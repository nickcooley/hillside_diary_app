import React, { useState } from 'react';
import { View, FlatList, TouchableHighlight, Text, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import styles from './styles';

export type AttrProps = {
    name: string,
}


const AttrInputs = (props: AttrProps) => {
    const {name} = props;
    var [curValue, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.rightSide}>
                <Slider
                    value={curValue}
                    onValueChange={(value: number) => setValue(curValue = value)}
                    minimumValue={0}
                    maximumValue={6}
                    step={1}
                    trackStyle={{ height: 5, width: Dimensions.get('screen').width / 4 }}
                    thumbStyle={{ backgroundColor: 'dodgerblue', height: 25, width: 25}}
                    minimumTrackTintColor="gray"
                    maximumTrackTintColor="lightgray"
                    />
                <Text style={styles.value}>{curValue}</Text>
            </View>
        </View>
    )
}

export default AttrInputs;