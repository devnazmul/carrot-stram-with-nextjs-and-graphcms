export const genarateRandomSlug = (name, length) => {
  return `${name.split(" ").join("-").toLowerCase()}-${Math.random().toString(36).substring(2, length + 2)}-${Math.random().toString(36).substring(2, length + 2)}-${Math.random().toString(36).substring(2, length + 2)}`;
};
