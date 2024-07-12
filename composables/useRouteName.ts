interface UseRouteName {
  routeName: Ref<string>
}

const useRouteName = (): UseRouteName => {
  const route = useRoute()
  const routeName = ref<string>(
    route.name?.toString().split('___')[0] || 'index'
  )

  return { routeName }
}

export default useRouteName
