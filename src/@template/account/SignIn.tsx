import styled from "@emotion/styled";
import { Form, Input } from "antd";
import * as React from "react";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";
import { LanguageType } from "i18n";
import { useI18n } from "hooks/useI18n";

interface Props {}
interface FormItem {
  userId?: string;
  password?: string;
}

function SignIn(props: Props) {
  const [form] = Form.useForm<FormItem>();
  const { t, setLanguage } = useI18n();

  const handleSubmit = React.useCallback((values: FormItem) => {
    console.log("values", values);
  }, []);

  const handleChangeLang = React.useCallback(
    (lang: LanguageType) => {
      setLanguage(lang);
    },
    [setLanguage]
  );

  return (
    <SignInContainer>
      <SignInBox>
        <SignInBoxHeader>
          <h1>Sign In</h1>
          <Logo>React Frame</Logo>
        </SignInBoxHeader>
        <SignInBoxBody>
          <Form<FormItem> form={form} onFinish={handleSubmit} layout={"vertical"}>
            <Form.Item
              label={t.formItem.user.userId.label}
              name='userId'
              rules={[
                {
                  required: true,
                  // pattern: getTrimNonEmptyRegExp(),
                  // message: ,
                },
              ]}
            >
              <Input
                autoFocus
                // prefix={<QIUser className='placeholder-icon' />}
                // placeholder={t.formItem.accountLogin.id.placeholder}
                allowClear
              />
            </Form.Item>
          </Form>
        </SignInBoxBody>
        <SignInBoxFooter>
          <button onClick={() => handleChangeLang("ko")}>KO</button>
          <button onClick={() => handleChangeLang("en")}>EN</button>
        </SignInBoxFooter>
      </SignInBox>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  ${SMixinFlexColumn("center", "center")};
  flex: 1;
  overflow: auto;
  background: url("/signin-background.jpg") no-repeat center center #0060e6;
`;

const SignInBox = styled.div`
  width: 400px;
  background: ${(p) => p.theme.component_background};
  border: 1px solid ${(p) => p.theme.border_color_base};
  border-radius: 4px;
  box-shadow: ${(p) => p.theme.box_shadow_base};
  padding: 32px;
  ${SMixinFlexColumn("flex-start", "stretch")};
`;

const SignInBoxHeader = styled.div`
  flex: 1;
  ${SMixinFlexRow("space-between", "center")};
  font-size: 16px;

  h1 {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }

  padding-bottom: 16px;
  border-bottom: 1px solid ${(p) => p.theme.border_color_base};
`;
const SignInBoxBody = styled.div`
  padding: 20px 0;
`;
const SignInBoxFooter = styled.div``;

const Logo = styled.div<Props>`
  ${SMixinFlexRow("stretch", "center")};
  column-gap: 6px;
  flex: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(p) => p.theme.primary_color};
`;

export default SignIn;
