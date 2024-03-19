import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    { id: "1", nome: "Julia", idade: "12", email: "@julia.com" },
    { id: "2", nome: "Maria", idade: "15", email: "@maria.com" },
    { id: "3", nome: "Pedro", idade: "17", email: "@pedro.com" },
    { id: "4", nome: "Julia", idade: "12", email: "@julia.com" },
    { id: "5", nome: "Maria", idade: "15", email: "@maria.com" },
    { id: "6", nome: "Pedro", idade: "17", email: "@pedro.com" },
    { id: "7", nome: "Julia", idade: "12", email: "@julia.com" },
    { id: "8", nome: "Maria", idade: "15", email: "@maria.com" },
    { id: "9", nome: "Pedro", idade: "17", email: "@pedro.com" },
    

];


const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
        <Text>{item.idade}</Text>
    </TouchableOpacity>
);

function FlatListExample(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="darkorange" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
<View style={styles.footer}>
    <TouchableOpacity>
        <Image source={require('./assets/images/home.png')}
        style={ styles.footerIcon} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image source={require('./assets/images/orders.png')}
        style={ styles.footerIcon} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image source={require('./assets/images/profile.png')} 
        style={ styles.footerIcon}/>
    </TouchableOpacity>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    

    },
    item: {
        backgroundColor: 'deeppink',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 20,
        fontSize: 30
    },
    header: {
        backgroundColor: 'darkorange',
        alignItems: 'center',
        paddingVertical: 30,
       
        

    },
    headerText: {
fontSize: 25,
fontWeight: 'bold',
color: 'black'


    },
    footer: {
        borderTopWidth: 0.9,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    footerIcon: {
        width: 30,
        height: 30
    }
})

export default FlatListExample