/* ==========================================
   PORTFOLIO INTERACTIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       CURSOR GLOW
    ========================================== */

    const cursor = document.querySelector(".cursor-glow");

    if(cursor){

        document.addEventListener("mousemove",(e)=>{

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

        });

    }

    /* ==========================================
       SCROLL PROGRESS
    ========================================== */

    const progress = document.createElement("div");

    progress.id = "progress";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const scroll =
            window.scrollY;

        const height =
            document.documentElement.scrollHeight
            - window.innerHeight;

        progress.style.width =
            (scroll/height)*100 + "%";

    });

    /* ==========================================
       REVEAL ON SCROLL
    ========================================== */

    const reveals =
        document.querySelectorAll(
            ".section,.experience-card,.stack-card,.case-card,.stat-card,.expertise-card"
        );

    const observer =
        new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{
            threshold:.15
        });

    reveals.forEach(item=>{

        item.classList.add("fade-up");

        observer.observe(item);

    });

    /* ==========================================
       COUNTERS
    ========================================== */

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const update = ()=>{

            const target =
                +counter.dataset.target;

            const current =
                +counter.innerText.replace("%","");

            const increment =
                target/80;

            if(current < target){

                counter.innerText =
                    Math.ceil(current+increment) + "%";

                setTimeout(update,18);

            }

            else{

                counter.innerText =
                    target + "%";

            }

        };

        observer.observe(counter);

        counter.addEventListener("transitionend",update);

        setTimeout(update,800);

    });

    /* ==========================================
       SMOOTH NAVIGATION
    ========================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor=>{

            anchor.addEventListener("click",function(e){

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if(target){

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            });

        });

    /* ==========================================
       PARALLAX PHOTO
    ========================================== */

    const photo =
        document.querySelector(".photo-card");

    window.addEventListener("mousemove",(e)=>{

        if(!photo) return;

        let x =
            (window.innerWidth/2-e.clientX)/60;

        let y =
            (window.innerHeight/2-e.clientY)/60;

        photo.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

    window.addEventListener("mouseleave",()=>{

        if(photo){

            photo.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const topBtn =
        document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.className = "top-btn";

    document.body.appendChild(topBtn);

    topBtn.onclick = ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.classList.add("show");

        }

        else{

            topBtn.classList.remove("show");

        }

    });

    /* ==========================================
       DARK MODE
    ========================================== */

    const darkBtn =
        document.createElement("button");

    darkBtn.innerHTML = "🌙";

    darkBtn.className = "dark-btn";

    document.body.appendChild(darkBtn);

    darkBtn.onclick=()=>{

        document.body.classList.toggle("dark");

        darkBtn.innerHTML =
            document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";

    };

});
