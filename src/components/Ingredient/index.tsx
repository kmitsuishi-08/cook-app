import { Pressable, Text, Image} from "react-native"
import { styles } from "./styles"

export function Ingredient(){
    return(
        <Pressable style={styles.container}>
            <Image source={require("@/assets/tomato.png")} style={styles.image}/>
            <Text style={styles.title}>Tomate</Text>
        </Pressable>
    )
}