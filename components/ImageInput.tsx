import React from 'react';
import { Button } from 'react-native';

import { Text, View } from './Themed';

export default function ImageInput({textOutput, setText}: {
    textOutput: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}) {
  return <View>
    <Button
      title='Upload Images'
      onPress={() => setText(textOutput + "hello\n")}
    />
    <Text>
      {textOutput}
    </Text>
  </View>;
}

// TODO: add hugging-face api functionality
async function query(filename: string): Promise<string> {
  const data = new Blob([filename], {type: "image"});
  const response = await fetch(
    'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
    {
      headers: { Authorization: 'Bearer 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' },
      method: 'POST',
      body: data
    }
  );
  return response.json();
}
