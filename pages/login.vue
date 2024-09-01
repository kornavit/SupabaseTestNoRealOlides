<script setup lang="ts">
const login = async () => {
  await supabase().auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/supabase/'
    }
  })
}

</script>

<template>
    <button @click="login">
        <p>login with github</p>
    </button>
</template>