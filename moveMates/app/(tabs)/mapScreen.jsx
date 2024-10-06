import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Map from '../../components/map'
import * as Location from 'expo-location';

export default function mapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedSection, setSelectedSection] = useState('section1');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = userLocation.coords;
      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      });
    })();
  }, []);

  return (
    <View style={{ flex: 1  }}>
      <View style={{ height: '60%' }}>
      
        <Map location={location} />
        </View>
        <View style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[styles.toggleButton, selectedSection === 'section1' && styles.selectedButton]} 
          onPress={() => setSelectedSection('section1')}
        >
          <Text style={styles.buttonText}>Biking</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.toggleButton, selectedSection === 'section2' && styles.selectedButton]} 
          onPress={() => setSelectedSection('section2')}
        >
          <Text style={styles.buttonText}>Walking</Text>
        </TouchableOpacity>
      </View>

      {/* Options Section */}
      <View style={{ flex: 1, padding: 20 }}>
        {selectedSection === 'section1' ? (
          <Text style={styles.sectionText}>Options for Section 1</Text>
        ) : (
          <Text style={styles.sectionText}>Options for Section 2</Text>
        )}
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedButton: {
    borderBottomWidth: 2, 
    borderBottomColor: '#000000', 
  },
  buttonText: {
    color: '#000000', 
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});