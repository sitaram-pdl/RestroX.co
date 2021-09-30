import React, { useRef, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import "antd/dist/antd.css";
import { BiBellPlus, BiUserPlus } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import "./NotesCard.css";
import { AiOutlinePicture, AiOutlineCheckSquare } from "react-icons/ai";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";

function NotesCard({ text, title, image }) {
  const imageRef = useRef(null);
  const modalImageRef = useRef(null);
  const [imageToUse, setImageToUse] = useState();
  const [selectColor, setSelectColor] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [color, setColor] = useState("#16181A");
  const [bellInfo, setBellInfo] = useState(false);
  const [assignInfo, setAssignInfo] = useState(false);
  const [addImageInfo, setAddImageInfo] = useState(false);
  const [checkBoxInfo, setCheckBoxInfo] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [selectInfo, setSelectInfo] = useState(false);
  const [pinInfo, setPinInfo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [modalBellInfo, setModalBellInfo] = useState(false);
  const [modalAssignInfo, setModalAssignInfo] = useState(false);
  const [selectModalColor, setSelectModalColor] = useState(false);
  const [modalImageInfo, setModalImageInfo] = useState(false);
  const [modalCheckBoxInfo, setModalCheckBoxInfo] = useState(false);
  const [modalImage, setModalImage] = useState();
  const [modalPinInfo, setModalPinInfo] = useState(false);
  const [modalMoreInfo, setModalMoreInfo] = useState(false);

  console.log(image);

  const addImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToUse(readerEvent.target.result);
    };
  };

  const addModalImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setModalImage(readerEvent.target.result);
    };
  };

  const colorPalette = [
    { color: "white", index: 1 },
    { color: "red", index: 2 },
    { color: "#865439", index: 3 },
    { color: "#C68B59", index: 4 },
    { color: "#FCDEC0", index: 5 },
    { color: "#297F87", index: 6 },
    { color: "#F6D167", index: 7 },
    { color: "#DF2E2E", index: 8 },
    { color: "#464660", index: 9 },
    { color: "#B4B897", index: 10 },
    { color: "#B4B897", index: 11 },
    { color: "#F6D167", index: 12 },
    { color: "#DF2E2E", index: 13 },
    { color: "#464660", index: 14 },
    { color: "#B4B897", index: 15 },
    { color: "#B4B897", index: 16 },
  ];

  // Function on color button clicked
  const colorButtonClicked = (clr) => {
    console.log(clr);
  };

  const modalCheck = () => {
    console.log("Modal close is clicked" + setNotesModalOpen);
    setNotesModalOpen(false);
    var add = 1 + 2;
    console.log(add);
  };

  const notesModal = (
    <div
      style={{
        height: "100vh",
        width: "100%",
        zIndex: "999999",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f01a",
      }}
      className="fixed flex items-center top-0 left-0 w-screen h-screen"
      onClick={modalCheck}
    >
      <div
        style={{
          minHeight: "350px",
          maxHeight: "90%",
          width: "60%",
          maxWidth: "800px",
          zIndex: "9999999",
        }}
        onClick={() => setNotesModalOpen(false)}
        className="absolute flex-col flex opacity-100 bg-secondary rounded-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* title */}
          <div>
            <h1 className="text-white font-bold text-xl mt-10 ml-10">
              {title}
            </h1>
          </div>
          {/* Right Icons */}
          <div style={{ marginTop: "35px" }} className="mr-10">
            <div className="flex items-center">
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

              <div
                onMouseLeave={() => setModalMoreInfo(false)}
                onMouseEnter={() => setModalMoreInfo(true)}
              >
                <DotsVerticalIcon className="h-5 text-gray-400" />
                {modalMoreInfo && (
                  <div className="absolute">
                    <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-3">
                      Select
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            minHeight: "200px",
            height: "fit-content",
          }}
          className="overflow-scroll scrollbar-hide"
        >
          <p className="font-sm flex flex-col font-semibold text-gray-600 mx-10 mt-5 mb-10">
            {text}
          </p>
          {image && (
            <div className="mx-10">
              {image.map((img) => (
                <div>
                  <img src={img.pic} alt="" />
                </div>
              ))}
            </div>
          )}
          {modalImage && (
            <div className="mx-10 mt-4">
              <img src={modalImage} alt="" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pb-2 mt-2">
          {/* Icons */}
          <div className="flex space-x-3 ml-10">
            <div
              onMouseLeave={() => setModalBellInfo(false)}
              onMouseEnter={() => setModalBellInfo(true)}
              className="cursor-pointer"
            >
              <BiBellPlus
                style={{ color: "white", height: "30px", width: "20px" }}
                className="ml-4"
              />
              {modalBellInfo && (
                <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-3">
                  Remind Me
                </p>
              )}
              <p className="text-xs text-gray-400">Reminder</p>
            </div>
            <div
              onMouseLeave={() => setModalAssignInfo(false)}
              onMouseEnter={() => setModalAssignInfo(true)}
            >
              <BiUserPlus
                className="ml-2"
                style={{ color: "white", height: "30px", width: "20px" }}
              />
              {modalAssignInfo && (
                <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-7">
                  Assign Staffs
                </p>
              )}
              <p className="text-xs text-gray-400">Assign</p>
            </div>
            <div
              onMouseEnter={() => setSelectModalColor(true)}
              onMouseLeave={() => setSelectModalColor(false)}
            >
              <IoColorPaletteOutline
                onClick={() => setSelectModalColor(true)}
                className="ml-1"
                style={{ color: "white", height: "30px", width: "20px" }}
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
            >
              <AiOutlinePicture
                className="ml-1"
                style={{ color: "white", height: "30px", width: "20px" }}
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
            >
              <AiOutlineCheckSquare
                className="ml-4"
                style={{ color: "white", height: "30px", width: "20px" }}
              />
              {modalCheckBoxInfo && (
                <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-3">
                  Check Box
                </p>
              )}
              <p className="text-xs text-gray-400">Checkbox</p>
            </div>
          </div>

          {/* Buttons */}
          <div
            onClick={() => setNotesModalOpen(false)}
            className="flex items-center space-x-4 mr-10"
          >
            <button className="px-6 border border-gray-400 text-white text-xs py-1 font-semibold rounded-lg focus:outline-none">
              Cancle
            </button>
            <button
              onClick={() => setNotesModalOpen(false)}
              className="px-7 text-white border border-blue-900 text-xs bg-blue-600 py-1 font-semibold rounded-lg focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
      onClick={() => setNotesModalOpen(true)}
      style={{ background: color }}
      className="pm-2 mx-2 cursor-pointer group row-span-1"
    >
      {notesModalOpen && <div className="">{notesModal}</div>}
      <div className="mt-6 border w-xs p-3 border-white border-opacity-10 rounded-md col-span-full">
        {/* Header */}
        <div className="flex">
          {/* Header Left */}
          <h1 className="text-white text-lg font-bold flex-grow">{title}</h1>

          {/* Header Right */}
          {showContent && (
            <Fade>
              <div className="flex items-center space-x-1 cursor-pointer">
                <div onMouseLeave={() => setPinInfo(false)}>
                  <svg
                    onMouseEnter={() => setPinInfo(true)}
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
                  {pinInfo && (
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

                <div onMouseLeave={() => setSelectInfo(false)}>
                  <CheckCircleIcon
                    onMouseEnter={() => setSelectInfo(true)}
                    className="h-6 text-gray-500 cursor-pointer -mt-1"
                  />
                  {selectInfo && (
                    <div className="absolute">
                      <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-3">
                        Select
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          )}
        </div>

        {/* Contents */}
        <div className="mt-1 overflow-clip h-15">
          {/* Ntoes */}
          <div>
            <p
              style={{
                maxHeight: "400px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="text-gray-300"
            >
              {text}
            </p>
          </div>

          {/* Notes Image */}
          <div className="mb-3">
            {image?.map((img) => (
              <div>
                <img src={img.pic} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Icons */}
        {!showContent && <div style={{ height: "18px" }} />}
        {showContent && (
          <Fade>
            <div className="flex relative">
              {/* Icons Left */}
              <div className="flex  space-x-2 flex-grow">
                <div onMouseLeave={() => setBellInfo(false)}>
                  <BiBellPlus
                    onMouseEnter={() => setBellInfo(true)}
                    className="icon"
                  />
                  {bellInfo && (
                    <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-2">
                      Remind Me
                    </p>
                  )}
                </div>
                <div onMouseLeave={() => setAssignInfo(false)}>
                  <BiUserPlus
                    onMouseEnter={() => setAssignInfo(true)}
                    className="icon"
                  />
                  {assignInfo && (
                    <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-5">
                      Assign Staffs
                    </p>
                  )}
                </div>

                {/* Colors selecting logic */}
                <div onMouseLeave={() => setSelectColor(false)}>
                  <IoColorPaletteOutline
                    onMouseEnter={() => setSelectColor(true)}
                    className="icon"
                  />
                  <div className="">
                    {selectColor && (
                      <div
                        style={{
                          background: "#16181A",
                          width: "200px",
                          height: "60px",
                        }}
                        className="absolute flex flex-wrap h-10 -mt-12 rounded-md pl-2 z-50"
                      >
                        {colorPalette.map(({ color }, index) => (
                          <button
                            // onMouseLeave={() => setSelectColor(false)}
                            style={{ background: color }}
                            className="h-5 w-5 rounded-full mr-1 mt-1 focus:outline-none"
                            key={index}
                            onClick={colorButtonClicked(color)}
                          >
                            &nbsp;
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  onMouseLeave={() => setAddImageInfo(false)}
                  onClick={() => imageRef.current.click()}
                >
                  <AiOutlinePicture
                    onMouseEnter={() => setAddImageInfo(true)}
                    className="icon"
                  />
                  <input
                    ref={imageRef}
                    onChange={addImage}
                    type="file"
                    hidden
                  />
                  {addImageInfo && (
                    <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-5">
                      Add Image
                    </p>
                  )}
                </div>
                <div onMouseLeave={() => setCheckBoxInfo(false)}>
                  <AiOutlineCheckSquare
                    onMouseEnter={() => setCheckBoxInfo(true)}
                    className="icon"
                  />
                  {checkBoxInfo && (
                    <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-5">
                      Check Box
                    </p>
                  )}
                </div>
              </div>

              {/* Icon Right */}
              <div onMouseLeave={() => setMoreInfo(false)}>
                <DotsVerticalIcon
                  onMouseEnter={() => setMoreInfo(true)}
                  className="h-4 text-white cursor-pointer"
                />
                {moreInfo && (
                  <p className="absolute text-white bg-background p-1 rounded-md -mt-14 -ml-5">
                    More
                  </p>
                )}
              </div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}

export default NotesCard;
