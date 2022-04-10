import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const RideOptionsCard = () => {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <FontAwesome name="chevron-left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
}

export default RideOptionsCard

const styles = StyleSheet.create({})