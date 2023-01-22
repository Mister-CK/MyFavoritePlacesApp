import {launchCameraAsync} from 'expo-image-picker'
import {View, Button} from 'react-native';
const ImagePicker = () => {
  const takePictureHandler = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect:[16,9],
      quality: 0.5,
    })
    console.log(image)
  }

  return <View>
    <View></View>
    <Button title="Take Picture" onPress={takePictureHandler}/>
  </View>
}

export default ImagePicker
