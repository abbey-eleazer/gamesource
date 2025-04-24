const errorCodes = (code) => {
    let msg = 'sorry! Invalid credentials';

    switch(code) {
        case 'auth/invalid-email':
            msg = 'Invalid credentials.';
            break;
        case 'auth/invalid-credentials':
            msg = 'Invalid credentials.';
            break;
        case 'auth/user-not-found':
            msg = 'User not found.';
            break;
        case 'auth/wrong-password':
            msg = 'Wrong password.';
            break;
        case 'auth/email-already-in-use':
            msg = 'Email already in use.';
            break;  
        default:
            msg = code;
    }
    return msg;
}

export default errorCodes;

