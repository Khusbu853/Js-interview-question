let count = 0;

const fetchData = () => {
    console.log('fetchdata called: ', count++)
};


const debounce = (fetchData, delay) => {

    let timer
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fetchData(...args);
        }, delay);
    }
}

const debounceFn = debounce(fetchData, 300);