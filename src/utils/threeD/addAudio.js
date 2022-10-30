import * as THREE from "three";
import { getCamera } from "@/utils/threeD/index";

let audioAnalyser = null;

function addAudio() {
  const camera = getCamera();
  let analyser = null;
  // 创建一个 AudioListener 并将其添加到 camera 中
  const listener = new THREE.AudioListener();
  camera.add(listener);
  // 创建一个全局 audio 源
  const sound = new THREE.Audio(listener);

  // 加载一个 sound 并将其设置为 Audio 对象的缓冲区
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load("audio/knock.aac", function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.autoplay = true;
    sound.play();
    analyser = new THREE.AudioAnalyser(sound, 512);
    audioAnalyser = analyser;
  });
}

function bindAudioToModel() {
  if (audioAnalyser) {
    // 获得频率数据N个
    let arr = audioAnalyser.getAverageFrequency();
    console.log(arr);
    // console.log(arr);
    // 遍历组对象，每个网格子对象设置一个对应的频率数据
    // model.rotateX = 60
    // model.rotateZ = 60
    // group.children.forEach((elem, index) => {
    //     elem.scale.y = arr[index] / 80
    //     elem.material.color.r = arr[index] / 200;
    // });
  }
}

export { addAudio, bindAudioToModel };
