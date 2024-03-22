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
// @generated from file google/protobuf/map_unittest.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

// We don't put this in a package within proto2 because we need to make sure
// that the generated code doesn't depend on being in the proto2 namespace.
// In map_test_util.h we do "using namespace unittest = protobuf_unittest".

import type { DescFile } from "@bufbuild/protobuf";
import type { TypedDescEnum, TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { ForeignMessage, TestAllTypes, TestRequired } from "./unittest_pbv2.js";
import { fileDesc_google_protobuf_unittest } from "./unittest_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_google_protobuf_map_unittest: DescFile = /*@__PURE__*/
  fileDesc("CiJnb29nbGUvcHJvdG9idWYvbWFwX3VuaXR0ZXN0LnByb3RvEhFwcm90b2J1Zl91bml0dGVzdCL/FAoHVGVzdE1hcBJGCg9tYXBfaW50MzJfaW50MzIYASADKAsyLS5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMySW50MzJFbnRyeRJGCg9tYXBfaW50NjRfaW50NjQYAiADKAsyLS5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDY0SW50NjRFbnRyeRJKChFtYXBfdWludDMyX3VpbnQzMhgDIAMoCzIvLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwVWludDMyVWludDMyRW50cnkSSgoRbWFwX3VpbnQ2NF91aW50NjQYBCADKAsyLy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcFVpbnQ2NFVpbnQ2NEVudHJ5EkoKEW1hcF9zaW50MzJfc2ludDMyGAUgAygLMi8ucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBTaW50MzJTaW50MzJFbnRyeRJKChFtYXBfc2ludDY0X3NpbnQ2NBgGIAMoCzIvLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU2ludDY0U2ludDY0RW50cnkSTgoTbWFwX2ZpeGVkMzJfZml4ZWQzMhgHIAMoCzIxLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwRml4ZWQzMkZpeGVkMzJFbnRyeRJOChNtYXBfZml4ZWQ2NF9maXhlZDY0GAggAygLMjEucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5ElIKFW1hcF9zZml4ZWQzMl9zZml4ZWQzMhgJIAMoCzIzLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU2ZpeGVkMzJTZml4ZWQzMkVudHJ5ElIKFW1hcF9zZml4ZWQ2NF9zZml4ZWQ2NBgKIAMoCzIzLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU2ZpeGVkNjRTZml4ZWQ2NEVudHJ5EkYKD21hcF9pbnQzMl9mbG9hdBgLIAMoCzItLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwSW50MzJGbG9hdEVudHJ5EkgKEG1hcF9pbnQzMl9kb3VibGUYDCADKAsyLi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMyRG91YmxlRW50cnkSQgoNbWFwX2Jvb2xfYm9vbBgNIAMoCzIrLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwQm9vbEJvb2xFbnRyeRJKChFtYXBfc3RyaW5nX3N0cmluZxgOIAMoCzIvLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU3RyaW5nU3RyaW5nRW50cnkSRgoPbWFwX2ludDMyX2J5dGVzGA8gAygLMi0ucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBJbnQzMkJ5dGVzRW50cnkSRAoObWFwX2ludDMyX2VudW0YECADKAsyLC5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMyRW51bUVudHJ5ElkKGW1hcF9pbnQzMl9mb3JlaWduX21lc3NhZ2UYESADKAsyNi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwLk1hcEludDMyRm9yZWlnbk1lc3NhZ2VFbnRyeRJbChptYXBfc3RyaW5nX2ZvcmVpZ25fbWVzc2FnZRgSIAMoCzI3LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXAuTWFwU3RyaW5nRm9yZWlnbk1lc3NhZ2VFbnRyeRJNChNtYXBfaW50MzJfYWxsX3R5cGVzGBMgAygLMjAucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcC5NYXBJbnQzMkFsbFR5cGVzRW50cnkaNAoSTWFwSW50MzJJbnQzMkVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEaNAoSTWFwSW50NjRJbnQ2NEVudHJ5EgsKA2tleRgBIAEoAxINCgV2YWx1ZRgCIAEoAzoCOAEaNgoUTWFwVWludDMyVWludDMyRW50cnkSCwoDa2V5GAEgASgNEg0KBXZhbHVlGAIgASgNOgI4ARo2ChRNYXBVaW50NjRVaW50NjRFbnRyeRILCgNrZXkYASABKAQSDQoFdmFsdWUYAiABKAQ6AjgBGjYKFE1hcFNpbnQzMlNpbnQzMkVudHJ5EgsKA2tleRgBIAEoERINCgV2YWx1ZRgCIAEoEToCOAEaNgoUTWFwU2ludDY0U2ludDY0RW50cnkSCwoDa2V5GAEgASgSEg0KBXZhbHVlGAIgASgSOgI4ARo4ChZNYXBGaXhlZDMyRml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoBxINCgV2YWx1ZRgCIAEoBzoCOAEaOAoWTWFwRml4ZWQ2NEZpeGVkNjRFbnRyeRILCgNrZXkYASABKAYSDQoFdmFsdWUYAiABKAY6AjgBGjoKGE1hcFNmaXhlZDMyU2ZpeGVkMzJFbnRyeRILCgNrZXkYASABKA8SDQoFdmFsdWUYAiABKA86AjgBGjoKGE1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRILCgNrZXkYASABKBASDQoFdmFsdWUYAiABKBA6AjgBGjQKEk1hcEludDMyRmxvYXRFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAI6AjgBGjUKE01hcEludDMyRG91YmxlRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgBOgI4ARoyChBNYXBCb29sQm9vbEVudHJ5EgsKA2tleRgBIAEoCBINCgV2YWx1ZRgCIAEoCDoCOAEaNgoUTWFwU3RyaW5nU3RyaW5nRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARo0ChJNYXBJbnQzMkJ5dGVzRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgMOgI4ARpPChFNYXBJbnQzMkVudW1FbnRyeRILCgNrZXkYASABKAUSKQoFdmFsdWUYAiABKA4yGi5wcm90b2J1Zl91bml0dGVzdC5NYXBFbnVtOgI4ARpgChtNYXBJbnQzMkZvcmVpZ25NZXNzYWdlRW50cnkSCwoDa2V5GAEgASgFEjAKBXZhbHVlGAIgASgLMiEucHJvdG9idWZfdW5pdHRlc3QuRm9yZWlnbk1lc3NhZ2U6AjgBGmEKHE1hcFN0cmluZ0ZvcmVpZ25NZXNzYWdlRW50cnkSCwoDa2V5GAEgASgJEjAKBXZhbHVlGAIgASgLMiEucHJvdG9idWZfdW5pdHRlc3QuRm9yZWlnbk1lc3NhZ2U6AjgBGlgKFU1hcEludDMyQWxsVHlwZXNFbnRyeRILCgNrZXkYASABKAUSLgoFdmFsdWUYAiABKAsyHy5wcm90b2J1Zl91bml0dGVzdC5UZXN0QWxsVHlwZXM6AjgBIkEKEVRlc3RNYXBTdWJtZXNzYWdlEiwKCHRlc3RfbWFwGAEgASgLMhoucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcCK8AQoOVGVzdE1lc3NhZ2VNYXASUQoRbWFwX2ludDMyX21lc3NhZ2UYASADKAsyNi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWVzc2FnZU1hcC5NYXBJbnQzMk1lc3NhZ2VFbnRyeRpXChRNYXBJbnQzMk1lc3NhZ2VFbnRyeRILCgNrZXkYASABKAUSLgoFdmFsdWUYAiABKAsyHy5wcm90b2J1Zl91bml0dGVzdC5UZXN0QWxsVHlwZXM6AjgBIuMBCg9UZXN0U2FtZVR5cGVNYXASOgoEbWFwMRgBIAMoCzIsLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RTYW1lVHlwZU1hcC5NYXAxRW50cnkSOgoEbWFwMhgCIAMoCzIsLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RTYW1lVHlwZU1hcC5NYXAyRW50cnkaKwoJTWFwMUVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEaKwoJTWFwMkVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEitgEKFlRlc3RSZXF1aXJlZE1lc3NhZ2VNYXASSgoJbWFwX2ZpZWxkGAEgAygLMjcucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlcXVpcmVkTWVzc2FnZU1hcC5NYXBGaWVsZEVudHJ5GlAKDU1hcEZpZWxkRW50cnkSCwoDa2V5GAEgASgFEi4KBXZhbHVlGAIgASgLMh8ucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlcXVpcmVkOgI4ASLwEgoMVGVzdEFyZW5hTWFwEksKD21hcF9pbnQzMl9pbnQzMhgBIAMoCzIyLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBJbnQzMkludDMyRW50cnkSSwoPbWFwX2ludDY0X2ludDY0GAIgAygLMjIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEludDY0SW50NjRFbnRyeRJPChFtYXBfdWludDMyX3VpbnQzMhgDIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBVaW50MzJVaW50MzJFbnRyeRJPChFtYXBfdWludDY0X3VpbnQ2NBgEIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBVaW50NjRVaW50NjRFbnRyeRJPChFtYXBfc2ludDMyX3NpbnQzMhgFIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBTaW50MzJTaW50MzJFbnRyeRJPChFtYXBfc2ludDY0X3NpbnQ2NBgGIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBTaW50NjRTaW50NjRFbnRyeRJTChNtYXBfZml4ZWQzMl9maXhlZDMyGAcgAygLMjYucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEZpeGVkMzJGaXhlZDMyRW50cnkSUwoTbWFwX2ZpeGVkNjRfZml4ZWQ2NBgIIAMoCzI2LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5ElcKFW1hcF9zZml4ZWQzMl9zZml4ZWQzMhgJIAMoCzI4LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBTZml4ZWQzMlNmaXhlZDMyRW50cnkSVwoVbWFwX3NmaXhlZDY0X3NmaXhlZDY0GAogAygLMjgucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRJLCg9tYXBfaW50MzJfZmxvYXQYCyADKAsyMi5wcm90b2J1Zl91bml0dGVzdC5UZXN0QXJlbmFNYXAuTWFwSW50MzJGbG9hdEVudHJ5Ek0KEG1hcF9pbnQzMl9kb3VibGUYDCADKAsyMy5wcm90b2J1Zl91bml0dGVzdC5UZXN0QXJlbmFNYXAuTWFwSW50MzJEb3VibGVFbnRyeRJHCg1tYXBfYm9vbF9ib29sGA0gAygLMjAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEJvb2xCb29sRW50cnkSTwoRbWFwX3N0cmluZ19zdHJpbmcYDiADKAsyNC5wcm90b2J1Zl91bml0dGVzdC5UZXN0QXJlbmFNYXAuTWFwU3RyaW5nU3RyaW5nRW50cnkSSwoPbWFwX2ludDMyX2J5dGVzGA8gAygLMjIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEludDMyQnl0ZXNFbnRyeRJJCg5tYXBfaW50MzJfZW51bRgQIAMoCzIxLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RBcmVuYU1hcC5NYXBJbnQzMkVudW1FbnRyeRJeChltYXBfaW50MzJfZm9yZWlnbl9tZXNzYWdlGBEgAygLMjsucHJvdG9idWZfdW5pdHRlc3QuVGVzdEFyZW5hTWFwLk1hcEludDMyRm9yZWlnbk1lc3NhZ2VFbnRyeRo0ChJNYXBJbnQzMkludDMyRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgFOgI4ARo0ChJNYXBJbnQ2NEludDY0RW50cnkSCwoDa2V5GAEgASgDEg0KBXZhbHVlGAIgASgDOgI4ARo2ChRNYXBVaW50MzJVaW50MzJFbnRyeRILCgNrZXkYASABKA0SDQoFdmFsdWUYAiABKA06AjgBGjYKFE1hcFVpbnQ2NFVpbnQ2NEVudHJ5EgsKA2tleRgBIAEoBBINCgV2YWx1ZRgCIAEoBDoCOAEaNgoUTWFwU2ludDMyU2ludDMyRW50cnkSCwoDa2V5GAEgASgREg0KBXZhbHVlGAIgASgROgI4ARo2ChRNYXBTaW50NjRTaW50NjRFbnRyeRILCgNrZXkYASABKBISDQoFdmFsdWUYAiABKBI6AjgBGjgKFk1hcEZpeGVkMzJGaXhlZDMyRW50cnkSCwoDa2V5GAEgASgHEg0KBXZhbHVlGAIgASgHOgI4ARo4ChZNYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5EgsKA2tleRgBIAEoBhINCgV2YWx1ZRgCIAEoBjoCOAEaOgoYTWFwU2ZpeGVkMzJTZml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoDxINCgV2YWx1ZRgCIAEoDzoCOAEaOgoYTWFwU2ZpeGVkNjRTZml4ZWQ2NEVudHJ5EgsKA2tleRgBIAEoEBINCgV2YWx1ZRgCIAEoEDoCOAEaNAoSTWFwSW50MzJGbG9hdEVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoAjoCOAEaNQoTTWFwSW50MzJEb3VibGVFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAE6AjgBGjIKEE1hcEJvb2xCb29sRW50cnkSCwoDa2V5GAEgASgIEg0KBXZhbHVlGAIgASgIOgI4ARo2ChRNYXBTdHJpbmdTdHJpbmdFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGjQKEk1hcEludDMyQnl0ZXNFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAw6AjgBGk8KEU1hcEludDMyRW51bUVudHJ5EgsKA2tleRgBIAEoBRIpCgV2YWx1ZRgCIAEoDjIaLnByb3RvYnVmX3VuaXR0ZXN0Lk1hcEVudW06AjgBGmAKG01hcEludDMyRm9yZWlnbk1lc3NhZ2VFbnRyeRILCgNrZXkYASABKAUSMAoFdmFsdWUYAiABKAsyIS5wcm90b2J1Zl91bml0dGVzdC5Gb3JlaWduTWVzc2FnZToCOAEi5AEKH01lc3NhZ2VDb250YWluaW5nRW51bUNhbGxlZFR5cGUSSgoEdHlwZRgBIAMoCzI8LnByb3RvYnVmX3VuaXR0ZXN0Lk1lc3NhZ2VDb250YWluaW5nRW51bUNhbGxlZFR5cGUuVHlwZUVudHJ5Gl8KCVR5cGVFbnRyeRILCgNrZXkYASABKAkSQQoFdmFsdWUYAiABKAsyMi5wcm90b2J1Zl91bml0dGVzdC5NZXNzYWdlQ29udGFpbmluZ0VudW1DYWxsZWRUeXBlOgI4ASIUCgRUeXBlEgwKCFRZUEVfRk9PEAAinQEKH01lc3NhZ2VDb250YWluaW5nTWFwQ2FsbGVkRW50cnkSTAoFZW50cnkYASADKAsyPS5wcm90b2J1Zl91bml0dGVzdC5NZXNzYWdlQ29udGFpbmluZ01hcENhbGxlZEVudHJ5LkVudHJ5RW50cnkaLAoKRW50cnlFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAU6AjgBIq0BChdUZXN0UmVjdXJzaXZlTWFwTWVzc2FnZRI8CgFhGAEgAygLMjEucHJvdG9idWZfdW5pdHRlc3QuVGVzdFJlY3Vyc2l2ZU1hcE1lc3NhZ2UuQUVudHJ5GlQKBkFFbnRyeRILCgNrZXkYASABKAkSOQoFdmFsdWUYAiABKAsyKi5wcm90b2J1Zl91bml0dGVzdC5UZXN0UmVjdXJzaXZlTWFwTWVzc2FnZToCOAEifgoNVGVzdEkzMlN0ck1hcBI+CghtXzMyX3N0chgBIAMoCzIsLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RJMzJTdHJNYXAuTTMyU3RyRW50cnkaLQoLTTMyU3RyRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgJOgI4ASo/CgdNYXBFbnVtEhAKDE1BUF9FTlVNX0ZPTxAAEhAKDE1BUF9FTlVNX0JBUhABEhAKDE1BUF9FTlVNX0JBWhACQgP4AQFiBnByb3RvMw", [fileDesc_google_protobuf_unittest]);

/**
 * Tests maps.
 *
 * @generated from message protobuf_unittest.TestMap
 */
export type TestMap = Message<"protobuf_unittest.TestMap"> & {
  /**
   * @generated from field: map<int32, int32> map_int32_int32 = 1;
   */
  mapInt32Int32: { [key: number]: number };

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 2;
   */
  mapInt64Int64: { [key: string]: bigint };

  /**
   * @generated from field: map<uint32, uint32> map_uint32_uint32 = 3;
   */
  mapUint32Uint32: { [key: number]: number };

  /**
   * @generated from field: map<uint64, uint64> map_uint64_uint64 = 4;
   */
  mapUint64Uint64: { [key: string]: bigint };

  /**
   * @generated from field: map<sint32, sint32> map_sint32_sint32 = 5;
   */
  mapSint32Sint32: { [key: number]: number };

  /**
   * @generated from field: map<sint64, sint64> map_sint64_sint64 = 6;
   */
  mapSint64Sint64: { [key: string]: bigint };

  /**
   * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 7;
   */
  mapFixed32Fixed32: { [key: number]: number };

  /**
   * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 8;
   */
  mapFixed64Fixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 9;
   */
  mapSfixed32Sfixed32: { [key: number]: number };

  /**
   * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 10;
   */
  mapSfixed64Sfixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, float> map_int32_float = 11;
   */
  mapInt32Float: { [key: number]: number };

  /**
   * @generated from field: map<int32, double> map_int32_double = 12;
   */
  mapInt32Double: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool = 13;
   */
  mapBoolBool: { [key: string]: boolean };

  /**
   * @generated from field: map<string, string> map_string_string = 14;
   */
  mapStringString: { [key: string]: string };

  /**
   * @generated from field: map<int32, bytes> map_int32_bytes = 15;
   */
  mapInt32Bytes: { [key: number]: Uint8Array };

  /**
   * @generated from field: map<int32, protobuf_unittest.MapEnum> map_int32_enum = 16;
   */
  mapInt32Enum: { [key: number]: MapEnum };

  /**
   * @generated from field: map<int32, protobuf_unittest.ForeignMessage> map_int32_foreign_message = 17;
   */
  mapInt32ForeignMessage: { [key: number]: ForeignMessage };

  /**
   * @generated from field: map<string, protobuf_unittest.ForeignMessage> map_string_foreign_message = 18;
   */
  mapStringForeignMessage: { [key: string]: ForeignMessage };

  /**
   * @generated from field: map<int32, protobuf_unittest.TestAllTypes> map_int32_all_types = 19;
   */
  mapInt32AllTypes: { [key: number]: TestAllTypes };
};

// Describes the message protobuf_unittest.TestMap.
// Use `create(TestMapDesc)` to create a new TestMap.
export const TestMapDesc: TypedDescMessage<TestMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 0);

