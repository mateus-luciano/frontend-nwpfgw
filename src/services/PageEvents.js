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
                this.hideSkills()
                document.getElementsByClassName('skills')[idx].classList.remove('hidden')
            })
        })
    }

    hideSkills() {
        for (let skills of document.querySelectorAll('.skills')) {
            skills.classList.add('hidden')
        }
    }

    assignEventExtLink(html, link) {
        document.getElementsByClassName(html)[0].addEventListener('click', () => {
            window.open(link, '_blank')
        })
    }
}

export default new PageEvents()