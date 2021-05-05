import logo from "./img/herecomesthesun.jpeg";

function App() {
  return (
    <div className="grid grid-cols-4 justify-items-center bg-sun p-4">
      <div className="col-span-4">
        <img
          className="w-full lg:w-1/2 shadow-md mx-auto"
          src={logo}
          alt="Here Comes The Son"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 lg:col-start-2 mx-auto p-4">
        <a
          className="inline-flex items-center h-16 px-4 m-2 text-lg font-bold text-sun transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-white"
          href="https://www.babylist.com/baby-harsha-satyal"
          target="_blank" rel="noreferrer"
        >
          Here's Our Registry!
        </a>
      </div>
      <div className="col-span-4 lg:col-span-2 lg:col-start-2 mx-auto p-8">
        <a
          href="https://www.signupgenius.com/go/30E0A4DA5AA2BAB9-its"
          target="_blank" rel="noreferrer"
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

      <div className="col-span-4 lg:col-span-2 lg:col-start-2 mx-auto p-4 bg-white shadow-md">
        <p className="mb-4">
          Yes, to respect our friends' crazy schedules, we're gonna do this four
          times. Free Zoom allows up to 25 on a screen so we're doing 24 slots
          per shower. We're dorks, we know. Use the Sign Up button above to RSVP.
        </p>
        <p className="mb-4">
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
        Parameters:
        <ul className="list-disc list-inside mb-4">
          <li>Indian.</li>
          <li>Easy for the whites to pronounce.</li>
          <li>Sounds good with "Satyal."</li>
          <li>Short version sounds good.</li>
          <li>Works as a kid and as an adult.</li>
          <li>
            Doesn't need to be too religious. And not too New Agey either.
          </li>
        </ul>
        <p className="mb-4">
          This may come as a surprise because Rajiv is so public, but since
          Harsha is so private, we're not sharing this news broadly, on social
          media, etc. This is a special event and we're inviting you, our
          friends.
        </p>
        <p className="mb-4">
          All kidding aside, thank you for sharing this moment with us. We're
          over the moon.
        </p>
        Us,
        <br />- Harsha + Rajiv
      </div>
    </div>
  );
}

export default App;
