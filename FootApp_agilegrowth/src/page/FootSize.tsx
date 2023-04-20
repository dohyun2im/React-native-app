import React, {useCallback, useState, useRef} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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

  const handleRetake = useCallback(() => {
    setPreview({uri:''});
  }, []);

  return (
    <View style={styles.cam}>
      {!preview?.uri ?
        (
          <>
            <RNCamera ref={cameraRef} style={{ flex:1 }} type={RNCamera.Constants.Type.back}>
              <View style={styles.cam}>
                <Image 
                  source={require('/Users/agile/Desktop/dohyun/FootApp_agilegrowth/src/img/original.png')}
                  style={styles.footimg}
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
          <View style={styles.cam}>
            <Image style={styles.previewImage} source={preview} />
            <Text style={styles.buttonText}>255.66mm</Text>
            <Pressable style={styles.button} onPress={handleRetake}>
              <Text style={styles.buttonText}>재촬영</Text>
            </Pressable>
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
  cam: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  footimg: {
    width: 320 ,
    height: 300 ,
    backgroundColor: 'transparent',
  },
  preview: {
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 1.5,
    backgroundColor: '#D2D2D2',
    marginBottom: 10,
  },
  previewImage: {
    width: Dimensions.get('window').width ,
    height: Dimensions.get('window').height - 300,
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