import { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    let timeout;
    const currentFullText = texts[currentTextIndex];

    if (isTyping && !isPaused) {
      if (displayText.length < currentFullText.length) {
        // Still typing the current text
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else if (!isTyping && !isPaused) {
      if (displayText.length > 0) {
        // Deleting the current text
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Move to the next text
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [texts, currentTextIndex, displayText, isTyping, isPaused, typingSpeed, deletingSpeed, delayBetweenTexts]);

  useEffect(() => {
    console.log('TypingAnimation texts:', texts);
    console.log('Current text index:', currentTextIndex);
    console.log('Display text:', displayText);
  }, [texts, currentTextIndex, displayText]);

  return (
    <span className="typing-animation">
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingAnimation;