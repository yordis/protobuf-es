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
// @generated from file google/protobuf/unittest_proto3.proto (package proto3_unittest, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { TypedDescEnum, TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { ImportMessage } from "./unittest_import_pbv2.js";
import { fileDesc_google_protobuf_unittest_import } from "./unittest_import_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";
import type { PublicImportMessage } from "./unittest_import_public_pbv2.js";

export const fileDesc_google_protobuf_unittest_proto3: DescFile = /*@__PURE__*/
  fileDesc("CiVnb29nbGUvcHJvdG9idWYvdW5pdHRlc3RfcHJvdG8zLnByb3RvEg9wcm90bzNfdW5pdHRlc3QigxIKDFRlc3RBbGxUeXBlcxIWCg5vcHRpb25hbF9pbnQzMhgBIAEoBRIWCg5vcHRpb25hbF9pbnQ2NBgCIAEoAxIXCg9vcHRpb25hbF91aW50MzIYAyABKA0SFwoPb3B0aW9uYWxfdWludDY0GAQgASgEEhcKD29wdGlvbmFsX3NpbnQzMhgFIAEoERIXCg9vcHRpb25hbF9zaW50NjQYBiABKBISGAoQb3B0aW9uYWxfZml4ZWQzMhgHIAEoBxIYChBvcHRpb25hbF9maXhlZDY0GAggASgGEhkKEW9wdGlvbmFsX3NmaXhlZDMyGAkgASgPEhkKEW9wdGlvbmFsX3NmaXhlZDY0GAogASgQEhYKDm9wdGlvbmFsX2Zsb2F0GAsgASgCEhcKD29wdGlvbmFsX2RvdWJsZRgMIAEoARIVCg1vcHRpb25hbF9ib29sGA0gASgIEhcKD29wdGlvbmFsX3N0cmluZxgOIAEoCRIWCg5vcHRpb25hbF9ieXRlcxgPIAEoDBJRChdvcHRpb25hbF9uZXN0ZWRfbWVzc2FnZRgSIAEoCzIrLnByb3RvM191bml0dGVzdC5UZXN0QWxsVHlwZXMuTmVzdGVkTWVzc2FnZUgBiAEBEkEKGG9wdGlvbmFsX2ZvcmVpZ25fbWVzc2FnZRgTIAEoCzIfLnByb3RvM191bml0dGVzdC5Gb3JlaWduTWVzc2FnZRJIChdvcHRpb25hbF9pbXBvcnRfbWVzc2FnZRgUIAEoCzInLnByb3RvYnVmX3VuaXR0ZXN0X2ltcG9ydC5JbXBvcnRNZXNzYWdlEkYKFG9wdGlvbmFsX25lc3RlZF9lbnVtGBUgASgOMigucHJvdG8zX3VuaXR0ZXN0LlRlc3RBbGxUeXBlcy5OZXN0ZWRFbnVtEjsKFW9wdGlvbmFsX2ZvcmVpZ25fZW51bRgWIAEoDjIcLnByb3RvM191bml0dGVzdC5Gb3JlaWduRW51bRIhChVvcHRpb25hbF9zdHJpbmdfcGllY2UYGCABKAlCAggCEhkKDW9wdGlvbmFsX2NvcmQYGSABKAlCAggBElUKHm9wdGlvbmFsX3B1YmxpY19pbXBvcnRfbWVzc2FnZRgaIAEoCzItLnByb3RvYnVmX3VuaXR0ZXN0X2ltcG9ydC5QdWJsaWNJbXBvcnRNZXNzYWdlEk4KFW9wdGlvbmFsX2xhenlfbWVzc2FnZRgbIAEoCzIrLnByb3RvM191bml0dGVzdC5UZXN0QWxsVHlwZXMuTmVzdGVkTWVzc2FnZUICKAESWQogb3B0aW9uYWxfdW52ZXJpZmllZF9sYXp5X21lc3NhZ2UYHCABKAsyKy5wcm90bzNfdW5pdHRlc3QuVGVzdEFsbFR5cGVzLk5lc3RlZE1lc3NhZ2VCAngBElEKHG9wdGlvbmFsX2xhenlfaW1wb3J0X21lc3NhZ2UYcyABKAsyJy5wcm90b2J1Zl91bml0dGVzdF9pbXBvcnQuSW1wb3J0TWVzc2FnZUICKAESFgoOcmVwZWF0ZWRfaW50MzIYHyADKAUSFgoOcmVwZWF0ZWRfaW50NjQYICADKAMSFwoPcmVwZWF0ZWRfdWludDMyGCEgAygNEhcKD3JlcGVhdGVkX3VpbnQ2NBgiIAMoBBIXCg9yZXBlYXRlZF9zaW50MzIYIyADKBESFwoPcmVwZWF0ZWRfc2ludDY0GCQgAygSEhgKEHJlcGVhdGVkX2ZpeGVkMzIYJSADKAcSGAoQcmVwZWF0ZWRfZml4ZWQ2NBgmIAMoBhIZChFyZXBlYXRlZF9zZml4ZWQzMhgnIAMoDxIZChFyZXBlYXRlZF9zZml4ZWQ2NBgoIAMoEBIWCg5yZXBlYXRlZF9mbG9hdBgpIAMoAhIXCg9yZXBlYXRlZF9kb3VibGUYKiADKAESFQoNcmVwZWF0ZWRfYm9vbBgrIAMoCBIXCg9yZXBlYXRlZF9zdHJpbmcYLCADKAkSFgoOcmVwZWF0ZWRfYnl0ZXMYLSADKAwSTAoXcmVwZWF0ZWRfbmVzdGVkX21lc3NhZ2UYMCADKAsyKy5wcm90bzNfdW5pdHRlc3QuVGVzdEFsbFR5cGVzLk5lc3RlZE1lc3NhZ2USQQoYcmVwZWF0ZWRfZm9yZWlnbl9tZXNzYWdlGDEgAygLMh8ucHJvdG8zX3VuaXR0ZXN0LkZvcmVpZ25NZXNzYWdlEkgKF3JlcGVhdGVkX2ltcG9ydF9tZXNzYWdlGDIgAygLMicucHJvdG9idWZfdW5pdHRlc3RfaW1wb3J0LkltcG9ydE1lc3NhZ2USRgoUcmVwZWF0ZWRfbmVzdGVkX2VudW0YMyADKA4yKC5wcm90bzNfdW5pdHRlc3QuVGVzdEFsbFR5cGVzLk5lc3RlZEVudW0SOwoVcmVwZWF0ZWRfZm9yZWlnbl9lbnVtGDQgAygOMhwucHJvdG8zX3VuaXR0ZXN0LkZvcmVpZ25FbnVtEiEKFXJlcGVhdGVkX3N0cmluZ19waWVjZRg2IAMoCUICCAISGQoNcmVwZWF0ZWRfY29yZBg3IAMoCUICCAESTgoVcmVwZWF0ZWRfbGF6eV9tZXNzYWdlGDkgAygLMisucHJvdG8zX3VuaXR0ZXN0LlRlc3RBbGxUeXBlcy5OZXN0ZWRNZXNzYWdlQgIoARIWCgxvbmVvZl91aW50MzIYbyABKA1IABJLChRvbmVvZl9uZXN0ZWRfbWVzc2FnZRhwIAEoCzIrLnByb3RvM191bml0dGVzdC5UZXN0QWxsVHlwZXMuTmVzdGVkTWVzc2FnZUgAEhYKDG9uZW9mX3N0cmluZxhxIAEoCUgAEhUKC29uZW9mX2J5dGVzGHIgASgMSAAaGwoNTmVzdGVkTWVzc2FnZRIKCgJiYhgBIAEoBSJDCgpOZXN0ZWRFbnVtEggKBFpFUk8QABIHCgNGT08QARIHCgNCQVIQAhIHCgNCQVoQAxIQCgNORUcQ////////////AUINCgtvbmVvZl9maWVsZEIaChhfb3B0aW9uYWxfbmVzdGVkX21lc3NhZ2UiqAMKD1Rlc3RQYWNrZWRUeXBlcxIYCgxwYWNrZWRfaW50MzIYWiADKAVCAhABEhgKDHBhY2tlZF9pbnQ2NBhbIAMoA0ICEAESGQoNcGFja2VkX3VpbnQzMhhcIAMoDUICEAESGQoNcGFja2VkX3VpbnQ2NBhdIAMoBEICEAESGQoNcGFja2VkX3NpbnQzMhheIAMoEUICEAESGQoNcGFja2VkX3NpbnQ2NBhfIAMoEkICEAESGgoOcGFja2VkX2ZpeGVkMzIYYCADKAdCAhABEhoKDnBhY2tlZF9maXhlZDY0GGEgAygGQgIQARIbCg9wYWNrZWRfc2ZpeGVkMzIYYiADKA9CAhABEhsKD3BhY2tlZF9zZml4ZWQ2NBhjIAMoEEICEAESGAoMcGFja2VkX2Zsb2F0GGQgAygCQgIQARIZCg1wYWNrZWRfZG91YmxlGGUgAygBQgIQARIXCgtwYWNrZWRfYm9vbBhmIAMoCEICEAESNQoLcGFja2VkX2VudW0YZyADKA4yHC5wcm90bzNfdW5pdHRlc3QuRm9yZWlnbkVudW1CAhABItkDChFUZXN0VW5wYWNrZWRUeXBlcxIaCg5yZXBlYXRlZF9pbnQzMhgBIAMoBUICEAASGgoOcmVwZWF0ZWRfaW50NjQYAiADKANCAhAAEhsKD3JlcGVhdGVkX3VpbnQzMhgDIAMoDUICEAASGwoPcmVwZWF0ZWRfdWludDY0GAQgAygEQgIQABIbCg9yZXBlYXRlZF9zaW50MzIYBSADKBFCAhAAEhsKD3JlcGVhdGVkX3NpbnQ2NBgGIAMoEkICEAASHAoQcmVwZWF0ZWRfZml4ZWQzMhgHIAMoB0ICEAASHAoQcmVwZWF0ZWRfZml4ZWQ2NBgIIAMoBkICEAASHQoRcmVwZWF0ZWRfc2ZpeGVkMzIYCSADKA9CAhAAEh0KEXJlcGVhdGVkX3NmaXhlZDY0GAogAygQQgIQABIaCg5yZXBlYXRlZF9mbG9hdBgLIAMoAkICEAASGwoPcmVwZWF0ZWRfZG91YmxlGAwgAygBQgIQABIZCg1yZXBlYXRlZF9ib29sGA0gAygIQgIQABJKChRyZXBlYXRlZF9uZXN0ZWRfZW51bRgOIAMoDjIoLnByb3RvM191bml0dGVzdC5UZXN0QWxsVHlwZXMuTmVzdGVkRW51bUICEAAieAoSTmVzdGVkVGVzdEFsbFR5cGVzEjIKBWNoaWxkGAEgASgLMiMucHJvdG8zX3VuaXR0ZXN0Lk5lc3RlZFRlc3RBbGxUeXBlcxIuCgdwYXlsb2FkGAIgASgLMh0ucHJvdG8zX3VuaXR0ZXN0LlRlc3RBbGxUeXBlcyIbCg5Gb3JlaWduTWVzc2FnZRIJCgFjGAEgASgFIhIKEFRlc3RFbXB0eU1lc3NhZ2UiKQoUVGVzdE1lc3NhZ2VXaXRoRHVtbXkSEQoFZHVtbXkY/////wEgASgIIoUBCgpUZXN0T25lb2YyEjoKCGZvb19lbnVtGAYgASgOMiYucHJvdG8zX3VuaXR0ZXN0LlRlc3RPbmVvZjIuTmVzdGVkRW51bUgAIjQKCk5lc3RlZEVudW0SCwoHVU5LTk9XThAAEgcKA0ZPTxABEgcKA0JBUhACEgcKA0JBWhADQgUKA2ZvbypSCgtGb3JlaWduRW51bRIQCgxGT1JFSUdOX1pFUk8QABIPCgtGT1JFSUdOX0ZPTxAEEg8KC0ZPUkVJR05fQkFSEAUSDwoLRk9SRUlHTl9CQVoQBkICSAFiBnByb3RvMw", [fileDesc_google_protobuf_unittest_import]);

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * @generated from message proto3_unittest.TestAllTypes
 */
