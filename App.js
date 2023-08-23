import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useRef, useState} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoPlayer from './VideoPlayer';
const App = () => {
  const [state, setState] = useState({
    playing: true,
    currentTime: 0,
    time: 0,
    muted: true,
    volume: 1,
    savedVol: 1,
    duration: 0,
    playbackRate: 1.0,
    fullScreen: false,
    controls: false,
  });
  const {
    playing,
    muted,
    volume,
    playbackRate,
    currentTime,
    fullScreen,
    controls,
  } = state;
  const [volumeSlider, setVolumeSlider] = useState(false);
  const playerRef = useRef(null);

  return (
    <>
      <StatusBar barStyle="default" />
      <VideoPlayer />
      {/* <View style={styles.rootContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setState({...state, controls: !controls});
          }}>
          <Video
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            paused={playing}
            ref={playerRef}
            muted={muted}
            style={styles.videoPlayer}
            controls={false}
            resizeMode={'contain'}
            volume={volume}
          />
        </TouchableOpacity>
        {controls && (
          <>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 30,
                    backgroundColor: 'skyblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}
                  onPress={() => {
                    setState({...state, playing: !state.playing});
                  }}>
                  {playing && (
                    <Icon name="play-sharp" size={20} color="black" />
                  )}
                  {!playing && (
                    <Icon name="pause-sharp" size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>

              <View style={{position: 'absolute', right: -200, bottom: 10}}>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 30,
                    backgroundColor: 'skyblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}
                  onPress={() => {
                    setVolumeSlider(!volumeSlider);
                    setState({...state, muted: !state.muted});
                  }}>
                  {!volumeSlider && (
                    <Icon name="volume-mute-sharp" size={20} color="black" />
                  )}
                  {volumeSlider && (
                    <Icon name="volume-high-sharp" size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>

              {volumeSlider && (
                <View
                  style={{
                    width: 150,
                    height: 20,
                    position: 'absolute',
                    right: -220,
                    bottom: -10,
                  }}>
                  <Slider
                    step={0.1}
                    style={{}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#e30b0b"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#1d0cb1"
                    onValueChange={value => setState({...state, volume: value})}
                  />
                </View>
              )}

              <View style={{position: 'absolute', right: -200, bottom: 340}}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    width: 60,
                    height: 30,
                    backgroundColor: 'skyblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}
                  onPress={() => {
                    setState({...state, fullScreen: !state.fullScreen});
                  }}>
                  {!fullScreen && (
                    <Icons name="arrow-expand" size={20} color="black" />
                  )}
                  {fullScreen && (
                    <Icons name="arrow-collapse" size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d0cece',
    justifyContent: 'center',
  },
  videoPlayer: {
    backgroundColor: '#d0cece',
    width: '100%',
    aspectRatio: 1,
  },
});
