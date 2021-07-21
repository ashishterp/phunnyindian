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
          Registry
        </a>
      </div>

      <div className=" rounded-md col-span-4 opacity-75 lg:col-span-2 lg:col-start-2 mx-auto p-4 bg-white shadow-md">
        <p className="mb-4">Dear Friends-</p>
        <p className="mb-4">
          We just had to share this news with you personally. Well, as
          personally as a mass message feels. Basically, we couldn't let you
          just find out on Facebook.
        </p>
        <p className="mb-4">
          Speaking of which, this may come as a surprise since Rajiv's so
          public, but since Harsha's so private (Wouldn't you be if you married
          Rajiv?), we're not sharing this news on social media until our baby
          boy actually arrives, hopefully on 12 August.
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
