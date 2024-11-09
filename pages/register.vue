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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const name = ref('')
const role = ref('')
const isRegistered = ref(false)
const loading = ref(false)
let baseUrl = '' 
if (process.client) { 
    baseUrl = window.location.origin 
} else { // Provide a fallback base URL for server-side rendering 
    baseUrl = 'https://default.example.com'
}

const handleRegister = async () => {
    loading.value = true

    try {
        const { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
          options: {
            data: {
                name: name.value,
                role: role.value,
            },
            emailRedirectTo: `${baseUrl}/login?newuser=${email.value}`
          }
        })

        isRegistered.value = true
        
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
      <CardDescription>Register an account.</CardDescription>
    </CardHeader>
    <CardContent v-if="!isRegistered">
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1 5">
            <Label for="name">Nama</Label>
            <Input id="name" v-model="name" placeholder="Enter your name" />
          </div>
          <div class="flex flex-col space-y-1 5">
            <Label for="role">Role</Label>
            <Select v-model="role">
                <SelectTrigger>
                <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Role</SelectLabel>
                        <SelectItem value="suami">
                            Suami
                        </SelectItem>
                        <SelectItem value="istri">
                            Istri
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Email</Label>
            <Input id="email" v-model="email" placeholder="Enter your mail" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Password</Label>
            <Input id="password" v-model="password" placeholder="Enter your password" type="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardContent v-else>
        <Alert>
            <CheckCircleIcon class="text-green-600"></CheckCircleIcon>
            <AlertTitle>Registrasi Berhasil!</AlertTitle>
            <AlertDescription>
            Periksa email {{ email }} untuk konfirmasi pendaftaran
            </AlertDescription>
        </Alert>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6" v-if="!isRegistered">
        <Button @click="handleRegister">
            <span v-if="!loading">Register</span>
            <span v-if="loading">
                please wait
            </span>
            <Loader1 v-if="loading" />
        </Button>
        <span>Already have an account? <NuxtLink to="/login" class="underline">pls welcome</NuxtLink></span>
    </CardFooter>
  </Card>
</div>

</template>