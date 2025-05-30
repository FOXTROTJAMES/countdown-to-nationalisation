export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Countdown to Nationalisation. All
          rights reserved.
        </p>
        <p className="text-xs mt-2">
          This site is not affiliated with any official railway operator or
          government body.
        </p>
        <p>
          Built by <span> </span>
          <u>
            <a href="https://jamesrobertsmith.com/">James Smith</a>
          </u>
        </p>
      </div>
    </footer>
  );
}
