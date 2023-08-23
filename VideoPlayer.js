import {
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {useState} from 'react';
import {useRef} from 'react';
import PlayerControl from './PlayerControl';

const VideoPlayer = () => {
  const [state, setState] = useState({
    playing: true,
    currentTime: 0,
    time: 0,
    muted: false,
    volume: 1,
    savedVol: 1,
    duration: 0,
    playbackRate: 1.0,
    fullScreen: false,
    controls: true,
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
  const playerRef = useRef(null);

  const fullScreenHandler = () => {
    if (fullScreen) {
      setState({...state, fullScreen: !state.fullScreen});
    } else {
      setState({...state, fullScreen: !state.fullScreen});
    }
  };
  const playPauseHandler = () => {
    setState({...state, playing: !state.playing});
  };
  const forwardHandler = () => {
    playerRef.current.seek(currentTime + 10);
    setState({...state, currentTime: currentTime + 10});
  };
  const rewindHandler = () => {
    playerRef.current.seek(currentTime - 10);
    setState({...state, currentTime: currentTime - 10});
  };
  const muteHandler = () => {
    setState({
      ...state,
      muted: !state.muted,
      volume: muted ? state.savedVol : 0,
    });
  };

  const volumeSeekHandler = value => {
    setState({
      ...state,
      volume: value,
      savedVol: value,
    });
  };

  const playbackHandler = rate => {
    setState({...state, playbackRate: rate});
  };

  const onLoadEnd = data => {
    setState({
      ...state,
      duration: data.duration,
      currentTime: data.currentTime,
    });
  };

  const onProgress = data => {
    setState({
      ...state,
      time: data.currentTime,
    });
  };

  const onSeek = data => {
    playerRef.current.seek(data.seekTime);
    setState({
      ...state,
      currentTime: data.seekTime,
    });
  };

  const onEnd = () => {
    playerRef.current.seek(0);
    setState({
      ...state,
      playing: true,
      currentTime: 0,
      time: 0,
    });
  };

  console.log(playing, controls, 'full Screen', fullScreen);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setState({...state, controls: !state.controls});
        }}>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          ref={playerRef}
          style={fullScreen == true ? styles.vidfull : styles.vid}
          playInBackground={false}
          volume={volume}
          muted={muted}
          paused={playing}
          resizeMode={'stretch'}
          onLoad={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
          rate={playbackRate}
          fullscreen={fullScreen}
          controls={false}
        />
      </Pressable>
      {controls && (
        <View style={styles.playerbar}>
          <PlayerControl
            onPlayPause={playPauseHandler}
            onForward={forwardHandler}
            onRewind={rewindHandler}
            state={state}
            muted={muteHandler}
            onVolumeSeek={volumeSeekHandler}
            onPlaybackRateChange={playbackHandler}
            onSlideCapture={onSeek}
            fullScreen={fullScreenHandler}
          />
        </View>
      )}
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vidfull: {
    backgroundColor: '#161010',
    width: '100%',
    aspectRatio: 4 / 3,
  },
  vid: {
    backgroundColor: '#161010',
    width: '70%',
    aspectRatio: 4 / 3,
  },
  playerbar: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 5,
  },
});
