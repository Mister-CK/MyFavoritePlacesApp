import {Alert, Button, View, Image, Text, StyleSheet, Platform} from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import {useState} from 'react';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [imageUri, setImageUri] = useState('')
  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    if (Platform.OS.toLowerCase() === 'ios'){
      const hasPermission = await verifyPermissions();

      if (!hasPermission) {
        return;
      }
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImageUri(image.uri)
  }
  let imagePreview = <Text>No image taken yet</Text>;
  if (imageUri) {
    imagePreview = <Image style={styles.image} source={{uri:imageUri}}/>
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: Colors.primary100,
    borderRadius:4,
    overflow:"hidden",
  },
  image:{
    width:"100%",
    height:"100%",
  }
})
