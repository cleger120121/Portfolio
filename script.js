function reload(){
    window.location.reload()
    window.scrollTo({
            top: 0,
    });
}

function BurgerMenu() {
    const burger = document.getElementById('List--Menu2');

    if ( burger.classList.contains('active') ) {
        burger.classList.remove('active');
        const spans = document.querySelectorAll('span');
        spans[0].style.transform = 'translateY(0px) rotate(0deg)';
        spans[2].style.transform = 'translateY(0px) rotate(0deg)';
        spans[1].style.opacity = '1';
    } else {
        burger.classList.add('active');
        const spans = document.querySelectorAll('span');
        spans[0].style.transform = 'translateY(15.5px) rotate(45deg)';
        spans[2].style.transform = 'translateY(-16px) rotate(-45deg)';
        spans[1].style.opacity = '0';
    }
}

function reload(){
    window.location.reload()
    window.scrollTo({
            top: 0,
            behavior : 'smooth'
    });
}


    allumerPhrasesMenu()
    seRendreAuMenu()
    seRendreAuMenu2()
    seRendreAuMenu3()
    AdaptToTheScreenSize()



function allumerPhrasesMenu() {
    // Récupère les sections
    const sections = document.querySelectorAll('.Parts');
    const bouttons = document.querySelectorAll('.Menu--Lis')

    // Ajoute un écouteur d'événement au scroll de la page
    window.addEventListener('scroll', function() {
        // Récupère la position du scroll
        const positionScroll = window.scrollY;

        // Récupère la position en termes de hauteur de la bordure haute de la div
        const positionsDivs = [
        [sections[1].offsetTop - document.querySelector('header').clientHeight, sections[2].offsetTop - document.querySelector('header').clientHeight - 1],
        [sections[2].offsetTop - document.querySelector('header').clientHeight, sections[3].offsetTop - document.querySelector('header').clientHeight - 5],
        [sections[3].offsetTop - document.querySelector('header').clientHeight - 4, document.documentElement.scrollHeight - document.querySelector('header').clientHeight],
        [sections[0].offsetTop, sections[1].offsetTop - document.querySelector('header').clientHeight - 1]
        ];

        console.log(positionsDivs[2])

        positionsDivs.forEach((e, index) => {
            if (positionScroll >= e[0] && positionScroll <= e[1]) {
                
                if ( index === 0) {
                    bouttons[index].style.backgroundColor = '#CDA4DE'
                    bouttons[1].style.backgroundColor = ''
                    bouttons[2].style.backgroundColor = ''
                    bouttons[index].style.color = 'black'
                    bouttons[2].style.color = 'white'
                    bouttons[1].style.color = 'white'
                } else if ( index === 1 ) {
                    bouttons[index].style.backgroundColor = '#CDA4DE'
                    bouttons[2].style.backgroundColor = ''
                    bouttons[0].style.backgroundColor = ''
                    bouttons[index].style.color = 'black'
                    bouttons[0].style.color = 'white'
                    bouttons[2].style.color = 'white'
                } else if ( index === 2) {
                    bouttons[index].style.backgroundColor = '#CDA4DE'
                    bouttons[index].style.color = 'black'
                    bouttons[0].style.color = 'white'
                    bouttons[1].style.color = 'white'
                    bouttons[1].style.backgroundColor = ''
                    bouttons[0].style.backgroundColor = ''
                } else {
                    bouttons[1].style.backgroundColor = ''
                    bouttons[0].style.backgroundColor = ''
                    bouttons[2].style.backgroundColor = ''
                    bouttons[0].style.color = 'white'
                    bouttons[1].style.color = 'white'
                    bouttons[2].style.color = 'white'
                }
            }
        });
    });
}

function seRendreAuMenu() {
    // Récupère les sections
    const bouttons = document.querySelectorAll('.Title');

    bouttons.forEach((boutton, index) => {
        boutton.addEventListener('click', () => {
        const sections = document.querySelectorAll('.Parts');

        const positionsDivs = [
            sections[1].offsetTop - document.querySelector('header').clientHeight,
            sections[2].offsetTop - document.querySelector('header').clientHeight,
            sections[3].offsetTop - document.querySelector('header').clientHeight
        ];

        window.scrollTo({
            top: positionsDivs[index - 1],
            behavior: 'smooth' // Optional: Adds smooth scrolling animation
        });
        });
    });
}

function seRendreAuMenu2() {
    // Récupère les sections
    const bouttons = document.querySelectorAll('.Menu--Lis');

    bouttons.forEach((boutton, index) => {
        boutton.addEventListener('click', () => {
        const sections = document.querySelectorAll('.Parts');

        const positionsDivs = [
            sections[1].offsetTop - document.querySelector('header').clientHeight,
            sections[2].offsetTop - document.querySelector('header').clientHeight,
            sections[3].offsetTop - document.querySelector('header').clientHeight
        ];

        window.scrollTo({
            top: positionsDivs[index],
            behavior: 'smooth' // Optional: Adds smooth scrolling animation
        });
        });
    });
}

function seRendreAuMenu3() {
    // Récupère les sections
    const bouttons = document.querySelectorAll('.Menu--Lis2');

    bouttons.forEach((boutton, index) => {
        boutton.addEventListener('click', () => {
        const sections = document.querySelectorAll('.Parts');

        const positionsDivs = [
            sections[1].offsetTop - document.querySelector('header').clientHeight,
            sections[2].offsetTop - document.querySelector('header').clientHeight,
            sections[3].offsetTop - document.querySelector('header').clientHeight
        ];

        window.scrollTo({
            top: positionsDivs[index],
            behavior: 'smooth' // Optional: Adds smooth scrolling animation
        });
        });
    });
}

function AdaptToTheScreenSize () {
    const docuHeight = document.documentElement.scrollHeight.toString()
    document.getElementById('Fond--Ul').style.height = docuHeight + 'px'
    window.addEventListener('resize', ()=> {
        document.getElementById('Fond--Ul').style.height = '0px'
        const docuHeight = document.documentElement.scrollHeight.toString()
        document.getElementById('Fond--Ul').style.height = docuHeight + 'px'
    });
}