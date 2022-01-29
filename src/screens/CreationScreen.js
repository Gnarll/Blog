import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreationScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreationScreen;