export type TestAllTypes = Message<"proto3_unittest.TestAllTypes"> & {
  /**
   * Singular
   *
   * @generated from field: int32 optional_int32 = 1;
   */
  optionalInt32: number;

  /**
   * @generated from field: int64 optional_int64 = 2;
   */
  optionalInt64: bigint;

  /**
   * @generated from field: uint32 optional_uint32 = 3;
   */
  optionalUint32: number;

  /**
   * @generated from field: uint64 optional_uint64 = 4;
   */
  optionalUint64: bigint;

  /**
   * @generated from field: sint32 optional_sint32 = 5;
   */
  optionalSint32: number;

  /**
   * @generated from field: sint64 optional_sint64 = 6;
   */
  optionalSint64: bigint;

  /**
   * @generated from field: fixed32 optional_fixed32 = 7;
   */
  optionalFixed32: number;

  /**
   * @generated from field: fixed64 optional_fixed64 = 8;
   */
  optionalFixed64: bigint;

  /**
   * @generated from field: sfixed32 optional_sfixed32 = 9;
   */
  optionalSfixed32: number;

  /**
   * @generated from field: sfixed64 optional_sfixed64 = 10;
   */
  optionalSfixed64: bigint;

  /**
   * @generated from field: float optional_float = 11;
   */
  optionalFloat: number;

  /**
   * @generated from field: double optional_double = 12;
   */
  optionalDouble: number;

  /**
   * @generated from field: bool optional_bool = 13;
   */
  optionalBool: boolean;

  /**
   * @generated from field: string optional_string = 14;
   */
  optionalString: string;

  /**
   * @generated from field: bytes optional_bytes = 15;
   */
  optionalBytes: Uint8Array;

  /**
   * @generated from field: optional proto3_unittest.TestAllTypes.NestedMessage optional_nested_message = 18;
   */
  optionalNestedMessage?: TestAllTypes_NestedMessage;

  /**
   * @generated from field: proto3_unittest.ForeignMessage optional_foreign_message = 19;
   */
  optionalForeignMessage?: ForeignMessage;

  /**
   * @generated from field: protobuf_unittest_import.ImportMessage optional_import_message = 20;
   */
  optionalImportMessage?: ImportMessage;

  /**
   * @generated from field: proto3_unittest.TestAllTypes.NestedEnum optional_nested_enum = 21;
   */
  optionalNestedEnum: TestAllTypes_NestedEnum;

  /**
   * @generated from field: proto3_unittest.ForeignEnum optional_foreign_enum = 22;
   */
  optionalForeignEnum: ForeignEnum;

  /**
   * @generated from field: string optional_string_piece = 24;
   */
  optionalStringPiece: string;

  /**
   * @generated from field: string optional_cord = 25;
   */
  optionalCord: string;

  /**
   * Defined in unittest_import_public.proto
   *
   * @generated from field: protobuf_unittest_import.PublicImportMessage optional_public_import_message = 26;
   */
  optionalPublicImportMessage?: PublicImportMessage;

  /**
   * @generated from field: proto3_unittest.TestAllTypes.NestedMessage optional_lazy_message = 27;
   */
  optionalLazyMessage?: TestAllTypes_NestedMessage;

  /**
   * @generated from field: proto3_unittest.TestAllTypes.NestedMessage optional_unverified_lazy_message = 28;
   */
  optionalUnverifiedLazyMessage?: TestAllTypes_NestedMessage;

  /**
   * @generated from field: protobuf_unittest_import.ImportMessage optional_lazy_import_message = 115;
   */
  optionalLazyImportMessage?: ImportMessage;

  /**
   * Repeated
   *
   * @generated from field: repeated int32 repeated_int32 = 31;
   */
  repeatedInt32: number[];

  /**
   * @generated from field: repeated int64 repeated_int64 = 32;
   */
  repeatedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 repeated_uint32 = 33;
   */
  repeatedUint32: number[];

  /**
   * @generated from field: repeated uint64 repeated_uint64 = 34;
   */
  repeatedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 repeated_sint32 = 35;
   */
  repeatedSint32: number[];

  /**
   * @generated from field: repeated sint64 repeated_sint64 = 36;
   */
  repeatedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 repeated_fixed32 = 37;
   */
  repeatedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 repeated_fixed64 = 38;
   */
  repeatedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
   */
  repeatedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
   */
  repeatedSfixed64: bigint[];

  /**
   * @generated from field: repeated float repeated_float = 41;
   */
  repeatedFloat: number[];

  /**
   * @generated from field: repeated double repeated_double = 42;
   */
  repeatedDouble: number[];

  /**
   * @generated from field: repeated bool repeated_bool = 43;
   */
  repeatedBool: boolean[];

  /**
   * @generated from field: repeated string repeated_string = 44;
   */
  repeatedString: string[];

  /**
   * @generated from field: repeated bytes repeated_bytes = 45;
   */
  repeatedBytes: Uint8Array[];

  /**
   * @generated from field: repeated proto3_unittest.TestAllTypes.NestedMessage repeated_nested_message = 48;
   */
  repeatedNestedMessage: TestAllTypes_NestedMessage[];

  /**
   * @generated from field: repeated proto3_unittest.ForeignMessage repeated_foreign_message = 49;
   */
  repeatedForeignMessage: ForeignMessage[];

  /**
   * @generated from field: repeated protobuf_unittest_import.ImportMessage repeated_import_message = 50;
   */
  repeatedImportMessage: ImportMessage[];

  /**
   * @generated from field: repeated proto3_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 51;
   */
  repeatedNestedEnum: TestAllTypes_NestedEnum[];

  /**
   * @generated from field: repeated proto3_unittest.ForeignEnum repeated_foreign_enum = 52;
   */
  repeatedForeignEnum: ForeignEnum[];

  /**
   * @generated from field: repeated string repeated_string_piece = 54;
   */
  repeatedStringPiece: string[];

  /**
   * @generated from field: repeated string repeated_cord = 55;
   */
  repeatedCord: string[];

  /**
   * @generated from field: repeated proto3_unittest.TestAllTypes.NestedMessage repeated_lazy_message = 57;
   */
  repeatedLazyMessage: TestAllTypes_NestedMessage[];

  /**
   * @generated from oneof proto3_unittest.TestAllTypes.oneof_field
   */
  oneofField: {
    /**
     * @generated from field: uint32 oneof_uint32 = 111;
     */
    value: number;
    case: "oneofUint32";
  } | {
    /**
     * @generated from field: proto3_unittest.TestAllTypes.NestedMessage oneof_nested_message = 112;
     */
    value: TestAllTypes_NestedMessage;
    case: "oneofNestedMessage";
  } | {
    /**
     * @generated from field: string oneof_string = 113;
     */
    value: string;
    case: "oneofString";
  } | {
    /**
     * @generated from field: bytes oneof_bytes = 114;
     */
    value: Uint8Array;
    case: "oneofBytes";
  } | { case: undefined; value?: undefined };
};

