<template></template>

<script setup lang="ts">
type Response = {
    code: string
}

onMounted( async () => {
    console.log("sign up supabase")
    const route = useRoute()

    // from PKCE
    if (route.fullPath.split("?").length > 0) {
        const responseArray = [route.fullPath.split("?").slice(1)[0].split("=")]
        // make to object
        const response: Response  = Object.fromEntries(responseArray)
        // const { data , error } = await supabase().auth.exchangeCodeForSession(response.code)
        // console.log(data.session)
        // if (error) {
        //     return
        // }
        console.log(response)
    }

    await navigateTo("/login")
})
</script>