import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SkillsBlock</title>
        <meta name="description" content="SkillsBlock Link Tree" />
        <meta name="keywords" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div
          className="
          flex flex-col
          bg-gradient-to-r font-bold from-[#DE2287] to-[#F24C1D]
          shadow-lg
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
        >
          <img
            className="object-cover pt-4 w-32 self-center object-center rounded"
            alt="hero"
            src="https://i.imgur.com/wz3DND1.png"
          />
          <div className="font-semibold self-center text-xl pt-4 sm:text-3xl text-white">
            Connect with SkillsBlock!
          </div>

          <div className="mt-8 flex flex-col mb-5">
            <button
              type="button"
              className="py-2 px-4 flex justify-left text-lg items-center bg-white hover:bg-[#2C2F33] text-black focus:ring-gray-700 focus:ring-offset-gray-500 hover:text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 71 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="#5865F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Join the Discord
            </button>
            <button
              type="button"
              className="py-2 px-4 mt-3 flex justify-left items-center text-lg bg-white  hover:bg-[#1d5172]  focus:ring-gray-700 focus:ring-offset-gray-500 hover:text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                className="mr-3"
                width="20"
                height="20"
              >
                <path
                  d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z"
                  fill="#1da1f2"
                />
              </svg>
              Follow on Twitter
            </button>
            <button
              type="button"
              className="py-2 px-4 mt-3 flex justify-left items-center text-lg bg-white hover:bg-[#851313] focus:ring-gray-700 focus:ring-offset-gray-500 hover:text-white  text-black w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                width="20"
                height="20"
                className="mr-3"
              >
                <path
                  d="M329930 100020s-3254-22976-13269-33065c-12691-13269-26901-13354-33397-14124-46609-3396-116614-3396-116614-3396h-122s-69973 0-116608 3396c-6522 793-20712 848-33397 14124C6501 77044 3316 100020 3316 100020S-1 126982-1 154001v25265c0 26962 3315 53979 3315 53979s3254 22976 13207 33082c12685 13269 29356 12838 36798 14254 26685 2547 113354 3315 113354 3315s70065-124 116675-3457c6522-770 20706-848 33397-14124 10021-10089 13269-33090 13269-33090s3319-26962 3319-53979v-25263c-67-26962-3384-53979-3384-53979l-18 18-2-2zM132123 209917v-93681l90046 46997-90046 46684z"
                  fill="red"
                />
              </svg>
              Subsribe on Youtube
            </button>
            <button
              type="button"
              className="py-2 px-4 mt-3 flex justify-left items-center text-lg  bg-white hover:bg-black focus:ring-gray-700 focus:ring-offset-gray-500 text-black hover:text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 293768 333327"
                width="20"
                height="20"
                fill="currentColor"
                className="mr-3"
              >
                <path
                  d="M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z"
                  fill="#26f4ee"
                />
                <path
                  d="M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z"
                  fill="#fb2c53"
                />
                <path d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z" />
              </svg>
              Follow on TikTok
            </button>
            <button
              type="button"
              className="py-2 px-4 flex mt-3 justify-left items-center bg-white hover:bg-[#0A66C2] focus:ring-gray-700 focus:ring-offset-gray-500 hover:text-white text-black w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="mr-3"
                viewBox="0 0 640 640"
              >
                <path d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z" />
              </svg>
              Connect on LinkedIn
            </button>
            <button
              type="button"
              className="py-2 px-4 flex mt-3 justify-left items-center  hover:bg-[#1DB954] bg-white focus:ring-gray-700 focus:ring-offset-gray-500 hover:text-white text-black w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
              </svg>
              Listen on Spotify
            </button>
            <button
              type="button"
              className="py-2 px-4 flex mt-3 justify-left items-center  hover:bg-blue-500 bg-white hover:text-white focus:ring-gray-700 focus:ring-offset-gray-500 text-black w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="mr-3"
                viewBox="0 0 14222 14222"
              >
                <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
                <path
                  d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                  fill="#fff"
                />
              </svg>
              Like on Facebook
            </button>
            <button
              type="button"
              className="py-2 px-4 flex mt-3 justify-left items-center bg-white hover:bg-gradient-to-r from-[#515BD4] via-[#8134AF] to-[#DD2A7B] focus:ring-gray-700 focus:ring-offset-gray-500 hover:text-white text-black w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="mr-3"
                viewBox="0 0 122.88 122.88"
              >
                <path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z" />
              </svg>
              Follow on Instagram
            </button>
            <button
              type="button"
              className="py-2 px-4 flex mt-3 justify-left items-center  hover:bg-[#e53a45] bg-white hover:text-white focus:ring-gray-700 focus:ring-offset-gray-500 text-black w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 107.47 122.88"
              >
                <defs></defs>
                <title>computer-user</title>
                <path
                  class="cls-1"
                  d="M53.67,108.33a5.6,5.6,0,1,1-5.59,5.6,5.6,5.6,0,0,1,5.59-5.6ZM39.3,76.42c7.28,8.18,23.77,6.74,29.86,0a56.89,56.89,0,0,1-4.22-5.7l-.84-1.22a17.5,17.5,0,0,1-10.13,3,17,17,0,0,1-11.08-4c-.83,2.48-2,5.89-3.22,7.52a1.8,1.8,0,0,1-.37.36ZM10,90.92a4,4,0,0,0-3.73,4.66l3.53,27.3h-9c0-14.58-5.17-32.46,10.09-41,5.68-3.17,20.32-4.24,26.7-8.43a54.08,54.08,0,0,0,2.71-7.08c.07-.22-.05.14.06-.19a56,56,0,0,1-6.1-8.43L29,49.42c-1.93-2.87-2.93-5.5-3-7.65A6,6,0,0,1,26.57,39a5.07,5.07,0,0,1,1.81-2.1,6.58,6.58,0,0,1,1.27-.65,133.75,133.75,0,0,1-.25-15,20.68,20.68,0,0,1,.65-3.41C32,11,37.89,6,44.65,3.66,47.93,2.53,46.66-.17,50,0c7.86.43,20,5.49,24.63,10.86,6.52,7.52,4.84,16.78,4.62,26h0A3.83,3.83,0,0,1,82,39.69c.42,1.66,0,4-1.45,7.19h0s0,.11-.09.17l-6,9.87c-2.31,3.81-4.66,7.62-7.79,10.56l-.16.14,1,1.4c1,1.53,2.22,3.27,3.32,4.63,6.52,4,20.85,5.14,26.46,8.26,14,7.82,9.23,27.13,10,41H98.38l3.53-27.3a4,4,0,0,0-3.73-4.66ZM32.68,38.71A5.25,5.25,0,0,0,30,39.4a2.2,2.2,0,0,0-.76.88A3.23,3.23,0,0,0,29,41.69c.05,1.6.89,3.69,2.51,6.1l0,0h0l5.26,8.37c2.11,3.35,4.33,6.77,7.07,9.28A14.45,14.45,0,0,0,54,69.55a14.88,14.88,0,0,0,10.68-4.24c2.84-2.66,5.07-6.29,7.28-9.93l5.92-9.76c1.11-2.52,1.51-4.21,1.26-5.19-.15-.59-.8-.88-1.91-.94q-.36,0-.72,0a8,8,0,0,0-.83,0,1.75,1.75,0,0,1-.46,0,8.09,8.09,0,0,1-1.62-.09l2-9c-15.06,2.37-26.33-8.82-42.25-2.24L34.5,38.79a9,9,0,0,1-1.82-.08Z"
                />
              </svg>
              Visit our Website
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div
            href="#"
            target="_blank"
            className="
            inline-flex
            items-center
            text-gray-800
            font-semibold
            text-lg text-center
          "
          >
            <span className="ml-2">
              Need help?
              <a
                href="#"
                className="text-m ml-2 bg-gradient-to-r font-bold from-[#DE2287] to-[#F24C1D] bg-clip-text text-transparent "
              >
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
