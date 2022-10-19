import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {urlFor} from "../sanity";
import {ArrowLeftIcon} from "react-native-heroicons/solid";

export default function RestaurantScreen() {

    const navigation = useNavigation();

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <View>
            <ScrollView>
                <View className="relative">
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className="w-full h-56 bg-gray-300 p-4"
                    />
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    >
                        <ArrowLeftIcon size={20} color="#00CCBB"/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
