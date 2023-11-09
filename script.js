gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {



    const sections = gsap.utils.toArray('section');
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 1,
            // snap: 1 / (sections.length - 1),
            start: 'top top',
            endTrigger: $('.wrapper').width(),
            end: 3000,
        }
    })

    // setting width of parent of bands
    $('.bands').css('width', `${$('.band').length * $('.band').width()}px`)

    const bands = gsap.utils.toArray('.band');
    let offset = 0;
    let reversedOffset = $('.band').length * $('.band').width();

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
        offset += $('.band').width();
        reversedOffset -= $('.band').width();

    })
    let panelsSection = document.querySelector("#panels"),
        panelsContainer = document.querySelector(".wrapper");

    $('.band').on('click', function (e) {
        // band click logic goes 


        e.preventDefault();
        let targetElem = document.querySelector($(this).data('section')),
            y = targetElem;
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
            let totalScroll = scrollTween.scrollTrigger.end - scrollTween.scrollTrigger.start,
                totalMovement = (sections.length - 1) * targetElem.offsetWidth;
            console.log(totalMovement);
            y = Math.round(scrollTween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }

        gsap.to(window, {
            scrollTo: {
                y: y,
                autoKill: false
            },
            duration: 1
        });
    })


    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 500,
            scrub: 1,
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
            }
        })


    })










})



