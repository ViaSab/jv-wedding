interface UseNavBar {
  activeMenuItem: Ref<string>;
  menuItems: string[];
}

const useNavBar = (): UseNavBar => {
  let activeMenuItem = ref<string>("0");
  const { routeName } = useRouteName();
  const menuItems = MENU;

  const _getActiveMenuItem = (): string => {
    return routeName ? menuItems.indexOf(routeName.value).toString() : "0";
  };

  activeMenuItem.value = _getActiveMenuItem();

  return { activeMenuItem, menuItems };
};

export default useNavBar;
