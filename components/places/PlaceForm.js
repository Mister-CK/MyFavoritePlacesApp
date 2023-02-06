import {Text, ScrollView, View, TextInput, StyleSheet} from 'react-native';
import {useCallback, useState} from 'react';
import {Colors} from '../../constants/colors.js';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';
import {Place} from '../../models/place';

const PlaceForm = ({onCreatePlace}) => {
  const [enteredTitle, setEnteredTitle] = useState('startTitle');
  const [pickedLocation, setPickedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState('No Image Selected');
  const changeTitle = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  const takeImageHandler = (imageUri) => {
    setSelectedImage(imageUri)
  }
  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location)
  }, []);

  const savePlaceHandler = () => {
    console.log(enteredTitle, selectedImage, pickedLocation)
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation)
    onCreatePlace(placeData)
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}> TITLE</Text>
        <TextInput style={styles.input} onChangeText={changeTitle} value={enteredTitle}/>
        <ImagePicker onTakeImage={takeImageHandler}/>
        <LocationPicker OnLocationPick={pickLocationHandler}/>
        <Button onPress={savePlaceHandler}> Add Place </Button>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
