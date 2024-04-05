import MainLayout from '../layouts/MainLayout';
import 
{ 
    View, 
    TextInput, 
    Button, 
    Alert,
    Text
} from 'react-native';
export default function AboutScreen({ navigation }) {
    // ...

    return (
        <MainLayout>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Text>Made by Brandt.</Text>
        </MainLayout>
    );
}