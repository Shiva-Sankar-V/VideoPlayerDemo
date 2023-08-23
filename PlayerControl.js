import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
const PlayerControl = ({
  onPlayPause,
  onRewind,
  onForward,
  state,
  muted,
  onVolumeSeek,
  onPlaybackRateChange,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
  fullScreen,
}) => {
  const playingTime = time => {
    const min = Math.floor(time / 60);
    const mins = min < 10 ? '0' + min : min;
    const sec = Math.floor(time % 60);
    const secs = sec < 10 ? '0' + sec : sec;
    const res = {mins, secs};
    return res;
  };

  const remainingTime = duration => {
    const min = ~~((state.duration - playingTime(state.time).mins) / 60);
    const mins = min < 10 ? '0' + min : min;
    const sec = ~~((state.duration - playingTime(state.time).secs) % 60);
    const secs = sec < 10 ? '0' + sec : sec;
    const res = {mins, secs};
    return res;
  };

  const [modal, setModal] = useState(false);

  const handleOnSlide = time => {
    console.log(time);
    // onSlideCapture({seekTime: time});
  };
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 30, right: '45%'}}>
        <Pressable
          style={{
            width: 50,
            height: 30,
            backgroundColor: 'skyblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={onPlayPause}>
          {state.playing === true ? (
            <Icons name="play" size={20} color={'black'} />
          ) : (
            <Icons name="pause" size={20} color={'black'} />
          )}
        </Pressable>
      </View>
      <View style={{position: 'absolute', bottom: 30, right: '65%'}}>
        <Pressable
          style={{
            width: 50,
            height: 30,
            backgroundColor: 'skyblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={onRewind}>
          <Icon name="play-back" color={'black'} size={20} />
        </Pressable>
      </View>
      <View style={{position: 'absolute', bottom: 30, right: '25%'}}>
        <Pressable
          style={{
            width: 50,
            height: 30,
            backgroundColor: 'skyblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={onForward}>
          <Icon name="play-forward" color={'black'} size={20} />
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          left: 15,
          flexDirection: 'row',
        }}>
        <Text>
          {playingTime(state.time).mins} :{playingTime(state.time).secs}
        </Text>
        <Slider
          value={state.time}
          minimumValue={0}
          maximumValue={state.duration}
          onValueChange={() => {
            console.log('time');
          }}
          // // onSlidingStart={onSlideStart}
          // onSlidingComplete={({time}) => {
          //   // handleOnSlide(time)
          //   console.log(time);
          // }}
          style={styles.seekSlider}
          step={0.1}
          maximumTrackTintColor={'white'}
          minimumTrackTintColor={'red'}
        />
        <Text style={{color: 'white'}}>
          {remainingTime(state.duration).mins} :
          {remainingTime(state.duration).secs}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 200,
          right: 20,
          flexDirection: 'row',
        }}>
        <Slider
          value={state.volume}
          onSlidingComplete={onVolumeSeek}
          minimumValue={0}
          maximumValue={1}
          style={{height: 10, width: 150}}
          step={0.1}
          // onValueChange={{}}
          maximumTrackTintColor={'white'}
          minimumTrackTintColor={'red'}
        />
        <View style={styles.mute}>
          <TouchableOpacity color={'white'} size={20} onPress={muted}>
            {state.muted ? (
              <Icon name="volume-mute" color={'white'} size={20} />
            ) : (
              <Icon name="volume-high" color={'white'} size={20} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20,
          flexDirection: 'row',
        }}>
        <View style={styles.mute}>
          <TouchableOpacity onPress={fullScreen}>
            {state.fullScreen ? (
              <Icons name="arrow-collapse" color={'white'} size={25} />
            ) : (
              <Icons name="arrow-expand" color={'white'} size={25} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{position: 'absolute', bottom: 20, right: 20}}>
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <Icons name={'play-speed'} color={'#c5c5c5'} size={40} />
        </TouchableOpacity>

        <Modal visible={modal} transparent={true}>
          <View style={{position: 'absolute', bottom: 25, right: 20}}>
            <TouchableOpacity
              style={styles.modal}
              onPress={() => {
                setModal(false);
              }}>
              <TouchableOpacity
                style={styles.playback}
                onPress={() => {
                  onPlaybackRateChange(0.5);
                  setModal(false);
                }}>
                <Text>0.5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.playback}
                onPress={() => {
                  onPlaybackRateChange(1.0);
                  setModal(false);
                }}>
                <Text>1.0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.playback}
                onPress={() => {
                  onPlaybackRateChange(1.5);
                  setModal(false);
                }}>
                <Text>1.5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.playback}
                onPress={() => {
                  onPlaybackRateChange(2.0);
                  setModal(false);
                }}>
                <Text>2.0</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </Modal> */}
      {/* </View> */}
    </View>
  );
};

export default PlayerControl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  mute: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seekBar: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  seekSlider: {
    width: 300,
  },
  // modal: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // playback: {
  //   backgroundColor: '#9e6d6d',
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  // },
});
