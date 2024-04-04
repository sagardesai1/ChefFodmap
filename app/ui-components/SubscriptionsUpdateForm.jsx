/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSubscriptions } from "../../src/graphql/queries";
import { updateSubscriptions } from "../../src/graphql/mutations";
const client = generateClient();
export default function SubscriptionsUpdateForm(props) {
  const {
    id: idProp,
    subscriptions: subscriptionsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customer_id: "",
    subscription_id: "",
    subscription_status: "",
    usersID: "",
  };
  const [customer_id, setCustomer_id] = React.useState(
    initialValues.customer_id
  );
  const [subscription_id, setSubscription_id] = React.useState(
    initialValues.subscription_id
  );
  const [subscription_status, setSubscription_status] = React.useState(
    initialValues.subscription_status
  );
  const [usersID, setUsersID] = React.useState(initialValues.usersID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = subscriptionsRecord
      ? { ...initialValues, ...subscriptionsRecord }
      : initialValues;
    setCustomer_id(cleanValues.customer_id);
    setSubscription_id(cleanValues.subscription_id);
    setSubscription_status(cleanValues.subscription_status);
    setUsersID(cleanValues.usersID);
    setErrors({});
  };
  const [subscriptionsRecord, setSubscriptionsRecord] = React.useState(
    subscriptionsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSubscriptions.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSubscriptions
        : subscriptionsModelProp;
      setSubscriptionsRecord(record);
    };
    queryData();
  }, [idProp, subscriptionsModelProp]);
  React.useEffect(resetStateValues, [subscriptionsRecord]);
  const validations = {
    customer_id: [],
    subscription_id: [],
    subscription_status: [{ type: "Required" }],
    usersID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          customer_id: customer_id ?? null,
          subscription_id: subscription_id ?? null,
          subscription_status,
          usersID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSubscriptions.replaceAll("__typename", ""),
            variables: {
              input: {
                id: subscriptionsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SubscriptionsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customer_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id: value,
              subscription_id,
              subscription_status,
              usersID,
            };
            const result = onChange(modelFields);
            value = result?.customer_id ?? value;
          }
          if (errors.customer_id?.hasError) {
            runValidationTasks("customer_id", value);
          }
          setCustomer_id(value);
        }}
        onBlur={() => runValidationTasks("customer_id", customer_id)}
        errorMessage={errors.customer_id?.errorMessage}
        hasError={errors.customer_id?.hasError}
        {...getOverrideProps(overrides, "customer_id")}
      ></TextField>
      <TextField
        label="Subscription id"
        isRequired={false}
        isReadOnly={false}
        value={subscription_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              subscription_id: value,
              subscription_status,
              usersID,
            };
            const result = onChange(modelFields);
            value = result?.subscription_id ?? value;
          }
          if (errors.subscription_id?.hasError) {
            runValidationTasks("subscription_id", value);
          }
          setSubscription_id(value);
        }}
        onBlur={() => runValidationTasks("subscription_id", subscription_id)}
        errorMessage={errors.subscription_id?.errorMessage}
        hasError={errors.subscription_id?.hasError}
        {...getOverrideProps(overrides, "subscription_id")}
      ></TextField>
      <TextField
        label="Subscription status"
        isRequired={true}
        isReadOnly={false}
        value={subscription_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              subscription_id,
              subscription_status: value,
              usersID,
            };
            const result = onChange(modelFields);
            value = result?.subscription_status ?? value;
          }
          if (errors.subscription_status?.hasError) {
            runValidationTasks("subscription_status", value);
          }
          setSubscription_status(value);
        }}
        onBlur={() =>
          runValidationTasks("subscription_status", subscription_status)
        }
        errorMessage={errors.subscription_status?.errorMessage}
        hasError={errors.subscription_status?.hasError}
        {...getOverrideProps(overrides, "subscription_status")}
      ></TextField>
      <TextField
        label="Users id"
        isRequired={true}
        isReadOnly={false}
        value={usersID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              subscription_id,
              subscription_status,
              usersID: value,
            };
            const result = onChange(modelFields);
            value = result?.usersID ?? value;
          }
          if (errors.usersID?.hasError) {
            runValidationTasks("usersID", value);
          }
          setUsersID(value);
        }}
        onBlur={() => runValidationTasks("usersID", usersID)}
        errorMessage={errors.usersID?.errorMessage}
        hasError={errors.usersID?.hasError}
        {...getOverrideProps(overrides, "usersID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || subscriptionsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || subscriptionsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
