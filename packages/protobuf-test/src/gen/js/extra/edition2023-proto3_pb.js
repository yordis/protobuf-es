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

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/edition2023-proto3.proto (package spec, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.Proto3EnumForEdition2023
 */
export const Proto3EnumForEdition2023 = /*@__PURE__*/ proto3.makeEnum(
  "spec.Proto3EnumForEdition2023",
  [
    {no: 0, name: "PROTO3_ENUM_FOR_EDITION2023_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "PROTO3_ENUM_FOR_EDITION2023_A", localName: "A"},
  ],
);

/**
 * see edition2023.proto
 *
 * @generated from message spec.Proto3MessageForEdition2023
 */
export const Proto3MessageForEdition2023 = /*@__PURE__*/ proto3.makeMessageType(
  "spec.Proto3MessageForEdition2023",
  () => [
    { no: 1, name: "implicit_bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "implicit_open_enum_field", kind: "enum", T: proto3.getEnumType(Proto3EnumForEdition2023) },
    { no: 5, name: "explicit_bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 6, name: "explicit_open_enum_field", kind: "enum", T: proto3.getEnumType(Proto3EnumForEdition2023), opt: true },
    { no: 9, name: "packed_double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 10, name: "unpacked_double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: false },
  ],
);
