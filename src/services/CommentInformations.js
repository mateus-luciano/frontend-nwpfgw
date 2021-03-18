import axios from 'axios'
import BaseServer from '../api/BaseServer'

class CommentInformations extends BaseServer {
    constructor() {
        super()
        this.name = nameCommentInformations
        this.comment = commentInformations
    }

    init() {
        this.getDataComments()
        this.assignEventSendNewComment()
    }

    async getDataComments(page = 1) {
        await axios.get(`${this.baseURL}/commentsinfo?page=${page}`)
            .then(response => {
                this.commentCount(response.data.total_comments)
                this.populateComments(response.data.data)
                this.setPagination(response.data.current_page, response.data.total_pages)
            })
            .catch(error => console.log(error))
    }

    commentCount(total) {
        document.getElementsByClassName('show-comments')[0].innerHTML = 
        `Comentários(${total})`
    }

    populateComments(data) {
        document.getElementsByClassName('content-info')[0].innerHTML = ''
        data.forEach(comment => {
            document.getElementsByClassName('content-info')[0].innerHTML += 
            `<div class="comment">
                <div class="main">
                    <p>${comment.content}</p>
                </div>
                <div class="bottom">
                    <p>${comment.name}</p>
                </div>
            </div>`
        })
    }

    assignEventSendNewComment() {
        document.getElementsByClassName('btn-informations')[0].addEventListener('click', event => {
            event.preventDefault()
            this.checkNewComment()
        })
    }

    setPagination(current_page, total_pages) {
        const pagination = document.getElementsByClassName('pagination')[0]

        if (!pagination.innerHTML.length) {
            for (let i = 1; i <= total_pages; i++) {
                pagination.innerHTML += 
                `<div class="page-item">
                    <p class="page-link" data-page="${i}">${i}</p>
                </div>`
            }

            for (let button of document.getElementsByClassName('page-link')) {
                button.addEventListener('click', event => {
                    event.preventDefault()
                    button.classList.remove('btn-page')
                    const page = parseInt(event.target.dataset.page)
                    this.getDataComments(page)
                })
            }
        }
    
        for (let item of document.querySelectorAll('.page-link')) {
            item.classList.remove('btn-page')
        }
        document.querySelector(`.page-link[data-page="${current_page}"]`).classList.add('btn-page')
    }


    checkNewComment() {
        const response = document.getElementsByClassName('message-form')[0]

        if (!this.name.value) {
            response.innerHTML = `<p>Preencha o campo nome</p>`
            response.classList.add('form-error')
        } else if (!this.comment.value) {
            response.innerHTML = `<p>Preencha o campo comentário</p>`
            response.classList.add('form-error')
        } else {
            this.sendNewComment()
            response.innerHTML = `<p>Mensagem enviada com sucesso :)</p>`
            response.classList.add('form-success')
            setTimeout(() => { 
                this.name.value = ''
                this.comment.value = ''
                response.innerHTML = ''
                response.classList.remove('form-success')
                response.classList.remove('form-error')
                response.classList.add('form-neutral')
            }, 2000)
        }
    }

    async sendNewComment() {
        await axios({
            method: 'post',
            url: `${this.baseURL}/commentsinfo`,
            data: {
                name: this.name.value,
                content: this.comment.value
            }
        }).then(response => {
            this.getDataComments()
        }).catch(error => console.log(error))
    }
}

export default new CommentInformations()