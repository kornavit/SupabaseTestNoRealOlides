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
  <button @click="logout" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
      logout
    </button>
</template>