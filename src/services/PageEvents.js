class PageEvents {
    init() {
        this.assignEventHeaderScrolling()
        this.assignEventButtonsNavBarHeader()
        this.assignEventButtonsAboutSection(0, 2000)
        this.assignEventButtonsAboutSection(1, -2000)
        this.assignEventArrowsInformationSection('fa-chevron-left ', -2000)
        this.assignEventArrowsInformationSection('fa-chevron-right', 2000)
        this.assignEventSkillsSection()
        this.assignEventExtLink('fa-linkedin-in', 'https://www.linkedin.com/in/mateus-luciano-850ba61a4')
        this.assignEventExtLink('fa-instagram', 'https://www.instagram.com/teeusdm')
        this.assignEventExtLink('fa-github', 'https://github.com/teeusdm')
        this.assignEventSeeComments()
        this.assignEventAddNewComment()
    }

    assignEventHeaderScrolling() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= document.getElementsByClassName('container-header')[0].offsetHeight && 
            document.getElementsByClassName('nav-bar')[0].classList.contains('absolute-position')) {
                document.getElementsByClassName('nav-bar')[0].classList.remove('absolute-position')
                document.getElementsByClassName('nav-bar')[0].classList.add('fixed-position')
            } else if (window.pageYOffset < document.getElementsByClassName('container-header')[0].offsetHeight && 
            document.getElementsByClassName('nav-bar')[0].classList.contains('fixed-position')) {
                document.getElementsByClassName('nav-bar')[0].classList.remove('fixed-position')
                document.getElementsByClassName('nav-bar')[0].classList.add('absolute-position')
            }
        })
    }

    assignEventButtonsNavBarHeader() {
        document.querySelectorAll('.internal-link').forEach((current, idx) => {
            current.addEventListener('click', () => {
                window.scrollTo({
                    top: document.querySelectorAll('main section')[idx].offsetTop,
                    left: 0,
                    behavior: 'smooth'
                })
            })
        })
    }

    assignEventButtonsAboutSection(idx, width) {
        document.getElementsByClassName('btn-more-about')[idx].addEventListener('click', event => {
            event.preventDefault()
            document.getElementsByClassName('carousel-about')[0].scrollBy(width, 0)
        })
    }

    assignEventArrowsInformationSection(side, width) {
        document.getElementsByClassName(side)[0].addEventListener('click', () => {
            document.getElementsByClassName('carousel-informations')[0].scrollBy(width, 0)
        })
    }

    assignEventSkillsSection() {
        document.querySelectorAll('.icon-skills').forEach((current, idx) => {
            current.addEventListener('click', () => {
                this.hideAllSkills()
                document.getElementsByClassName('skills')[idx].classList.remove('hidden')
            })
        })
    }

    hideAllSkills() {
        for (let skills of document.querySelectorAll('.skills')) {
            skills.classList.add('hidden')
        }
    }

    assignEventExtLink(icon, link) {
        document.getElementsByClassName(icon)[0].addEventListener('click', () => {
            window.open(link, '_blank')
        })
    }

    assignEventSeeComments() {
        document.querySelectorAll('.show-comments').forEach((current, idx) => {
            current.addEventListener('click', () => {
                this.hideBlocksComments('.container-form')
                document.getElementsByClassName('populate-comments')[idx].classList.toggle('hidden')
            })
        })
    }

    assignEventAddNewComment() {
        document.querySelectorAll('.fa-comment-medical').forEach((current, idx) => {
            current.addEventListener('click', () => {
                this.hideBlocksComments('.populate-comments')
                document.getElementsByClassName('container-form')[idx].classList.toggle('hidden')
            })
        })
    }

    hideBlocksComments(html) {
        for (let block of document.querySelectorAll(html)) {
            block.classList.add('hidden')
        }
    }
}

export default new PageEvents()