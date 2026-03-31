import React, { useEffect, useState} from "react";
import { View,Text,FlatList,Button} from "react-native";

import styles from "../styles/styles";

import { getPeople, deletePerson  } from "../servers/peopleCrud";

export default function HomeScreen({navigation}) {

    // estado da lista 
    const[people, setPeople] = useState([]);

    // carregar dados
    async function loadPeople() {

        const data = await getPeople();

        setPeople(data);
    }

    //exect apo abrir tela 
    useEffect(() =>{
        loadPeople();
    
    },[]);

}