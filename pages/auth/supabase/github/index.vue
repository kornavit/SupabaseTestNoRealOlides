<template></template>

<script setup lang="ts">
onMounted( async () => {
    const route = useRoute()

    // set Array<Array<string>> from response
    if (route.fullPath.split("#").length > 0) {
        const responseArray = route.fullPath.split("#").slice(1)[0].split("&").map((value) => value.split("="))
        
        // // make to object
        const response = Object.fromEntries(responseArray)
        
        console.log(response)
    }

    await navigateTo("/logout")
})
</script>