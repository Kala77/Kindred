export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 dark:border-slate-800 w-full mt-xxl">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 max-w-[1280px] mx-auto px-6 gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">Kindred</span>
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500 dark:text-slate-500">© 2024 Kindred. Built for community intelligence.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500 dark:text-slate-500 hover:text-[#2D62ED] underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Privacy</a>
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500 dark:text-slate-500 hover:text-[#2D62ED] underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Terms</a>
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500 dark:text-slate-500 hover:text-[#2D62ED] underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Community Guidelines</a>
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500 dark:text-slate-500 hover:text-[#2D62ED] underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
