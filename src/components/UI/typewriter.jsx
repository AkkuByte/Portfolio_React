import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GsapTypewriter = ({ words = ["MERN Developer", "UI/UX Designer", "Problem Solver"] }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    // Create a master timeline that loops infinitely
    const tl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      // Local state for character count tracking
      const state = { charCount: 0 };

      // 1. Typing: animates character index from 0 to word.length (first to last)
      tl.to(state, {
        charCount: word.length,
        duration: word.length * 0.08, // Dynamic duration based on length for constant speed
        ease: "none",
        onUpdate: () => {
          if (textRef.current) {
            textRef.current.textContent = word.slice(0, Math.ceil(state.charCount));
          }
        }
      })
      // 2. Pause to read the word
      .to({}, { duration: 1.5 })
      // 3. Backspacing: animates character index from word.length back to 0 (last to first)
      .to(state, {
        charCount: 0,
        duration: word.length * 0.04, // Deletes twice as fast as typing
        ease: "none",
        onUpdate: () => {
          if (textRef.current) {
            textRef.current.textContent = word.slice(0, Math.ceil(state.charCount));
          }
        }
      })
      // 4. Short pause before typing the next word
      .to({}, { duration: 0.4 });
    });
  }, { dependencies: [words] });

  return (
    <span className="typewriter-container" style={{ display: 'inline-flex', alignItems: 'center' }}>
      {/* Dynamic style block to keep the blinking cursor self-contained */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typed-cursor {
          animation: cursorBlink 0.8s infinite;
          color: var(--accent-green, #21b519);
          margin-left: 3px;
          font-weight: 600;
          font-size: 4rem;
        }
        .typed-text {
        font-size: 4rem;
          font-weight: 600;
          color: var( --accent-green, #ffffff);
        }
      `}</style>
      
      <span ref={textRef} className="typed-text"></span>
      <span className="typed-cursor">|</span>
    </span>
  );
};

export default GsapTypewriter;