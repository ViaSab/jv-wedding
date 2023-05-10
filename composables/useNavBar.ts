interface UseNavBar {
  activeMenuItem: Ref<String>;
  menuItems: string[];
}

const useNavBar = (): UseNavBar => {
  let activeMenuItem = ref<String>("0");
  const { routeName } = useRouteName();
  const menuItems = MENU;

  const _getActiveMenuItem = (): string => {
    return routeName ? menuItems.indexOf(routeName.toString()).toString() : "0";
  };

  activeMenuItem.value = _getActiveMenuItem();

  return { activeMenuItem, menuItems };
};

export default useNavBar;
