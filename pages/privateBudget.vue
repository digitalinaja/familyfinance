<template>
    <div>
        <ThemesHeaderNavigation />
        <div class="p-3 mb-5">
            <h2 class="mb-2">Budgeting</h2>
                <!-- Button to open the dialog -->
            <Button @click="isDialogOpen = true">Add</Button>

            <hr class="mb-2 mt-2"/>
            
            <div v-for="budget in budgets" :key="budget.id" class="budget-card">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-lg font-semibold">{{ budget.nama }} </h2>
                    <span class="text-gray-500">Limit: Rp{{ budget.monthly_limit }}</span>
                </div>
            </div>
        </div>
        <Dialog :open="isDialogOpen" @close="isDialogOpen = false">
            <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add New Budget</DialogTitle>
            </DialogHeader>
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                <Label for="name" class="text-right">
                    Budget
                </Label>
                <Input id="budget" v-model="budgetData.budgetName" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                <Label for="username" class="text-right">
                    Monthly Limit
                </Label>
                <Input id="monthly_limit" v-model="budgetData.budgetLimit" class="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button @click=insertBudgetClick>
                    Save
                </Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>
<script setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useBudget } from '~/composables/useBudget'

const user = useSupabaseUser()
const { budgets, newBudget, fetchBudgets, transactions, fetchTransactions, insertBudget } = useBudget()

const budgetData = ref({
    budgetName: 'Investasi bulanan',
    budgetLimit: 200000,
    userId: '1'
})
const isDialogOpen = ref(false);

const insertBudgetClick = async () => {
    const insert = insertBudget(budgetData.value)
    if(insert) {
        console.log(newBudget)
        isDialogOpen.value = false
        await fetchBudgets()
    }
}

onMounted(async () => {
  budgetData.value.userId = user.value.id
  await fetchBudgets()
  // budgets.value.forEach(budget => fetchTransactions(budget.id))
})
</script>