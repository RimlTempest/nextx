import { DestroyMode, EasingType, IOptions, RecursivePartial } from "react-tsparticles";

const particles: RecursivePartial<IOptions> = {
    autoPlay: true,
    background: {
        color: {
            value: '#FFF0',
        },
        image: "url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
        position: '0 13%',
        repeat: 'no-repeat',
        size: '61%',
        opacity: 1,
    },
    backgroundMask: {
        composite: 'destination-out',
        cover: {
            color: {
            value: '#fff',
            },
            opacity: 1,
        },
        enable: false,
    },
        fullScreen: {
        enable: true,
        zIndex: 1,
        },
        detectRetina: true,
        fpsLimit: 60,
        infection: {
        cure: false,
        delay: 0,
        enable: false,
        infections: 0,
        stages: [],
        },
        interactivity: {
        detectsOn: 'canvas',
        events: {
            onClick: {
            enable: true,
            mode: 'repulse',
            },
            onHover: {
            enable: false,
            mode: 'grab',
            parallax: {
                enable: false,
                force: 2,
                smooth: 10,
            },
            },
            resize: true,
        },
        modes: {
            attract: {
            distance: 200,
            duration: 0.4,
            easing: EasingType.easeOutQuad,
            factor: 1,
            maxSpeed: 50,
            speed: 1,
            },
            bubble: {
            distance: 400,
            duration: 2,
            opacity: 8,
            size: 40,
            },
            connect: {
            distance: 80,
            links: {
                opacity: 0.5,
            },
            radius: 60,
            },
            grab: {
            distance: 200,
            links: {
                blink: false,
                consent: false,
                opacity: 1,
            },
            },
            light: {
            area: {
                gradient: {
                start: {
                    value: '#3B82F6',
                },
                stop: {
                    value: '#000000',
                },
                },
                radius: 1000,
            },
            shadow: {
                color: {
                value: '#000000',
                },
                length: 2000,
            },
            },
            push: {
            quantity: 4,
            },
            remove: {
            quantity: 2,
            },
            repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: EasingType.easeOutQuad,
            },
            slow: {
            factor: 3,
            radius: 200,
            },
            trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
            },
        },
        },
        manualParticles: [],
        motion: {
        disable: false,
        reduce: {
            factor: 4,
            value: true,
        },
        },
        particles: {
        bounce: {
            horizontal: {
            random: {
                enable: false,
                minimumValue: 0.1,
            },
            value: 1,
            },
            vertical: {
            random: {
                enable: false,
                minimumValue: 0.1,
            },
            value: 1,
            },
        },
        collisions: {
            bounce: {
            horizontal: {
                random: {
                enable: false,
                minimumValue: 0.1,
                },
                value: 1,
            },
            vertical: {
                random: {
                enable: false,
                minimumValue: 0.1,
                },
                value: 1,
            },
            },
            enable: false,
            mode: 'bounce',
            overlap: {
            enable: true,
            retries: 0,
            },
        },
        color: {
            value: '#3B82F6',
            animation: {
            h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
            },
            s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
            },
            l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
            },
            },
        },
        destroy: {
            mode: DestroyMode.none,
            split: {
            count: 1,
            factor: {
                random: {
                enable: false,
                minimumValue: 0,
                },
                value: 3,
            },
            rate: {
                random: {
                enable: false,
                minimumValue: 0,
                },
                value: {
                min: 4,
                max: 9,
                },
            },
            sizeOffset: true,
            },
        },
        life: {
            count: 0,
            delay: {
            random: {
                enable: false,
                minimumValue: 0,
            },
            value: 0,
            sync: false,
            },
            duration: {
            random: {
                enable: false,
                minimumValue: 0.0001,
            },
            value: 0,
            sync: false,
            },
        },
        links: {
            blink: false,
            color: {
            value: '#3B82F6',
            },
            consent: false,
            distance: 150,
            enable: false,
            frequency: 1,
            opacity: 0.4,
            shadow: {
            blur: 5,
            color: {
                value: '#00ff00',
            },
            enable: false,
            },
            triangles: {
            enable: false,
            frequency: 1,
            },
            width: 1,
            warp: false,
        },
        move: {
            angle: {
            offset: 0,
            value: 90,
            },
            attract: {
            distance: 200,
            enable: false,
            rotate: {
                x: 600,
                y: 1200,
            },
            },
            decay: 0,
            distance: 0,
            direction: 'left',
            drift: 0,
            enable: true,
            gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
            },
            path: {
            clamp: true,
            delay: {
                random: {
                enable: false,
                minimumValue: 0,
                },
                value: 0,
            },
            enable: false,
            },
            outModes: {
            default: 'out',
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
            },
            random: false,
            size: false,
            speed: 6,
            straight: true,
            trail: {
            enable: false,
            length: 10,
            fillColor: {
                value: '#000000',
            },
            },
            vibrate: false,
            warp: false,
        },
        number: {
            density: {
            enable: false,
            area: 800,
            factor: 1000,
            },
            limit: 0,
            value: 100,
        },
        opacity: {
            random: {
            enable: false,
            minimumValue: 0.1,
            },
            value: 0.5,
            animation: {
            count: 0,
            enable: false,
            speed: 1,
            sync: false,
            destroy: 'none',
            minimumValue: 0.1,
            startValue: 'random',
            },
        },
        reduceDuplicates: false,
        rotate: {
            random: {
            enable: false,
            minimumValue: 0,
            },
            value: 0,
            animation: {
            enable: false,
            speed: 0,
            sync: false,
            },
            direction: 'clockwise',
            path: false,
        },
        shadow: {
            blur: 0,
            color: {
            value: '#000000',
            },
            enable: false,
            offset: {
            x: 0,
            y: 0,
            },
        },
        shape: {
            options: {
            star: {
                sides: 5,
            },
            },
            type: 'star',
        },
        size: {
            random: {
            enable: true,
            minimumValue: 1,
            },
            value: {
            min: 1,
            max: 4,
            },
            animation: {
            count: 0,
            enable: false,
            speed: 40,
            sync: false,
            destroy: 'none',
            minimumValue: 0.1,
            startValue: 'random',
            },
        },
        stroke: {
            width: 0,
        },
        twinkle: {
            lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
            },
            particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
            },
        },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        themes: [],
};

export default particles;