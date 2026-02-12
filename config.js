// ============================================
// 💝 customize your valentine's website here 💝
// ============================================

const CONFIG = {
    // valentine's name (shown as just "grace")
    valentineName: "grace, my baby boo 🥹",

    // browser tab title
    pageTitle: "will you be my valentine on february 14th, 2026? 😁",

    // floating emojis (only the ones you requested)
    floatingEmojis: {
        hearts: ['😁', '🥰', '❤️', '😽'],
        bears: ['💩', '🤮', '🥀', '👹', '🤢', '😺']
    },

    // questions (all lowercase as requested)
    questions: {
        first: {
            text: "do you like me?",
            yesBtn: "yes",
            noBtn: "no",
            secretAnswer: "i don't like u, i love u, also ur way more nonchalant than me"
        },
        second: {
            text: "how much do you love me?",
            startText: "hint: find the second-degree Taylor polynomial P₂(1) for f(x) = 60e^(x-1) + 7x centered at a = 1.",
            nextBtn: "next ❤️"
        },
        third: {
            text: "will you be my valentine on february 14th, 2026? 😁",
            yesBtn: "yes",
            noBtn: "no"
        }
    },

    // love meter messages (you can keep these fun)
    loveMessages: {
        extreme: "okayyy that's kinda insane but i respect it 🥰",
        high: "67% or more? interesting 😏",
        normal: "not enough. keep sliding."
    },

    // celebration message when she presses yes on final question
    celebration: {
        title: "also btw, pls shower before we go out 🤢🤢🤢",
        message: "YAYYY estoy muy feliz",
        emojis: "🥰🥰🥰"
    },

    // colors (unchanged unless you want different ones)
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // animations
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // music (kept same for now like you said)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dsydoyvje/video/upload/v1770875318/private_j6alpw.mp3",
        startText: "🎵 play music",
        stopText: "🔇 stop music",
        volume: 0.5
    }
};

// don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
