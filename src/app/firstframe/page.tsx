"use client";
import React, { useState } from "react";
import image from "@/Images/images.jpg";
import Image from "next/image";
import profile from "@/Images/wall.jpg";

type Color =
  | "white"
  | "black"
  | "gray"
  | "yellow"
  | "green"
  | "blue"
  | "pink"
  | "purple"
  | "red"
  | "";
type Gradient =
  | "linear-gradient(to right, yellow, green)"
  | "linear-gradient(to right, blue, purple)"
  | "linear-gradient(to right, pink, yellow)"
  | "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  | "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,36,121,0.6363795518207283) 52%, rgba(255,98,0,1) 100%)"
  | "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  | "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
  | "";

const FrameFirst: React.FC = () => {
  const [solidColor, setSolidColor] = useState<Color>("");
  const [linearGradient, setLinearGradient] = useState<Gradient>("");
  const [radialGradient, setRadialGradient] = useState<Gradient>("");
  const [foregroundColor, setForegroundColor] = useState<Color>("black");

  const handleSolidColorClick = (color: Color) => {
    setSolidColor(color);
    setLinearGradient("");
    setRadialGradient("");
  };

  const handleLinearGradientClick = (gradient: Gradient) => {
    setLinearGradient(gradient);
    setSolidColor("");
    setRadialGradient("");
  };

  const handleRadialGradientClick = (gradient: Gradient) => {
    setRadialGradient(gradient);
    setSolidColor("");
    setLinearGradient("");
  };

  const handleForegroundColorClick = (color: Color) => {
    setForegroundColor(color);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/8 bg-gray-100 p-4 hidden md:block">
        <div className="text-xl font-bold mb-6"></div>
        <nav className="space-y-4">
          <a href="#" className="block p-2 hover:bg-gray-200">
            Home
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Schedule
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Recommendation
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Analytics
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Profile
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Inbox{" "}
            <span className="ml-2 bg-blue-600 text-white rounded-full px-2">
              8
            </span>
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Themes
          </a>
        </nav>
        <div className="absolute bottom-4 left-4">
          <a href="#" className="block p-2 hover:bg-gray-200">
            Settings
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className=" p-5 flex-wrap">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Themes</h1>
          <div className="flex items-center">
            <span className="mr-4">Priya Ghuguskar</span>
            <button className="p-4 bg-gray-300 rounded-full"></button>
          </div>
        </div>
        <div className="bg-white p-6 rounded">
          <div
            className="bg-slate-100 border-slate-50 rounded flex justify-between content-center"
            style={{ border: "1px solid black" }}
          >

          </div>
        </div>

        {/* submain content */}
        <div className="flex flex-row gap-10 flex-wrap" >
          <div className="bg-white p-4 rounded shadow w-1/8">
            <div className="grid grid-rows-4 gap-1">
              {/* Solids */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Solids</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-10 h-10 bg-black cursor-pointer"
                    onClick={() => handleSolidColorClick("black")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-gray-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("gray")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-yellow-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("yellow")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-green-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("green")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-blue-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("blue")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-pink-400 cursor-pointer"
                    onClick={() => handleSolidColorClick("pink")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-purple-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("purple")}
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: "#f50157" }}
                    onClick={() => handleSolidColorClick("red")}
                  ></div>
                </div>
              </div>

              {/* Linear Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Linear Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, yellow, green)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, blue, purple)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, pink, yellow)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, yellow, green)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, blue, purple)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, pink, yellow)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, yellow, green)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, blue, purple)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, pink, yellow)"
                      )
                    }
                  ></div>
                </div>
              </div>
              {/* Radial Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Radial Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                      )
                    }
                  ></div>


                  <div
                    className="w-10 h-10 bg-gradient-radial from-pink-300 to-yellow-300 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-radial from-pink-300 to-yellow-300 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 bg-gradient-radial from-pink-300 to-yellow-300 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                      )
                    }
                  ></div>

                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                      )
                    }
                  ></div>

                </div>
              </div>

              {/* Foreground Color */}
              <div>
                <h3 className="font-semibold mb-2">Foreground Color</h3>
                <div className="flex gap-1">
                  <div
                    className="w-8 h-8 bg-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("black")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-white border border-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("white")}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow rounded " style={{ width: "100%", maxWidth: "65%" }}>
            <div
              className="bg-white p-4 rounded shadow"
              style={{
                backgroundColor: solidColor || undefined,
                backgroundImage: linearGradient || radialGradient || undefined,
              }}
            >
              <div
                style={{
                  border: "3px dashed #cecece",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={profile}
                  alt="profile-pic"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    height: "200px",
                  }}
                />
              </div>
              <div
                className="p-5 flex justify-left items-left"
                style={{ color: foregroundColor }}
              >
                <div className="flex items-left flex-col">
                  <div className="text-left">
                    <Image
                      src={image}
                      alt="profile pic"
                      className="w-24 h-24 rounded-full mb-4"
                      style={{ marginTop: "-70px" }}
                    />
                    <p>Priya Ghuguskar</p>
                    <p className="mt-1">Front-end Developer</p>
                    <p className="mt-1">ghuguskarpriya@example.com</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "3px dashed #cecece",
                      borderRadius: "10px",
                      marginTop: "4%",
                      width: "70%",
                    }}
                  >
                    <p>
                      Having  8 months experience in Frontend development, I have honed my skills in various programming languages such as HTML,
                      CSS, JavaScript, and frameworks like React . My proficiency in backend technologies like Node.js and databases such as
                      MongoDB further strengthens my ability to develop robust and scalable web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFirst;
