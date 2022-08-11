import EN from "./en";

const KO: typeof EN = {
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
    ok: "OK",
    reload: "Reload",
    cancel: "Cancel",
  },
};
export default KO;
