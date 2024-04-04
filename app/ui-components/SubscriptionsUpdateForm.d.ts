/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubscriptionsUpdateFormInputValues = {
    customer_id?: string;
    subscription_id?: string;
    subscription_status?: string;
    usersID?: string;
};
export declare type SubscriptionsUpdateFormValidationValues = {
    customer_id?: ValidationFunction<string>;
    subscription_id?: ValidationFunction<string>;
    subscription_status?: ValidationFunction<string>;
    usersID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubscriptionsUpdateFormOverridesProps = {
    SubscriptionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customer_id?: PrimitiveOverrideProps<TextFieldProps>;
    subscription_id?: PrimitiveOverrideProps<TextFieldProps>;
    subscription_status?: PrimitiveOverrideProps<TextFieldProps>;
    usersID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubscriptionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubscriptionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subscriptions?: any;
    onSubmit?: (fields: SubscriptionsUpdateFormInputValues) => SubscriptionsUpdateFormInputValues;
    onSuccess?: (fields: SubscriptionsUpdateFormInputValues) => void;
    onError?: (fields: SubscriptionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubscriptionsUpdateFormInputValues) => SubscriptionsUpdateFormInputValues;
    onValidate?: SubscriptionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubscriptionsUpdateForm(props: SubscriptionsUpdateFormProps): React.ReactElement;
