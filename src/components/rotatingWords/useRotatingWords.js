import { useEffect } from "react";

const useRotatingWords = () => {
    useEffect(() => {
        const words = document.querySelectorAll(".word");
        if (!words.length) return; // Ensure words exist

        words.forEach((word) => {
            const letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach((letter) => {
                const span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        const maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";

        const rotateText = () => {
            const currentWord = words[currentWordIndex];
            const nextWord =
                currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });

            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });

            currentWordIndex =
                currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };

        rotateText();
        const interval = setInterval(rotateText, 4000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
};

export default useRotatingWords;
