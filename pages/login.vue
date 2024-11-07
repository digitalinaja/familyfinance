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
</script>

<template>
    <div class="flex items-center justify-center h-screen">
  <Card class="w-11/12 max-w-md">
    <CardHeader>
      <CardTitle>Family Finance</CardTitle>
      <CardDescription>Login to App.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Username</Label>
            <Input id="name" placeholder="Enter your username" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <NuxtLink to="/">
          <Button>Login</Button>
      </NuxtLink>
    </CardFooter>
  </Card>
</div>

</template>