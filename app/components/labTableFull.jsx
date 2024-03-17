"use client";
import Image from "next/image";
import React, { useState } from "react";
import PaginationComponent from "./pagination";
import Link from "next/link";
import { Dropdown, Menu, Checkbox, Modal } from "antd";
import MessageModal from "./modals/messageModal";

const LabTableFull = () => {
  const researchLabs = [
    {
      category: "인공지능",
      labs: [
        {
          name: "Mechanic AI LAB",
          affiliation: "한국대학교 인공지능학과",
          leader: "이규목",
          focus: "Multimodal / 워크 이미징 / Robotics",
        },
      ],
    },
    {
      category: "순수수학",
      disableWeb: true,
      labs: [
        {
          name: "Pure Mathematics Lab",
          affiliation: "한국대학교 수학과",
          leader: "김수리",
          focus: "수학적 논리 / 그룹 이론 / 토폴로지",
        },
      ],
    },
    {
      category: "응용수학",
      labs: [
        {
          name: "Applied Mathematics Group",
          affiliation: "연세대학교 수학과",
          leader: "이용욱",
          focus: "수치해석 / 프로그래밍 언어 / 최적화",
        },
      ],
    },
    {
      category: "통계학",
      labs: [
        {
          name: "Statistics Lab",
          affiliation: "고려대학교 통계학과",
          leader: "박통계",
          focus: "생물통계학 / 시계열 분석 / 베이지안 통계",
        },
      ],
    },
    {
      category: "계산수학",
      labs: [
        {
          name: "Computational Math Group",
          affiliation: "POSTECH 수학과",
          leader: "임계산",
          focus: "수치해석 / 계산기하학 / 병렬 컴퓨팅",
        },
      ],
    },
    {
      category: "확률론",
      labs: [
        {
          name: "Probability Theory Lab",
          affiliation: "서강대학교 확률론 및 통계학과",
          leader: "정확률",
          focus: "확률과정 / 마르코프 연쇄 / 랜덤 그래프 이론",
        },
      ],
    },
    {
      category: "기하학",
      labs: [
        {
          name: "Geometry Research Center",
          affiliation: "성균관대학교 수학과",
          leader: "이기하",
          focus: "위상기하학 / 대수기하학 / 비유클리드 기하학",
        },
      ],
    },
    {
      category: "대수학",
      labs: [
        {
          name: "Algebraic Structures Lab",
          affiliation: "한양대학교 수학과",
          leader: "박대수",
          focus: "군 이론 / 환 이론 / 대수적 군물",
        },
      ],
    },
    {
      category: "수리물리학",
      labs: [
        {
          name: "Mathematical Physics Lab",
          affiliation: "경희대학교 물리학과",
          leader: "김수리물",
          focus: "양자역학 / 수리물리학 / 통계물리학",
        },
      ],
    },
    {
      category: "자연과학",
      labs: [
        {
          name: "Natural Sciences Research Lab",
          affiliation: "중앙대학교 자연과학대학",
          leader: "이자연",
          focus: "자연과학 전반 / 통합과학 연구",
        },
      ],
    },
  ];

  const Cell = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <Link className="h-12 w-full" href={"/lab/detail"}>
          <div className="h-12 flex items-center px-4 hover:bg-gray-100 transition rounded-lg cursor-pointer">
            <div style={{ width: "4.5rem" }} className="flex justify-center">
              <div className="px-2 py-0.5 rounded-full text-white font-bold text-2xs bg-rndBlue">{item.category}</div>
            </div>
            <div className="flex items-center space-x-1 w-80 justify-center flex-shrink-0">
              <Image src="/bookmark.png" alt="Vercel Logo" className="" width={16} height={16} />
              <p className="font-bold">{item.labs[0].name}</p>
            </div>
            <div className="flex items-center w-60 justify-center flex-shrink-0 ">
              <p className="font-medium text-2xs">{item.labs[0].affiliation}</p>
            </div>
            <div className="flex items-center w-32 justify-center flex-shrink-0 ">
              <p className="font-medium text-2xs">{item.labs[0].leader}</p>
            </div>
            <div className="flex items-center w-72 justify-center flex-shrink-0 ">
              <p className="font-medium text-2xs">{item.labs[0].focus}</p>
            </div>
            <div className="flex space-x-6">
              {!item.disableWeb ? (
                <button
                  style={{
                    borderRadius: "26.39px",
                  }}
                  className="custom-border h-10 px-3.5 bg-white hover:bg-gray-200 transition backdrop-blur"
                >
                  <Image src="/open.png" alt="Vercel Logo" className="" width={18} height={18} />
                </button>
              ) : (
                <div className="w-12" />
              )}
              <button
                style={{
                  borderRadius: "26.39px",
                }}
                onClick={(e) => {
                  showModal();
                  e.preventDefault();
                }}
                className="custom-border h-10 px-3.5 bg-white hover:bg-gray-200 transition backdrop-blur"
              >
                <Image src="/chat.png" alt="Vercel Logo" className="" width={18} height={18} />
              </button>
            </div>
          </div>
        </Link>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null} // This will remove the footer buttons
          closeIcon={<span />} // This will remove the close button
          centered
        >
          <MessageModal />
        </Modal>
      </>
    );
  };

  const TableMenu = ({ item }) => (
    <div className="h-12 flex items-center px-4 rounded-lg cursor-pointer">
      <div style={{ width: "4.5rem" }} className="flex justify-center">
        <div className="font-bold text-sm">카테고리</div>
      </div>
      <div className="flex items-center space-x-1 w-80 justify-center flex-shrink-0">
        <p className="font-bold text-sm">연구설명</p>
      </div>
      <div className="flex items-center w-60 justify-center flex-shrink-0 ">
        <p className="font-bold text-sm">소속기관</p>
      </div>
      <div className="flex items-center w-32 justify-center flex-shrink-0 ">
        <p className="font-bold text-sm">지도교수</p>
      </div>
      <div className="flex items-center w-72 justify-center flex-shrink-0 ">
        <p className="font-bold text-sm">연구 분야</p>
      </div>
      <div className="flex space-x-6">
        <p className="font-bold text-sm px-3.5">웹</p>
        <p className="font-bold text-sm px-3.5">연락</p>
      </div>
    </div>
  );

  const SearchFilterButton = ({ title, type }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [open, setOpen] = useState(false);
    const toggleChecked = (key) => {
      setCheckedKeys((prevCheckedKeys) =>
        prevCheckedKeys.includes(key) ? prevCheckedKeys.filter((k) => k !== key) : [...prevCheckedKeys, key]
      );
    };
    const items =
      type === 1
        ? [
            {
              key: "1",
              label: (
                <div
                  onClick={() => toggleChecked(1)}
                  className={`flex space-x-2 w-24 ${
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(1)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(1) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">순수수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(2)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(2) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">응용수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(3)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(3) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">통계학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(4)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(4) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">계산수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(5)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(5) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">확률론</p>
                </div>
              ),
              checked: false,
            },
          ]
        : type === 2
        ? [
            {
              key: "1",
              label: (
                <div
                  onClick={() => toggleChecked(1)}
                  className={`flex space-x-2 w-40 ${
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(1)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(1) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가야대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(2)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(2) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가천대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(3)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(3) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가톨릭관동대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(4)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(4) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가톨릭꽃동네대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(5)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(5) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가톨릭대학교</p>
                </div>
              ),
              checked: false,
            },
          ]
        : [
            {
              key: "1",
              label: (
                <div
                  onClick={() => toggleChecked(1)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(1)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(1) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">서울</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(2)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(2) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">경기</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(3)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(3) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">인천</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(4)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(4) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">강원</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-2 ${
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(5)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(5) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">충북</p>
                </div>
              ),
              checked: false,
            },
          ];

    const handleOpenChange = (nextOpen, info) => {
      if (info.source === "trigger" || nextOpen) {
        setOpen(nextOpen);
      }
    };
    const handleMenuClick = (e) => {
      setOpen(true);
    };

    return (
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}
        trigger={["click"]}
        placement="bottomLeft"
        onOpenChange={handleOpenChange}
        open={open}
      >
        <button
          onClick={(e) => {
            // e.preventDefault();
            setDropdownVisible(!dropdownVisible);
          }}
          className="px-2 py-1 text-gray757575 text-xs tracking-tight flex-shrink-0 rounded font-medium flex items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition"
        >
          <div className="flex space-x-1">
            <p>{title}</p>
            <Image src="/down.png" alt="Vercel Logo" className="object-contain" width={10} height={10} />
          </div>
        </button>
      </Dropdown>
    );
  };

  const Search = () => (
    <div className="w-full flex space-x-8 h-12">
      <div className="flex w-full items-center">
        <div
          style={{ backgroundColor: "#EBEBEB" }}
          className="relative w-full h-full rounded-full px-6 text-xs placeholder-gray757575 font-medium outline-none flex items-center space-x-2"
        >
          <SearchFilterButton title="연구분야" type={1} />
          <SearchFilterButton title="대학" type={2} />
          <SearchFilterButton title="지역" type={3} />
          <input
            className="w-full h-full rounded-full px-2 text-xs placeholder-gray757575 outline-none font-medium bg-transparent"
            placeholder="전국의 연구실을 키워드로 검색해보세요"
          />
          <button
            style={{ borderRadius: "14px" }}
            className="w-9 h-9 absolute right-4 transition flex items-center justify-center"
          >
            <Image src="/search.png" alt="Vercel Logo" className="" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex flex-col items-center"
    >
      <div className="max-w-screen-md w-full h-full z-20 text-center relative my-12">
        <Search />
      </div>

      <div
        style={{
          borderRadius: "26.39px",
        }}
        className="bg-custom-pattern max-w-screen-xl w-full h-full z-20 text-center relative custom-border p-8 pt-4 backdrop-blur"
      >
        <TableMenu />
        <div className="mt-4 w-full">
          {[...researchLabs, ...researchLabs].map((item, index) => (
            <Cell id={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <PaginationComponent totalPages={10} />
      </div>
    </div>
  );
};

export default LabTableFull;