/**
 * @generated from message protobuf_unittest.TestMapSubmessage
 */
export type TestMapSubmessage = Message<"protobuf_unittest.TestMapSubmessage"> & {
  /**
   * @generated from field: protobuf_unittest.TestMap test_map = 1;
   */
  testMap?: TestMap;
};

// Describes the message protobuf_unittest.TestMapSubmessage.
// Use `create(TestMapSubmessageDesc)` to create a new TestMapSubmessage.
export const TestMapSubmessageDesc: TypedDescMessage<TestMapSubmessage> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 1);

/**
 * @generated from message protobuf_unittest.TestMessageMap
 */
export type TestMessageMap = Message<"protobuf_unittest.TestMessageMap"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.TestAllTypes> map_int32_message = 1;
   */
  mapInt32Message: { [key: number]: TestAllTypes };
};

// Describes the message protobuf_unittest.TestMessageMap.
// Use `create(TestMessageMapDesc)` to create a new TestMessageMap.
export const TestMessageMapDesc: TypedDescMessage<TestMessageMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 2);

/**
 * Two map fields share the same entry default instance.
 *
 * @generated from message protobuf_unittest.TestSameTypeMap
 */
export type TestSameTypeMap = Message<"protobuf_unittest.TestSameTypeMap"> & {
  /**
   * @generated from field: map<int32, int32> map1 = 1;
   */
  map1: { [key: number]: number };

  /**
   * @generated from field: map<int32, int32> map2 = 2;
   */
  map2: { [key: number]: number };
};

