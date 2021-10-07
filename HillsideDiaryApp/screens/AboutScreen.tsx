import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Theme, useTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import { useMemo } from 'react';

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

export type AccordionProps = {
  styles: any
}

const AccordionView = (props: AccordionProps) => {

  const {styles} = props;
  
  var [activeSections, setState] = useState([]);

  //Controls which menu item is currently expanded
  const setSections = (sections: any) => {
    setState(activeSections= sections.includes(undefined) ? [] : sections);
  };

  //Renders Accordion menu item header
  const renderHeader = (section: any, _: any, isActive: boolean) => {
    return (
      <Text style={styles.headerText}>{section.title}</Text>
    );
  };

  //Renders Accordion menu item content
  const renderContent = (section: any, _: any, isActive: boolean) => {
    return (
      <Text style={styles.content}>{section.content}</Text>
    );
  }

 
  //Accordion Menu
  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        <Accordion
          activeSections={activeSections}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={setSections}
          renderAsFlatList={false}
        />
      </ScrollView>
    </View>
  );
}


export default function AboutScreen({ navigation }: RootTabScreenProps<'About'>) {

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Image style={styles.logo} source={require('../assets/images/HillsideLogo.png')}/>
      <Text style={[styles.logoText, {color: theme.colors.text}]}>HILLSIDE</Text>
      <AccordionView styles={styles}/>
    </View>
  );
}

const createStyles = (theme: Theme) => 
StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height / 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    width: '95%',
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    fontSize: 22,
    fontWeight: '500',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 30,
    margin: 4,
    marginHorizontal: 10,
    paddingLeft: 15,
  },
  content: {
    color: theme.colors.text,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 16,
  },
  scrollContainer: {
    height: 280,
    width: '100%',
    marginBottom: 210,
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
  }
});
