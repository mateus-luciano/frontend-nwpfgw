class PageEvents {
    init() {
        this.assignEventHeaderScrolling()
        this.assignEventButtonsNavBarHeader()
        this.assignEventButtonsAboutSection(0, 2000)
        this.assignEventButtonsAboutSection(1, -2000)
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
}

export default new PageEvents()