// Describes the message protobuf_unittest.TestSameTypeMap.
// Use `create(TestSameTypeMapDesc)` to create a new TestSameTypeMap.
export const TestSameTypeMapDesc: TypedDescMessage<TestSameTypeMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 3);

/**
 * Test embedded message with required fields
 *
 * @generated from message protobuf_unittest.TestRequiredMessageMap
 */
export type TestRequiredMessageMap = Message<"protobuf_unittest.TestRequiredMessageMap"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.TestRequired> map_field = 1;
   */
  mapField: { [key: number]: TestRequired };
};

// Describes the message protobuf_unittest.TestRequiredMessageMap.
// Use `create(TestRequiredMessageMapDesc)` to create a new TestRequiredMessageMap.
export const TestRequiredMessageMapDesc: TypedDescMessage<TestRequiredMessageMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 4);

/**
 * @generated from message protobuf_unittest.TestArenaMap
 */
export type TestArenaMap = Message<"protobuf_unittest.TestArenaMap"> & {
  /**
   * @generated from field: map<int32, int32> map_int32_int32 = 1;
   */
  mapInt32Int32: { [key: number]: number };

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 2;
   */
  mapInt64Int64: { [key: string]: bigint };

  /**
   * @generated from field: map<uint32, uint32> map_uint32_uint32 = 3;
   */
  mapUint32Uint32: { [key: number]: number };

  /**
   * @generated from field: map<uint64, uint64> map_uint64_uint64 = 4;
   */
  mapUint64Uint64: { [key: string]: bigint };

  /**
   * @generated from field: map<sint32, sint32> map_sint32_sint32 = 5;
   */
  mapSint32Sint32: { [key: number]: number };

  /**
   * @generated from field: map<sint64, sint64> map_sint64_sint64 = 6;
   */
  mapSint64Sint64: { [key: string]: bigint };

  /**
   * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 7;
   */
  mapFixed32Fixed32: { [key: number]: number };

  /**
   * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 8;
   */
  mapFixed64Fixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 9;
   */
  mapSfixed32Sfixed32: { [key: number]: number };

  /**
   * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 10;
   */
  mapSfixed64Sfixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, float> map_int32_float = 11;
   */
  mapInt32Float: { [key: number]: number };

  /**
   * @generated from field: map<int32, double> map_int32_double = 12;
   */
  mapInt32Double: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool = 13;
   */
  mapBoolBool: { [key: string]: boolean };

  /**
   * @generated from field: map<string, string> map_string_string = 14;
   */
  mapStringString: { [key: string]: string };

  /**
   * @generated from field: map<int32, bytes> map_int32_bytes = 15;
   */
  mapInt32Bytes: { [key: number]: Uint8Array };

  /**
   * @generated from field: map<int32, protobuf_unittest.MapEnum> map_int32_enum = 16;
   */
  mapInt32Enum: { [key: number]: MapEnum };

  /**
   * @generated from field: map<int32, protobuf_unittest.ForeignMessage> map_int32_foreign_message = 17;
   */
  mapInt32ForeignMessage: { [key: number]: ForeignMessage };
};

