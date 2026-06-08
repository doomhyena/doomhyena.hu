import { useEffect, useMemo, useState } from "react";

interface TypingTextProps {
  phrases: string[];
  className?: string;
}

function getNextPhraseIndex(length: number, currentIndex: number) {
  if (length <= 1) {
    return 0;
  }

  let nextIndex = currentIndex;

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
}

export function TypingText({ phrases, className }: TypingTextProps) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (safePhrases.length === 0) {
      return;
    }

    const currentPhrase = safePhrases[phraseIndex] ?? "";

    const delay = !isDeleting && visibleText === currentPhrase
      ? 1600
      : isDeleting
        ? 30
        : 70;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, visibleText.length + 1);
        setVisibleText(nextText);

        if (nextText === currentPhrase) {
          setIsDeleting(true);
        }

        return;
      }

      const nextText = currentPhrase.slice(0, Math.max(0, visibleText.length - 1));
      setVisibleText(nextText);

      if (nextText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => getNextPhraseIndex(safePhrases.length, currentIndex));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, safePhrases, visibleText]);

  if (safePhrases.length === 0) {
    return null;
  }

  return (
    <span className={className}>
      {visibleText}
      <span className="ml-1 inline-block h-[1em] w-[0.08em] bg-[var(--accent)] align-middle animate-pulse" />
    </span>
  );
}
