export function mergeProps<T>(componentProps, controllerProps: T) {
  const props: Record<string, any> = {};
  Object.entries(controllerProps).forEach(([k, v]) => {
    props[k] = typeof componentProps[k] === "undefined" ? v : componentProps[k];
  });
  return props as T;
}
