import {  View,Text, ScrollView, Alert} from "react-native";
import {router} from "expo-router"

import { styles } from "./styles";

import { useState, useEffect } from "react";

import { services } from "@/services";
import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";

export default function Index(){
    const [selected, setSelected] = useState<string[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    function handleToggleSelected(value: string){
        if(selected.includes(value)){
            return setSelected((state)=> state.filter((item)=> item !== value))
        }

        setSelected((state)=>[...state, value])
        console.log(selected)
    }

    function handleClearSelected(){
        Alert.alert("Limpar", "Deseja limpar tudo?",[
            {text : "Não", style: "cancel"},
            {text : "Sim", onPress:() => setSelected([])}
        ])
    }

    function handleSearch(){
        router.navigate("/recipes/" + selected)
    }

    useEffect(()=>{
        services.ingredients.findAll().then(setIngredients)
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que vocês escolheu
            </Text>
            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>
                {ingredients.map((item) => (
                    <Ingredient 
                        key={item.id} 
                        name={item.name} 
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected={selected.includes(item.id)}
                        onPress={()=> handleToggleSelected(item.id)}
                    />
                ))}
            </ScrollView>
            {selected.length> 0 &&(
                <Selected 
                    quantity={selected.length} 
                    onClear={handleClearSelected} 
                    onSearch={handleSearch}
                />
            )}
        </View>
    )
}