<script setup lang="ts">
const logout = async () => {
  const { error } = await supabase().auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo('/login');
};

</script>

<template>
    <button @click="logout">
        <p>logout with github</p>
    </button>
</template>