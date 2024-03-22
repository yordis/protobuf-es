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

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/map_unittest.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

// We don't put this in a package within proto2 because we need to make sure
// that the generated code doesn't depend on being in the proto2 namespace.
// In map_test_util.h we do "using namespace unittest = protobuf_unittest".

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc_google_protobuf_unittest } from "./unittest_pbv2.js";

export const fileDesc_google_protobuf_map_unittest = /*@__PURE__*/
  fileDesc("CiJnb29nbGUvcHJvdG9idWYvbWFwX3VuaXR0ZXN0LnByb3RvEhFwcm90b2J1Zl91bml0dGVzdCL/FAoHVGVzdE1hcBJGCg9tYXBfaW50MzJfaW50MzIYASADKAsyLS5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMySW50MzJFbnRyeRJGCg9tYXBfaW50NjRfaW50NjQYAiADKAsyLS5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDY0SW50NjRFbnRyeRJKChFtYXBfdWludDMyX3VpbnQzMhgDIAMoCzIvLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwVWludDMyVWludDMyRW50cnkSSgoRbWFwX3VpbnQ2NF91aW50NjQYBCADKAsyLy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcFVpbnQ2NFVpbnQ2NEVudHJ5EkoKEW1hcF9zaW50MzJfc2ludDMyGAUgAygLMi8ucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBTaW50MzJTaW50MzJFbnRyeRJKChFtYXBfc2ludDY0X3NpbnQ2NBgGIAMoCzIvLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU2ludDY0U2ludDY0RW50cnkSTgoTbWFwX2ZpeGVkMzJfZml4ZWQzMhgHIAMoCzIxLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwRml4ZWQzMkZpeGVkMzJFbnRyeRJOChNtYXBfZml4ZWQ2NF9maXhlZDY0GAggAygLMjEucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5ElIKFW1hcF9zZml4ZWQzMl9zZml4ZWQzMhgJIAMoCzIzLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU2ZpeGVkMzJTZml4ZWQzMkVudHJ5ElIKFW1hcF9zZml4ZWQ2NF9zZml4ZWQ2NBgKIAMoCzIzLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU2ZpeGVkNjRTZml4ZWQ2NEVudHJ5EkYKD21hcF9pbnQzMl9mbG9hdBgLIAMoCzItLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwSW50MzJGbG9hdEVudHJ5EkgKEG1hcF9pbnQzMl9kb3VibGUYDCADKAsyLi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMyRG91YmxlRW50cnkSQgoNbWFwX2Jvb2xfYm9vbBgNIAMoCzIrLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwQm9vbEJvb2xFbnRyeRJKChFtYXBfc3RyaW5nX3N0cmluZxgOIAMoCzIvLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU3RyaW5nU3RyaW5nRW50cnkSRgoPbWFwX2ludDMyX2J5dGVzGA8gAygLMi0ucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBJbnQzMkJ5dGVzRW50cnkSRAoObWFwX2ludDMyX2VudW0YECADKAsyLC5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMyRW51bUVudHJ5ElkKGW1hcF9pbnQzMl9mb3JlaWduX21lc3NhZ2UYESADKAsyNi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMyRm9yZWlnbk1lc3NhZ2VFbnRyeRJbChptYXBfc3RyaW5nX2ZvcmVpZ25fbWVzc2FnZRgSIAMoCzI3LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU3RyaW5nRm9yZWlnbk1lc3NhZ2VFbnRyeRJNChNtYXBfaW50MzJfYWxsX3R5cGVzGBMgAygLMjAucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBJbnQzMkFsbFR5cGVzRW50cnkaNAoSTWFwSW50MzJJbnQzMkVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEaNAoSTWFwSW50NjRJbnQ2NEVudHJ5EgsKA2tleRgBIAEoAxINCgV2YWx1ZRgCIAEoAzoCOAEaNgoUTWFwVWludDMyVWludDMyRW50cnkSCwoDa2V5GAEgASgNEg0KBXZhbHVlGAIgASgNOgI4ARo2ChRNYXBVaW50NjRVaW50NjRFbnRyeRILCgNrZXkYASABKAQSDQoFdmFsdWUYAiABKAQ6AjgBGjYKFE1hcFNpbnQzMlNpbnQzMkVudHJ5EgsKA2tleRgBIAEoERINCgV2YWx1ZRgCIAEoEToCOAEaNgoUTWFwU2ludDY0U2ludDY0RW50cnkSCwoDa2V5GAEgASgSEg0KBXZhbHVlGAIgASgSOgI4ARo4ChZNYXBGaXhlZDMyRml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoBxINCgV2YWx1ZRgCIAEoBzoCOAEaOAoWTWFwRml4ZWQ2NEZpeGVkNjRFbnRyeRILCgNrZXkYASABKAYSDQoFdmFsdWUYAiABKAY6AjgBGjoKGE1hcFNmaXhlZDMyU2ZpeGVkMzJFbnRyeRILCgNrZXkYASABKA8SDQoFdmFsdWUYAiABKA86AjgBGjoKGE1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRILCgNrZXkYASABKBASDQoFdmFsdWUYAiABKBA6AjgBGjQKEk1hcEludDMyRmxvYXRFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAI6AjgBGjUKE01hcEludDMyRG91YmxlRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgBOgI4ARoyChBNYXBCb29sQm9vbEVudHJ5EgsKA2tleRgBIAEoCBINCgV2YWx1ZRgCIAEoCDoCOAEaNgoUTWFwU3RyaW5nU3RyaW5nRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARo0ChJNYXBJbnQzMkJ5dGVzRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgMOgI4ARpPChFNYXBJbnQzMkVudW1FbnRyeRILCgNrZXkYASABKAUSKQoFdmFsdWUYAiABKA4yGi5wcm90b2J1Zl91bml0dGVzdC5NYXBFbnVtOgI4ARpgChtNYXBJbnQzMkZvcmVpZ25NZXNzYWdlRW50cnkSCwoDa2V5GAEgASgFEjAKBXZhbHVlGAIgASgLMiEucHJvdG9idWZfdW5pdHRlc3QuRm9yZWlnbk1lc3NhZ2U6AjgBGmEKHE1hcFN0cmluZ0ZvcmVpZ25NZXNzYWdlRW50cnkSCwoDa2V5GAEgASgJEjAKBXZhbHVlGAIgASgLMiEucHJvdG9idWZfdW5pdHRlc3QuRm9yZWlnbk1lc3NhZ2U6AjgBGlgKFU1hcEludDMyQWxsVHlwZXNFbnRyeRILCgNrZXkYASABKAUSLgoFdmFsdWUYAiABKAsyHy5wcm90b2J1Zl91bml0dGVzdC5UZXN0QWxsVHlwZXM6AjgBIkEKEVRlc3RNYXBTdWJtZXNzYWdlEiwKCHRlc3RfbWFwGAEgASgLMhoucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcCK8AQoOVGVzdE1lc3NhZ2VNYXASUQoRbWFwX2ludDMyX21lc3NhZ2UYASADKAsyNi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWVzc2FnZU1hcC5NYXBJbnQzMk1lc3NhZ2VFbnRyeRpXChRNYXBJbnQzMk1lc3NhZ2VFbnRyeRILCgNrZXkYASABKAUSLgoFdmFsdWUYAiABKAsyHy5wcm90b2J1Zl91bml0dGVzdC5UZXN0QWxsVHlwZXM6AjgBIuMBCg9UZXN0U2FtZVR5cGVNYXASOgoEbWFwMRgBIAMoCzIsLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RTYW1lVHlwZU1hcC5NYXAxRW50cnkSOgoEbWFwMhgCIAMoCzIsLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RTYW1lVHlwZU1hcC5NYXAyRW50cnkaKwoJTWFwMUVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEaKwoJTWFwMkVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEitgEKFlRlc3RSZXF1aXJlZE1lc3NhZ2VNYXASSgoJbWFwX2ZpZWxkGAEgAygLMjcucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlcXVpcmVkTWVzc2FnZU1hcC5NYXBGaWVsZEVudHJ5GlAKDU1hcEZpZWxkRW50cnkSCwoDa2V5GAEgASgFEi4KBXZhbHVlGAIgASgLMh8ucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlcXVpcmVkOgI4ASLwEgoMVGVzdEFyZW5hTWFwEksKD21hcF9pbnQzMl9pbnQzMhgBIAMoCzIyLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBJbnQzMkludDMyRW50cnkSSwoPbWFwX2ludDY0X2ludDY0GAIgAygLMjIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEludDY0SW50NjRFbnRyeRJPChFtYXBfdWludDMyX3VpbnQzMhgDIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBVaW50MzJVaW50MzJFbnRyeRJPChFtYXBfdWludDY0X3VpbnQ2NBgEIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBVaW50NjRVaW50NjRFbnRyeRJPChFtYXBfc2ludDMyX3NpbnQzMhgFIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBTaW50MzJTaW50MzJFbnRyeRJPChFtYXBfc2ludDY0X3NpbnQ2NBgGIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBTaW50NjRTaW50NjRFbnRyeRJTChNtYXBfZml4ZWQzMl9maXhlZDMyGAcgAygLMjYucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEZpeGVkMzJGaXhlZDMyRW50cnkSUwoTbWFwX2ZpeGVkNjRfZml4ZWQ2NBgIIAMoCzI2LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5ElcKFW1hcF9zZml4ZWQzMl9zZml4ZWQzMhgJIAMoCzI4LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBTZml4ZWQzMlNmaXhlZDMyRW50cnkSVwoVbWFwX3NmaXhlZDY0X3NmaXhlZDY0GAogAygLMjgucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRJLCg9tYXBfaW50MzJfZmxvYXQYCyADKAsyMi5wcm90b2J1Zl91bml0dGVzdC5UZXN0QXJlbmFNYXAuTWFwSW50MzJGbG9hdEVudHJ5Ek0KEG1hcF9pbnQzMl9kb3VibGUYDCADKAsyMy5wcm90b2J1Zl91bml0dGVzdC5UZXN0QXJlbmFNYXAuTWFwSW50MzJEb3VibGVFbnRyeRJHCg1tYXBfYm9vbF9ib29sGA0gAygLMjAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEJvb2xCb29sRW50cnkSTwoRbWFwX3N0cmluZ19zdHJpbmcYDiADKAsyNC5wcm90b2J1Zl91bml0dGVzdC5UZXN0QXJlbmFNYXAuTWFwU3RyaW5nU3RyaW5nRW50cnkSSwoPbWFwX2ludDMyX2J5dGVzGA8gAygLMjIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEludDMyQnl0ZXNFbnRyeRJJCg5tYXBfaW50MzJfZW51bRgQIAMoCzIxLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBJbnQzMkVudW1FbnRyeRJeChltYXBfaW50MzJfZm9yZWlnbl9tZXNzYWdlGBEgAygLMjsucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEludDMyRm9yZWlnbk1lc3NhZ2VFbnRyeRo0ChJNYXBJbnQzMkludDMyRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgFOgI4ARo0ChJNYXBJbnQ2NEludDY0RW50cnkSCwoDa2V5GAEgASgDEg0KBXZhbHVlGAIgASgDOgI4ARo2ChRNYXBVaW50MzJVaW50MzJFbnRyeRILCgNrZXkYASABKA0SDQoFdmFsdWUYAiABKA06AjgBGjYKFE1hcFVpbnQ2NFVpbnQ2NEVudHJ5EgsKA2tleRgBIAEoBBINCgV2YWx1ZRgCIAEoBDoCOAEaNgoUTWFwU2ludDMyU2ludDMyRW50cnkSCwoDa2V5GAEgASgREg0KBXZhbHVlGAIgASgROgI4ARo2ChRNYXBTaW50NjRTaW50NjRFbnRyeRILCgNrZXkYASABKBISDQoFdmFsdWUYAiABKBI6AjgBGjgKFk1hcEZpeGVkMzJGaXhlZDMyRW50cnkSCwoDa2V5GAEgASgHEg0KBXZhbHVlGAIgASgHOgI4ARo4ChZNYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5EgsKA2tleRgBIAEoBhINCgV2YWx1ZRgCIAEoBjoCOAEaOgoYTWFwU2ZpeGVkMzJTZml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoDxINCgV2YWx1ZRgCIAEoDzoCOAEaOgoYTWFwU2ZpeGVkNjRTZml4ZWQ2NEVudHJ5EgsKA2tleRgBIAEoEBINCgV2YWx1ZRgCIAEoEDoCOAEaNAoSTWFwSW50MzJGbG9hdEVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoAjoCOAEaNQoTTWFwSW50MzJEb3VibGVFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAE6AjgBGjIKEE1hcEJvb2xCb29sRW50cnkSCwoDa2V5GAEgASgIEg0KBXZhbHVlGAIgASgIOgI4ARo2ChRNYXBTdHJpbmdTdHJpbmdFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGjQKEk1hcEludDMyQnl0ZXNFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAw6AjgBGk8KEU1hcEludDMyRW51bUVudHJ5EgsKA2tleRgBIAEoBRIpCgV2YWx1ZRgCIAEoDjIaLnByb3RvYnVmX3VuaXR0ZXN0Lk1hcEVudW06AjgBGmAKG01hcEludDMyRm9yZWlnbk1lc3NhZ2VFbnRyeRILCgNrZXkYASABKAUSMAoFdmFsdWUYAiABKAsyIS5wcm90b2J1Zl91bml0dGVzdC5Gb3JlaWduTWVzc2FnZToCOAEi5AEKH01lc3NhZ2VDb250YWluaW5nRW51bUNhbGxlZFR5cGUSSgoEdHlwZRgBIAMoCzI8LnByb3RvYnVmX3VuaXR0ZXN0Lk1lc3NhZ2VDb250YWluaW5nRW51bUNhbGxlZFR5cGUuVHlwZUVudHJ5Gl8KCVR5cGVFbnRyeRILCgNrZXkYASABKAkSQQoFdmFsdWUYAiABKAsyMi5wcm90b2J1Zl91bml0dGVzdC5NZXNzYWdlQ29udGFpbmluZ0VudW1DYWxsZWRUeXBlOgI4ASIUCgRUeXBlEgwKCFRZUEVfRk9PEAAinQEKH01lc3NhZ2VDb250YWluaW5nTWFwQ2FsbGVkRW50cnkSTAoFZW50cnkYASADKAsyPS5wcm90b2J1Zl91bml0dGVzdC5NZXNzYWdlQ29udGFpbmluZ01hcENhbGxlZEVudHJ5LkVudHJ5RW50cnkaLAoKRW50cnlFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAU6AjgBIq0BChdUZXN0UmVjdXJzaXZlTWFwTWVzc2FnZRI8CgFhGAEgAygLMjEucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlY3Vyc2l2ZU1hcE1lc3NhZ2UuQUVudHJ5GlQKBkFFbnRyeRILCgNrZXkYASABKAkSOQoFdmFsdWUYAiABKAsyKi5wcm90b2J1Zl91bml0dGVzdC5UZXN0UmVjdXJzaXZlTWFwTWVzc2FnZToCOAEifgoNVGVzdEkzMlN0ck1hcBI+CghtXzMyX3N0chgBIAMoCzIsLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RJMzJTdHJNYXAuTTMyU3RyRW50cnkaLQoLTTMyU3RyRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgJOgI4ASo/CgdNYXBFbnVtEhAKDE1BUF9FTlVNX0ZPTxAAEhAKDE1BUF9FTlVNX0JBUhABEhAKDE1BUF9FTlVNX0JBWhACQgP4AQFiBnByb3RvMw", [fileDesc_google_protobuf_unittest]);

