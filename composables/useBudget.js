export const useBudget = () => {
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()


    const budgets = ref([])
    const transactions = ref([])
    const newBudget = ref([])
  
    const fetchBudgets = async () => {
      const { data, error } = await supabase.from('budget').select('*').eq('user_id', user.value.id)
      if (!error) budgets.value = data
    }
  
    const fetchTransactions = async (budgetId) => {
      const { data, error } = await supabase.from('transaction').select('*').eq('budget_id', budgetId)
      if (!error) transactions.value = data
    }

    const insertBudget = async (dataBudget) => {

      const {budgetName, budgetLimit, userId} = dataBudget
      
      const { data, error } = await supabase
      .from('budget')
      .insert([
        { nama: budgetName, monthly_limit: budgetLimit, user_id: userId },
      ])
      .select()
      if (!error) newBudget.value = data
              
    }


  
    return { budgets, transactions, newBudget, fetchBudgets, fetchTransactions, insertBudget }
  }
  