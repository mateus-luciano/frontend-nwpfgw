class PageEvents {
    init() {
        this.assignEventHeaderScrolling()
        this.assignEventButtonsNavBarHeader()
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
}

export default new PageEvents()