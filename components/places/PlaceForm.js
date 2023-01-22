import {Text, ScrollView, View, TextInput, StyleSheet } from 'react-native';
import {useState} from 'react';
import {Colors} from '../../constants/colors.js';

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const changeTitle = ({enteredText}) => {
    setEnteredTitle(enteredText)
  }
  return <ScrollView>
    <View style={styles.form}>
      <Text style={styles.label}> TITLE</Text>
      <TextInput style={styles.input} onChange={changeTitle} value={enteredTitle}/>
    </View>
  </ScrollView>
}

export default PlaceForm
const styles = StyleSheet.create({
  form:{
    flex:1,
    padding:24,
  },
  label:{
    fontWeight:"bold",
    marginBottom:4,
    color:Colors.primary500,
  },
  input:{
    marginVertical:8,
    paddingHorizontal:4,
    paddingVertical:8,
    fontSize:16,
    borderBottomColor:Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
})
