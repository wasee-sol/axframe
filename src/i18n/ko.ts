import EN from "./en";

const KO: typeof EN = {
  appName: "React Frame",
  formItem: {
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
  },
  button: {
    ok: "확인",
    reload: "새로고침",
    cancel: "취소",
  },
  pageTab: {
    newTab: "새 탭",
    contextMenu: {
      closeTag: "닫기",
      closeOtherTabs: "다른탭 닫기",
      refresh: "새로고침",
      closeTabsToRight: "오른쪽 탭 닫기",
    },
  },
  pages: {
    counseling: {
      registration: {
        title: "상담 기록지 등록",
      },
    },
  },
};
export default KO;
