import { Text, View, Button } from "react-native"
import {useForm} from "react-hook-form"
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebaseConfig";
import {RequiredTextInput} from "./RequiredTextInput";
import {SignUpData} from "../constants/Types";

const initialData: SignUpData = {name: "", phoneNum: ""};

export default function SignUp() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: initialData
    })
    const onSubmit = async (data: SignUpData) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: data.name,
                phoneNum: data.phoneNum
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <View>
            <RequiredTextInput valueField={"name"} title={"Name"} control={control}/>
            {errors.name && <Text>A username is required.</Text>}

            <RequiredTextInput valueField={"phoneNum"} title={"Phone Number"} control={control}/>
            {errors.phoneNum && <Text>Your phone-number is required.</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )

}