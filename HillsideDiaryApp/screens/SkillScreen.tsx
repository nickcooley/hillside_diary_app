import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Colors from '../constants/Colors';
import { useTheme } from '@react-navigation/native';
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
  const {colors} = useTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.titleRow, {paddingTop: Dimensions.get('screen').height/15}]}>
        <Foundation name="social-skillshare" color={colors.primary} size={45} />
        <Text style={[styles.title, {color: colors.primary}]}>Skills</Text>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.subtitle}>Tap on a skill to learn more</Text>
      </View>
      <AccordionView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 50,    
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 10
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
    backgroundColor: Colors.light.colors.primary,
  },
  headerActiveContainer: {
    backgroundColor: Colors.light.colors.primary,
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
    color: 'white',
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
