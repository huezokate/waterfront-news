import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../styles/directions.css';
import '../styles/night.css';
import { YERBA_BUENA_EVENTS } from '../data/nightYerbaBuena';
import { asset } from '../lib/asset';
import { useCameraFocus, useScrollReveal } from '../lib/nightFx';
import ScrollProgress from '../components/ScrollProgress';

/* Chapter page — Direction D prototype: living plate ("video"), the 30-second
   script, and a mocked guide conversation. No dialogue engine yet: typed
   questions and mic taps get canned in-character replies; the audio button
   plays a fake clip. */

const MicIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);
const SpeakerIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6.5 9H3v6h3.5L11 19V5z" />
    <path d="M15 9.5a4 4 0 0 1 0 5M17.5 7a7.5 7.5 0 0 1 0 10" />
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

interface Msg {
  from: 'user' | 'guide';
  text: string;
}

export default function NightEvent() {
  const { id } = useParams();
  const idx = YERBA_BUENA_EVENTS.findIndex((e) => e.id === id);
  const ev = idx === -1 ? null : YERBA_BUENA_EVENTS[idx];

  const rootRef = useScrollReveal(true);
  useCameraFocus(true, rootRef);

  const [paused, setPaused] = useState(false);
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

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, listening]);

  if (!ev) return <Navigate to="/night/yerba-buena" replace />;
  const prev = YERBA_BUENA_EVENTS[(idx + YERBA_BUENA_EVENTS.length - 1) % YERBA_BUENA_EVENTS.length];
  const next = YERBA_BUENA_EVENTS[(idx + 1) % YERBA_BUENA_EVENTS.length];
  const firstName = ev.guide.name.split(' ').slice(-1)[0];

  const guideReplies = (delay = 900) => {
    setTyping(true);
    later(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { from: 'guide', text: ev.voice[voiceIdx.current++ % ev.voice.length] },
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
    guideReplies();
  };

  const tapMic = () => {
    if (listening || typing) return;
    navigator.vibrate?.([12, 40, 8]);
    setListening(true);
    later(() => {
      setListening(false);
      setMessages((m) => [...m, { from: 'user', text: '(spoken question)' }]);
      guideReplies(700);
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
    <div className="dx dx--d nx" ref={rootRef}>
      <ScrollProgress />
      <div className="dx-page">
        <nav className="dx-bar" aria-label="Chapter">
          <Link to="/night/yerba-buena">← All chapters</Link>
          <span>Chapter {idx + 1} of {YERBA_BUENA_EVENTS.length}</span>
        </nav>

        <header className="nx-head">
          <p className="nx-head__years">{ev.years}</p>
          <h1 className="nx-head__title">{ev.title}</h1>
          <p className="nx-head__byline">
            told by <strong>{ev.guide.name}</strong> · {ev.guide.role}
          </p>
        </header>

        <figure className="nx-video dx-reveal">
          <button
            type="button"
            className={`nx-video__frame${paused ? ' is-paused' : ''}`}
            onClick={() => {
              navigator.vibrate?.(8);
              setPaused((p) => !p);
            }}
            aria-pressed={paused}
            aria-label={paused ? 'Play the plate animation' : 'Pause the plate animation'}
          >
            <img src={asset(ev.image)} alt={`${ev.title}, ${ev.years}`} />
            <span className="nx-video__chip">{paused ? 'paused' : '30 sec · plate in motion'}</span>
          </button>
          <figcaption className="nx-video__caption">
            Prototype: the 3-second plate animation stands in for the finished video.
          </figcaption>
        </figure>

        <article className="dx-article dx-reveal">
          <p className="dx-dateline">{ev.years} — {ev.title}</p>
          {ev.script.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <span className="dx-end" aria-hidden="true">⁂</span>
        </article>

        <section className="nx-chat dx-reveal" aria-label={`Ask ${ev.guide.name}`}>
          <header className="nx-chat__head">
            <span className="nx-chat__avatar" aria-hidden="true">
              {ev.guide.name.replace(/[^A-Z]/g, '').slice(0, 2)}
            </span>
            <div>
              <p className="nx-chat__name">Ask {firstName}</p>
              <p className="nx-chat__sub">questions about {ev.years} · voice or text</p>
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
              0:30 · “{ev.title}” read by {ev.guide.name}
            </div>
          )}

          <div className="nx-chat__log" ref={logRef}>
            {messages.length === 0 && !typing && !listening && (
              <p className="nx-chat__empty">
                {firstName} is standing by. Type a question about this chapter, or tap the mic
                to ask aloud.
              </p>
            )}
            {messages.map((m, i) => (
              <p key={i} className={`nx-msg nx-msg--${m.from}`}>{m.text}</p>
            ))}
            {typing && <p className="nx-msg nx-msg--guide nx-msg--typing">{firstName} is answering…</p>}
            {listening && <p className="nx-msg nx-msg--user nx-msg--typing">listening…</p>}
          </div>

          <form className="nx-chat__row" onSubmit={send}>
            <button
              type="button"
              className={`nx-iconbtn${listening ? ' is-live' : ''}`}
              onClick={tapMic}
              aria-label={`Ask ${ev.guide.name} by voice`}
            >
              <MicIcon />
            </button>
            <input
              className="nx-chat__input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Ask ${firstName} about ${ev.years}…`}
              aria-label={`Ask ${ev.guide.name} a question`}
            />
            <button type="submit" className="nx-iconbtn nx-iconbtn--send" aria-label="Send question">
              <SendIcon />
            </button>
          </form>
        </section>

        <nav className="dx-foot" aria-label="More chapters">
          <Link to={`/night/yerba-buena/${prev.id}`}>← {prev.title}</Link>
          <Link to={`/night/yerba-buena/${next.id}`}>{next.title} →</Link>
        </nav>
      </div>
    </div>
  );
}
