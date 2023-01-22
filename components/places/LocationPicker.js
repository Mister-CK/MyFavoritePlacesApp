import {View, StyleSheet, Alert} from 'react-native';
import OutlinedButton from '../UI/OutlinedButton';
import {Colors} from '../../constants/colors';
import {getCurrentPositionAsync, getForegroundPermissionsAsync, useForegroundPermissions} from 'expo-location';
import {PermissionStatus} from 'expo-image-picker';
const LocationPicker = () => {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

  const verifyPermissions = async () => {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      );
      return false;
    }

    return true;
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      return
    }
    const location = await getCurrentPositionAsync()
    console.log(location)
  }
  const pickOnMapHandler = () => {

  }
  return(
    <View>
      <View style={styles.mapPreview}></View>
        <View style={styles.actions}>
          <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
          <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick On Map</OutlinedButton>
        </View>
    </View>
  )
}

export default LocationPicker
const styles = StyleSheet.create({
  mapPreview:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: Colors.primary100,
    borderRadius:4,
  },
  actions:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
})
