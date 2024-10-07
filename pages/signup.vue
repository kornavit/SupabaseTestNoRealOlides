<script setup lang="ts">
    const gmail = ref<string>("")
    const password = ref<string>("")
    const confirmPassword = ref<string>("")
    const errorMessage = ref<string>("")

    function verifyBasic(): string {
        if(confirmPassword.value !== password.value) {
            return "password and confirm password is not match"
        } else if(!gmail.value.includes("@")) {
            return "write the correct gmail"
        }
        return ""
    }

    async function signUpNewUser() {
        errorMessage.value = verifyBasic()
        if (errorMessage.value.length) {
            return
        }

        const { error } = await supabase().auth.signUp({
            email: gmail.value,
            password: password.value,
        })
        
        if (error){
            errorMessage.value = error.message
            return
        }
        
        await navigateTo("/login")
    }
</script>

<template>
    <div class="space-y-3 w-[30vw]">
      <div>
        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Gmail</label>
        <input v-model="gmail" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="@gmail.com" required>
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
        <input v-model="confirmPassword" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
      </div>
      <p v-if="errorMessage" class="mt-2 text-sm text-red-600"><span class="font-medium">Oh, snapp!</span> {{ errorMessage }}</p>
      <button @click="signUpNewUser" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Sign Up</button>
    </div>
</template>