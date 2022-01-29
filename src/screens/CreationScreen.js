import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreationScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter the title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(newValue) => setTitle(newValue)}
      />
      <Text style={styles.label}>Enter the content:</Text>
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={(newValue) => setContent(newValue)}
      />
      <Button
        title="Create BlogPost"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.goBack();
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});

export default CreationScreen;
