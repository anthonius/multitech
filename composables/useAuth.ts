export const useAuth = () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  const login = async (email: string, password: string) => {
    try {
      // Add your login logic here
      // For example, API call to your backend
      isAuthenticated.value = true
      user.value = { email } // Replace with actual user data
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
    // Add any additional logout logic
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
} 