// Describes the message proto3_unittest.TestAllTypes.
// Use `create(TestAllTypesDesc)` to create a new TestAllTypes.
export const TestAllTypesDesc: TypedDescMessage<TestAllTypes> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 0);

/**
 * @generated from message proto3_unittest.TestAllTypes.NestedMessage
 */
export type TestAllTypes_NestedMessage = Message<"proto3_unittest.TestAllTypes.NestedMessage"> & {
  /**
   * The field name "b" fails to compile in proto1 because it conflicts with
   * a local variable named "b" in one of the generated methods.  Doh.
   * This file needs to compile in proto1 to test backwards-compatibility.
   *
   * @generated from field: int32 bb = 1;
   */
  bb: number;
};

// Describes the message proto3_unittest.TestAllTypes.NestedMessage.
// Use `create(TestAllTypes_NestedMessageDesc)` to create a new TestAllTypes_NestedMessage.
export const TestAllTypes_NestedMessageDesc: TypedDescMessage<TestAllTypes_NestedMessage> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 0, 0);

/**
 * @generated from enum proto3_unittest.TestAllTypes.NestedEnum
 */
export enum TestAllTypes_NestedEnum {
  /**
   * @generated from enum value: ZERO = 0;
   */
  ZERO = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,

  /**
   * @generated from enum value: BAR = 2;
   */
  BAR = 2,

