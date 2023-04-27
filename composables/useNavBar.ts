interface UseNavBar {
  activeMenuItem: Ref<String>;
  menuItems: string[];
}

const useNavBar = (): UseNavBar => {
  let activeMenuItem = ref<String>("0");
  const route = useRoute();
  const menuItems = ["index", "photos", "our-story"];

  const _getActiveMenuItem = (): string => {
    const name = route.name?.toString().split("___")[0];
    return name ? menuItems.indexOf(name).toString() : "0";
  };

  activeMenuItem.value = _getActiveMenuItem();

  return { activeMenuItem, menuItems };
};

export default useNavBar;
