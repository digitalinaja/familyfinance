<script setup>
definePageMeta({
  layout: 'public'
})
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const loading = ref(false)
const user = useSupabaseUser()

// Get redirect path from cookies
const cookieName = useRuntimeConfig().public.supabase.cookieName
const redirectPath = useCookie(`${cookieName}-redirect-path`).value

watch(user, () => {
  if (user.value) {
      // Clear cookie
      useCookie(`${cookieName}-redirect-path`).value = null
      // Redirect to path
      return navigateTo(redirectPath || '/'); 
  }
}, { immediate: true })


const handleSignin = async () => {
    loading.value = true

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        })

        if (data.access_token) {

        }
        
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
    
}

</script>

<template>
    <div class="flex items-center justify-center h-screen">
  <Card class="w-11/12 max-w-md">
    <CardHeader>
        <ThemesLogo />
      <CardDescription>Login to App.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Username</Label>
            <Input id="name" v-model="email" placeholder="Enter your username" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Password</Label>
            <Input id="password" v-model="password" placeholder="Enter your password" type="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
        <Button @click="handleSignin">
            <span v-if="!loading">Login</span>
            <span v-if="loading">
                please wait
            </span>
            <Loader1 v-if="loading" />
        </Button>
        <span><NuxtLink href="/register" class="underline">Register</NuxtLink></span>
    </CardFooter>
  </Card>
</div>

</template>