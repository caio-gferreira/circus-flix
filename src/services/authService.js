import mock_login from '../data/mock_login.json';

/**
 * 
 * @param {string} email 
 * @param {string} password
 */
const getUserMocked = ({ email, password }) => {
    const { email_mock, password_mock } = mock_login;

    return email_mock === email && password_mock === password;
}

export default getUserMocked;