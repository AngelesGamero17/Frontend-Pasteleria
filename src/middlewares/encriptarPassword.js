import bcrypt from 'bcryptjs';

export function encriptarPassword(password){
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}