// Describes the message protobuf_unittest.TestMap. Use `create(TestMapDesc)` to create a new TestMap.
export const TestMapDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 0);

// Describes the message protobuf_unittest.TestMapSubmessage. Use `create(TestMapSubmessageDesc)` to create a new TestMapSubmessage.
export const TestMapSubmessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 1);

// Describes the message protobuf_unittest.TestMessageMap. Use `create(TestMessageMapDesc)` to create a new TestMessageMap.
export const TestMessageMapDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 2);

// Describes the message protobuf_unittest.TestSameTypeMap. Use `create(TestSameTypeMapDesc)` to create a new TestSameTypeMap.
export const TestSameTypeMapDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 3);

// Describes the message protobuf_unittest.TestRequiredMessageMap. Use `create(TestRequiredMessageMapDesc)` to create a new TestRequiredMessageMap.
export const TestRequiredMessageMapDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 4);

// Describes the message protobuf_unittest.TestArenaMap. Use `create(TestArenaMapDesc)` to create a new TestArenaMap.
export const TestArenaMapDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 5);

// Describes the message protobuf_unittest.MessageContainingEnumCalledType. Use `create(MessageContainingEnumCalledTypeDesc)` to create a new MessageContainingEnumCalledType.
export const MessageContainingEnumCalledTypeDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 6);

