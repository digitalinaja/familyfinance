<template>
    <div>
        <div class="flex items-center justify-between p-3 mb-5">
            <h1 class="font-sans text-2xl font-extralight underline decoration-sky-500">
                Family Finance
            </h1>
    <button @click="handleSignOut" class="place-self-end grid">
        <LogOutIcon></LogOutIcon>
    </button>
</div>

        <div class="grid grid-cols-2 gap-2">
            <div>

                <Card class="w-full shadow-md ml-1 h-auto">
                    <CardHeader>
                        <CardTitle class="text-2xl ordinal slashed-zero tabular-nums">Kas</CardTitle>
                    </CardHeader>
                    <CardContent class="grid gap-2">
                        Rp 100000
                    </CardContent>
                </Card>

            </div>

            <div>

                <Card class="w-full shadow-md mr-1 h-auto">
                    <CardHeader>
                        <CardTitle class="text-2xl ordinal slashed-zero tabular-nums">Spending</CardTitle>
                        
                    </CardHeader>
                    <CardContent class="grid gap-2">
                        Rp 100000
                    </CardContent>
                </Card>
            </div>
        </div>

        <h1 class="font-sans text-xl font-extralight mt-5 p-3">Spend Analysis</h1>

        <div class="grid grid-cols-1">
            <Progress :model-value="33" class="w-5/6" /> 33%
        </div>
        
        <div class="grid grid-cols-1">
            <Progress :model-value="60" class="w-5/6" /> 60%
        </div>
        
        
        <div class="grid grid-cols-1">
            <Progress :model-value="7" class="w-5/6" /> 7%
        </div>

    </div>
</template>

<script setup>
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]
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