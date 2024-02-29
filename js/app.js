function animationScroll() {
    const animatedElements = document.querySelectorAll('.animation-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
    });

    animatedElements.forEach(function(elem) {
        observer.observe(elem);
    })
}

animationScroll()

function animationOpacity() {
    const elems = document.querySelectorAll('.animation-opacity')

    elems.forEach(function(elem) {
        setTimeout(function() {
            elem.classList.add('animated')
        }, 500)
    })
}

animationOpacity()

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