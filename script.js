gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {


    // let count = 100;
    // const bands = document.querySelectorAll('.band').forEach(el => {
    //     console.log(count);
    //     gsap.set(el, {
    //         x: count
    //     })
    //     count += 100

    // });
    const sections = gsap.utils.toArray('section');
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: true,
            // snap: 1 / (sections.length - 1),
            start: 'top top',
            endTrigger: $('.wrapper').width(),
            end: 3000,
        }
    })
    sections.forEach(section => {
        gsap.set(section, {
            width: section.innerWidth - $('.bands').width(),
        })
    })

    const bands = gsap.utils.toArray('.band');
    let offset = 0;
    let reversedOffset = 300;
    bands.forEach(band => {
        gsap.to(band, {
            ease: 'none',
            xPercent: -(band.getBoundingClientRect().left - offset),
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: $(`.section[data-section='${band.id}']`),
                // trigger: band,
                scrub: true,
                start: `bottom bottom-=${reversedOffset + 16}`,
                endTrigger: $(`.section[data-section='${band.id}']`),
                // endTrigger: band,
                end: `bottom top+=${offset}`,
                // end: 3000,
                markers: true
            }
        })
        offset += 100;
        reversedOffset -= 100;

    })


    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 500,
            scrub: true,
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: true,
            start: 'center center',
            end: 2000,
        }
    })
    document.querySelectorAll('.section').forEach(el => {
        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: true,
            }
        })

        gsap.to(el.querySelector('.quote'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.quote'),
                start: 'top bottom',
                end: '+=20%',
                scrub: true,
            }
        })

        gsap.to(el.querySelector('.nickname'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.nickname'),
                start: 'top bottom',
                end: '+=10%',
                scrub: true,
            }
        })
        gsap.to(el.querySelector('.block'), {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.block'),
                start: 'top bottom',
                end: '+=' + window.innerWidth,
                scrub: true,
            }
        })
        gsap.to(el.querySelector('img'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('img'),
                start: 'top bottom',
                end: '+=50%',
                scrub: true,
            }
        })
        gsap.to(el.querySelector('.huge-text'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.huge-text'),
                start: 'top bottom',
                end: '+=100%',
                scrub: true,
            }
        })


    })


    let section1 = 0;
    let section2 = 0;
    let section3 = 0;
    gsap.to(window, {
        duration: 0.1,
        repeat: 1,
        scrollTo: {
            y: "max"
        },
        yoyo: true,
        onUpdate: () => {
            document.querySelectorAll('.section').forEach(sec => {
                // if (sec.id == 'sec-1' && sec.getBoundingClientRect().left == 0) {
                //     section1 = $(window).scrollTop()
                // } else if (sec.id == 'sec-2' && sec.getBoundingClientRect().left == 0) {
                //     section2 = $(window).scrollTop()
                // }
                // else if (sec.id == 'sec-3' && sec.getBoundingClientRect().left == 0) {
                //     section3 = $(window).scrollTop()
                // }
                if (sec.id == 'sec-2') {
                    if (sec.getBoundingClientRect().left == 0) {
                        console.log('done');
                    }
                }
            })
        }
    })



    $('.band').on('click', function (e) {
        if (e.target.id == 'band-1') {
            console.log('band-1 clicked');
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: 0
                },

            })
        } else if (e.target.id == 'band-2') {
            console.log('band-2 clicked', { section2 });
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: section2
                },

            })
        } else if (e.target.id == 'band-3') {
            console.log('band-3 clicked', { section3 });
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: section3
                },

            })
        }
    })




})



