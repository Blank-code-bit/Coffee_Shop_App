import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}

const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.iconBG, {backgroundColor: BGColor}]}>
      <Ionicons name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
export default BGIcon;