  /**
   * @generated from enum value: BAZ = 3;
   */
  BAZ = 3,

  /**
   * Intentionally negative.
   *
   * @generated from enum value: NEG = -1;
   */
  NEG = -1,
}

// Describes the enum proto3_unittest.TestAllTypes.NestedEnum.
export const TestAllTypes_NestedEnumDesc: TypedDescEnum<TestAllTypes_NestedEnum> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_unittest_proto3, 0, 0);

/**
 * @generated from message proto3_unittest.TestPackedTypes
 */
export type TestPackedTypes = Message<"proto3_unittest.TestPackedTypes"> & {
  /**
   * @generated from field: repeated int32 packed_int32 = 90 [packed = true];
   */
  packedInt32: number[];

  /**
   * @generated from field: repeated int64 packed_int64 = 91 [packed = true];
   */
  packedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 packed_uint32 = 92 [packed = true];
   */
  packedUint32: number[];

  /**
   * @generated from field: repeated uint64 packed_uint64 = 93 [packed = true];
   */
  packedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 packed_sint32 = 94 [packed = true];
   */
  packedSint32: number[];

  /**
   * @generated from field: repeated sint64 packed_sint64 = 95 [packed = true];
   */
  packedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 packed_fixed32 = 96 [packed = true];
   */
  packedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 packed_fixed64 = 97 [packed = true];
   */
  packedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 packed_sfixed32 = 98 [packed = true];
   */
  packedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 packed_sfixed64 = 99 [packed = true];
   */
  packedSfixed64: bigint[];

  /**
   * @generated from field: repeated float packed_float = 100 [packed = true];
   */
  packedFloat: number[];

  /**
   * @generated from field: repeated double packed_double = 101 [packed = true];
   */
  packedDouble: number[];

  /**
   * @generated from field: repeated bool packed_bool = 102 [packed = true];
   */
  packedBool: boolean[];

  /**
   * @generated from field: repeated proto3_unittest.ForeignEnum packed_enum = 103 [packed = true];
   */
  packedEnum: ForeignEnum[];
};

// Describes the message proto3_unittest.TestPackedTypes.
// Use `create(TestPackedTypesDesc)` to create a new TestPackedTypes.
export const TestPackedTypesDesc: TypedDescMessage<TestPackedTypes> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 1);

/**
 * Explicitly set packed to false
 *
 * @generated from message proto3_unittest.TestUnpackedTypes
 */
export type TestUnpackedTypes = Message<"proto3_unittest.TestUnpackedTypes"> & {
  /**
   * @generated from field: repeated int32 repeated_int32 = 1 [packed = false];
   */
  repeatedInt32: number[];

  /**
   * @generated from field: repeated int64 repeated_int64 = 2 [packed = false];
   */
  repeatedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 repeated_uint32 = 3 [packed = false];
   */
  repeatedUint32: number[];

  /**
   * @generated from field: repeated uint64 repeated_uint64 = 4 [packed = false];
   */
  repeatedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 repeated_sint32 = 5 [packed = false];
   */
  repeatedSint32: number[];

  /**
   * @generated from field: repeated sint64 repeated_sint64 = 6 [packed = false];
   */
  repeatedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 repeated_fixed32 = 7 [packed = false];
   */
  repeatedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 repeated_fixed64 = 8 [packed = false];
   */
  repeatedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 repeated_sfixed32 = 9 [packed = false];
   */
  repeatedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64 = 10 [packed = false];
   */
  repeatedSfixed64: bigint[];

  /**
   * @generated from field: repeated float repeated_float = 11 [packed = false];
   */
  repeatedFloat: number[];

  /**
   * @generated from field: repeated double repeated_double = 12 [packed = false];
   */
  repeatedDouble: number[];

  /**
   * @generated from field: repeated bool repeated_bool = 13 [packed = false];
   */
  repeatedBool: boolean[];

  /**
   * @generated from field: repeated proto3_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 14 [packed = false];
   */
  repeatedNestedEnum: TestAllTypes_NestedEnum[];
};

