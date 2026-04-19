export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white px-6 py-12 flex flex-col items-center gap-6">
      <div className="text-3xl">
        <span className="font-bold">Keen</span>
        <span className="font-normal">Keeper</span>
      </div>

      <p className="text-teal-300 text-sm text-center max-w-md">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-medium">Social Links</p>
        <div className="flex items-center gap-3">
          {/* Instagram manually */}
          <button className="w-9 h-9 rounded-full border border-teal-600 flex items-center justify-center hover:bg-teal-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </button>

          {/* Facebook manullay */}
          <button className="w-9 h-9 rounded-full border border-teal-600 flex items-center justify-center hover:bg-teal-800 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </button>

          {/* X / Twitter manually */}
          <button className="w-9 h-9 rounded-full border border-teal-600 flex items-center justify-center hover:bg-teal-800 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full border-t border-teal-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-teal-400 max-w-4xl">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Cookies</button>
        </div>
      </div>
    </footer>
  );
}