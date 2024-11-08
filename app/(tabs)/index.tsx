// App.tsx
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import Map from '../../components/Map';
import BottomPanel from '../../components/BottomPanel';

interface FeatureProperties {
  title: string;
  description: string;
}

interface Feature {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: FeatureProperties;
}

interface GeoJsonData {
  type: string;
  features: Feature[];
}

export default function App() {
  const [geoJsonData, setGeoJsonData] = useState<GeoJsonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<FeatureProperties | null>(null);

  useEffect(() => {
    const fetchGeoJsonData = async () => {
      try {
        const response = await fetch('https://api.example.com/geojson-data');
        const data: GeoJsonData = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoJsonData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Web GIS App"/>
      <Map geoJsonData={geoJsonData} onMarkerPress={setSelectedLocation}/>
      {selectedLocation && (
        <BottomPanel
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
