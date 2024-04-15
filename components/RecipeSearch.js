import { TextInput } from 'react-native';
import Styles from '../styles/Styles';

export default RecipeSearch = ({ setSearchQuery, searchQuery }) => {

    return (
        <>
            <TextInput
                style={Styles.searchBar}
                placeholder='Etsi reseptejä'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />
        </>
    )
}