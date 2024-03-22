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
// @generated from file extra/deprecation-implicit.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_extra_deprecation_implicit: DescFile = /*@__PURE__*/
  fileDesc("CiBleHRyYS9kZXByZWNhdGlvbi1pbXBsaWNpdC5wcm90bxIEc3BlYyIdChtJbXBsaWNpdGx5RGVwcmVjYXRlZE1lc3NhZ2VCA7gBAWIGcHJvdG8z");

/**
 * @generated from message spec.ImplicitlyDeprecatedMessage
 * @deprecated
 */
export type ImplicitlyDeprecatedMessage = Message<"spec.ImplicitlyDeprecatedMessage"> & {
};

// Describes the message spec.ImplicitlyDeprecatedMessage.
// Use `create(ImplicitlyDeprecatedMessageDesc)` to create a new ImplicitlyDeprecatedMessage.
export const ImplicitlyDeprecatedMessageDesc: TypedDescMessage<ImplicitlyDeprecatedMessage> = /*@__PURE__*/
  messageDesc(fileDesc_extra_deprecation_implicit, 0);

