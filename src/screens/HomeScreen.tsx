import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard';
import { theme } from '../styles/theme';

const mockEvents = [
  {
    id: '1',
    title: 'Encontro de Carros Tunados',
    date: '2024-03-15',
    location: 'São Paulo, SP',
    image: 'https://example.com/event1.jpg',
  },
  // Add more mock events
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockEvents}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContent: {
    padding: theme.spacing.md,
  },
});

export default HomeScreen;