<script setup lang="ts">
const login = async () => {
  const { data, error } = await supabase().auth.signInWithOAuth({
    provider: 'github',
    options: {
        redirectTo: 'http://localhost:3000/logout'
    }
  })
}

</script>

<template>
    <button @click="login">
        <p>login with github</p>
    </button>
</template>