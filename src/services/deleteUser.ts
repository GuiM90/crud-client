const baseURL = "http://localhost:3001/user";
export const deleteUser = async (userID: number) => {
    try {
        const serverReq: Response = await fetch(baseURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: userID,
            }),
        });
        const response = await serverReq.json();
        if (response.status !== 200) throw new Error();
    } catch (e) {
        console.log(e);
    };
};