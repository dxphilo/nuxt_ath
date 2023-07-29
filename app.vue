<script setup lang="ts">
const { signIn, status, data } = useAuth()
</script>
<template>
  <div class="container">
    <h1>Create your Account</h1>
    <button @click="signIn('google')">
      <p>Continue with Google</p>
    </button>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

button {
  background-color: #4285F4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button p {
  margin: 0;
  padding: 0;
}
</style>


