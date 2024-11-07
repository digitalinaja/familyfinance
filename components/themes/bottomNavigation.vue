 <template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
    <div class="flex justify-around items-center h-16">
      <a href="#home" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <HomeIcon class="h-6 w-6" />
        <span class="text-xxs">Home</span>
      </a>
      <a href="#search" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <i><SearchIcon class="h-6 w-6" /></i>
        <span class="text-xxs">Budget</span>
      </a>
      <a href="#scan" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <apertureIcon class="h-6 w-6" />
        <span class="text-xxs">Create</span>
      </a>
      <a href="#notifications" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <BellIcon class="h-6 w-6" />
        <span class="text-xxs">History</span>
      </a>
      
    </div>
  </nav>
</template>

<style scoped>
.circle-nav i {
  color: #fff !important;
  transform: translateY(-11px);
}
.circle-nav::before {
    transform: translateY(-11px);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -5px;
    border-radius: 20px;
    background: inherit;
    z-index: -1;
    transform: scale(0.75) translate(-55%, -45%);
    filter: blur(8px);
}
.circle-nav::after,
.circle-nav::before {
  background-image: linear-gradient(to bottom, #5d9cec, #4a89dc) !important;
}
.circle-nav::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -20px;
  border-radius: 60px;
  z-index: -1;
}
</style>