// Describes the message proto3_unittest.TestUnpackedTypes.
// Use `create(TestUnpackedTypesDesc)` to create a new TestUnpackedTypes.
export const TestUnpackedTypesDesc: TypedDescMessage<TestUnpackedTypes> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 2);

/**
 * This proto includes a recursively nested message.
 *
 * @generated from message proto3_unittest.NestedTestAllTypes
 */
export type NestedTestAllTypes = Message<"proto3_unittest.NestedTestAllTypes"> & {
  /**
   * @generated from field: proto3_unittest.NestedTestAllTypes child = 1;
   */
  child?: NestedTestAllTypes;

  /**
   * @generated from field: proto3_unittest.TestAllTypes payload = 2;
   */
  payload?: TestAllTypes;
};

// Describes the message proto3_unittest.NestedTestAllTypes.
// Use `create(NestedTestAllTypesDesc)` to create a new NestedTestAllTypes.
export const NestedTestAllTypesDesc: TypedDescMessage<NestedTestAllTypes> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 3);

/**
 * Define these after TestAllTypes to make sure the compiler can handle
 * that.
 *
 * @generated from message proto3_unittest.ForeignMessage
 */
export type ForeignMessage = Message<"proto3_unittest.ForeignMessage"> & {
  /**
   * @generated from field: int32 c = 1;
   */
  c: number;
};

