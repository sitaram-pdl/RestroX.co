import React, { useState, useRef } from "react";
import styles from "./NotesNavigate.module.css";
import cx from "classnames";
import NotesCard from "./NotesCard";
import NotesHeader from "./NotesHeader";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import { BiBellPlus, BiUserPlus } from "react-icons/bi";
import { AiOutlinePicture, AiOutlineCheckSquare } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { CalendarIcon } from "@heroicons/react/outline";
import { Checkbox } from "antd";
import Masonry from "react-masonry-css";

const NotesNavigate = () => {
  const modalImageRef = useRef(null);
  const [modalImage, setModalImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectModalColor, setSelectModalColor] = useState(false);
  const [modalBellInfo, setModalBellInfo] = useState(false);
  const [modalAssignInfo, setModalAssignInfo] = useState(false);
  const [modalImageInfo, setModalImageInfo] = useState(false);
  const [modalCheckBoxInfo, setModalCheckBoxInfo] = useState(false);
  const [showRemainderModal, setShowRemainderModal] = useState(false);
  const [openAssign, setOpenAssign] = useState(false);
  const [remindDay, setRemindDay] = useState(3);
  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState(false);
  const [modalPinInfo, setModalPinInfo] = useState(false);
  const [modalMoreInfo, setModalMoreInfo] = useState(false);

  const addModalImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setModalImage(readerEvent.target.result);
    };
  };

  const selectedFromList = () => {
    setOpenAssign(false);
    setOpenAssign(false);
  };

  const bodyClicked = () => {
    setIsCheckBoxClicked(false);
  };

  const breakpoints = {
    default: 6,
    640: 2,
    768: 3,
    1024: 4,
    1280: 5,
  };

  const colorPalette = [
    { color: "white" },
    { color: "red" },
    { color: "#865439" },
    { color: "#C68B59" },
    { color: "#FCDEC0" },
    { color: "#297F87" },
    { color: "#F6D167" },
    { color: "#DF2E2E" },
    { color: "#464660" },
    { color: "#B4B897" },
    { color: "#B4B897" },
    { color: "#F6D167" },
    { color: "#DF2E2E" },
    { color: "#464660" },
    { color: "#B4B897" },
    { color: "#B4B897" },
  ];

  const dummyCheckBoxList = [
    { name: "Choclate Chips" },
    { name: "Gingerbread" },
    { name: "Oatmeal raisin" },
    { name: "Peanut Butter" },
  ];

  const dummyUserLists = [
    {
      name: "Elon Musk",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      line: "First line",
    },
    {
      name: "Jeff Bezos",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
      line: "First line",
    },
    {
      name: "Mark",
      image:
        "https://pbs.twimg.com/profile_images/378800000639973627/f5513282d87d24168fd8f83daf7ebca0.jpeg",
      line: "First line",
    },
  ];

  const remainderModal = (
    <div className="text-white">
      {/* Modal Header */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-white mt-2">Remainder</h1>
      </div>

      {/* Modal Body */}
      <div className="mt-10 flex space-x-10">
        {/* Date */}
        <div className="ml-4">
          <p
            style={{ marginLeft: "12px" }}
            className="text-sm text-gray-400 font-bold mb-0"
          >
            Date
          </p>
          <div className="flex ml-2 border px-2 py-2.5 w-max rounded-lg text-xs mt-2 ">
            <input
              placeholder="07/03/2021"
              className="bg-transparent focus:outline-none"
              type="text"
            />
            <CalendarIcon className="h-5" />
          </div>
        </div>

        {/* Remind in */}
        <div className="">
          <p className="ext-sm text-gray-400 font-bold ">Remind in</p>
          <div className="flex space-x-4">
            <div
              style={{ marginTop: "-10px" }}
              className="border w-max px-4 rounded-lg"
            >
              <p className="font-semibold text-gray-400 mt-2">3</p>
            </div>
            <p className="font-semibold text-md text-gray-300">
              day of advance.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Margin Line */}
      <div className="border w-11/12 mx-auto mt-20" />

      {/* Footer Buttons */}
      <div style={{ marginLeft: "250px" }} className="space-x-4 mt-4 ">
        <button
          onClick={() => setShowRemainderModal(false)}
          className="text-white bg-transparent py-1 px-10 rounded-lg border border-white border-opacity-10 font-bold focus:outline-none cursor-pointer"
        >
          Cancle
        </button>
        <button
          onClick={() => setShowRemainderModal(false)}
          className="text-white bg-red-600 py-1 px-10 rounded-lg font-bold focus:outline-none cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );

  const textModal = (
    <div>
      {/* Modal Header */}
      <div className="flex justify-between">
        {/* Header left */}
        <div>
          <input
            className="bg-transparent focus:outline-none text-white text-xl font-bold"
            type="text"
            placeholder="Title"
          />
        </div>

        {/* Header Right */}
        <div className="flex space-x-2">
          <div
            onMouseLeave={() => setModalPinInfo(false)}
            onMouseEnter={() => setModalPinInfo(true)}
            className="cursor-pointer"
          >
            <svg
              width="25"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M12.1049 5.5925L20.422 5.5925C20.953 5.59256 21.4763 5.7188 21.9489 5.9608C22.4215 6.2028 22.8299 6.55364 23.1403 6.98441C23.4508 7.41518 23.6544 7.91355 23.7344 8.43846C23.8145 8.96336 23.7687 9.49977 23.6008 10.0035L21.5025 16.2981C21.4267 16.5249 21.4428 16.7724 21.5473 16.9875L23.8963 21.8181C24.0092 22.0503 24.0613 22.3074 24.0476 22.5652C24.0339 22.8231 23.9549 23.0732 23.818 23.2921C23.6811 23.511 23.4908 23.6915 23.265 23.8167C23.0392 23.9419 22.7853 24.0076 22.5271 24.0077L17.1777 24.0077L17.1768 31.6587L16.2635 32.572L15.3501 31.6587L15.3501 24.0068L9.99982 24.0077C9.74144 24.0078 9.48728 23.9422 9.26124 23.817C9.0352 23.6919 8.84471 23.5113 8.70769 23.2922C8.57067 23.0732 8.49163 22.8229 8.47799 22.5648C8.46435 22.3068 8.51657 22.0496 8.62973 21.8173L10.9787 16.9866C11.0833 16.7719 11.0997 16.5248 11.0244 16.2981L8.92616 10.0035C8.75805 9.49965 8.7121 8.96307 8.79212 8.43798C8.87213 7.9129 9.07581 7.41435 9.38637 6.98345C9.69692 6.55255 10.1054 6.20164 10.5783 5.95965C11.0511 5.71766 11.5746 5.59152 12.1058 5.59164L12.1049 5.5925ZM20.422 7.41928L12.1049 7.41928C11.8636 7.41928 11.6256 7.47664 11.4108 7.58664C11.1959 7.69664 11.0103 7.85613 10.8691 8.05195C10.728 8.24778 10.6354 8.47435 10.599 8.71297C10.5627 8.9516 10.5835 9.19545 10.6599 9.42444L12.759 15.72C12.9854 16.4 12.9365 17.1418 12.6228 17.7863L10.4867 22.1801L22.0411 22.1792L19.9032 17.7872C19.59 17.1428 19.5415 16.4014 19.768 15.7217L21.867 9.42444C21.9434 9.19545 21.9642 8.9516 21.9279 8.71297C21.8915 8.47435 21.7989 8.24778 21.6578 8.05195C21.5167 7.85612 21.331 7.69664 21.1162 7.58664C20.9013 7.47664 20.6634 7.41928 20.422 7.41928Z"
                fill="white"
              />
            </svg>
            {modalPinInfo && (
              <div className="absolute">
                <p
                  style={{ marginTop: "-70px", width: "48px" }}
                  className="absolute text-white bg-background p-1 rounded-md -ml-3"
                >
                  Pin Notes
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none active:scale-90 transition duration-150"
          >
            Save
          </button>
        </div>
      </div>

      {/* Modal Body */}
      <div onClick={bodyClicked} className="mt-2  rounded-lg p-1">
        <textarea
          className="bg-transparent text-white text-sm pl-2 mt-2 focus:outline-none"
          placeholder="Take a note..."
          id=""
          cols="45"
          rows={modalImage ? 8 : 18}
        ></textarea>
        {modalImage && (
          <div className="mt-3 relative">
            <img className="h-40 w-100 mx-auto z-10" src={modalImage} alt="" />
            <div className="absolute top-0 right-0 mt-1">
              <XCircleIcon
                onClick={() => setModalImage("")}
                className="text-white h-5 justify-end mr-10 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Modal Footer */}
      <div className={`ml-10 -mt-1  ${modalImage && "mt-5"}`}>
        <div style={{ marginLeft: "auto" }} className="flex space-x-3">
          <div
            onMouseLeave={() => setModalBellInfo(false)}
            onMouseEnter={() => setModalBellInfo(true)}
            onClick={() => setShowRemainderModal(true)}
            className="cursor-pointer"
          >
            <BiBellPlus
              className="ml-3"
              style={{ color: "white", height: "30px", width: "24px" }}
            />
            {modalBellInfo && (
              <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-4">
                Remind Me
              </p>
            )}
            <p className="text-xs text-gray-400">Reminder</p>
          </div>
          <div
            onMouseLeave={() => setModalAssignInfo(false)}
            onMouseEnter={() => setModalAssignInfo(true)}
            onClick={() => setOpenAssign(true)}
            className="cursor-pointer"
          >
            <BiUserPlus
              className="ml-2"
              style={{ color: "white", height: "30px", width: "24px" }}
            />
            {modalAssignInfo && (
              <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-6">
                Assign Staffs
              </p>
            )}
            {openAssign && (
              <div
                style={{
                  marginTop: "-150px",
                  height: "250px",
                  marginRight: "40px",
                }}
                className="absolute bg-background border border-white border-opacity-10 rounded-md w-11/12 overflow-scroll"
              >
                {/* Search Input Field */}
                <div className="top-5 sticky z-50 bg-background">
                  <div className="mt-4 ml-4 mr-4">
                    <input
                      className="w-screen p-2 bg-secondary rounded-sm text-sm focus:outline-none text-white font-semibold"
                      type="text"
                      placeholder="Search for a person"
                    />
                  </div>
                  <p className="text-sm font-semibold ml-4 mt-2 text-gray-700">
                    Suggested
                  </p>
                </div>

                {/* Suggested staffs list */}
                <div className="overflow-x-scroll">
                  {dummyUserLists.map((list) => (
                    <div onClick={selectedFromList}>
                      <div className="flex items-center space-x-7 hover:bg-listhover rounded-sm w-full -mr-3 group overflow-scroll">
                        {/* Image */}
                        <div className="w-12 ml-3">
                          <img
                            style={{
                              objectFit: "contain",
                              height: "40px",
                              width: "40px",
                            }}
                            className="rounded-full"
                            src={list.image}
                            alt=""
                          />
                        </div>
                        <div className="">
                          {/* Name */}
                          <h1 className="text-xl text-white mt-4">
                            {list.name}
                          </h1>

                          {/* Line */}
                          <p className="text-sm -mt-3 text-gray-600 group-hover:text-white">
                            {list.line}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="text-xs text-gray-400">Assign</p>
          </div>
          <div
            onMouseEnter={() => setSelectModalColor(true)}
            onMouseLeave={() => setSelectModalColor(false)}
            className="cursor-pointer"
          >
            <IoColorPaletteOutline
              onClick={() => setSelectModalColor(true)}
              className="ml-1"
              style={{ color: "white", height: "30px", width: "24px" }}
            />
            <div className="">
              {selectModalColor && (
                <div
                  style={{
                    background: "#16181A",
                    width: "200px",
                    height: "60px",
                    marginTop: "-85px",
                    marginLeft: "-60px",
                  }}
                  className="absolute flex flex-wrap h-10 rounded-md pl-2 z-50"
                >
                  {colorPalette.map(({ color }) => (
                    <button
                      // onMouseLeave={() => setSelectColor(false)}
                      style={{ background: color }}
                      className="h-5 w-5 rounded-full mr-1 mt-1 focus:outline-none"
                    >
                      &nbsp;
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400">Color</p>
          </div>
          <div
            onMouseEnter={() => setModalImageInfo(true)}
            onMouseLeave={() => setModalImageInfo(false)}
            onClick={() => modalImageRef.current.click()}
            className="cursor-pointer"
          >
            <AiOutlinePicture
              className="ml-1"
              style={{ color: "white", height: "30px", width: "24px" }}
            />
            <input
              ref={modalImageRef}
              onChange={addModalImage}
              type="file"
              hidden
            />
            {modalImageInfo && (
              <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-5">
                Add Image
              </p>
            )}
            <p className="text-xs text-gray-400">Photo</p>
          </div>
          <div
            onMouseEnter={() => setModalCheckBoxInfo(true)}
            onMouseLeave={() => setModalCheckBoxInfo(false)}
            onClick={() => setIsCheckBoxClicked(true)}
            className="cursor-pointer"
          >
            <AiOutlineCheckSquare
              className="ml-3"
              style={{
                color: "white",
                height: "30px",
                width: "24px",
              }}
            />
            {isCheckBoxClicked && (
              <div
                style={{ marginTop: "-360px", marginLeft: "-240px" }}
                className="absolute w-full"
              >
                {dummyCheckBoxList.map((checkList) => (
                  <div className="flex space-x-2">
                    <Checkbox />
                    <p className="text-white text-md font-bold">
                      {checkList.name}
                    </p>
                  </div>
                ))}
                <div className="text-gray-400 flex space-x-2">
                  <Checkbox />
                  <p className="text-lg font-bold -mt-1">Check Box</p>
                </div>
              </div>
            )}
            {modalCheckBoxInfo && (
              <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-5">
                Check Box
              </p>
            )}
            <p className="text-xs text-gray-400">Checkbox</p>
          </div>
        </div>
      </div>
    </div>
  );

  const dummyData = [
    {
      title: "Testing",
      note: "Hello World",
      image: [
        {
          pic: "https://world-geography-games.com/pic/home-america1.png",
          pic: "https://www.eluniversal.com.mx/sites/default/files/2019/03/11/climate_change.jpg",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag-map_of_the_world_%281914%29.png/2560px-Flag-map_of_the_world_%281914%29.png",
        },
      ],
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.Lorefacilis facere possimus? Perspiciatis, consequuntur.",
      image: [
        {
          pic: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png",
        },
      ],
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, bero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      title: "Horse",
      note: "Horses are adapted to run, allowing them to quickly escape predators, possessing an excellent sense of balance and a strong fight-or-flight response. Related to this need to flee from predators in the wild is an unusual trait: horses are able to sleep both standing up and lying down, with younger horses tending to sleep significantly more than adults.[4] Female horses, called mares, carry their young for approximately 11 months, and a young horse, called a foal, can stand and run shortly following birth. Most domesticated horses begin training under a saddle or in a harness between the ages of two and four. They reach full adult development by age five, and have an average lifespan of between 25 and 30 years.Horse breeds are loosely divided into three categories based on general temperament: spirited with speed and endurance; , such as draft horses and some ponies, suitable for slow, heavy work; and developed from crosses between hot bloods and cold bloods, often focusing on creating breeds for specific riding purposes, particularly in Europe. There are more than 300 breeds of horse in the world today, developed for many different uses.",
      image: [
        {
          pic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg",
          pic: "https://equimanagement.com/.image/t_share/MTcyNTA2Mjk5MjQ0NzQ5OTA3/tongue-out-horse-head-istock-alexandra-surkova-1192159893-2400.jpg",
          pic: "https://thehorse.com/wp-content/uploads/2017/09/horse-sticking-tongue-out-1280x640.jpg",
        },
      ],
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dol consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos",
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimuo facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      title: "Lorem",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
  ];

  const images = [
    "/images/People.png",
    "/images/People.png",
    "/images/People.png",
  ];

  return (
    <div>
      <div />
      {/* Sizan Rana */}
      <div>
        <div className={cx("overflow-scroll", styles.container)}>
          {/* Header */}
          <div className="sticky top-0 z-50">
            <NotesHeader />
          </div>

          {/* Body */}

          {/* Notes */}
          {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mx-3 auto-cols-fr */}
          <div className="mx-5">
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {dummyData.map(({ title, note, image }) => (
                <NotesCard text={note} title={title} image={image} />
              ))}
            </Masonry>
          </div>

          {/* RenainderModal */}
          {showRemainderModal && (
            <div
              style={{
                width: "550px",
                backgroundColor: "#202326",
                height: "300px",
              }}
              className="absolute top-1/4 left-1/4 z-50 rounded-lg"
            >
              {remainderModal}
            </div>
          )}

          {/* Adding New note */}

          {/* Footer */}
          <div className="-bottom-12 sticky z-20 mr-5 pt-6">
            {/* Adding new notes */}
            {showModal && (
              <div
                style={{ height: " 500px", marginLeft: "auto" }}
                className="bg-secondary max-w-sm p-5 border border-white border-opacity-10 mb-1 mr-2 rounded-md z-40"
              >
                {textModal}
              </div>
            )}

            <div>
              {showModal ? (
                <div onClick={() => setShowModal(false)}>
                  <XCircleIcon className="h-12 text-gray-500 ml-auto cursor-pointer" />
                </div>
              ) : (
                <PlusCircleIcon
                  onClick={() => setShowModal(true)}
                  className="h-12 text-gray-500 ml-auto cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesNavigate;
