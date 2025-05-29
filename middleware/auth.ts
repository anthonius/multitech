export default defineNuxtRouteMiddleware((to, from) => {
  // Add your authentication check logic here
  const isAuthenticated = false // Replace with your actual auth check

  if (!isAuthenticated) {
    return navigateTo('/login')
  }
}) 