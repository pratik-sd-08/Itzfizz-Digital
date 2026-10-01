import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="bg-zinc-950 text-stone-100">
      <Hero />
      <section className="min-h-screen bg-stone-100 px-[7vw] py-32 text-zinc-950 md:py-48">
        <div className="max-w-5xl">
          <p className="mb-7 font-mono text-[10px] tracking-[0.24em] text-zinc-500">
            ITZFIZZ DIGITAL / CONTINUE
          </p>
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-extrabold leading-[.88] tracking-[-.07em]">
            Scroll further.
            <br />
            Build something memorable.
          </h2>
          <p className="mt-10 max-w-xl text-sm leading-8 text-zinc-500">
            The hero stays intentionally minimal after the core interaction so
            the scroll-driven motion remains the focus of the assignment.
          </p>
          <a
            href="#top"
            className="mt-10 inline-block border-b border-zinc-950 pb-1 font-mono text-[10px] tracking-[.16em]"
          >
            BACK TO TOP ↗
          </a>
        </div>
      </section>
    </main>
  );
}