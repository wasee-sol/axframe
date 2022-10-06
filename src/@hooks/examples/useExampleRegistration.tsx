import { Form } from "antd";
import { usePageModel } from "hooks/usePageModel";
import * as React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";
import { useDidMountEffect } from "hooks/useDidMountEffect";
import { convertToDate } from "utils/object";

export function useExampleRegistration() {
  const [form] = Form.useForm();
  const openZipCodeFinder = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(
    ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION.path
  );
  const { t, currentLanguage } = useI18n();

  const handleFormValuesChange = React.useCallback(
    (changedValues: any, values: any) => {
      setPageModelMetadata(values);
    },
    [setPageModelMetadata]
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
    setPageModelMetadata({});
  }, [form, setPageModelMetadata]);

  useDidMountEffect(() => {
    form.setFieldsValue(convertToDate(pageModelMetadata, ["cnsltDt", "birthDt"]));
  });

  return {
    form,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
    handleFormValuesChange,
    handleFindZipCode,
    handleFormReset,
  };
}
