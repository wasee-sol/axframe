import { EN_formItem } from "./EN_formItem";

export const KO_formItem: typeof EN_formItem = {
  common: {
    createdAt: {
      label: "일자",
    },
  },
  user: {
    userId: {
      label: "유저아이디",
      placeholder: "User ID",
      msg: {
        empty: "유저아이디를 입력하세요.",
      },
    },
    password: {
      label: "비밀번호",
      placeholder: "비밀번호",
      msg: {
        empty: "비밀번호를 입력하세요.",
      },
    },
  },
  example: {
    title1: "인적사항",
    title2: "상담내용",
    area: {
      label: "행정구",
      options: [
        { label: "중구", value: "중구" },
        { label: "동구", value: "동구" },
        { label: "서구", value: "서구" },
        { label: "남구", value: "남구" },
        { label: "북구", value: "북구" },
        { label: "수성구", value: "수성구" },
        { label: "달서구", value: "달서구" },
        { label: "달성군", value: "달성군" },
      ],
    },
    cnsltUserCd: {
      label: "상담원",
    },
    cnsltDt: {
      label: "상담일자",
    },
    cnsltHow: {
      label: "상담방법",
      options: [
        { value: "유선", label: "유선" },
        { value: "내방", label: "내방" },
        { value: "방문", label: "방문" },
        { value: "이동상담", label: "이동상담" },
        { value: "기타", label: "기타" },
      ],
    },
    cnsltHowEtc: {
      label: "",
    },
    cnsltPath: {
      label: "상담경로",
      options: [
        { value: "", label: "선택안함" },
        { value: "관련기관", label: "관련기관" },
        { value: "개인소개", label: "개인소개" },
        { value: "본인직접", label: "본인직접" },
        { value: "기타기관", label: "기타기관" },
      ],
    },
    cnsltPathDtl: {
      label: "",
      options: [
        { value: "동사무소/구청", label: "동사무소/구청" },
        { value: "복지관", label: "복지관" },
        { value: "보건소", label: "보건소" },
        { value: "관리사무소", label: "관리사무소" },
        { value: "복지기관", label: "복지기관" },
        { value: "시민사회단체", label: "시민사회단체" },
      ],
    },
    cnsltPathPerson: {
      label: "",
      placeholder: "소개인 성명",
    },
    cnsltPathDirect: {
      label: "",
      placeholder: "인지경로",
    },
    cnsltPathOrg: {
      label: "",
      placeholder: "기관명",
    },
    cnsltPathOrgPerson: {
      label: "",
      placeholder: "담당자",
    },
    cnsltPathOrgPhone: {
      label: "",
      placeholder: "전화번호",
    },
    name: {
      label: "성명",
    },
    birthDt: {
      label: "생년월일",
    },
    age: {
      prefix: "만",
      suffix: "세",
    },
    sex: {
      label: "성별",
      options: [
        { value: "남", label: "남" },
        { value: "여", label: "여" },
      ],
    },
    phone1: {
      label: "연락처 1",
    },
    phone2: {
      label: "연락처 2",
    },
    hndcapYn: {
      label: "장애유무",
      options: [
        { value: "유", label: "유" },
        { value: "무", label: "무" },
      ],
    },
    hndcapGrade: {
      label: "장애등급",
      options: [
        { value: "심한 장애인", label: "심한 장애인" },
        { value: "심하지않은 장애인", label: "심하지않은 장애인" },
      ],
    },
    hndcapTyp: {
      label: "장애종류",
      options: [
        { value: "지체장애", label: "지체장애" },
        { value: "뇌병변장애", label: "뇌병변장애" },
        { value: "시각장애", label: "시각장애" },
        { value: "청각장애", label: "청각장애" },
        { value: "언어장애", label: "언어장애" },
        { value: "안면장애", label: "안면장애" },
        { value: "정신지체", label: "정신지체" },
        { value: "발달장애", label: "발달장애" },
        { value: "정신장애", label: "정신장애" },
        { value: "신장장애", label: "신장장애" },
        { value: "심장장애", label: "심장장애" },
        { value: "호흡기장애", label: "호흡기장애" },
        { value: "간장애", label: "간장애" },
        { value: "장루요류장애", label: "장루요류장애" },
        { value: "간질장애", label: "간질장애" },
      ],
    },
    addr: {
      label: "주소",
    },
    hopePoint: {
      label: "",
      직접지원: "직접지원",
      주거정보자원: "주거정보자원",
      내부자원: "내부자원",
      기타: "기타",
      세부내용: "세부내용",
    },
    hopePoint1: {
      label: "",
      options: [
        { value: "긴급임대료", label: "긴급임대료" },
        { value: "집수리", label: "집수리" },
        { value: "긴급연료", label: "긴급연료" },
        { value: "보증금지원", label: "보증금지원" },
        { value: "주거이전지원(이사비)", label: "주거이전지원(이사비)" },
        { value: "기타", label: "기타" },
      ],
    },
    hopePoint1Etc: {
      label: "",
    },
    hopePoint2: {
      label: "",
      options: [
        { value: "임대주택", label: "임대주택" },
        { value: "융자정보", label: "융자정보" },
        { value: "청약정보", label: "청약정보" },
        { value: "대출정보", label: "대출정보" },
        { value: "재개발/뉴타운", label: "재개발/뉴타운" },
        { value: "기타", label: "기타" },
      ],
    },
    hopePoint2Etc: {
      label: "",
    },
    hopePoint3: {
      label: "",
      options: [
        { value: "주거복지", label: "주거복지" },
        { value: "주거물품지원", label: "주거물품지원" },
        { value: "연료지원", label: "연료지원" },
        { value: "긴급지원주택", label: "긴급지원주택" },
        { value: "주거상향", label: "주거상향" },
        { value: "주거비소액대출", label: "주거비소액대출" },
        { value: "청약저축", label: "청약저축" },
        { value: "비주택거주자", label: "비주택거주자" },
        { value: "노후주택개보수", label: "노후주택개보수" },
        { value: "주거안정지원", label: "주거안정지원" },
        { value: "사랑의집수리", label: "사랑의집수리" },
        { value: "아동주거환경개선", label: "아동주거환경개선" },
        { value: "기타", label: "기타" },
      ],
    },
    hopePoint3Etc: {
      label: "",
    },
    hopePoint4Etc: {
      label: "",
    },
    hopePoint5Etc: {
      label: "",
    },
    fldT: {
      label: "주요상담내용",
    },
  },
  gameTitleNum: {
    label: "게임종목",
    options: [
      { value: "2000", label: "전체" },
      { value: "2100", label: "제트스키" },
      { value: "2200", label: "비치발리볼" },
      { value: "2300", label: "낚시" },
      { value: "2400", label: "원반던지기" },
      { value: "2500", label: "사이클" },
      { value: "2600", label: "수영" },
    ],
  },
  notice: {
    title: {
      label: "제목",
      placeholder: "",
      msg: {
        empty: "",
      },
    },
    content: {
      label: "내용",
      placeholder: "",
      msg: {
        empty: "Please input content",
      },
    },
  },
};
