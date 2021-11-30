<<<<<<< HEAD
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "../shared/TextInput";
import { signInWithEmailAndPassword, auth } from "../../../firebase";
import Toast from "react-native-toast-message";
=======
import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from '../shared/TextInput'
import { signin } from '../../../firebase';
import Toast from 'react-native-toast-message';
>>>>>>> fd1d7a4c02266b09311de4ef0bfccc6e531411f9

const AuthScreen = (props) => {
  const [logginInfo, setLogginInfo] = useState({
    email: "",
    password: "",
  });

<<<<<<< HEAD
  const showError = (message) => {
    Toast.show({
      type: "error",
      text1: "Error: The codes ECN and CFN were not found.",
      text2: message,
    });
  };

  const onSummit = () => {
    signInWithEmailAndPassword(auth, logginInfo.email, logginInfo.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showError(errorMessage);
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            backgroundColor: "white",
            margin: 20,
            padding: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 250,
                height: 150,
              }}
              source={require("../../../assets/LOGO.png")}
            />

            <Image
              style={{
                width: 900,
                height: 500,
              }}
              source={require("../../../assets/avisos-03.png")}
            />
          </View>
            <p><center>
            Welcome to the ECS, Bolumbia's Electronic Census System. With this tool you can answer the annual census form in a easier and hassle free way. 
            Please take into account that the data used to answer this census form must be de data that's correct according to the Census Night status of your dwelling.
            </center></p>
            {" "}
            <p><center>
            To create an account you must have the ECS and CFN credentials at hand, as they will be neccessary to create an account for the proccess.
            If you already created an account log in below using your registered email and password.
            </center></p>


          <TextInput
            placeholder="Email"
            type="text"
            autoCapitalize={false}
            onChangeText={(event) =>
              setLogginInfo({
                ...logginInfo,
                userName: event,
              })
            }
            value={logginInfo.userName}
            rightIcon={"tag"}
            //onError={e => setIsErroruserName(e)}
          />{" "}
          <TextInput
            placeholder="Password"
            type="password"
            autoCapitalize={false}
            secureTextEntry={true}
            onChangeText={(event) =>
              setLogginInfo({
                ...logginInfo,
                password: event,
              })
            }
            value={logginInfo.password}
            rightIcon={"insert-drive-file"}
            //onError={e => setIsErrorPassword(e)}
          />{" "}
          <Button
            title="Login"
            onPress={() => onSummit()}
            containerStyle={{
              height: 40,
            }}
            fontColor="textBgPrimary"
          />
        </View>{" "}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            title="Sign Up"
            onPress={() => props.navigation.navigate("RegisterScreen")}
            containerStyle={{
              height: 40,
              margin: 20,
            }}
            fontColor="textBgPrimary"
          />
          <Button
            title="FAQ"
            //onPress={() => setShowFAQ(true)}
            //onPress={() => props.navigation.navigate("../FAQ/FAQScreen")}
            onPress={() => props.navigation.navigate("FAQScreen")}
            containerStyle={{
              height: 40,
              margin: 20,
            }}
            fontColor="textBgPrimary"
          />
          <Button
            title="Helping Desk"
            //onPress={() => setShowHD(true)}
            //onPress={() => props.navigation.navigate("../ChatBox/ChatBoxScreen")}
            onPress={() => props.navigation.navigate("ChatBoxScreen")}
            containerStyle={{
              height: 40,
              margin: 20,
            }}
            fontColor="textBgPrimary"
          />
        </View>{" "}
      </View>{" "}
    </KeyboardAwareScrollView>
  );
};
=======
    const showError = (message) => {
        Toast.show({
            type: 'error',
            text1: 'Error: user does not exists',
            text2: message
        });
    }

    const onSummit = () => {
        signin(logginInfo.email, logginInfo.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                showError(errorMessage)
            });
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <View style={{
                    backgroundColor: 'white',
                    margin: 20,
                    padding: 20,
                    borderRadius: 20,
                }}>
                    <View style={{
                        alignItems: 'center'
                    }}>

                        <Image
                            style={{
                                width: 250,
                                height: 150,
                            }}
                            source={require('../../../assets/LOGO.png')}
                        />

                    </View>

                    <TextInput
                        placeholder="Email"
                        type="text"
                        autoCapitalize={false}
                        onChangeText={event => setLogginInfo({ ...logginInfo, email: event })}
                        value={logginInfo.email}
                        rightIcon={'tag'}
                    //onError={e => setIsErroruserName(e)}
                    />
                    <TextInput
                        placeholder="Password"
                        type="password"
                        autoCapitalize={false}
                        secureTextEntry={true}
                        onChangeText={event => setLogginInfo({ ...logginInfo, password: event })}
                        value={logginInfo.password}
                        rightIcon={'insert-drive-file'}
                    //onError={e => setIsErrorPassword(e)}
                    />
                    <Button
                        title="Login"
                        onPress={() => onSummit()}
                        containerStyle={{ height: 40 }}
                        fontColor="textBgPrimary"
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Button
                        title="Sign Up"
                        onPress={() => props.navigation.navigate("RegisterScreen")}
                        containerStyle={{ height: 40, margin: 20 }}
                        fontColor="textBgPrimary"
                    />
                    <Button
                        title="FAQ"
                        //onPress={() => setShowFAQ(true)}
                        //onPress={() => props.navigation.navigate("../FAQ/FAQScreen")}
                        onPress={() => props.navigation.navigate("FAQScreen")}
                        containerStyle={{ height: 40, margin: 20 }}
                        fontColor="textBgPrimary"
                    />
                    <Button
                        title="Helping Desk"
                        //onPress={() => setShowHD(true)}
                        //onPress={() => props.navigation.navigate("../ChatBox/ChatBoxScreen")} 
                        onPress={() => props.navigation.navigate("ChatBoxScreen")}
                        containerStyle={{ height: 40, margin: 20 }}
                        fontColor="textBgPrimary"
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
>>>>>>> fd1d7a4c02266b09311de4ef0bfccc6e531411f9

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ababab",
  },
  content: {
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 1,
  },
});

export default AuthScreen;
