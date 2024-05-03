import {Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w--[380px] h-[300px] w-full" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with {' '}
            <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain" />
          </View>
          <Text className="text-sm text-gray-100 mt-7 text-center">Discover with us!</Text>
          <CustomButton 
            title="Continue with E-mail"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar  backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
