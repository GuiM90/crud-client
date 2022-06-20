const baseURL = "http://localhost:3001/user";
export const getUsers = async () => {
    const response = await fetch(baseURL);
    const json = await response.json();
    return json;
};