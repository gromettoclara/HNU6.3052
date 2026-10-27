const links =[...document.querySelectorAll('.toc a')];
const map = Object.fromEntries(links.map(a =>[a.hash.slice(1), a]));

const io = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting
    }) => {
        if (! isIntersecting) return;
        document.querySelector('.toc a.active') ?.classList.remove('active');
        map[target.id] ?.classList.add('active');
    });
}, {
    rootMargin: '0px 0px -100% 0px'
});

document.querySelectorAll('.chapter').forEach(el => io.observe(el));