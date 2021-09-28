import * as React from 'react';
import { StyleSheet, TouchableOpacity, Platform, SafeAreaView, StatusBar, ScrollView, Image, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Accordion from 'react-native-collapsible/Accordion';
import { color } from 'react-native-reanimated';

//Dummy Content Text
const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

//Hardcoded Accordion menu titles and content
const CONTENT = [
  {
    title: 'Terms of Use',
    content: BACON_IPSUM,
  },
  {
    title: 'Privacy Policy',
    content: BACON_IPSUM,
  },
  {
    title: 'Our Mission',
    content: 'Since our beginning in 1888, Hillside’s mission has been to help children and families thrive by providing outstanding residential and community mental health services. Our Residential Program, Treatment Foster Care Program, Community Intervention Program, and Day Treatment and Intensive Outpatient all keep focus on the strengths of our children and therefore encourage the growth and improvement they need to become future self-sustaining citizens.',
  },
];

class AccordionView extends React.Component {
  state = {
    activeSections: [],
  };

  //Controls which menu item is currently expanded
  setSections = (sections: any) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  //Renders Accordion menu item header
  renderHeader = (section: any, _: any, isActive: boolean) => {
    return (
      <Text style={styles.headerText}>{section.title}</Text>
    );
  };

  //Renders Accordion menu item content
  renderContent(section: any, _: any, isActive: boolean) {
    return (
      <Text style={styles.content}>{section.content}</Text>
    );
  }

  render() {
    const { activeSections } = this.state;

    //Accordion Menu
    return (
      <View>
        <ScrollView style={styles.scrollContainer}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/HillsideLogo.png')}/>
      <Text style={styles.logoText}>HILLSIDE</Text>
      <AccordionView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.light.colors.background,
    paddingTop: Dimensions.get('screen').height / 8,
  },
  headerText: {
    width: '95%',
    fontSize: 22,
    fontWeight: '500',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 4,
    marginHorizontal: 10,
    paddingLeft: 15,
    color: 'white',
    backgroundColor: Colors.light.colors.primary,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 16,
  },
  scrollContainer: {
    height: 280,
    width: '100%',
  },
  logo: {
    width: 141,
    height: 141,
    alignSelf: 'center',
  },
  logoText: {
    alignSelf: 'center',
    fontSize: 24,
    paddingBottom: 20,
    color: Colors.light.colors.text,
  }
});
