<template>
    <div class="flex items-center justify-between p-3 mb-5">
        <ThemesLogo />
        <button @click="handleSignOut" class="place-self-end grid">
            <LogOutIcon></LogOutIcon>
        </button>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const handleSignOut = async () => {
    await supabase.auth.signOut()
}
watch(user, () => {
    if (!user.value) {
        // Redirect to path
        return navigateTo('/login');
    }
}, { immediate: true })
</script>