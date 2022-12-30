import * as React from "react";
import { Badge, Descriptions } from "antd";
import styled from "@emotion/styled";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";
import { useExampleDetailStore } from "./useExampleDetailStore";

interface Props {}

function ExampleDetailView(props: Props) {
  const { t } = useI18n();
  const exampleDetail = useExampleDetailStore((s) => s.exampleDetail);

  return (
    <Body>
      <ContentBoxHeader>{t.formItem.counseling.title1}</ContentBoxHeader>
      <ContentBox>
        <Descriptions bordered>
          <Descriptions.Item label={t.formItem.counseling.name.label}>{exampleDetail?.name}</Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.birthDt.label}>{exampleDetail?.birthDt}</Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.sex.label}>{exampleDetail?.sex}</Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.phone1.label}>{exampleDetail?.phone1}</Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.phone2.label} span={2}>
            {exampleDetail?.phone2}
          </Descriptions.Item>
          <Descriptions.Item label='Status' span={3}>
            <Badge status='processing' text='Running' />
          </Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.hndcapYn.label}>{exampleDetail?.hndcapYn}</Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.hndcapGrade.label}>
            {exampleDetail?.hndcapGrade}
          </Descriptions.Item>
          <Descriptions.Item label={t.formItem.counseling.hndcapTyp.label}>
            {exampleDetail?.hndcapTyp}
          </Descriptions.Item>
          <Descriptions.Item label='Config Info'>
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </Descriptions.Item>
        </Descriptions>
      </ContentBox>
    </Body>
  );
}

const Body = styled(PageLayout.Body)``;
const ContentBoxHeader = styled(PageLayout.ContentBoxHeader)``;
const ContentBox = styled(PageLayout.ContentBox)``;

export { ExampleDetailView };
