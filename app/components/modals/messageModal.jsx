import React from "react";

const MessageModal = () => {
  return (
    <div className="flex flex-col items-start p-4  font-spoqa">
      <p className="text-lg font-bold ">메세지 전송하기</p>
      <div style={{ whiteSpace: "pre-wrap" }} className="p-4 border rounded-xl mt-4 text-xs w-full min-h-80">
        {`아래 정보를 공유해주시면 효율적으로 연락이 이루어질 수 있습니다.
RnDcircle의 담당자가 확인 후 24시간 내에 연락을 드리겠습니다.

소속기관명:
담당자 성함:
연락 가능한 이메일 주소:
연락 가능한 전화번호:
전문 분야:
연구 및 프로젝트 경험:
관심 있는 협업 분야:
전하고 싶은 메시지나 요청사항:`}
      </div>
      <div className="pt-12 pb-4 w-full flex justify-end">
        <button className="px-6 h-10 flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition">
          전송하기
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
