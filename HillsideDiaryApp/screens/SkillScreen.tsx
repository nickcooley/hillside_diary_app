import * as React from 'react';
import { StyleSheet, TouchableOpacity, Platform, SafeAreaView, StatusBar, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import Accordion from 'react-native-collapsible/Accordion';
import Colors from '../constants/Colors';
import { Foundation } from '@expo/vector-icons';

//Dummy Content Text
const VEGGIE_IPSUM =
  'Strawberries roasted brussel sprouts crispy seasonal spiced peppermint blast chili winter cauliflower fresh green tea chickpea crust pizza Indian spiced a delicious meal alfalfa sprouts elderberry. Cool parsley cool off miso dressing rich coconut cream zesty tofu pad thai Thai sun pepper potato macadamia nut cookies lime mango crisp chocolate kimchi.';

//Hardcoded Accordion menu titles and content
const CONTENT = [
  {
    title: 'Observe',
    content: VEGGIE_IPSUM,
  },
  {
    title: 'Describe',
    content: VEGGIE_IPSUM,
  },
  {
    title: 'Participate',
    content: VEGGIE_IPSUM,
  },
  {
    title: 'Non-judgement',
    content: VEGGIE_IPSUM,
  },
  {
    title: 'Mindfulness',
    content: VEGGIE_IPSUM,
  },
  {
    title: 'Emotional Regulation',
    content: VEGGIE_IPSUM,
  },
  {
    title: 'Participate',
    content: VEGGIE_IPSUM,
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
      isActive ? 
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View> : 
        <View style={styles.headerActiveContainer}>
          <Text style={styles.headerActiveText}>{section.title}</Text>
        </View>
    )
  };

  //Renders Accordion menu item content
  renderContent(section: any, _: any, isActive: boolean) {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{section.content}</Text>
      </View>
    );
  }

  render() {
    const { activeSections } = this.state;

    //Accordion Menu
    return (      
      <View>
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

export default function SkillScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleRow}>
        <Foundation name="social-skillshare" color={Colors.light.primary} size={30} />
        <Text style={styles.title}>Skills</Text>
      </View>
      <Text style={styles.subtitle}>Tap on a skill to learn more</Text>

      <AccordionView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.light.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 50,
  },
  titleRow: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.light.primary,
    paddingHorizontal: 5
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingBottom: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerActiveContainer: {
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    margin: 4,
    paddingLeft: 10,
    marginVertical: 10,
  },
  headerActiveText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    margin: 4,
    paddingLeft: 10,
    marginVertical: 10,
  },
  contentContainer: {
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  content: {
    margin: 10,
    fontSize: 14,
    paddingHorizontal: 12,
  },
});
