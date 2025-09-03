import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo + Title */}
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/images/logo3.png")}
          style={styles.topImage}
        />
        <Text style={styles.signText}>Sign in to your {"\n"} Account</Text>
      </View>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        {/* Email */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Your Password ?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000814",
    flex: 1,
    padding: 20,
  },
  topImageContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  topImage: {
    width: "80%",
    height: 150,
    resizeMode: "contain",
  },
  signText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 12, 
  },
  signupText: {
    color: "white",
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
  },
  signupLink: {
    color: "#3b82f6",
    fontWeight: "600",
  },
  inputContainer: {
    marginTop: 25,
    gap: 15,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: "#000",
  },
  forgotText: {
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Index;
