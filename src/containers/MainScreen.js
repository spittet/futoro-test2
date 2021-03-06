/**
 * This is a placeholder screen until we figure out the proper nav of the
 * application.
 *
 * @flow
 */

import React                      from 'react';
import PropTypes                  from 'prop-types';
import { connect }                from 'react-redux';

import Icon                       from 'react-native-vector-icons/Ionicons';
import { 
  Text,
  View 
}                                 from 'react-native';
import styles                     from './styles';

import { NavigationActions }      from 'react-navigation';

import utils                      from '../utils';

class MainScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    utils.trackEvent('app', 'opened');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeCapsules}>
          <View style={styles.homeCapsulesNoCapsules}>
            <Text style={[styles.bigText, styles.homeTitle]}>
              Futurospective lets you record a time capsule for your future 
              self.
            </Text>
            <Text style={[styles.bigText, styles.lightText]}>
              Aka let-current-you-remind-future-you-what-past-you-thought.
            </Text>
          </View>
        </View>
        
        <View style={styles.homeToolbar}>
          
          <Icon size={40} style={styles.homeToolBarIcon} />
          <Icon 
            name="ios-add-circle" 
            size={40} 
            style={styles.homeToolBarIcon}
            onPress={() =>
              this.props
                .dispatch(NavigationActions
                  .navigate({ routeName: 'CapsuleDuration' }))}
            title="Record"
          />
          <Icon 
            name="ios-archive-outline" 
            size={40} 
            style={styles.homeToolBarIcon}
            onPress={() =>
              this.props
                .dispatch(NavigationActions
                  .navigate({ routeName: 'CapsuleList' })
                  )
              }
            title="Capsules"
          />
          
        </View>
      </View>
    );
  }

}

MainScreen.propTypes = {
  dispatch:       PropTypes.func.isRequired,
};

export default connect()(MainScreen);
