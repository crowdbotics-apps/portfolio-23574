import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { DateTimePicker_20: new Date(""), TextInput_23: "" }
  render = () => (
    <View>
      <View style={styles.View_2}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <DateTimePicker
            showIcon={false}
            date={this.state.DateTimePicker_20}
            onDateChange={selectedDate =>
              this.setState({ DateTimePicker_20: selectedDate })
            }
          />
        </View>
      </View>
      <View>
        <View>
          <TextInput
            placeholder="Sample text input placeholder"
            value={this.state.TextInput_23}
            onChangeText={nextValue =>
              this.setState({ TextInput_23: nextValue })
            }
          />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  Button_16: {},
  View_4: {},
  DateTimePicker_20: {},
  View_8: {},
  View_9: {},
  TextInput_23: {},
  View_10: {},
  Button_26: {},
  Image_28: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
