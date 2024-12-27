


export async function loginAPI(email: string, password: string): Promise<any> {

    try {
        const response = await fetch("http://192.168.1.24:8000/api/v1/auth/login", {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            return data
        } else {
            throw new Error(data.message || 'Login failed');
        }

    } catch (error) {
        throw new Error(error instanceof Error ? error.message: 'An unexpected error occured');
    }
}
