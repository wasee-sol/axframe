import { Form, Select, DatePicker, Radio, Input, Row, Col, Button, Space, Checkbox } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { RFIWriteForm } from "react-frame-icon";
import { PageLayout } from "styles/pageStyled";
import IconText from "components/common/IconText";
import { useCounselingRegistrationController } from "../../@controller/pages/CounselingRegistrationController";
import { mergeProps } from "../../utils/object";

interface Props {}

interface FormField {
  area: string;
  cnsltUserCd: string;
  cnsltDt: string;
  cnsltHow: string;
  cnsltHowEtc: string;
  cnsltPath: string;
  cnsltPathDtl: string;
  cnsltPathPerson: string;
  cnsltPathDirect: string;
  cnsltPathOrg: string;
  cnsltPathOrgPerson: string;
  cnsltPathOrgPhone: string;
  name: string;
  birthDt: string;
  sex: string;
  phone1: string;
  phone2: string;
  hndcapYn: string;
  hndcapGrade: string;
  hndcapTyp: string;
  zipNum: string;
  addr: string;
  addrDtls: string;
  hopePoint: string;
  hopePoint1: string;
  hopePoint1Etc: string;
  hopePoint2: string;
  hopePoint2Etc: string;
  hopePoint3: string;
  hopePoint3Etc: string;
  hopePoint4Etc: string;
  hopePoint5Etc: string;
  fldT: string;
}

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
  const { pageModelMetadata, setPageModelMetadata } = mergeProps(props, useCounselingRegistrationController());
  const [form] = Form.useForm();
  const cnsltHow = Form.useWatch("cnsltHow", form);
  const cnsltPath = Form.useWatch("cnsltPath", form);
  const hopePoint = Form.useWatch("hopePoint", form);
  const hopePoint1 = Form.useWatch("hopePoint1", form);
  const hopePoint2 = Form.useWatch("hopePoint2", form);
  const hopePoint3 = Form.useWatch("hopePoint3", form);

  const handleFormValuesChange = React.useCallback(
    (changedValues: any, values: FormField) => {
      setPageModelMetadata(values);
    },
    [setPageModelMetadata]
  );

  const handleFormReset = React.useCallback(() => {
    form.resetFields();
    setPageModelMetadata({});
  }, [form, setPageModelMetadata]);

  const formInitialValues = {};

  React.useEffect(() => {
    form.setFieldsValue(pageModelMetadata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <Container>
      <Header>
        <IconText icon={<RFIWriteForm />}>상담 기록지 등록</IconText>

        <ButtonGroup>
          <Button>임시저장목록 불러오기</Button>
          <Button onClick={handleFormReset}>초기화</Button>
        </ButtonGroup>
      </Header>
      <Body>
        <Form<FormField>
          form={form}
          layout={"vertical"}
          colon={false}
          initialValues={formInitialValues}
          onValuesChange={handleFormValuesChange}
        >
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
                <Radio value=''>선택안함</Radio>
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
                <Form.Item label={"성명"} name={"name"} required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"생년월일"} name={"birthDt"} required>
                  <DatePicker picker={"date"} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"성별"} name={"sex"}>
                  <Radio.Group>
                    <Radio value='남'>남</Radio>
                    <Radio value='여'>여</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Form.Item label={"연락처 1"} name={"phone1"} required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item label={"연락처 2"} name={"phone2"} required>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Form.Item label={"장애유무"} name={"hndcapYn"} required>
                  <Radio.Group>
                    <Radio value='남'>유</Radio>
                    <Radio value='여'>무</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={16}>
                <Form.Item label={"장애등급"} name={"hndcapGrade"} required>
                  <Radio.Group>
                    <Radio value='심한 장애인'>심한 장애인</Radio>
                    <Radio value='심하지않은 장애인'>심하지않은 장애인</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label={"장애종류"} name={"hndcapTyp"} required>
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
              <Row gutter={[10, 10]}>
                <Col xs={12} sm={3}>
                  <Form.Item noStyle name={"zipNum"}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={3}>
                  <Button block>주소찾기</Button>
                </Col>
                <Col xs={24} sm={9}>
                  <Form.Item noStyle name={"addr"}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={9}>
                  <Form.Item noStyle name={"addrDtls"}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </FormBox>

          <FormBoxHeader>상담내용</FormBoxHeader>
          <FormBox>
            <FormGroupTitle>
              <Form.Item name={["hopePoint", "직접지원"]} noStyle valuePropName={"checked"}>
                <Checkbox>직접지원</Checkbox>
              </Form.Item>
            </FormGroupTitle>

            <FormBox level={2}>
              <Space size={[8, 8]} wrap>
                <Form.Item noStyle name={"hopePoint1"}>
                  <Radio.Group disabled={!hopePoint?.["직접지원"]}>
                    <Radio value='긴급임대료'>긴급임대료</Radio>
                    <Radio value='집수리'>집수리</Radio>
                    <Radio value='긴급연료'>긴급연료</Radio>
                    <Radio value='보증금지원'>보증금지원</Radio>
                    <Radio value='주거이전지원(이사비)'>주거이전지원(이사비)</Radio>
                    <Radio value='기타'>기타</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item noStyle name={"hopePoint1Etc"}>
                  <Input disabled={hopePoint1 !== "기타" || !hopePoint?.["직접지원"]} size={"small"} />
                </Form.Item>
              </Space>
            </FormBox>

            <FormGroupTitle>
              <Form.Item name={["hopePoint", "주거정보자원"]} noStyle valuePropName={"checked"}>
                <Checkbox>주거정보자원</Checkbox>
              </Form.Item>
            </FormGroupTitle>

            <FormBox level={2}>
              <Space size={[8, 8]} wrap>
                <Form.Item noStyle name={"hopePoint2"}>
                  <Radio.Group disabled={!hopePoint?.["주거정보자원"]}>
                    <Radio value='임대주택'>임대주택</Radio>
                    <Radio value='융자정보'>융자정보</Radio>
                    <Radio value='청약정보'>청약정보</Radio>
                    <Radio value='대출정보'>대출정보</Radio>
                    <Radio value='재개발/뉴타운'>재개발/뉴타운</Radio>
                    <Radio value='기타'>기타</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item noStyle name={"hopePoint2Etc"}>
                  <Input disabled={hopePoint2 !== "기타" || !hopePoint?.["주거정보자원"]} size={"small"} />
                </Form.Item>
              </Space>
            </FormBox>

            <FormGroupTitle>
              <Form.Item name={["hopePoint", "내부자원"]} noStyle valuePropName={"checked"}>
                <Checkbox>내부자원</Checkbox>
              </Form.Item>
            </FormGroupTitle>

            <FormBox level={2}>
              <Space size={[8, 8]} wrap>
                <Form.Item noStyle name={"hopePoint3"}>
                  <Radio.Group disabled={!hopePoint?.["내부자원"]}>
                    <Radio value='주거복지 상담/사례관리'>주거복지 상담/사례관리</Radio>
                    <Radio value='주거물품지원'>주거물품지원</Radio>
                    <Radio value='연료지원'>연료지원</Radio>
                    <Radio value='긴급지원주택(희망하우스)'>긴급지원주택(희망하우스)</Radio>
                    <Radio value='주거상향 임대주택 정보제공'>주거상향 임대주택 정보제공</Radio>
                    <Radio value='주거비소액대출'>주거비소액대출</Radio>
                    <Radio value='청약저축 개설/유지지원'>청약저축 개설/유지지원</Radio>
                    <Radio value='비주택거주자 주거상향'>비주택거주자 주거상향</Radio>
                    <Radio value='노후주택개보수'>노후주택개보수</Radio>
                    <Radio value='주거안정지원'>주거안정지원</Radio>
                    <Radio value='사랑의집수리'>사랑의집수리</Radio>
                    <Radio value='아동주거환경개선'>아동주거환경개선</Radio>
                    <Radio value='기타'>기타</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item noStyle name={"hopePoint3Etc"}>
                  <Input disabled={hopePoint3 !== "기타" || !hopePoint?.["내부자원"]} size={"small"} />
                </Form.Item>
              </Space>
            </FormBox>

            <FormGroupTitle>
              <Form.Item name={["hopePoint", "기타"]} noStyle valuePropName={"checked"}>
                <Checkbox>기타</Checkbox>
              </Form.Item>
            </FormGroupTitle>

            <Form.Item name={"hopePoint4Etc"}>
              <Input disabled={!hopePoint?.["기타"]} />
            </Form.Item>

            <FormGroupTitle>
              <Form.Item name={["hopePoint", "세부내용"]} noStyle valuePropName={"checked"}>
                <Checkbox> 세부내용</Checkbox>
              </Form.Item>
            </FormGroupTitle>

            <Form.Item name={"hopePoint5Etc"}>
              <Input.TextArea disabled={!hopePoint?.["세부내용"]} />
            </Form.Item>

            <Form.Item label={"주요상담내용"} name={"fldT"} required>
              <Input.TextArea rows={4} />
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
