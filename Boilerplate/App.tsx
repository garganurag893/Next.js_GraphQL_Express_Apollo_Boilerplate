import React, {PureComponent} from 'react';
import AppNavigator from './src/navigation';
import {getToken} from './src/configureClient';

interface AppState {
  initialRouteName: string;
}

export default class App extends PureComponent<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialRouteName: 'welcome',
    };
    console.disableYellowBox = true;
  }
  async componentWillMount() {
    try {
      const token = await getToken();
      if (token) {
        this.setState({
          initialRouteName: 'welcome',
        });
      }
      // SplashScreen.hide();
    } catch (e) {
      // SplashScreen.hide();
    }
  }
  render() {
    const {initialRouteName} = this.state;
    return <AppNavigator initialRouteName={initialRouteName} />;
  }
}
