import Envelope from './components/Envelope';
import './Yes.css';

const Yes = () => {
  // Gifts inside the envelopes
  const messages = [
    'You get massage this evening.',
    'You can choose the movie we are watching.',
    'I cook three course dinner.',
  ];

  const envelopes = messages.map((message, index) => (
    <div key={index} className="flex flex-col items-center">
      <Envelope id={index}>{message}</Envelope>
      <p className="text-slate-100 mb-2 text-2xl">
        {['For today', 'Anytime', 'Romantic time!'][index]}
      </p>
    </div>
  ));
  return (
    <>
      <div className="bg-red-950 w-screen flex flex-col justify-center">
        <div className="bg-black pt-14 pb-11 mx-4 md:mx-24 md:my-20 my-10 rounded-3xl shadow-2xl opacity-70 shadow-red-600">
          <div>
            <h1 className="text-slate-100 md:text-5xl text-3xl text-center red-shadow">
              Happy Valentine's Day!
            </h1>
            <p className="text-slate-100 text-center mt-10 text-xl ">
              This Valentines you will get tickets to use when you want to.
              Remember you can only use them once, so choose wisely!
            </p>
          </div>
          <div className="envelopes-container flex justify-center flex-col xl:flex-row gap-4 mt-4">
            {envelopes}
          </div>
        </div>
      </div>
    </>
  );
};
export default Yes;
