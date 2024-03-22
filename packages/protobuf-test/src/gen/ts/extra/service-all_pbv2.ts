// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/service-all.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile, MethodKind } from "@bufbuild/protobuf";
import type { TypedDescService } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Int32Value, StringValue } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_wrappers } from "@bufbuild/protobuf/next/wkt";

export const fileDesc_extra_service_all: DescFile = /*@__PURE__*/
  fileDesc("ChdleHRyYS9zZXJ2aWNlLWFsbC5wcm90bxIEc3BlYzLAAgoKU2VydmljZUFsbBJHCgVVbmFyeRIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRobLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlIgOQAgISUAoMU2VydmVyU3RyZWFtEhwuZ29vZ2xlLnByb3RvYnVmLlN0cmluZ1ZhbHVlGhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWUiA5ACATABEksKDENsaWVudFN0cmVhbRIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRobLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlKAESSgoEQmlkaRIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRobLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlIgOIAgEoATABYgZwcm90bzM", [fileDesc_google_protobuf_wrappers]);

/**
 * @generated from service spec.ServiceAll
 */
export const ServiceAll: TypedDescService<{
  /**
   * @generated from rpc spec.ServiceAll.Unary
   */
  unary: {
    kind: MethodKind.Unary;
    I: StringValue;
    O: Int32Value;
  },
  /**
   * @generated from rpc spec.ServiceAll.ServerStream
   */
  serverStream: {
    kind: MethodKind.ServerStreaming;
    I: StringValue;
    O: Int32Value;
  },
  /**
   * @generated from rpc spec.ServiceAll.ClientStream
   */
  clientStream: {
    kind: MethodKind.ClientStreaming;
    I: StringValue;
    O: Int32Value;
  },
  /**
   * @generated from rpc spec.ServiceAll.Bidi
   * @deprecated
   */
  bidi: {
    kind: MethodKind.BiDiStreaming;
    I: StringValue;
    O: Int32Value;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_extra_service_all, 0);

