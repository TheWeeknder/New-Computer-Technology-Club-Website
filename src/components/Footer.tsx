export default function Footer() {
  return (
    <footer className="border-t border-white bg-[#1a2d4a]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} CTC Club. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline text-white">
              Privacy
            </a>
            <a href="#" className="hover:underline text-white">
              Terms
            </a>
            <a href="#" className="hover:underline text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}