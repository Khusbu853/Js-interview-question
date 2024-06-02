let count = 0;

const fetchData = () => {
    console.log('data is fetching: ', count++)
}


//throttle function
const throttle = (fetchData, limit) => {

    let timerflag = null;
    return function(...args){
        if(timerflag === null){
            fetchData(...args)
        }

        timerflag = setTimeout(() => {
            timerflag = null
        }, limit);

    }
}

const throttleFn = throttle(fetchData, 500)
window.addEventListener('resize', throttleFn)