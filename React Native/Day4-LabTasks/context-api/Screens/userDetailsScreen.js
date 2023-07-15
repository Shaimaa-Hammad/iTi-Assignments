import React from 'react';
import { Text, Image } from 'react-native';
import { Box, Heading, AspectRatio, Center, Stack, NativeBaseProvider } from "native-base";

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
<NativeBaseProvider>
            <Center flex={1} px="3">
            <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{ uri: user.image }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {user.firstName} {user.lastName}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {user.company.title}
            </Text>
          </Stack>
          <Text fontWeight="400">
           { `Email: ${user.email}\n\nPhone: ${user.phone}`}
          </Text>
          {/* <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack> */}
        </Stack>
      </Box>
    </Box>;
            </Center>
          </NativeBaseProvider>

// {/* <NativeBaseProvider>
//     <Card>
//         <CardItem>
//           <Body>
//             <Image
//               source={{ uri: user.image }}
//               style={{ width: 200, height: 200 }}
//             />
//             <Text>Name: {user.firstName} {user.lastName}</Text>
//             <Text>Email: {user.email}</Text>
//             <Text>Phone: {user.phone}</Text>
//           </Body>
//         </CardItem>
//       </Card>
//       </NativeBaseProvider> */}

// <Image source={{ uri: user.image }} style={{ width: 200, height: 200 }} />
//       <Text>Name: {user.firstName} {user.lastName}</Text>
//       <Text>Email: {user.email}</Text>
//       <Text>Phone: {user.phone}</Text>
    // </View>
  );
};

export default UserDetailsScreen;