// Describes the message proto3_unittest.ForeignMessage.
// Use `create(ForeignMessageDesc)` to create a new ForeignMessage.
export const ForeignMessageDesc: TypedDescMessage<ForeignMessage> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 4);

/**
 * TestEmptyMessage is used to test behavior of unknown fields.
 *
 * @generated from message proto3_unittest.TestEmptyMessage
 */
export type TestEmptyMessage = Message<"proto3_unittest.TestEmptyMessage"> & {
};

// Describes the message proto3_unittest.TestEmptyMessage.
// Use `create(TestEmptyMessageDesc)` to create a new TestEmptyMessage.
export const TestEmptyMessageDesc: TypedDescMessage<TestEmptyMessage> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 5);

/**
 * TestMessageWithDummy is also used to test behavior of unknown fields.
 *
 * @generated from message proto3_unittest.TestMessageWithDummy
 */
export type TestMessageWithDummy = Message<"proto3_unittest.TestMessageWithDummy"> & {
  /**
   * This field is only here for triggering copy-on-write; it's not intended to
   * be serialized.
   *
   * @generated from field: bool dummy = 536870911;
   */
  dummy: boolean;
};

// Describes the message proto3_unittest.TestMessageWithDummy.
// Use `create(TestMessageWithDummyDesc)` to create a new TestMessageWithDummy.
export const TestMessageWithDummyDesc: TypedDescMessage<TestMessageWithDummy> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 6);

/**
 * Same layout as TestOneof2 in unittest.proto to test unknown enum value
 * parsing behavior in oneof.
 *
 * @generated from message proto3_unittest.TestOneof2
 */
export type TestOneof2 = Message<"proto3_unittest.TestOneof2"> & {
  /**
   * @generated from oneof proto3_unittest.TestOneof2.foo
   */
  foo: {
    /**
     * @generated from field: proto3_unittest.TestOneof2.NestedEnum foo_enum = 6;
     */
    value: TestOneof2_NestedEnum;
    case: "fooEnum";
  } | { case: undefined; value?: undefined };
};

// Describes the message proto3_unittest.TestOneof2.
// Use `create(TestOneof2Desc)` to create a new TestOneof2.
export const TestOneof2Desc: TypedDescMessage<TestOneof2> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_proto3, 7);

/**
 * @generated from enum proto3_unittest.TestOneof2.NestedEnum
 */
export enum TestOneof2_NestedEnum {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,

  /**
   * @generated from enum value: BAR = 2;
   */
  BAR = 2,

  /**
   * @generated from enum value: BAZ = 3;
   */
  BAZ = 3,
}

// Describes the enum proto3_unittest.TestOneof2.NestedEnum.
export const TestOneof2_NestedEnumDesc: TypedDescEnum<TestOneof2_NestedEnum> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_unittest_proto3, 7, 0);

/**
 * @generated from enum proto3_unittest.ForeignEnum
 */
export enum ForeignEnum {
  /**
   * @generated from enum value: FOREIGN_ZERO = 0;
   */
  FOREIGN_ZERO = 0,

  /**
   * @generated from enum value: FOREIGN_FOO = 4;
   */
  FOREIGN_FOO = 4,

  /**
   * @generated from enum value: FOREIGN_BAR = 5;
   */
  FOREIGN_BAR = 5,

  /**
   * @generated from enum value: FOREIGN_BAZ = 6;
   */
  FOREIGN_BAZ = 6,
}

// Describes the enum proto3_unittest.ForeignEnum.
export const ForeignEnumDesc: TypedDescEnum<ForeignEnum> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_unittest_proto3, 0);

