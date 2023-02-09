export const EN_formItem = {
  common: {
    createdAt: {
      label: "일자",
    },
  },
  user: {
    userId: {
      label: "User ID",
      placeholder: "User ID",
      msg: {
        empty: "Please enter your User ID.",
      },
    },
    password: {
      label: "Password",
      placeholder: "Password",
      msg: {
        empty: "Please enter your password.",
      },
    },
  },
  example: {
    title1: "personal data",
    title2: "Details of consultation",
    area: {
      label: "Districts",
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
      label: "consultant",
    },
    cnsltDt: {
      label: "Consultation date",
    },
    cnsltHow: {
      label: "Consultation method",
      options: [
        { value: "유선", label: "Wired" },
        { value: "내방", label: "Visit" },
        { value: "방문", label: "Visit1" },
        { value: "이동상담", label: "Mobile counseling" },
        { value: "기타", label: "Etc" },
      ],
    },
    cnsltHowEtc: {
      label: "",
    },
    cnsltPath: {
      label: "Consultation path",
      options: [
        { value: "", label: "Clear" },
        { value: "관련기관", label: "related organization" },
        { value: "개인소개", label: "Personal introduction" },
        { value: "본인직접", label: "Self" },
        { value: "기타기관", label: "Etc" },
      ],
    },
    cnsltPathDtl: {
      label: "",
      options: [
        { value: "동사무소/구청", label: "district office" },
        { value: "복지관", label: "welfare center" },
        { value: "보건소", label: "Public health center" },
        { value: "관리사무소", label: "management office" },
        { value: "복지기관", label: "welfare institution" },
        { value: "시민사회단체", label: "civil society organization" },
      ],
    },
    cnsltPathPerson: {
      label: "",
      placeholder: "the name of the introducer",
    },
    cnsltPathDirect: {
      label: "",
      placeholder: "Recognition path",
    },
    cnsltPathOrg: {
      label: "",
      placeholder: "Name of the organization",
    },
    cnsltPathOrgPerson: {
      label: "",
      placeholder: "The person in charge",
    },
    cnsltPathOrgPhone: {
      label: "",
      placeholder: "Phone number",
    },
    name: {
      label: "Name",
    },
    birthDt: {
      label: "birth Day",
    },
    age: {
      prefix: "",
      suffix: "olds",
    },
    sex: {
      label: "Gender",
      options: [
        { value: "남", label: "M" },
        { value: "여", label: "W" },
      ],
    },
    phone1: {
      label: "phone 1",
    },
    phone2: {
      label: "phone 2",
    },
    hndcapYn: {
      label: "Presence of disability",
      options: [
        { value: "유", label: "Y" },
        { value: "무", label: "N" },
      ],
    },
    hndcapGrade: {
      label: "Disability rating",
      options: [
        { value: "심한 장애인", label: "severely handicapped" },
        { value: "심하지않은 장애인", label: "mildly disabled person" },
      ],
    },
    hndcapTyp: {
      label: "Type of disability",
      options: [
        { value: "지체장애", label: "physical disability" },
        { value: "뇌병변장애", label: "brain lesion disorder" },
        { value: "시각장애", label: "visual impairment" },
        { value: "청각장애", label: "hearing impairment" },
        { value: "언어장애", label: "speech impediment" },
        { value: "안면장애", label: "facial disorder" },
        { value: "정신지체", label: "mental retardation" },
        { value: "발달장애", label: "developmental disorder" },
        { value: "정신장애", label: "mental disorder" },
        { value: "신장장애", label: "kidney failure" },
        { value: "심장장애", label: "heart disorder" },
        { value: "호흡기장애", label: "respiratory problems" },
        { value: "간장애", label: "liver disorder" },
        { value: "장루요류장애", label: "intestinal urinary tract disorder" },
        { value: "간질장애", label: "epileptic disorder" },
      ],
    },
    addr: {
      label: "Address",
    },
    hopePoint: {
      label: "",
      직접지원: "Direct support",
      주거정보자원: "Residential Information Resources",
      내부자원: "Internal resources",
      기타: "ETC",
      세부내용: "Details",
    },
    hopePoint1: {
      label: "",
      options: [
        { value: "긴급임대료", label: "Emergency rent" },
        { value: "집수리", label: "house repair" },
        { value: "긴급연료", label: "emergency fuel" },
        { value: "보증금지원", label: "Deposit support" },
        { value: "주거이전지원(이사비)", label: "Housing relocation support" },
        { value: "기타", label: "ETC" },
      ],
    },
    hopePoint1Etc: {
      label: "",
    },
    hopePoint2: {
      label: "",
      options: [
        { value: "임대주택", label: "a rental house" },
        { value: "융자정보", label: "Loan information" },
        { value: "청약정보", label: "Subscription information" },
        { value: "대출정보", label: "Loan information" },
        { value: "재개발/뉴타운", label: "a redevelopment/new town" },
        { value: "기타", label: "ETC" },
      ],
    },
    hopePoint2Etc: {
      label: "",
    },
    hopePoint3: {
      label: "",
      options: [
        { value: "주거복지", label: "residential welfare" },
        { value: "주거물품지원", label: "Support for residential items" },
        { value: "연료지원", label: "Fuel support" },
        { value: "긴급지원주택", label: "Emergency Support Housing" },
        { value: "주거상향", label: "residential improvement" },
        { value: "주거비소액대출", label: "Small loan for housing expenses" },
        { value: "청약저축", label: "Subscription savings" },
        { value: "비주택거주자", label: "a non-resident" },
        { value: "노후주택개보수", label: "Renovation of old houses" },
        { value: "주거안정지원", label: "Housing stabilization support" },
        { value: "사랑의집수리", label: "Repairing the House of Love" },
        { value: "아동주거환경개선", label: "Improvement of Residential Environment for Children" },
        { value: "기타", label: "ETC" },
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
      label: "Major consultation details",
    },
  },
  gameTitleNum: {
    label: "Game Title",
    options: [
      { value: "2000", label: "ALL" },
      { value: "2100", label: "JET SKI" },
      { value: "2200", label: "BEACH" },
      { value: "2300", label: "FISHING" },
      { value: "2400", label: "FRISBEE" },
      { value: "2500", label: "CYCLING" },
      { value: "2600", label: "SWIMMING" },
    ],
  },
  notice: {
    title: {
      label: "Title",
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
