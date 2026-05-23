export default function NoxApp() {
  const modules = [
    {
      title: "Gravity Archive",
      desc: "Explore hidden gravitational remnants across historical cosmic events.",
    },
    {
      title: "Black Hole Lens",
      desc: "Visualize relativistic distortion and space-time lensing.",
    },
    {
      title: "Chirp Lab",
      desc: "Convert gravitational frequencies into immersive audio visualizations.",
    },
    {
      title: "Scanner",
      desc: "Generate speculative temporal reconstruction maps.",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Space Background */}
      <div className="absolute inset-0 bg-[#02040a]" />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Black Hole Glow */}
      <div className="absolute left-1/2 top-[14%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-900/20 blur-3xl" />

      {/* Black Hole */}
      <div className="absolute left-1/2 top-[14%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_120px_rgba(168,85,247,0.35)] border border-white/5" />

      {/* Accretion Ring */}
      <div
        className="absolute left-1/2 top-[14%] h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-orange-300/20"
        style={{
          transform: "translateX(-50%) rotateX(75deg)",
        }}
      />

      {/* Earth Horizon */}
      <div className="absolute bottom-[-650px] left-1/2 h-[1400px] w-[1400px] -translate-x-1/2 rounded-full overflow-hidden">

        {/* Earth Texture */}
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 rounded-full bg-black/45" />

        {/* Atmosphere */}
        <div className="absolute inset-0 rounded-full border-[10px] border-cyan-200/10 shadow-[0_0_120px_rgba(59,130,246,0.35)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-10 py-8">

        <div>
          <h1 className="text-2xl font-black tracking-[0.45em]">
            NOX
          </h1>

          <p className="mt-1 text-xs tracking-[0.35em] text-white/35">
            GRAVITATIONAL SYSTEM
          </p>
        </div>

        <div className="hidden gap-4 md:flex">
          {["Archive", "Lens", "Scanner", "Lab"].map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm backdrop-blur-xl transition duration-300 hover:bg-white/[0.06]"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-40 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="max-w-5xl">

          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-white/45">
            Cinematic Space-Time Interface
          </p>

          <h1 className="text-6xl font-black leading-[0.95] md:text-8xl">
            Beyond The
            <br />
            <span className="text-white/90">
              Event Horizon
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/55">
            An immersive gravitational visualization platform inspired by
            relativistic distortion, black holes, and speculative
            space-time reconstruction.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="rounded-full border border-white/10 bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-[1.03]">
              Launch Interface
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 backdrop-blur-xl transition duration-300 hover:bg-white/[0.08]">
              Open Simulations
            </button>
          </div>
        </div>

        {/* Modules */}
        <div className="mt-24 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-lg font-bold text-white/80">
                0{index + 1}
              </div>

              <h2 className="text-2xl font-bold">
                {module.title}
              </h2>

              <p className="mt-4 leading-relaxed text-white/50">
                {module.desc}
              </p>

              <button className="mt-8 rounded-full border border-white/10 px-5 py-2 text-sm transition duration-300 hover:bg-white/[0.06]">
                Enter Module
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}