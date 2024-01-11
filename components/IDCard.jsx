export default function IDCard() {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg px-2"
        src="/img.avif"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Bapuji Institute of Engineering and Technology
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <b>Name: </b> Vachan
          <br />
          <b>Role: </b> Student
          <br />
          <b>USN: </b> 4BD22CB036
          <br />
        </p>
        <div className="align-end items-end">
          <hr />
          <small>If this ID card is found, please return to BIET DVG</small>
        </div>
      </div>
    </div>
  );
}
