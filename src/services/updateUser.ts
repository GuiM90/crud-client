const baseURL = "http://localhost:3001/user";
export const updateUser = async (userName: string, userEmail: string, userID: number) => {
    try {
        const serverReq: Response = await fetch(baseURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: userID,
                name: userName,
                email: userEmail,
            }),
        });
        const response = await serverReq.json();
        if (response.status !== 200) throw new Error();
    } catch (e) {
        console.log(e);
    };
};