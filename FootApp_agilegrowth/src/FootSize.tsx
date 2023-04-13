import React, {useCallback, useState, useRef} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import { RNCamera } from 'react-native-camera';

function FootSize() {
  const cameraRef = useRef<RNCamera>(null);
  const [preview, setPreview] = useState<{uri: string}>();

  const onTakePhoto = useCallback(async() => {
    if(cameraRef.current){
      const data = await cameraRef.current.takePictureAsync({
        quality: 1, base64: true,
      })
      setPreview({uri: data.uri});
    }
  }, [preview]);

  return (
    <View style={{flex: 1}}>
      {!preview ?
        (
          <>
            <RNCamera ref={cameraRef} style={{ flex:1 }} type={RNCamera.Constants.Type.back}>
              <View>
                <Image 
                  source={require('/Users/agile/Desktop/dohyun/FootApp_agilegrowth/src/img/foot.jpeg')}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </RNCamera>
            <View style={styles.buttonWrapper}>
              <Pressable style={styles.button} onPress={onTakePhoto}>
                <Text style={styles.buttonText}>이미지 촬영</Text>
              </Pressable>
            </View>
          </>
        )
        :
        (
          <View style={styles.preview}>
            <Image style={styles.previewImage} source={preview} />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  foot: {
    padding: 20,
  },
  preview: {
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 3,
    backgroundColor: '#D2D2D2',
    marginBottom: 10,
  },
  previewImage: {
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  buttonWrapper: {flexDirection: 'row', justifyContent: 'center'},
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 120,
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'black',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
});

export default FootSize;