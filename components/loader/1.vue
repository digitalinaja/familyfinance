<template>
    <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ffffff;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: #ffffff;
  transform: rotate(0deg) translate(10px);
  animation: rotate 1s ease infinite;
}
.loader:after {
  animation-delay: 0.5s
}
@keyframes rotate {
  100% {transform: rotate(360deg) translate(10px)}
}
</style>