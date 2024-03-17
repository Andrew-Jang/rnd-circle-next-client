import React from "react";

const MessageModal = ({ hasOptions }) => {
  return (
    <div className="flex flex-col items-start p-4  font-spoqa">
      <p className="text-lg font-bold ">메세지 전송하기</p>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="p-6 border rounded-xl mt-4 text-xs w-full min-h-80 leading-5 placeholder-black"
      >
        {`아래 정보를 공유해주시면 효율적으로 연락이 이루어질 수 있습니다.
RnDcircle의 담당자가 확인 후 24시간 내에 연락을 드리겠습니다.

1. 소속기관명:
2. 담당자 성함:
3. 연락 가능한 이메일 주소:
4. 연락 가능한 전화번호:
5. 전문 분야:
6. 연구 및 프로젝트 경험:
7. 관심 있는 협업 분야:
8. 전하고 싶은 메시지나 요청사항:`}
      </div>
      {hasOptions && (
        <div className="mt-6 text-xs space-y-3">
          <p>함께 하고 싶은 AI 맞춤형 시나리오</p>
          <div className="radio-wrapper">
            <label className="text-xs flex items-center cursor-pointer">
              <input type="checkbox" name="customerType" className="hidden" />
              <span className="radio-custom"></span>
              <p className="ml-2 font-medium ">AI 기반의 고정밀도 불량품 검출 시스템 개발</p>
            </label>
          </div>
          <div className="radio-wrapper">
            <label className="text-xs flex items-center cursor-pointer">
              <input type="checkbox" name="customerType" className="hidden" />
              <span className="radio-custom"></span>
              <p className="ml-2 font-medium ">스마트 물류 및 자동화 처리</p>
            </label>
          </div>
          <div className="radio-wrapper">
            <label className="text-xs flex items-center cursor-pointer">
              <input type="checkbox" name="customerType" className="hidden" />
              <span className="radio-custom"></span>
              <p className="ml-2 font-medium ">AI 주도 안전 및 감시 분석</p>
            </label>
          </div>
        </div>
      )}

      <div className="pt-12 pb-4 w-full flex justify-end">
        <button className="px-6 h-10 flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition">
          전송하기
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
