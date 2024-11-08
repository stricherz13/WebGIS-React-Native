// components/Map.tsx
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface FeatureProperties {
  title: string;
  description: string;
}

interface Feature {
  geometry: {
    coordinates: [number, number];
  };
  properties: FeatureProperties;
}

interface GeoJsonData {
  features: Feature[];
}

interface MapProps {
  geoJsonData: GeoJsonData | null;
  onMarkerPress: (location: FeatureProperties) => void;
}

const Map: React.FC<MapProps> = ({geoJsonData, onMarkerPress}) => (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {geoJsonData?.features.map((feature, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
        }}
        title={feature.properties.title}
        description={feature.properties.description}
        onPress={() => onMarkerPress(feature.properties)}
      />
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 120, // Adjust to fit header and bottom panel
  },
});

export default Map;
