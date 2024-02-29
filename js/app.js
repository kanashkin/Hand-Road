function addAnimation() {
    const animatedElements = document.querySelectorAll('.element-animation');

    animatedElements.forEach(function(animatedElement) {
        const elementTop = animatedElement.offsetTop;
        const elementBottom = elementTop + animatedElement.offsetHeight;

        function isElementInViewport() {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY || window.pageYOffset;
            const top = elementTop - scrollY;
            const bottom = elementBottom - scrollY;

            return (
                top >= 0 &&
                bottom <= windowHeight
            );
        }

        function handleScroll() {
            if (isElementInViewport()) {
                animatedElement.classList.add('animated');
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);
    })


}

addAnimation()

function servicesAnimation() {
    const listItems = document.querySelectorAll('.services__list-item');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function handleScroll() {
        listItems.forEach((item, index) => {
            if (isElementInViewport(item)) {
                listItems.forEach(item => {
                    item.classList.remove('active')
                })
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

}

servicesAnimation()