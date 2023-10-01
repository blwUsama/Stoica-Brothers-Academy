const options = { root: null, rootMargin: '0px', threshhold: 0.1};

const handleIntersection = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden')
            observer.unobserve(entry.target);
        } 

        else
        {
            entry.target.classList.remove("visible");
            entry.target.classList.add("hidden");
        }
    })
}

    
    const observer = new IntersectionObserver(handleIntersection, options);

    export default observer;