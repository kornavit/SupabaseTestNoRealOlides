<template></template>

<script setup lang="ts">
onMounted( async () => {
    console.log("supabase with google")
    const route = useRoute()

    // from PKCE
    if (route.fullPath.split("?").length > 0) {
        const responseArray = [route.fullPath.split("?").slice(1)[0].split("=")]

        // make to object
        const response = Object.fromEntries(responseArray)

        console.log(response)
    }

    await navigateTo("/logout")
})
</script>