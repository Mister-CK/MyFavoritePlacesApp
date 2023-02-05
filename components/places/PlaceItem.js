import {View, Text, Image, Pressable} from 'react-native';

const PlaceItem = ({place, onSelect}) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri: place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text> {place.location.lng + ' ' + place.location.lat}</Text>
      </View>
    </Pressable>
  );
};
export default PlaceItem;
