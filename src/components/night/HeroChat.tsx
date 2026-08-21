import { FormEvent, useEffect, useRef, useState } from 'react';
import type { Hero } from '../../data/heroes';
import HeroAvatar from './HeroAvatar';
import { MicIcon, SendIcon, SpeakerIcon } from './icons';

/* Ask the hero. No dialogue engine yet: typed questions and mic taps get canned
   in-character replies from `hero.voice`, and the speaker button plays a fake
   clip. Switching heroes clears the log — you are starting a new conversation
   with a different person, not continuing the same one. */

interface Msg {
  from: 'user' | 'hero';
  text: string;
}

export interface HeroChatProps {
  hero: Hero;
  /** Years label used in the placeholder, e.g. "1849". */
  years: string;
  /** Caption for the fake audio clip. */
  clipTitle: string;
}

export default function HeroChat({ hero, years, clipTitle }: HeroChatProps) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [playing, setPlaying] = useState(false);
  const voiceIdx = useRef(0);
  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // A new hero is a new conversation.
  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    voiceIdx.current = 0;
    setMessages([]);
    setTyping(false);
    setListening(false);
    setPlaying(false);
  }, [hero.id]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, listening]);

  const heroReplies = (delay = 900) => {
    setTyping(true);
    later(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { from: 'hero', text: hero.voice[voiceIdx.current++ % hero.voice.length] },
      ]);
    }, delay);
  };

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || typing) return;
    navigator.vibrate?.(8);
    setDraft('');
    setMessages((m) => [...m, { from: 'user', text }]);
    heroReplies();
  };

  const tapMic = () => {
    if (listening || typing) return;
    navigator.vibrate?.([12, 40, 8]);
    setListening(true);
    later(() => {
      setListening(false);
      setMessages((m) => [...m, { from: 'user', text: '(spoken question)' }]);
      heroReplies(700);
    }, 1800);
  };

  const tapAudio = () => {
    navigator.vibrate?.(10);
    setPlaying((p) => {
      if (!p) later(() => setPlaying(false), 6000);
      return !p;
    });
  };

  return (
    <section className="nx-chat" aria-label={`Ask ${hero.name}`}>
      <header className="nx-chat__head">
        <HeroAvatar hero={hero} size="sm" />
        <div>
          <p className="nx-chat__name">Ask {hero.short}</p>
          <p className="nx-chat__sub">questions about {years} · voice or text</p>
        </div>
        <button
          type="button"
          className={`nx-iconbtn${playing ? ' is-on' : ''}`}
          onClick={tapAudio}
          aria-pressed={playing}
          aria-label={playing ? 'Stop the audio clip' : 'Listen to more audio'}
        >
          <SpeakerIcon />
        </button>
      </header>

      {playing && (
        <div className="nx-audio" role="status">
          <span className="nx-audio__bars" aria-hidden="true">
            <i /><i /><i /><i /><i />
          </span>
          0:30 · “{clipTitle}” read by {hero.name}
        </div>
      )}

      <div className="nx-chat__log" ref={logRef}>
        {messages.length === 0 && !typing && !listening && (
          <p className="nx-chat__empty">
            {hero.short} is standing by. Type a question about this chapter, or tap the mic to
            ask aloud.
          </p>
        )}
        {messages.map((m, i) => (
          <p key={i} className={`nx-msg nx-msg--${m.from}`}>{m.text}</p>
        ))}
        {typing && <p className="nx-msg nx-msg--hero nx-msg--typing">{hero.short} is answering…</p>}
        {listening && <p className="nx-msg nx-msg--user nx-msg--typing">listening…</p>}
      </div>

      <form className="nx-chat__row" onSubmit={send}>
        <button
          type="button"
          className={`nx-iconbtn${listening ? ' is-live' : ''}`}
          onClick={tapMic}
          aria-label={`Ask ${hero.name} by voice`}
        >
          <MicIcon />
        </button>
        <input
          className="nx-chat__input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={`Ask ${hero.short} about ${years}…`}
          aria-label={`Ask ${hero.name} a question`}
        />
        <button type="submit" className="nx-iconbtn nx-iconbtn--send" aria-label="Send question">
          <SendIcon />
        </button>
      </form>
    </section>
  );
}
