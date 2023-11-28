export const apiCall = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(String(error));
  }
};
