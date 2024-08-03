export const Layout = () => {
  const content = `
    Use this area to speak to your mission. I’m a research scientist
    in the Moonshot team at DeepMind. I blog about machine learning,
    deep learning, and moonshots.
    I apply a range of qualitative and quantitative methods
    to comprehensively investigate the role of science and
    technology in the economy.
    Please reach out to collaborate. Im taking into account Solid
    Matter Theory`;

  return (
    <div className="my-backround">
      <div className="bg-[#F8FAFC] py-4 text-center dark:bg-[#1F2937]">
        <div>
          <div className="mx-10 items-center justify-center space-y-20">
            <h1 className="text-center text-4xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-4 inline-block size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              My Research
            </h1>
            <p className="mb-4 text-center text-xl">
              <svg
                fill="#000000"
                height="200px"
                width="200px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 30.39 30.39"
                xmlSpace="preserve"
                stroke="#000000"
                stroke-width="0.00030393000000000005"
                className="mb-2 inline-block size-6 items-baseline justify-center"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M20.842,6.723V5.775H9.553v0.947c0,0,1.717,4.781,4.939,6.988v2.297c0,0-3.554,3.459-4.939,7.434v1.084h11.288v-1.084 c-1.801-4.389-4.939-7.434-4.939-7.434V13.71C20.284,9.945,20.842,6.723,20.842,6.723z"></path>{" "}
                    <path d="M24.91,4.963V3.256h1.619V0H3.864v3.256h1.621v1.707c0,2.607,4.677,9.725,4.896,10.238 c-0.215,0.514-4.896,7.633-4.896,10.229v1.705H3.864v3.258h22.665v-3.258H24.91V25.43c0-2.607-4.679-9.68-4.929-10.234 C20.231,14.643,24.91,7.568,24.91,4.963z M23.293,25.43v1.705H7.103V25.43c0-1.873,4.96-9.295,4.96-10.234s-4.96-8.359-4.96-10.232 V3.256h16.189v1.707c0,1.873-5.002,9.293-5.002,10.232S23.293,23.557,23.293,25.43z"></path>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g>{" "}
                  </g>{" "}
                </g>
              </svg>{" "}
              Estimated reading time:
            </p>
            <div className="m-auto size-fit text-left text-2xl">
              <a className="space-y-4">{content}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
