<template>
    <p>Oauth with supabase</p>
    <p>{{ $route.fullPath }}</p>
</template>

<script setup lang="ts">
const route = useRoute()
// set Array<Array<string>> from response
const responseArray = route.fullPath.split("#").slice(1)[0].split("&").map((value) => value.split("="))

// make to object
const response = Object.fromEntries(responseArray)

console.log(response)
</script>