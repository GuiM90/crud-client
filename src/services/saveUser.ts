const baseURL = "http://localhost:3001/user";
export const saveUser = async (userName: string, userEmail: string) => {
    try {
        const serverReq: Response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
            }),
        });
        const response = await serverReq.json();
        return response;
    } catch (e) {
        return e;
    };
};