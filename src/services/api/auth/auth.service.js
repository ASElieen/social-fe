import axios from "../../axios";

class AuthService {
    async signUp(body) {
        const resp = await axios.post('/signup', body)
        return resp
    }

    async signIn(body) {
        const resp = await axios.post('/signin', body)
        return resp
    }

    async forgotpassword(email) {
        const resp = await axios.post('/forgot-password', { email })
        return resp
    }

    async resetpassword(token, body) {
        const resp = await axios.post(`/reset-password/${token}`, body)
        return resp
    }
    // async authPostData(url, data, token) {
    //     const resp = await axios.post(`/${url}/${token}`, data)
    //     return resp
    // }
}

export const authService = new AuthService()