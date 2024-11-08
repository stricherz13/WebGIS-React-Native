// components/BottomPanel.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BottomPanelProps {
  location: {
    title: string;
    description: string;
  };
  onClose: () => void;
}

const BottomPanel: React.FC<BottomPanelProps> = ({ location, onClose }) => (
  <View style={styles.bottomPanel}>
    <Text style={styles.locationTitle}>{location.title}</Text>
    <Text style={styles.locationDescription}>{location.description}</Text>
    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
      <Text style={styles.closeButtonText}>Close</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationDescription: {
    fontSize: 14,
    color: '#666',
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#6200ee',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BottomPanel;
