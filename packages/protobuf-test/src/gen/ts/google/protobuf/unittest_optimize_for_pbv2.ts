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

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file which uses optimize_for = CODE_SIZE.

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_optimize_for.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { TypedDescExtension, TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { ForeignMessage } from "./unittest_pbv2.js";
import { fileDesc_google_protobuf_unittest } from "./unittest_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_google_protobuf_unittest_optimize_for: DescFile = /*@__PURE__*/
  fileDesc("Citnb29nbGUvcHJvdG9idWYvdW5pdHRlc3Rfb3B0aW1pemVfZm9yLnByb3RvEhFwcm90b2J1Zl91bml0dGVzdCLqAgoUVGVzdE9wdGltaXplZEZvclNpemUSCQoBaRgBIAEoBRIuCgNtc2cYEyABKAsyIS5wcm90b2J1Zl91bml0dGVzdC5Gb3JlaWduTWVzc2FnZRIXCg1pbnRlZ2VyX2ZpZWxkGAIgASgFSAASFgoMc3RyaW5nX2ZpZWxkGAMgASgJSAAqCQjoBxCAgICAAjJPCg50ZXN0X2V4dGVuc2lvbhInLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RPcHRpbWl6ZWRGb3JTaXplGNIJIAEoBVINdGVzdEV4dGVuc2lvbjKCAQoPdGVzdF9leHRlbnNpb24yEicucHJvdG9idWZfdW5pdHRlc3QuVGVzdE9wdGltaXplZEZvclNpemUY0wkgASgLMi8ucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlcXVpcmVkT3B0aW1pemVkRm9yU2l6ZVIOdGVzdEV4dGVuc2lvbjJCBQoDZm9vIikKHFRlc3RSZXF1aXJlZE9wdGltaXplZEZvclNpemUSCQoBeBgBIAIoBSJaChxUZXN0T3B0aW9uYWxPcHRpbWl6ZWRGb3JTaXplEjoKAW8YASABKAsyLy5wcm90b2J1Zl91bml0dGVzdC5UZXN0UmVxdWlyZWRPcHRpbWl6ZWRGb3JTaXplQgJIAg", [fileDesc_google_protobuf_unittest]);

/**
 * @generated from message protobuf_unittest.TestOptimizedForSize
 */
export type TestOptimizedForSize = Message<"protobuf_unittest.TestOptimizedForSize"> & {
  /**
   * @generated from field: optional int32 i = 1;
   */
  i: number;

  /**
   * @generated from field: optional protobuf_unittest.ForeignMessage msg = 19;
   */
  msg?: ForeignMessage;

  /**
   * @generated from oneof protobuf_unittest.TestOptimizedForSize.foo
   */
  foo: {
    /**
     * @generated from field: int32 integer_field = 2;
     */
    value: number;
    case: "integerField";
  } | {
    /**
     * @generated from field: string string_field = 3;
     */
    value: string;
    case: "stringField";
  } | { case: undefined; value?: undefined };
};

// Describes the message protobuf_unittest.TestOptimizedForSize.
// Use `create(TestOptimizedForSizeDesc)` to create a new TestOptimizedForSize.
export const TestOptimizedForSizeDesc: TypedDescMessage<TestOptimizedForSize> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_optimize_for, 0);

/**
 * @generated from extension: optional int32 test_extension = 1234;
 */
export const TestOptimizedForSize_test_extension: TypedDescExtension<TestOptimizedForSize, number> = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_optimize_for, 0, 0);

/**
 * @generated from extension: optional protobuf_unittest.TestRequiredOptimizedForSize test_extension2 = 1235;
 */
export const TestOptimizedForSize_test_extension2: TypedDescExtension<TestOptimizedForSize, TestRequiredOptimizedForSize> = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_optimize_for, 0, 1);

/**
 * @generated from message protobuf_unittest.TestRequiredOptimizedForSize
 */
export type TestRequiredOptimizedForSize = Message<"protobuf_unittest.TestRequiredOptimizedForSize"> & {
  /**
   * @generated from field: required int32 x = 1;
   */
  x: number;
};

// Describes the message protobuf_unittest.TestRequiredOptimizedForSize.
// Use `create(TestRequiredOptimizedForSizeDesc)` to create a new TestRequiredOptimizedForSize.
export const TestRequiredOptimizedForSizeDesc: TypedDescMessage<TestRequiredOptimizedForSize> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_optimize_for, 1);

/**
 * @generated from message protobuf_unittest.TestOptionalOptimizedForSize
 */
export type TestOptionalOptimizedForSize = Message<"protobuf_unittest.TestOptionalOptimizedForSize"> & {
  /**
   * @generated from field: optional protobuf_unittest.TestRequiredOptimizedForSize o = 1;
   */
  o?: TestRequiredOptimizedForSize;
};

// Describes the message protobuf_unittest.TestOptionalOptimizedForSize.
// Use `create(TestOptionalOptimizedForSizeDesc)` to create a new TestOptionalOptimizedForSize.
export const TestOptionalOptimizedForSizeDesc: TypedDescMessage<TestOptionalOptimizedForSize> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_optimize_for, 2);

