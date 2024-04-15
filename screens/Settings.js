import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeContext'; 
import Styles from '../styles/Styles';

export default function Settings() {
    const { selectedTheme, toggleTheme } = useTheme(); 

    const handleThemeChange = (themeName) => {
        toggleTheme(themeName); 
    };

    return (
        <ScrollView style={Styles.scrollView}>
            <View style={selectedTheme.container}>
                <Text style={[selectedTheme.h1, selectedTheme.vali]}>Sovelluksen ulkonäkö</Text>

                <TouchableOpacity onPress={() => handleThemeChange('light')}>
                    <Text style={[selectedTheme.h3, Styles.centerText]}>Vaalea teema</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleThemeChange('dark')}>
                    <Text style={[selectedTheme.h3, Styles.centerText]}>Tumma teema</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleThemeChange('colorblind')}>
                    <Text style={[selectedTheme.h3, Styles.centerText]}>Värisokeustila</Text>
                </TouchableOpacity>

                <Text style={[selectedTheme.h1, selectedTheme.vali]}>Tietoja Sovelluksesta</Text>
                <Text style={[selectedTheme.h3, { textAlign: 'center', paddingBottom: 10 }]}>Sovellusversio:</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 20 }]}>v.1.05</Text>
                <Text style={[selectedTheme.h3, { textAlign: 'center', paddingBottom: 10 }]}>Tekijät:</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 10 }]}>Saana Lapinkangas</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 10 }]}>Nico Jokelainen</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 10 }]}>Miika Tiihonen</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 10 }]}>Aarno Lempinen</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 10 }]}>Mikael Jaara</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 20 }]}>TVTSPO Mobiilikehitysprojekti, kevät 2024, Ryhmä 5</Text>

                <Text style={[selectedTheme.h3, { textAlign: 'center', paddingBottom: 10 }]}>Yhteistyökumppanit:</Text>
                <Text style={[selectedTheme.txt, { textAlign: 'center', paddingBottom: 10 }]}>*lisätään tähän jotain liiketoimintasuunnitelman mukaan*</Text>

                <Image
                    source={require('../components/logo_full.png')}
                    style={{ width: '80%', height: 200, resizeMode: 'contain', alignSelf: 'center', marginVertical: 40 }} />
            </View>
        </ScrollView>
    );
}
