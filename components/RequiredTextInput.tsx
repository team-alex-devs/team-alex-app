import {Control, Controller} from "react-hook-form";
import {TextInput} from "react-native";

export function RequiredTextInput<T extends "name" | "phoneNum">({valueField, title, control}: {valueField: T, title: string, control: Control<any>}) {
    return <Controller
        control={control}
        rules={{
            required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder={title}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name={valueField}
    />

}
