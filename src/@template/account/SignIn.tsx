import { IdcardOutlined, LockOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Divider, Form, Input } from "antd";
import * as React from "react";
import { RFIArrowLogIn } from "react-frame-icon";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";
import { useI18n } from "hooks/useI18n";
import { useSignInController } from "@controller/pages/SignInController";
import { getTrimNonEmptyRegExp } from "utils/formPatterns/getTrimNonEmptyRegExp";
import { mergeProps } from "utils/object";
import IconText from "@template/common/IconText";

interface Props {
  onSignIn?: (values: SignInFormItem) => Promise<void>;
}

export interface SignInFormItem {
  userId?: string;
  password?: string;
}

function SignIn(props: Props) {
  const { onSignIn, signing, setSigning } = mergeProps(props, useSignInController());
  const { t, currentLanguage, setLanguage } = useI18n();
  const [form] = Form.useForm<SignInFormItem>();

  const handleSubmit = React.useCallback(
    async (values: SignInFormItem) => {
      setSigning(true);
      await onSignIn?.(values);
      setSigning(false);
    },
    [onSignIn, setSigning]
  );

  return (
    <SignInContainer>
      <SignInBox>
        <SignInBoxHeader>
          <h1>Sign In</h1>
          <Logo>React Frame</Logo>
        </SignInBoxHeader>
        <SignInBoxBody>
          <Form<SignInFormItem> form={form} onFinish={handleSubmit} layout={"vertical"}>
            <Form.Item
              label={t.formItem.user.userId.label}
              name='userId'
              rules={[
                {
                  required: true,
                  pattern: getTrimNonEmptyRegExp(),
                  message: t.formItem.user.userId.msg.empty,
                },
              ]}
            >
              <Input
                prefix={<IdcardOutlined />}
                autoFocus
                placeholder={t.formItem.user.userId.placeholder}
                allowClear
              />
            </Form.Item>

            <Form.Item
              label={t.formItem.user.password.label}
              name='password'
              rules={[
                {
                  required: true,
                  pattern: getTrimNonEmptyRegExp(),
                  message: t.formItem.user.password.msg.empty,
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder={t.formItem.user.password.placeholder} allowClear />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' role={"sign-in-btn"} block loading={signing}>
                <RFIArrowLogIn fontSize={20} />
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </SignInBoxBody>
        <SignInBoxFooter>
          <IconText onClick={() => setLanguage("en")} active={currentLanguage === "en"}>
            English
          </IconText>
          <Divider type='vertical' />
          <IconText onClick={() => setLanguage("ko")} active={currentLanguage === "ko"}>
            한국어
          </IconText>
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

  .ant-input-affix-wrapper {
    box-sizing: border-box;
    border-radius: 5px;
    padding: 4px 10px;
    border: 1px solid ${(p) => p.theme.border_color_base};

    .ant-input-prefix {
      margin-right: 6px;
    }

    .ant-input {
      font-weight: 400;
      line-height: 30px;
      padding-left: 8px;
    }

    .ant-input-suffix {
      .ant-input-password-icon {
        margin-left: 4px;
      }
    }
  }

  [role="sign-in-btn"] {
    height: 40px;
    ${SMixinFlexRow("center", "center")};
    column-gap: 5px;
  }
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

const Logo = styled.div`
  ${SMixinFlexRow("stretch", "center")};
  column-gap: 6px;
  flex: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(p) => p.theme.primary_color};
`;

export default SignIn;
