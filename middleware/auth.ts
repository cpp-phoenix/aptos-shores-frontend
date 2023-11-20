export default defineNuxtRouteMiddleware((to, from) => {
  const user = useStrapiUser()
  if (user.value && to.path.includes('/auth')) {
    return navigateTo('/')
  }
  if (!user.value && to.path.includes('/settings')) {
    return navigateTo('/')
  }
})