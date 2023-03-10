import {FlatList, StyleSheet, Text, View} from 'react-native';
import PlaceItem from './PlaceItem';
import {Colors} from '../../constants/colors';

const PlacesList = ({places}) => {
  if (!places || places.length < 1) {
    return <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>No places yet, please add some.</Text>
    </View>
  }

  return <FlatList
    style={styles.list}
    data={places}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <PlaceItem place={item}/>}/>;
};

export default PlacesList;
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText:{
    fontSize: 16,
    color: Colors.primary500,
  },
  list: {
    margin: 24,
  }
})
