import bcrypt from "bcrypt"

const saltRound = 10 //bcrypt encryption rounds

export const createHashedPassword = async (password) => {
    const hashedPass = await bcrypt.hash(password, saltRound)
    return hashedPass
}

// compare password

export const comparePassword = async (password, hashedPass) => {
    const isMatched = bcrypt.compare(password, hashedPass)
    return isMatched
}