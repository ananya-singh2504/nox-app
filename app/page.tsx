export default function NoxApp() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#020305]" />

      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,30,50,0.35),transparent_35%)]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden opacity-80">
        {[...Array(180)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8,
            }}
          />
        ))}
      </div>

      {/* Black Hole Atmosphere */}
      <div className="absolute left-1/2 top-[12%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-900/10 blur-3xl" />

      {/* Black Hole */}
      <div className="absolute left-1/2 top-[12%] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_100px_rgba(0,0,0,0.9)] border border-white/[0.04]" />

      {/* Thin Ring */}
      <div
        className="absolute left-1/2 top-[12%] h-[260px] w-[260px] -translate-x-1/2 rounded-full border border-orange-200/10"
        style={{
          transform: 'translateX(-50%) rotateX(75deg)',
        }}
      />

      {/* Earth Horizon */}
      <div className="absolute bottom-[-880px] left-1/2 h-[1800px] w-[1800px] -translate-x-1/2 overflow-hidden rounded-full">

        <div
          className="absolute inset-0 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2400&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 rounded-full bg-black/60" />

        <div className="absolute inset-0 rounded-full border-[10px] border-cyan-100/10 shadow-[0_0_120px_rgba(120,180,255,0.2)]" />
      </div>

      {/* Fog Layers */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-8 md:px-14">

        <div>
          <h1 className="text-xl font-black tracking-[0.5em] text-white/90">
            NOX
          </h1>

          <p className="mt-2 text-[10px] uppercase tracking-[0.45em] text-white/25">
            gravitational archive system
          </p>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/40 md:flex">
          <button className="transition hover:text-white/80">Archive</button>
          <button className="transition hover:text-white/80">Lens</button>
          <button className="transition hover:text-white/80">Scanner</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-40 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="max-w-4xl">

          <p className="mb-8 text-[11px] uppercase tracking-[0.6em] text-white/30">
            cinematic gravitational interface
          </p>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] text-white/92 md:text-[8rem]">
            Beyond
            <br />
            Event Horizon
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl">
            A speculative space-time visualization system inspired by black
            holes, relativistic distortion, and cosmic memory reconstruction.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

            <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]">
              Enter System
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm text-white/70 backdrop-blur-xl transition duration-300 hover:bg-white/[0.06]">
              Open Archive
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-[28px] border border-white/[0.05] bg-white/[0.03] px-8 py-6 backdrop-blur-2xl">

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/25">
              Current System
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white/90">
              Gravitational Archive
            </h2>
          </div>

          <div className="hidden gap-10 text-sm text-white/40 md:flex">
            <div>
              <p className="text-white/20">Status</p>
              <p className="mt-1 text-white/80">Online</p>
            </div>

            <div>
              <p className="text-white/20">Distortion</p>
              <p className="mt-1 text-white/80">Stable</p>
            </div>

            <div>
              <p className="text-white/20">Signals</p>
              <p className="mt-1 text-white/80">Detected</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