// Describes the enum protobuf_unittest.MessageContainingEnumCalledType.Type.
export const MessageContainingEnumCalledType_TypeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_map_unittest, 6, 0);

/**
 * @generated from enum protobuf_unittest.MessageContainingEnumCalledType.Type
 */
export const MessageContainingEnumCalledType_Type = /*@__PURE__*/
  tsEnum(MessageContainingEnumCalledType_TypeDesc);

// Describes the message protobuf_unittest.MessageContainingMapCalledEntry. Use `create(MessageContainingMapCalledEntryDesc)` to create a new MessageContainingMapCalledEntry.
export const MessageContainingMapCalledEntryDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 7);

// Describes the message protobuf_unittest.TestRecursiveMapMessage. Use `create(TestRecursiveMapMessageDesc)` to create a new TestRecursiveMapMessage.
export const TestRecursiveMapMessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 8);

// Describes the message protobuf_unittest.TestI32StrMap. Use `create(TestI32StrMapDesc)` to create a new TestI32StrMap.
export const TestI32StrMapDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 9);

// Describes the enum protobuf_unittest.MapEnum.
export const MapEnumDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_map_unittest, 0);

/**
 * @generated from enum protobuf_unittest.MapEnum
 */
export const MapEnum = /*@__PURE__*/
  tsEnum(MapEnumDesc);

