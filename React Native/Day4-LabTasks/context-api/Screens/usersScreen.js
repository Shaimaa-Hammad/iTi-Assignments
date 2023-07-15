import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "../Contexts/usersContext";
import {
  Box,
  Heading,
  Avatar,
  HStack,
  VStack,
  Spacer,
  Input,
  NativeBaseProvider,
  Center,
} from "native-base";

const UsersScreen = () => {
  const { filteredUsers, setSearchText } = useContext(MyContext);
  const navigation = useNavigation();

  const handleUserPress = (user) => {
    navigation.navigate("UserDetails", { user });
  };

  return (
    <NativeBaseProvider>
        <Box alignItems="center">
      <Input mx="3" mt="3" placeholder="Search for a user" w="80%" onChangeText={text => setSearchText(text)}/>
    </Box>
        
        <Center>
      <Box style={{width:'80vw'}}>
      <Heading fontSize="xl" p="4" pb="3">
        Users List
      </Heading>
      <FlatList data={filteredUsers} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.image
        }} />
              <VStack>
              <TouchableOpacity onPress={() => handleUserPress(item)}>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.firstName} {item.lastName}
                </Text>
                </TouchableOpacity>
                {/* <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text> */}
              </VStack>
              <Spacer />
              {/* <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text> */}
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>
    </Center>
    </NativeBaseProvider>

    // <View>
    //   <TextInput
    //   style={{borderWidth:2, borderColor:'black'}}
    //     placeholder="Search"
    //     onChangeText={text => setSearchText(text)}
    //   />
    //   <FlatList
    //     data={filteredUsers}
    //     keyExtractor={item => item.id}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity onPress={() => handleUserPress(item)}>
    //         <Text>{item.firstName} {item.lastName}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />
    // </View>
  );
};

export default UsersScreen;
