export const GetFilterUrl = (filter: Object) => {
  return filter
    ? Object?.entries(filter)
        ?.filter(([, value]) => value)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join('&')
    : '';
};