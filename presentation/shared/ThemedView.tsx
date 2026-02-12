import React from 'react';
import { View, ViewProps } from 'react-native';

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string
}

const ThemedView = ({ style, className, margin = false, children, safe = false, bgColor }: Props) => {



  return (
    /* className='bg-light-background dark:bg-dark-background' */
    <View className={ className }>
      { children }
    </View>
  )
}

export { ThemedView };

