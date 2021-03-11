import * as React from 'react';
import {Switch, View, Text, Appearance} from 'react-native';
import {useTheme} from './ThemeContext';

export const Toggle = () => {
    // We're also pulling setScheme here!
    const {colors, setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    if (Appearance.getColorScheme() == "dark") {
        toggleScheme
    }

    return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Switch value={isDark} onValueChange={toggleScheme} value={isDark} />
            <Text style={{color:colors.text}}>Use Dark Mode</Text>
        </View>
    );
}