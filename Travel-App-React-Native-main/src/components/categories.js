// Import necessary components and modules from "react-native" and other files
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Import the "theme" and "categoriesData" from the corresponding files
import { theme } from "../theme";
import { categoriesData } from "../constants";

// Categories component to display a horizontal scroll view of categories
export default function Categories() {
  return (
    // Container View for the whole component with vertical spacing between its children
    <View className="space-y-5">
      {/* Header View with category title and "See all" button */}
      <View className="mx-5 flex-row justify-between items-center">
        {/* Category title */}
        <Text
          style={{ fontSize: wp(4) }}
          className="font-semibold text-neutral-700"
        >
          Categories
        </Text>
        {/* "See all" button */}
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      {/* Horizontal ScrollView to display categories */}
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {/* Map through the categoriesData array and display each category */}
        {categoriesData.map((cat, index) => {
          return (
            // TouchableOpacity for each category item
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2"
            >
              {/* Category Image */}
              <Image
                source={cat.image}
                className="rounded-3xl"
                style={{ width: wp(20), height: wp(19) }}
              />
              {/* Category Title */}
              <Text
                className="text-neutral-700 font-medium"
                style={{ fontSize: wp(3) }}
              >
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
