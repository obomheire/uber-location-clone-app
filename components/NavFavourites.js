import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Entypo } from "@expo/vector-icons";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (<View style={[tw`bg-gray-200`, {height: 0.5}]} />)} // combining tailwind with css
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Entypo
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            size={18}
            color="white"
          />
          <View>
            <Text style={tw`font-bold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default NavFavourites

const styles = StyleSheet.create({})