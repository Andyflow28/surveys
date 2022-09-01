import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const AdminBar = () => {

  const open = "flex items-center mt-10 mb-0 bg-gradient-to-r from-cyan-300 to-cyan-500 px-6 py-3 rounded-l-full"
  const close = "flex items-center mt-10 mb-0 px-6 py-3 rounded-l-full hover:bg-gradient-to-r hover:from-cyan-300 hover:to-cyan-500 transition duration-700 ease-in-out"
  
  const [dash_btn, setDash_btn] = useState(open)
  const [surveys_btn, setSurveys_btn] = useState(close)
  const [reports_btn, setReports_btn] = useState(close)
  const [tem_btn, setTem_btn] = useState(close)

  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 w-60 h-28 flex justify-center items-center">
          <div className="w-14 px-3 py-2 h-14 bg-blue-900 rounded-full">
            <Image
              alt="user icon"
              src="/img/login/graf.png"
              width="64"
              height="64px"
            />
          </div>
          <p className="text-white font-extrabold text-4xl ml-3">Survey</p>
        </div>

        <div className="w-60 h-1 bg-sky-400"></div>

        <div className="bg-gradient-to-l from-blue-500 to-violet-500 h-[79vh] w-60 flex flex-col items-end">
          <div className={dash_btn} onClick={() => {
            setDash_btn(open)
            setSurveys_btn(close)
            setReports_btn(close)
            setTem_btn(close)
          }}>
            <div className="w-8 flex">
              <Image
                alt="dashboard"
                width={"128px"}
                height="128px"
                src="/img/admin/menu.png"
              />
            </div>
            <p className="font-bold text-xl mx-2 text-white">DASHBOARD</p>
          </div>
          <div className={surveys_btn} onClick={() => {
            setDash_btn(close)
            setSurveys_btn(open)
            setReports_btn(close)
            setTem_btn(close)
          }}>
            <div className="w-8 flex">
              <Image
                alt="dashboard"
                width={"128px"}
                height="128px"
                src="/img/admin/surveys.png"
              />
            </div>
            <p className="font-bold text-xl mx-7 text-white">SURVEYS</p>
          </div>
          <div className={reports_btn} onClick={() => {
            setDash_btn(close)
            setSurveys_btn(close)
            setReports_btn(open)
            setTem_btn(close)
          }}>
            <div className="w-8 flex">
              <Image
                alt="dashboard"
                width={"128px"}
                height="128px"
                src="/img/admin/grafico.png"
              />
            </div>
            <p className="font-bold text-xl mx-7 text-white">REPORTS</p>
          </div>
          <div className={tem_btn} onClick={() => {
            setDash_btn(close)
            setSurveys_btn(close)
            setReports_btn(close)
            setTem_btn(open)
          }}>
            <div className="w-8 flex">
              <Image
                alt="dashboard"
                width={"128px"}
                height="128px"
                src="/img/admin/template.png"
              />
            </div>
            <p className="font-bold text-xl mx-4 text-white">TEMPLATES</p>
          </div>
        </div>

        <div className="w-60 h-1 bg-sky-400"></div>

        <div className="flex items-center py-5 bg-gradient-to-l from-blue-500 to-violet-500 w-60">
          <div className="w-8 flex mx-auto">
            <Image
              alt="dashboard"
              width={"128px"}
              height="128px"
              src="/img/admin/config.png"
            />
          </div>
          <p className="font-bold text-xl mr-16 text-white">Settings</p>
        </div>
      </div>
    </>
  );
};

export default AdminBar;
