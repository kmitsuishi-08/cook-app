import {  View,Text } from "react-native";

import { styles } from "./styles";

import { Ingredients } from "@/components/Ingredients";
import { useState } from "react";

export default function Index(){
    /*Adicionando um estado(state)*/
    const [selected, setSelected] = useState<string[]>([])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que vocês escolheu
            </Text>
            <Ingredients/>
        </View>
    )
}