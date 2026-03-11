import { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  target: string;
  suffix?: string;
}

export function AnimatedNumber({ target, suffix = '' }: AnimatedNumberProps) {
  const [val, setVal] = useState<number | string>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    if (isNaN(num)) {
      setVal(target);
      return;
    }
    let start = 0;
    const step = Math.max(1, Math.floor(num / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setVal(num);
        clearInterval(timer);
      } else {
        setVal(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <span ref={ref}>
      {typeof val === 'number' ? val.toLocaleString() + suffix : val}
    </span>
  );
}
