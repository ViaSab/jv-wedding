interface UseRouteName {
  routeName: Ref<String>;
}

const useRouteName = (): UseRouteName => {
  const route = useRoute();
  const routeName = ref<String>(
    route.name?.toString().split("___")[0] || "index"
  );

  return { routeName };
};

export default useRouteName;
