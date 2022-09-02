import { Form, Select, DatePicker, Radio, Input, Row, Col, Button, Space } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { RFIWriteForm } from "react-frame-icon";
import { PageLayout } from "styles/pageStyled";
import IconText from "components/common/IconText";

interface Props {}

const areas: { label: string; value: string }[] = [
  { label: "중구", value: "중구" },
  { label: "동구", value: "동구" },
  { label: "서구", value: "서구" },
  { label: "남구", value: "남구" },
  { label: "북구", value: "북구" },
  { label: "수성구", value: "수성구" },
  { label: "달서구", value: "달서구" },
  { label: "달성군", value: "달성군" },
];

function PageCounselingRegistration(props: Props) {
  const [form] = Form.useForm();
  const cnsltHow = Form.useWatch("cnsltHow", form);
  const cnsltPath = Form.useWatch("cnsltPath", form);

  return (
    <Container>
      <Header>
        <IconText icon={<RFIWriteForm />}>상담 기록지 등록</IconText>

        <ButtonGroup>
          <Button>임시저장목록 불러오기</Button>
          <Button>초기화</Button>
        </ButtonGroup>
      </Header>
      <Body>
        <Form form={form} layout={"vertical"} colon={false}>
          <FormBox>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Form.Item label={"행정구"} name={"area"} required>
                  <Select options={areas} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"상담원"} name={"cnsltUserCd"} required>
                  <Select>
                    <Select.Option value={"system"}>시스템관리자</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"상담일자"} name={"cnsltDt"}>
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label={"상담방법"} required>
              <Space size={[8, 16]} wrap>
                <Form.Item noStyle name={"cnsltHow"}>
                  <Radio.Group>
                    <Radio value='유선'>유선</Radio>
                    <Radio value='내방'>내방</Radio>
                    <Radio value='방문'>방문</Radio>
                    <Radio value='이동상담'>이동상담</Radio>
                    <Radio value='기타'>기타</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item noStyle name={"cnsltHowEtc"}>
                  <Input disabled={cnsltHow !== "기타"} />
                </Form.Item>
              </Space>
            </Form.Item>

            <Form.Item label={"상담경로"} required name={"cnsltPath"} style={{ marginBottom: 5 }}>
              <Radio.Group>
                <Radio value='관련기관'>관련기관</Radio>
                <Radio value='개인소개'>개인소개</Radio>
                <Radio value='본인직접'>본인직접</Radio>
                <Radio value='기타기관'>기타기관</Radio>
              </Radio.Group>
            </Form.Item>

            {cnsltPath === "관련기관" && (
              <Form.Item noStyle name={"cnsltPathDtl"}>
                <Radio.Group>
                  <Radio value='동사무소/구청'>동사무소/구청</Radio>
                  <Radio value='복지관'>복지관</Radio>
                  <Radio value='보건소'>보건소</Radio>
                  <Radio value='관리사무소'>관리사무소</Radio>
                  <Radio value='복지기관'>복지기관</Radio>
                  <Radio value='시민사회단체'>시민사회단체</Radio>
                </Radio.Group>
              </Form.Item>
            )}
            {cnsltPath === "개인소개" && (
              <Form.Item noStyle name={"cnsltPathPerson"}>
                <Input placeholder={"소개인 성명"} style={{ maxWidth: 300 }} />
              </Form.Item>
            )}
            {cnsltPath === "본인직접" && (
              <Form.Item noStyle name={"cnsltPathDirect"}>
                <Input placeholder={"인지경로"} style={{ maxWidth: 300 }} />
              </Form.Item>
            )}
            {cnsltPath === "기타기관" && (
              <Space size={20} wrap>
                <Form.Item noStyle name={"cnsltPathOrg"}>
                  <Input placeholder={"기관명"} />
                </Form.Item>
                <Form.Item noStyle name={"cnsltPathOrgPerson"}>
                  <Input placeholder={"담당자"} />
                </Form.Item>
                <Form.Item noStyle name={"cnsltPathOrgPhone"}>
                  <Input placeholder={"전화번호"} />
                </Form.Item>
              </Space>
            )}
          </FormBox>

          <FormBoxHeader>인적사항</FormBoxHeader>
          <FormBox>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Form.Item label={"성명"} name={"area"} required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"생년월일"} name={"cnsltUserCd"} required>
                  <DatePicker picker={"date"} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"성별"} name={"cnsltDt"}>
                  <Radio.Group>
                    <Radio value='남'>남</Radio>
                    <Radio value='여'>여</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Form.Item label={"연락처 1"} name={"area"} required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"연락처 2"} name={"cnsltUserCd"} required>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Form.Item label={"장애유무"} name={"area"} required>
                  <Radio.Group>
                    <Radio value='남'>유</Radio>
                    <Radio value='여'>무</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={16}>
                <Form.Item label={"장애등급"} name={"cnsltUserCd"} required>
                  <Radio.Group>
                    <Radio value='심한 장애인'>심한 장애인</Radio>
                    <Radio value='심하지않은 장애인'>심하지않은 장애인</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label={"장애종류"} name={"area"} required>
              <Radio.Group>
                <Radio value='지체장애'>지체장애</Radio>
                <Radio value='뇌병변장애'>뇌병변장애</Radio>
                <Radio value='시각장애'>시각장애</Radio>
                <Radio value='청각장애'>청각장애</Radio>
                <Radio value='언어장애'>언어장애</Radio>
                <Radio value='안면장애'>안면장애</Radio>
                <Radio value='정신지체'>정신지체</Radio>
                <Radio value='발달장애'>발달장애</Radio>
                <Radio value='정신장애'>정신장애</Radio>
                <Radio value='신장장애'>신장장애</Radio>
                <Radio value='심장장애'>심장장애</Radio>
                <Radio value='호흡기장애'>호흡기장애</Radio>
                <Radio value='간장애'>간장애</Radio>
                <Radio value='장루요류장애'>장루요류장애</Radio>
                <Radio value='간질장애'>간질장애</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label={"주소"}>
              <Form.Item noStyle name={"zipcode"}>
                <Input />
              </Form.Item>
              <Button>주소찾기</Button>
              <Form.Item noStyle name={"addr1"}>
                <Input />
              </Form.Item>
              <Form.Item noStyle name={"addr2"}>
                <Input />
              </Form.Item>
            </Form.Item>
          </FormBox>

          <FormBoxHeader>상담내용</FormBoxHeader>
          <FormBox>
            <Form.Item label={"주요욕구"} name={"cnsltPath"} style={{ marginBottom: 5 }}>
              <Radio.Group>
                <Radio value='직접지원'>직접지원</Radio>
                <Radio value='주거정보자원'>주거정보자원</Radio>
                <Radio value='기타'>기타</Radio>
                <Radio value='세부내용'>세부내용</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label={"주요상담내용"} name={"area"} required>
              <Input.TextArea />
            </Form.Item>
          </FormBox>
        </Form>
      </Body>

      <ButtonGroup>
        <Button type={"primary"}>저장히기</Button>
        <Button>임시저장하기</Button>
      </ButtonGroup>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const Body = styled(PageLayout.Body)``;
const FormBoxHeader = styled(PageLayout.FormBoxHeader)``;
const FormBox = styled(PageLayout.FormBox)``;
const FormGroupTitle = styled(PageLayout.FormGroupTitle)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default PageCounselingRegistration;
