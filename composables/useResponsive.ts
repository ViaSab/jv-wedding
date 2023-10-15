const { width } = useWindowSize();

interface UseResponsive {
  isMobile: ComputedRef<boolean>;
}

const useResponsive = (): UseResponsive => {
  const isMobile = computed(() => {
    return width.value < 768;
  });

  return { isMobile };
};

export default useResponsive;
