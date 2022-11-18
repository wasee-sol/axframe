import { Form } from "antd";
import { usePageMetaData, useI18n, useDidMountEffect } from "hooks";
import * as React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { ROUTES } from "router/Routes";
import { convertToDate } from "@core/utils/object";

export function useExampleRegistration() {
  const [form] = Form.useForm();
  const openZipCodeFinder = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
  const { currentPage, pageMetadata, setPageMetadata } = usePageMetaData(
    ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION.path
  );
  const { t, currentLanguage } = useI18n();

  const handleFormValuesChange = React.useCallback(
    (changedValues: any, values: any) => {
      setPageMetadata(values);
    },
    [setPageMetadata]
  );

  const handleFindZipCode = React.useCallback(async () => {
    await openZipCodeFinder({
      onComplete: (data) => {
        form.setFieldsValue({
          zipNum: data.zonecode,
          addr: data.address,
        });
        form.getFieldInstance("addrDtls").focus();
      },
    });
  }, [form, openZipCodeFinder]);

  const handleFormReset = React.useCallback(() => {
    form.resetFields();
    setPageMetadata({});
  }, [form, setPageMetadata]);

  useDidMountEffect(() => {
    form.setFieldsValue(convertToDate(pageMetadata, ["cnsltDt", "birthDt"]));
  });

  return {
    form,
    currentPage,
    pageModelMetadata: pageMetadata,
    setPageModelMetadata: setPageMetadata,
    t,
    currentLanguage,
    handleFormValuesChange,
    handleFindZipCode,
    handleFormReset,
  };
}