// Describes the message protobuf_unittest.TestArenaMap.
// Use `create(TestArenaMapDesc)` to create a new TestArenaMap.
export const TestArenaMapDesc: TypedDescMessage<TestArenaMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 5);

/**
 * Previously, message containing enum called Type cannot be used as value of
 * map field.
 *
 * @generated from message protobuf_unittest.MessageContainingEnumCalledType
 */
export type MessageContainingEnumCalledType = Message<"protobuf_unittest.MessageContainingEnumCalledType"> & {
  /**
   * @generated from field: map<string, protobuf_unittest.MessageContainingEnumCalledType> type = 1;
   */
  type: { [key: string]: MessageContainingEnumCalledType };
};

// Describes the message protobuf_unittest.MessageContainingEnumCalledType.
// Use `create(MessageContainingEnumCalledTypeDesc)` to create a new MessageContainingEnumCalledType.
export const MessageContainingEnumCalledTypeDesc: TypedDescMessage<MessageContainingEnumCalledType> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 6);

/**
 * @generated from enum protobuf_unittest.MessageContainingEnumCalledType.Type
 */
export enum MessageContainingEnumCalledType_Type {
  /**
   * @generated from enum value: TYPE_FOO = 0;
   */
  FOO = 0,
}

// Describes the enum protobuf_unittest.MessageContainingEnumCalledType.Type.
export const MessageContainingEnumCalledType_TypeDesc: TypedDescEnum<MessageContainingEnumCalledType_Type> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_map_unittest, 6, 0);

