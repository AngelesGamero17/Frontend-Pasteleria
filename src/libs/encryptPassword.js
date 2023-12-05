import bcrypt from 'bcryptjs';

export async function encriptarContrasena(contrasena) {
    const salt =  bcrypt.genSaltSync(10);
    const hash =  bcrypt.hashSync(contrasena, salt);
    return hash;
}