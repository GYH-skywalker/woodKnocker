import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { bindAudioToModel } from "@/utils/threeD/addAudio";

let scene = null;
let camera = null;
let worldDom = null;
let wkRender = null;
const pi = Math.PI;
const half_pi = Math.PI / 2;
const quat_pi = Math.PI / 4;

function init(dom) {
  const initScene = new THREE.Scene();
  let width = window.innerWidth; //窗口宽度
  let height = window.innerHeight; //窗口高度
  let k = width / height; //窗口宽高比
  let s = 200;
  const initCamera = new THREE.OrthographicCamera(
    -s * k,
    s * k,
    s,
    -s,
    0.1,
    2000
  );
  initCamera.position.set(200, 300, 200); //设置相机位置
  initCamera.lookAt(initScene.position);
  const ambient = new THREE.AmbientLight(0x444444);
  initScene.add(ambient);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0x00fff0, 1);
  dom.appendChild(renderer.domElement);
  renderer.render(initScene, initCamera);
  scene = initScene;
  camera = initCamera;
  worldDom = renderer.domElement;
  wkRender = renderer;
  rend();
  setResize();
  const controls = new OrbitControls(initCamera, renderer.domElement); //创建控件对象
}

function rend() {
  wkRender.render(scene, camera); //执行渲染操作
  // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
  // bindAudioToModel()
  requestAnimationFrame(rend); //请求再次执行渲染函数render
}

function setResize() {
  window.addEventListener("resize", (e) => {
    wkRender.setSize(window.innerWidth, window.innerHeight);
    wkRender.render(scene, camera);
  });
}

function getScene() {
  return scene;
}
function getCamera() {
  return scene;
}
function getWorldDom() {
  return worldDom;
}
function getWkRender() {
  return wkRender;
}

function addTransController(model) {
  const Tcontrol = new TransformControls(camera, worldDom);
  Tcontrol.attach(model);
  scene.add(Tcontrol);
}

function axisHelper() {
  const axis = new THREE.AxesHelper(250);
  scene.add(axis);
}

export {
  init,
  rend,
  getScene,
  getWkRender,
  getWorldDom,
  getCamera,
  axisHelper,
  addTransController,
};
