const menutog=document.getElementById('menutog')

const toggleIcon=()=>{
    menutog.classList.toggle("hidden");
}
const initialTranslateLTR=-48*4;
const initialTranslateRTL=36*4;
function setupInterSectionObserver(element,isLTR,speed){
    const interSectionCallback = (entries)=>{
        const isIntersecting=entries[0].isIntersecting;
        // console.log(element,isIntersecting);
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandeler)
        }else{
            document.removeEventListener('scroll',scrollHandeler)
        }

    }
    const interSectionObserver = new IntersectionObserver(interSectionCallback);
    interSectionObserver.observe(element);

    const scrollHandeler=()=>{
        const translatex= (window.innerHeight -element.getBoundingClientRect().top)*speed;
        let totaltranslate=0;
        console.log(translatex);
        if(isLTR){
            totaltranslate=initialTranslateLTR+translatex;
            // console.log(`one= ${totaltranslate}`)
        }else{
            totaltranslate=-(initialTranslateRTL+translatex);
            // console.log(`two= ${totaltranslate}`)
        }
        // console.log(translatex)
        element.style.transform =`translateX(${totaltranslate}px)`
    }
}

const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');
const line4=document.getElementById('line4');

setupInterSectionObserver(line1,true,0.15)
setupInterSectionObserver(line2,false,0.15)
setupInterSectionObserver(line3,true,0.15)
setupInterSectionObserver(line4,true,0.8)


const allDt=document.querySelectorAll('dt')
allDt.forEach((item)=>{
    item.addEventListener('click',()=>{
        const dtAria=item.getAttribute('aria-controls');
        const el=document.getElementById(dtAria);
        const dtIcon=item.querySelector('i');
        el.classList.toggle('hidden')
        dtIcon.classList.toggle("-rotate-180");
    })
})