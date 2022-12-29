import * as React from "react";
import { Badge, Descriptions } from "antd";
import styled from "@emotion/styled";
import { PageLayout } from "styles/pageStyled";
import { ExampleItem } from "@core/services/example/ExampleRepositoryInterface";
import { useI18n } from "@core/hooks/useI18n";
import { useExampleDetailStore } from "./useExampleDetailStore";
import { useDidMountEffect } from "@core/hooks/useDidMountEffect";

interface Props {}

function ExampleDetailView(props: Props) {
  const exampleDetail = useExampleDetailStore((s) => s.exampleDetail);
  const { t } = useI18n();

  useDidMountEffect(() => {});

  return (
    <Body>
      <Descriptions title='User Info' bordered>
        <Descriptions.Item label='Product'>Cloud Database</Descriptions.Item>
        <Descriptions.Item label='Billing Mode'>Prepaid</Descriptions.Item>
        <Descriptions.Item label='Automatic Renewal'>YES</Descriptions.Item>
        <Descriptions.Item label='Order time'>2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label='Usage Time' span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={3}>
          <Badge status='processing' text='Running' />
        </Descriptions.Item>
        <Descriptions.Item label='Negotiated Amount'>$80.00</Descriptions.Item>
        <Descriptions.Item label='Discount'>$20.00</Descriptions.Item>
        <Descriptions.Item label='Official Receipts'>$60.00</Descriptions.Item>
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
    </Body>
  );
}

const Body = styled(PageLayout.Body)``;

export { ExampleDetailView };
