export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-xs text-white/25 uppercase tracking-widest mb-4">Reach Out</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">Let&apos;s Connect</h1>
        <p className="text-white/40 leading-relaxed mb-12 text-lg">
          Open to senior automation roles, AI integration projects, and federal consulting opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sunnyrenosh@gmail.com"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-medium transition-all duration-200 text-white"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/renosh-sunny-a69048222/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-white/15 hover:border-white/35 rounded-full text-sm font-medium text-white/60 hover:text-white transition-all duration-200"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </main>
  );
}
