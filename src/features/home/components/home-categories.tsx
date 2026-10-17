import { COLORS } from '@/lib/constants/color.constant';
import { Category } from '@/lib/interfaces/home-res.interface';
import { act, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

interface ButtonProps {
  id: string | null;
  name: string;
  onPress: (id: string | null) => void;
  activeId: string | null;
}

interface Props {
  categories: Category[];
  activeId: string | null;
  onPress: (id: string | null) => void;
}

export const Homecategories = ({ categories, onPress, activeId }: Props) => {
  const allCategories: Category[] = [
    { id: null, name: 'All Coffee' },
    ...categories,
  ];
  return (
    <View style={{ marginBottom: 18, paddingHorizontal: 20 }}>
      <FlatList
        data={allCategories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id || ''}
        renderItem={({ item }) => (
          <CategoryButton
            id={item.id}
            name={item.name}
            onPress={id => onPress(id)}
            activeId={activeId}
          />
        )}
      />
    </View>
  );
};

const CategoryButton = ({ id, name, onPress, activeId }: ButtonProps) => {
  const isActive = id === activeId;
  return (
    <Pressable onPress={() => onPress(id)}>
      <Text style={[styles.category, isActive && styles.activeCategory]}>
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 20,
    backgroundColor: '#EDEDED',
  },
  activeCategory: {
    backgroundColor: COLORS.BRWON.NORMAL,
    color: COLORS.SURFACE.WHITE,
    fontWeight: 'bold',
  },
});
