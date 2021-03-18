import axios from 'axios'
import BaseServer from '../api/BaseServer'

class ContactService extends BaseServer {
    constructor() {
        super()
        this.name = nameContact
        this.email = email
        this.phone = phone
        this.message = message
    }

    init() {
        this.assignEventSendNewContact()
    }

    assignEventSendNewContact() {
        document.getElementsByClassName('btn-send-contact')[0].addEventListener('click', event => {
            event.preventDefault()
            this.checkNewContact()
        })
    }

    checkNewContact() {
        const response = document.getElementsByClassName('return-message')[0]

        response.innerHTML = ''
        response.classList.add('neutral')
        

        if (!this.name.value) {
            response.innerHTML = ''
            response.classList.add('error')
            response.innerHTML = `<p>Preencha o campo nome</p>`
            setTimeout(() => { 
                response.innerHTML = ''
                response.classList.remove('success')
                response.classList.remove('error')
                response.classList.add('neutral')
            }, 6000)
        } else if (!this.email.value) {
            response.innerHTML = ''
            response.classList.add('error')
            response.innerHTML = `<p>Preencha o campo email</p>`
            setTimeout(() => { 
                response.innerHTML = ''
                response.classList.remove('success')
                response.classList.remove('error')
                response.classList.add('neutral')
            }, 6000)
        } else if (!this.phone.value) {
            response.innerHTML = ''
            response.classList.add('error')
            response.innerHTML = `<p>Preencha o campo telefone</p>`
            setTimeout(() => { 
                response.innerHTML = ''
                response.classList.remove('success')
                response.classList.remove('error')
                response.classList.add('neutral')
            }, 6000)
        } else if (!this.message.value) {
            response.innerHTML = ''
            response.classList.add('error')
            response.innerHTML = `<p>Preencha o campo mensagem</p>`
            setTimeout(() => { 
                response.innerHTML = ''
                response.classList.remove('success')
                response.classList.remove('error')
                response.classList.add('neutral')
            }, 6000)
        } else {
            response.innerHTML = `<p>Mensagem enviada com sucesso. :)</p>`
            response.classList.add('success')
            setTimeout(() => {
                this.name.value = ''
                this.email.value = ''
                this.phone.value = ''
                this.message.value = ''
                
                response.innerHTML = ''
                response.classList.remove('success')
                response.classList.remove('error')
                response.classList.add('neutral')

            }, 5000)
            this.sendNewContact()
        }
    }

    async sendNewContact() {
        await axios({
            method: 'post',
            url: `${this.baseURL}/contact`,
            data: {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                message: this.message.value
            }
        }).then(response => {
        }).catch(error => console.log(error))
    }

}

export default new ContactService()
