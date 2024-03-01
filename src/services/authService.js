// authApi.js
const authenticateUser = async (username, password) => {
    try {
        const response = await fetch('sua_url_de_autenticacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            return data.token;
        } else {
            throw new Error('Erro ao autenticar usuário');
        }
    } catch (error) {
        console.error('Erro de autenticação:', error.message);
        throw error;
    }
};

export { authenticateUser };
