import logo from "./img/herecomesthesun.jpeg";

function App() {
  return (
    <div className="grid grid-cols-4 justify-items-center bg-sun p-4">
      <div className="col-span-4">
        <img
          className="w-full rounded-md lg:w-1/2 shadow-xl mx-auto"
          src={logo}
          alt="Here Comes The Son"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 lg:col-start-2 mx-auto p-4 pb-0">
        <a
          className="inline-flex items-center h-16 px-4 m-2 text-lg font-bold text-sun transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-white"
          href="https://www.babylist.com/baby-harsha-satyal"
          target="_blank"
          rel="noreferrer"
        >
          Here's Our Registry!
        </a>
      </div>
      <div className="col-span-4 lg:col-span-2 lg:col-start-2 mx-auto p-8">
        <a
          href="https://www.signupgenius.com/go/30E0A4DA5AA2BAB9-its"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.signupgenius.com/images/sign-up-now2.gif"
            width="250"
            height="45"
            border="0"
            alt="Sign Up!"
          />
        </a>
      </div>

      <div className=" rounded-md col-span-4 opacity-75 lg:col-span-2 lg:col-start-2 mx-auto p-4 bg-white shadow-md">
        <p className="mb-4">
          Because our favorite people are located all over and have insane
          schedules, it's actually several virtual showers on Zoom — you have a
          few days from which to choose.
          <span class="font-bold">Use the Sign Up button above to RSVP.</span>
        </p>
        <p className="mb-4 italic">
          (Please try to sign in from one device. If you know you'll be signing
          in from more than one (e.g., your spouse is traveling), let us know so
          we can ensure you get two slots.)
        </p>
        <p className="mb-4">
          The showers will be like us: short & sweet. 30 minutes. Rajiv will do
          some standup and Harsha will get a word in edgewise at some point.
        </p>
        <p className="mb-4">
          We won't play any games but we do wanna hear if anyone has any boy
          name suggestions.
        </p>
        <span class="font-bold">Parameters:</span>
        <ul className="list-disc list-inside mb-4">
          <li>Indian.</li>
          <li>Easy for the whites to pronounce.</li>
          <li>Sounds good with "Satyal."</li>
          <li>Short version is cool.</li>
          <li>Works as a kid and as an adult.</li>
          <li>Doesn't have to be too religious.</li>
          <li>
            And not too New Agey either.We dislike most names, and if your kid's
            is too New Agey, we're preventing our kid from playing with yours.
          </li>
        </ul>
        <p className="mb-4">
          This may come as a surprise since Rajiv's so public, but since
          Harsha's so private (Wouldn't you be if you married Rajiv?), we're not
          sharing this news broadly, on social media, etc. This is a special
          event and we're inviting you, our friends.
        </p>
        <p className="mb-4">
          All kidding aside, thank you for sharing this moment with us. We're
          over the moon. And the sun.
        </p>
        Us,
        <br />- Harsha + Rajiv
      </div>
    </div>
  );
}

export default App;
