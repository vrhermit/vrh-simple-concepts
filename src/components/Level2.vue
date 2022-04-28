<script setup>
</script>

<template>
  <article class="container level-1">
    <div class="scene-container">
      <a-scene embedded vr-mode-ui="enterVRButton: #enterVR;">
        <!-- <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box> -->
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <!-- <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder> -->
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
      <br />
      <button id="enterVR">Play Now</button>
      <h1>Level 2</h1>
      <p>A description of the level or the story that is being told here.</p>
    </div>
  </article>
</template>

