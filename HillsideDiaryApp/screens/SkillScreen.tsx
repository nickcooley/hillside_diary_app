import * as React from 'react';
import { StyleSheet, TouchableOpacity, Platform, SafeAreaView, StatusBar, ScrollView, } from 'react-native';
import { Text, View } from '../components/Themed';
import Accordion from 'react-native-collapsible/Accordion';

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
      <AccordionView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 50,
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
  },
});
