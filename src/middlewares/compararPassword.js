import bcrypt from 'bcryptjs';

export function compararPassword (password,storedPassword){
    return bcrypt.compareSync(password, storedPassword);
}