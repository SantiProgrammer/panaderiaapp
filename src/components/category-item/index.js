import React from 'react';


import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.contentContainer, backgroundColor: item.color }}
                onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>

                </View>
                <View>
                    <Image
                        style={styles.logo}
                        source={{ uri: item.image }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default CategoryItem;