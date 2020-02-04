import React, {FunctionComponent, PropsWithChildren} from 'react';
import {SafeAreaView, View, ScrollView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import styleGuide from '../../utils/styleGuide';

const Container: FunctionComponent = (props: PropsWithChildren<any>) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.mainContainer}>
        <LinearGradient colors={styleGuide.gradient} style={styles.gradient} />
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {props.children}
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Container;
