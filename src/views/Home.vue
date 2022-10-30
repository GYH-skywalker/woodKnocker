<template>
  <div id="home"></div>
</template>

<script>
// @ is an alias to /src
import { axisHelper, init, rend } from "@/utils/threeD";
import { addCylinder, addSphere } from "@/utils/threeD/addGeometry";
import { addAudio, bindAudioToModel } from "@/utils/threeD/addAudio";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    initWorld() {
      const dom = document.getElementById("home");
      init(dom);
      // rend(bindAudioToModel)
      axisHelper();
      addSphere();
      addCylinder();
      addAudio();
    },
  },
  mounted() {
    this.initWorld();
  },
};
</script>

<style scoped></style>