/**
 * Previously, message cannot contain map field called "entry".
 *
 * @generated from message protobuf_unittest.MessageContainingMapCalledEntry
 */
export type MessageContainingMapCalledEntry = Message<"protobuf_unittest.MessageContainingMapCalledEntry"> & {
  /**
   * @generated from field: map<int32, int32> entry = 1;
   */
  entry: { [key: number]: number };
};

// Describes the message protobuf_unittest.MessageContainingMapCalledEntry.
// Use `create(MessageContainingMapCalledEntryDesc)` to create a new MessageContainingMapCalledEntry.
export const MessageContainingMapCalledEntryDesc: TypedDescMessage<MessageContainingMapCalledEntry> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 7);

/**
 * @generated from message protobuf_unittest.TestRecursiveMapMessage
 */
export type TestRecursiveMapMessage = Message<"protobuf_unittest.TestRecursiveMapMessage"> & {
  /**
   * @generated from field: map<string, protobuf_unittest.TestRecursiveMapMessage> a = 1;
   */
  a: { [key: string]: TestRecursiveMapMessage };
};

// Describes the message protobuf_unittest.TestRecursiveMapMessage.
// Use `create(TestRecursiveMapMessageDesc)` to create a new TestRecursiveMapMessage.
export const TestRecursiveMapMessageDesc: TypedDescMessage<TestRecursiveMapMessage> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 8);

/**
 * @generated from message protobuf_unittest.TestI32StrMap
 */
export type TestI32StrMap = Message<"protobuf_unittest.TestI32StrMap"> & {
  /**
   * @generated from field: map<int32, string> m_32_str = 1;
   */
  m32Str: { [key: number]: string };
};

// Describes the message protobuf_unittest.TestI32StrMap.
// Use `create(TestI32StrMapDesc)` to create a new TestI32StrMap.
export const TestI32StrMapDesc: TypedDescMessage<TestI32StrMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_unittest, 9);

/**
 * @generated from enum protobuf_unittest.MapEnum
 */
export enum MapEnum {
  /**
   * @generated from enum value: MAP_ENUM_FOO = 0;
   */
  FOO = 0,

  /**
   * @generated from enum value: MAP_ENUM_BAR = 1;
   */
  BAR = 1,

  /**
   * @generated from enum value: MAP_ENUM_BAZ = 2;
   */
  BAZ = 2,
}

// Describes the enum protobuf_unittest.MapEnum.
export const MapEnumDesc: TypedDescEnum<MapEnum> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_map_unittest, 0);
