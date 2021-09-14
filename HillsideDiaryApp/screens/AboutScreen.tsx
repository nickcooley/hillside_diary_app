import * as React from 'react';
import { StyleSheet, TouchableOpacity, Platform, SafeAreaView, StatusBar, ScrollView, } from 'react-native';
import { Text, View } from '../components/Themed';
import Constants from 'expo-constants';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

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

  setSections = (sections: any) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section: any, _: any, isActive: boolean) => {
    return (
      <Text style={styles.headerText}>{section.title}</Text>
    );
  };

  renderContent(section: any, _: any, isActive: boolean) {
    return (
      <Text style={styles.content}>{section.content}</Text>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
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
    <SafeAreaView style={styles.container}>
      <AccordionView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button:{
    justifyContent: 'center',
    width: '98%',
    height: '10%',
    margin: 4,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  headerText: {
    width: '90%',
    fontSize: 20,
    fontWeight: '500',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 4,
    marginHorizontal: 10,
    paddingLeft: 15,
  },
  content: {
    margin: 10,
    fontSize: 14,
  }
});
