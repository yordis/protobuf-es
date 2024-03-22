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
// @generated from file google/protobuf/map_proto2_unittest.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

// We don't put this in a package within proto2 because we need to make sure
// that the generated code doesn't depend on being in the proto2 namespace.
// In map_test_util.h we do "using namespace unittest = protobuf_unittest".

import type { DescFile } from "@bufbuild/protobuf";
import type { TypedDescEnum, TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { ImportEnumForMap } from "./unittest_import_pbv2.js";
import { fileDesc_google_protobuf_unittest_import } from "./unittest_import_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_google_protobuf_map_proto2_unittest: DescFile = /*@__PURE__*/
  fileDesc("Cilnb29nbGUvcHJvdG9idWYvbWFwX3Byb3RvMl91bml0dGVzdC5wcm90bxIRcHJvdG9idWZfdW5pdHRlc3QiyRQKC1Rlc3RFbnVtTWFwEkoKD2tub3duX21hcF9maWVsZBhlIAMoCzIxLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLktub3duTWFwRmllbGRFbnRyeRJOChF1bmtub3duX21hcF9maWVsZBhmIAMoCzIzLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZEVudHJ5EloKF3Vua25vd25fbWFwX2ZpZWxkX2ludDY0GMgBIAMoCzI4LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZEludDY0RW50cnkSXAoYdW5rbm93bl9tYXBfZmllbGRfdWludDY0GMkBIAMoCzI5LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZFVpbnQ2NEVudHJ5EloKF3Vua25vd25fbWFwX2ZpZWxkX2ludDMyGMoBIAMoCzI4LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZEludDMyRW50cnkSXAoYdW5rbm93bl9tYXBfZmllbGRfdWludDMyGMsBIAMoCzI5LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZFVpbnQzMkVudHJ5El4KGXVua25vd25fbWFwX2ZpZWxkX2ZpeGVkMzIYzAEgAygLMjoucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXAuVW5rbm93bk1hcEZpZWxkRml4ZWQzMkVudHJ5El4KGXVua25vd25fbWFwX2ZpZWxkX2ZpeGVkNjQYzQEgAygLMjoucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXAuVW5rbm93bk1hcEZpZWxkRml4ZWQ2NEVudHJ5ElgKFnVua25vd25fbWFwX2ZpZWxkX2Jvb2wYzgEgAygLMjcucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXAuVW5rbm93bk1hcEZpZWxkQm9vbEVudHJ5ElwKGHVua25vd25fbWFwX2ZpZWxkX3N0cmluZxjPASADKAsyOS5wcm90b2J1Zl91bml0dGVzdC5UZXN0RW51bU1hcC5Vbmtub3duTWFwRmllbGRTdHJpbmdFbnRyeRJcChh1bmtub3duX21hcF9maWVsZF9zaW50MzIY0AEgAygLMjkucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXAuVW5rbm93bk1hcEZpZWxkU2ludDMyRW50cnkSXAoYdW5rbm93bl9tYXBfZmllbGRfc2ludDY0GNEBIAMoCzI5LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZFNpbnQ2NEVudHJ5EmAKGnVua25vd25fbWFwX2ZpZWxkX3NmaXhlZDMyGNIBIAMoCzI7LnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwLlVua25vd25NYXBGaWVsZFNmaXhlZDMyRW50cnkSYAoadW5rbm93bl9tYXBfZmllbGRfc2ZpeGVkNjQY0wEgAygLMjsucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXAuVW5rbm93bk1hcEZpZWxkU2ZpeGVkNjRFbnRyeRpWChJLbm93bk1hcEZpZWxkRW50cnkSCwoDa2V5GAEgASgFEi8KBXZhbHVlGAIgASgOMiAucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bToCOAEaWAoUVW5rbm93bk1hcEZpZWxkRW50cnkSCwoDa2V5GAEgASgFEi8KBXZhbHVlGAIgASgOMiAucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bToCOAEaXQoZVW5rbm93bk1hcEZpZWxkSW50NjRFbnRyeRILCgNrZXkYASABKAMSLwoFdmFsdWUYAiABKA4yIC5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtOgI4ARpeChpVbmtub3duTWFwRmllbGRVaW50NjRFbnRyeRILCgNrZXkYASABKAQSLwoFdmFsdWUYAiABKA4yIC5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtOgI4ARpdChlVbmtub3duTWFwRmllbGRJbnQzMkVudHJ5EgsKA2tleRgBIAEoBRIvCgV2YWx1ZRgCIAEoDjIgLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW06AjgBGl4KGlVua25vd25NYXBGaWVsZFVpbnQzMkVudHJ5EgsKA2tleRgBIAEoDRIvCgV2YWx1ZRgCIAEoDjIgLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW06AjgBGl8KG1Vua25vd25NYXBGaWVsZEZpeGVkMzJFbnRyeRILCgNrZXkYASABKAcSLwoFdmFsdWUYAiABKA4yIC5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtOgI4ARpfChtVbmtub3duTWFwRmllbGRGaXhlZDY0RW50cnkSCwoDa2V5GAEgASgGEi8KBXZhbHVlGAIgASgOMiAucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bToCOAEaXAoYVW5rbm93bk1hcEZpZWxkQm9vbEVudHJ5EgsKA2tleRgBIAEoCBIvCgV2YWx1ZRgCIAEoDjIgLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW06AjgBGl4KGlVua25vd25NYXBGaWVsZFN0cmluZ0VudHJ5EgsKA2tleRgBIAEoCRIvCgV2YWx1ZRgCIAEoDjIgLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW06AjgBGl4KGlVua25vd25NYXBGaWVsZFNpbnQzMkVudHJ5EgsKA2tleRgBIAEoERIvCgV2YWx1ZRgCIAEoDjIgLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW06AjgBGl4KGlVua25vd25NYXBGaWVsZFNpbnQ2NEVudHJ5EgsKA2tleRgBIAEoEhIvCgV2YWx1ZRgCIAEoDjIgLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW06AjgBGmAKHFVua25vd25NYXBGaWVsZFNmaXhlZDMyRW50cnkSCwoDa2V5GAEgASgPEi8KBXZhbHVlGAIgASgOMiAucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bToCOAEaYAocVW5rbm93bk1hcEZpZWxkU2ZpeGVkNjRFbnRyeRILCgNrZXkYASABKBASLwoFdmFsdWUYAiABKA4yIC5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtOgI4ASLOFgoUVGVzdEVudW1NYXBQbHVzRXh0cmESUwoPa25vd25fbWFwX2ZpZWxkGGUgAygLMjoucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuS25vd25NYXBGaWVsZEVudHJ5ElcKEXVua25vd25fbWFwX2ZpZWxkGGYgAygLMjwucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkRW50cnkSYwoXdW5rbm93bl9tYXBfZmllbGRfaW50NjQYyAEgAygLMkEucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkSW50NjRFbnRyeRJlChh1bmtub3duX21hcF9maWVsZF91aW50NjQYyQEgAygLMkIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkVWludDY0RW50cnkSYwoXdW5rbm93bl9tYXBfZmllbGRfaW50MzIYygEgAygLMkEucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkSW50MzJFbnRyeRJlChh1bmtub3duX21hcF9maWVsZF91aW50MzIYywEgAygLMkIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkVWludDMyRW50cnkSZwoZdW5rbm93bl9tYXBfZmllbGRfZml4ZWQzMhjMASADKAsyQy5wcm90b2J1Zl91bml0dGVzdC5UZXN0RW51bU1hcFBsdXNFeHRyYS5Vbmtub3duTWFwRmllbGRGaXhlZDMyRW50cnkSZwoZdW5rbm93bl9tYXBfZmllbGRfZml4ZWQ2NBjNASADKAsyQy5wcm90b2J1Zl91bml0dGVzdC5UZXN0RW51bU1hcFBsdXNFeHRyYS5Vbmtub3duTWFwRmllbGRGaXhlZDY0RW50cnkSYQoWdW5rbm93bl9tYXBfZmllbGRfYm9vbBjOASADKAsyQC5wcm90b2J1Zl91bml0dGVzdC5UZXN0RW51bU1hcFBsdXNFeHRyYS5Vbmtub3duTWFwRmllbGRCb29sRW50cnkSZQoYdW5rbm93bl9tYXBfZmllbGRfc3RyaW5nGM8BIAMoCzJCLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RFbnVtTWFwUGx1c0V4dHJhLlVua25vd25NYXBGaWVsZFN0cmluZ0VudHJ5EmUKGHVua25vd25fbWFwX2ZpZWxkX3NpbnQzMhjQASADKAsyQi5wcm90b2J1Zl91bml0dGVzdC5UZXN0RW51bU1hcFBsdXNFeHRyYS5Vbmtub3duTWFwRmllbGRTaW50MzJFbnRyeRJlChh1bmtub3duX21hcF9maWVsZF9zaW50NjQY0QEgAygLMkIucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkU2ludDY0RW50cnkSaQoadW5rbm93bl9tYXBfZmllbGRfc2ZpeGVkMzIY0gEgAygLMkQucHJvdG9idWZfdW5pdHRlc3QuVGVzdEVudW1NYXBQbHVzRXh0cmEuVW5rbm93bk1hcEZpZWxkU2ZpeGVkMzJFbnRyeRJpChp1bmtub3duX21hcF9maWVsZF9zZml4ZWQ2NBjTASADKAsyRC5wcm90b2J1Zl91bml0dGVzdC5UZXN0RW51bU1hcFBsdXNFeHRyYS5Vbmtub3duTWFwRmllbGRTZml4ZWQ2NEVudHJ5Gl8KEktub3duTWFwRmllbGRFbnRyeRILCgNrZXkYASABKAUSOAoFdmFsdWUYAiABKA4yKS5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtUGx1c0V4dHJhOgI4ARphChRVbmtub3duTWFwRmllbGRFbnRyeRILCgNrZXkYASABKAUSOAoFdmFsdWUYAiABKA4yKS5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtUGx1c0V4dHJhOgI4ARpmChlVbmtub3duTWFwRmllbGRJbnQ2NEVudHJ5EgsKA2tleRgBIAEoAxI4CgV2YWx1ZRgCIAEoDjIpLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW1QbHVzRXh0cmE6AjgBGmcKGlVua25vd25NYXBGaWVsZFVpbnQ2NEVudHJ5EgsKA2tleRgBIAEoBBI4CgV2YWx1ZRgCIAEoDjIpLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW1QbHVzRXh0cmE6AjgBGmYKGVVua25vd25NYXBGaWVsZEludDMyRW50cnkSCwoDa2V5GAEgASgFEjgKBXZhbHVlGAIgASgOMikucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bVBsdXNFeHRyYToCOAEaZwoaVW5rbm93bk1hcEZpZWxkVWludDMyRW50cnkSCwoDa2V5GAEgASgNEjgKBXZhbHVlGAIgASgOMikucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bVBsdXNFeHRyYToCOAEaaAobVW5rbm93bk1hcEZpZWxkRml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoBxI4CgV2YWx1ZRgCIAEoDjIpLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW1QbHVzRXh0cmE6AjgBGmgKG1Vua25vd25NYXBGaWVsZEZpeGVkNjRFbnRyeRILCgNrZXkYASABKAYSOAoFdmFsdWUYAiABKA4yKS5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtUGx1c0V4dHJhOgI4ARplChhVbmtub3duTWFwRmllbGRCb29sRW50cnkSCwoDa2V5GAEgASgIEjgKBXZhbHVlGAIgASgOMikucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bVBsdXNFeHRyYToCOAEaZwoaVW5rbm93bk1hcEZpZWxkU3RyaW5nRW50cnkSCwoDa2V5GAEgASgJEjgKBXZhbHVlGAIgASgOMikucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bVBsdXNFeHRyYToCOAEaZwoaVW5rbm93bk1hcEZpZWxkU2ludDMyRW50cnkSCwoDa2V5GAEgASgREjgKBXZhbHVlGAIgASgOMikucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bVBsdXNFeHRyYToCOAEaZwoaVW5rbm93bk1hcEZpZWxkU2ludDY0RW50cnkSCwoDa2V5GAEgASgSEjgKBXZhbHVlGAIgASgOMikucHJvdG9idWZfdW5pdHRlc3QuUHJvdG8yTWFwRW51bVBsdXNFeHRyYToCOAEaaQocVW5rbm93bk1hcEZpZWxkU2ZpeGVkMzJFbnRyeRILCgNrZXkYASABKA8SOAoFdmFsdWUYAiABKA4yKS5wcm90b2J1Zl91bml0dGVzdC5Qcm90bzJNYXBFbnVtUGx1c0V4dHJhOgI4ARppChxVbmtub3duTWFwRmllbGRTZml4ZWQ2NEVudHJ5EgsKA2tleRgBIAEoEBI4CgV2YWx1ZRgCIAEoDjIpLnByb3RvYnVmX3VuaXR0ZXN0LlByb3RvMk1hcEVudW1QbHVzRXh0cmE6AjgBIscBChFUZXN0SW1wb3J0RW51bU1hcBJQCg9pbXBvcnRfZW51bV9hbXAYASADKAsyNy5wcm90b2J1Zl91bml0dGVzdC5UZXN0SW1wb3J0RW51bU1hcC5JbXBvcnRFbnVtQW1wRW50cnkaYAoSSW1wb3J0RW51bUFtcEVudHJ5EgsKA2tleRgBIAEoBRI5CgV2YWx1ZRgCIAEoDjIqLnByb3RvYnVmX3VuaXR0ZXN0X2ltcG9ydC5JbXBvcnRFbnVtRm9yTWFwOgI4ASJtCg1UZXN0SW50SW50TWFwEjIKAW0YASADKAsyJy5wcm90b2J1Zl91bml0dGVzdC5UZXN0SW50SW50TWFwLk1FbnRyeRooCgZNRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgFOgI4ASK4DQoIVGVzdE1hcHMSOAoHbV9pbnQzMhgBIAMoCzInLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1JbnQzMkVudHJ5EjgKB21faW50NjQYAiADKAsyJy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwcy5NSW50NjRFbnRyeRI6CghtX3VpbnQzMhgDIAMoCzIoLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1VaW50MzJFbnRyeRI6CghtX3VpbnQ2NBgEIAMoCzIoLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1VaW50NjRFbnRyeRI6CghtX3NpbnQzMhgFIAMoCzIoLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1TaW50MzJFbnRyeRI6CghtX3NpbnQ2NBgGIAMoCzIoLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1TaW50NjRFbnRyeRI8CgltX2ZpeGVkMzIYByADKAsyKS5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwcy5NRml4ZWQzMkVudHJ5EjwKCW1fZml4ZWQ2NBgIIAMoCzIpLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1GaXhlZDY0RW50cnkSPgoKbV9zZml4ZWQzMhgJIAMoCzIqLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RNYXBzLk1TZml4ZWQzMkVudHJ5Ej4KCm1fc2ZpeGVkNjQYCiADKAsyKi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwcy5NU2ZpeGVkNjRFbnRyeRI2CgZtX2Jvb2wYCyADKAsyJi5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwcy5NQm9vbEVudHJ5EjoKCG1fc3RyaW5nGAwgAygLMigucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1hcHMuTVN0cmluZ0VudHJ5Gk8KC01JbnQzMkVudHJ5EgsKA2tleRgBIAEoBRIvCgV2YWx1ZRgCIAEoCzIgLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RJbnRJbnRNYXA6AjgBGk8KC01JbnQ2NEVudHJ5EgsKA2tleRgBIAEoAxIvCgV2YWx1ZRgCIAEoCzIgLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RJbnRJbnRNYXA6AjgBGlAKDE1VaW50MzJFbnRyeRILCgNrZXkYASABKA0SLwoFdmFsdWUYAiABKAsyIC5wcm90b2J1Zl91bml0dGVzdC5UZXN0SW50SW50TWFwOgI4ARpQCgxNVWludDY0RW50cnkSCwoDa2V5GAEgASgEEi8KBXZhbHVlGAIgASgLMiAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEludEludE1hcDoCOAEaUAoMTVNpbnQzMkVudHJ5EgsKA2tleRgBIAEoERIvCgV2YWx1ZRgCIAEoCzIgLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RJbnRJbnRNYXA6AjgBGlAKDE1TaW50NjRFbnRyeRILCgNrZXkYASABKBISLwoFdmFsdWUYAiABKAsyIC5wcm90b2J1Zl91bml0dGVzdC5UZXN0SW50SW50TWFwOgI4ARpRCg1NRml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoBxIvCgV2YWx1ZRgCIAEoCzIgLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RJbnRJbnRNYXA6AjgBGlEKDU1GaXhlZDY0RW50cnkSCwoDa2V5GAEgASgGEi8KBXZhbHVlGAIgASgLMiAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEludEludE1hcDoCOAEaUgoOTVNmaXhlZDMyRW50cnkSCwoDa2V5GAEgASgPEi8KBXZhbHVlGAIgASgLMiAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEludEludE1hcDoCOAEaUgoOTVNmaXhlZDY0RW50cnkSCwoDa2V5GAEgASgQEi8KBXZhbHVlGAIgASgLMiAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEludEludE1hcDoCOAEaTgoKTUJvb2xFbnRyeRILCgNrZXkYASABKAgSLwoFdmFsdWUYAiABKAsyIC5wcm90b2J1Zl91bml0dGVzdC5UZXN0SW50SW50TWFwOgI4ARpQCgxNU3RyaW5nRW50cnkSCwoDa2V5GAEgASgJEi8KBXZhbHVlGAIgASgLMiAucHJvdG9idWZfdW5pdHRlc3QuVGVzdEludEludE1hcDoCOAEiPAoSVGVzdFN1Ym1lc3NhZ2VNYXBzEiYKAW0YASABKAsyGy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWFwcyKJAgoSVGVzdFByb3RvMkJ5dGVzTWFwEkYKCW1hcF9ieXRlcxgBIAMoCzIzLnByb3RvYnVmX3VuaXR0ZXN0LlRlc3RQcm90bzJCeXRlc01hcC5NYXBCeXRlc0VudHJ5EkgKCm1hcF9zdHJpbmcYAiADKAsyNC5wcm90b2J1Zl91bml0dGVzdC5UZXN0UHJvdG8yQnl0ZXNNYXAuTWFwU3RyaW5nRW50cnkaLwoNTWFwQnl0ZXNFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAw6AjgBGjAKDk1hcFN0cmluZ0VudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoCToCOAEqWgoNUHJvdG8yTWFwRW51bRIXChNQUk9UTzJfTUFQX0VOVU1fRk9PEAASFwoTUFJPVE8yX01BUF9FTlVNX0JBUhABEhcKE1BST1RPMl9NQVBfRU5VTV9CQVoQAiqGAQoWUHJvdG8yTWFwRW51bVBsdXNFeHRyYRIZChVFX1BST1RPMl9NQVBfRU5VTV9GT08QABIZChVFX1BST1RPMl9NQVBfRU5VTV9CQVIQARIZChVFX1BST1RPMl9NQVBfRU5VTV9CQVoQAhIbChdFX1BST1RPMl9NQVBfRU5VTV9FWFRSQRADQgP4AQE", [fileDesc_google_protobuf_unittest_import]);

/**
 * @generated from message protobuf_unittest.TestEnumMap
 */
export type TestEnumMap = Message<"protobuf_unittest.TestEnumMap"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnum> known_map_field = 101;
   */
  knownMapField: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnum> unknown_map_field = 102;
   */
  unknownMapField: { [key: number]: Proto2MapEnum };

  /**
   * Other maps with all key types to test the unknown entry serialization
   *
   * @generated from field: map<int64, protobuf_unittest.Proto2MapEnum> unknown_map_field_int64 = 200;
   */
  unknownMapFieldInt64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<uint64, protobuf_unittest.Proto2MapEnum> unknown_map_field_uint64 = 201;
   */
  unknownMapFieldUint64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnum> unknown_map_field_int32 = 202;
   */
  unknownMapFieldInt32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<uint32, protobuf_unittest.Proto2MapEnum> unknown_map_field_uint32 = 203;
   */
  unknownMapFieldUint32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<fixed32, protobuf_unittest.Proto2MapEnum> unknown_map_field_fixed32 = 204;
   */
  unknownMapFieldFixed32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<fixed64, protobuf_unittest.Proto2MapEnum> unknown_map_field_fixed64 = 205;
   */
  unknownMapFieldFixed64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<bool, protobuf_unittest.Proto2MapEnum> unknown_map_field_bool = 206;
   */
  unknownMapFieldBool: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<string, protobuf_unittest.Proto2MapEnum> unknown_map_field_string = 207;
   */
  unknownMapFieldString: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<sint32, protobuf_unittest.Proto2MapEnum> unknown_map_field_sint32 = 208;
   */
  unknownMapFieldSint32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<sint64, protobuf_unittest.Proto2MapEnum> unknown_map_field_sint64 = 209;
   */
  unknownMapFieldSint64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<sfixed32, protobuf_unittest.Proto2MapEnum> unknown_map_field_sfixed32 = 210;
   */
  unknownMapFieldSfixed32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<sfixed64, protobuf_unittest.Proto2MapEnum> unknown_map_field_sfixed64 = 211;
   */
  unknownMapFieldSfixed64: { [key: string]: Proto2MapEnum };
};

// Describes the message protobuf_unittest.TestEnumMap.
// Use `create(TestEnumMapDesc)` to create a new TestEnumMap.
export const TestEnumMapDesc: TypedDescMessage<TestEnumMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 0);

/**
 * @generated from message protobuf_unittest.TestEnumMapPlusExtra
 */
export type TestEnumMapPlusExtra = Message<"protobuf_unittest.TestEnumMapPlusExtra"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtra> known_map_field = 101;
   */
  knownMapField: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field = 102;
   */
  unknownMapField: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * Other maps with all key types to test the unknown entry serialization
   *
   * @generated from field: map<int64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_int64 = 200;
   */
  unknownMapFieldInt64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<uint64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_uint64 = 201;
   */
  unknownMapFieldUint64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_int32 = 202;
   */
  unknownMapFieldInt32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<uint32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_uint32 = 203;
   */
  unknownMapFieldUint32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<fixed32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_fixed32 = 204;
   */
  unknownMapFieldFixed32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<fixed64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_fixed64 = 205;
   */
  unknownMapFieldFixed64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<bool, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_bool = 206;
   */
  unknownMapFieldBool: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<string, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_string = 207;
   */
  unknownMapFieldString: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sint32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sint32 = 208;
   */
  unknownMapFieldSint32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sint64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sint64 = 209;
   */
  unknownMapFieldSint64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sfixed32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sfixed32 = 210;
   */
  unknownMapFieldSfixed32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sfixed64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sfixed64 = 211;
   */
  unknownMapFieldSfixed64: { [key: string]: Proto2MapEnumPlusExtra };
};

// Describes the message protobuf_unittest.TestEnumMapPlusExtra.
// Use `create(TestEnumMapPlusExtraDesc)` to create a new TestEnumMapPlusExtra.
export const TestEnumMapPlusExtraDesc: TypedDescMessage<TestEnumMapPlusExtra> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 1);

/**
 * @generated from message protobuf_unittest.TestImportEnumMap
 */
export type TestImportEnumMap = Message<"protobuf_unittest.TestImportEnumMap"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest_import.ImportEnumForMap> import_enum_amp = 1;
   */
  importEnumAmp: { [key: number]: ImportEnumForMap };
};

// Describes the message protobuf_unittest.TestImportEnumMap.
// Use `create(TestImportEnumMapDesc)` to create a new TestImportEnumMap.
export const TestImportEnumMapDesc: TypedDescMessage<TestImportEnumMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 2);

/**
 * @generated from message protobuf_unittest.TestIntIntMap
 */
export type TestIntIntMap = Message<"protobuf_unittest.TestIntIntMap"> & {
  /**
   * @generated from field: map<int32, int32> m = 1;
   */
  m: { [key: number]: number };
};

// Describes the message protobuf_unittest.TestIntIntMap.
// Use `create(TestIntIntMapDesc)` to create a new TestIntIntMap.
export const TestIntIntMapDesc: TypedDescMessage<TestIntIntMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 3);

/**
 * Test all key types: string, plus the non-floating-point scalars.
 *
 * @generated from message protobuf_unittest.TestMaps
 */
export type TestMaps = Message<"protobuf_unittest.TestMaps"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.TestIntIntMap> m_int32 = 1;
   */
  mInt32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<int64, protobuf_unittest.TestIntIntMap> m_int64 = 2;
   */
  mInt64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<uint32, protobuf_unittest.TestIntIntMap> m_uint32 = 3;
   */
  mUint32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<uint64, protobuf_unittest.TestIntIntMap> m_uint64 = 4;
   */
  mUint64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<sint32, protobuf_unittest.TestIntIntMap> m_sint32 = 5;
   */
  mSint32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<sint64, protobuf_unittest.TestIntIntMap> m_sint64 = 6;
   */
  mSint64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<fixed32, protobuf_unittest.TestIntIntMap> m_fixed32 = 7;
   */
  mFixed32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<fixed64, protobuf_unittest.TestIntIntMap> m_fixed64 = 8;
   */
  mFixed64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<sfixed32, protobuf_unittest.TestIntIntMap> m_sfixed32 = 9;
   */
  mSfixed32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<sfixed64, protobuf_unittest.TestIntIntMap> m_sfixed64 = 10;
   */
  mSfixed64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<bool, protobuf_unittest.TestIntIntMap> m_bool = 11;
   */
  mBool: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<string, protobuf_unittest.TestIntIntMap> m_string = 12;
   */
  mString: { [key: string]: TestIntIntMap };
};

// Describes the message protobuf_unittest.TestMaps.
// Use `create(TestMapsDesc)` to create a new TestMaps.
export const TestMapsDesc: TypedDescMessage<TestMaps> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 4);

/**
 * Test maps in submessages.
 *
 * @generated from message protobuf_unittest.TestSubmessageMaps
 */
export type TestSubmessageMaps = Message<"protobuf_unittest.TestSubmessageMaps"> & {
  /**
   * @generated from field: optional protobuf_unittest.TestMaps m = 1;
   */
  m?: TestMaps;
};

// Describes the message protobuf_unittest.TestSubmessageMaps.
// Use `create(TestSubmessageMapsDesc)` to create a new TestSubmessageMaps.
export const TestSubmessageMapsDesc: TypedDescMessage<TestSubmessageMaps> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 5);

/**
 * @generated from message protobuf_unittest.TestProto2BytesMap
 */
export type TestProto2BytesMap = Message<"protobuf_unittest.TestProto2BytesMap"> & {
  /**
   * @generated from field: map<int32, bytes> map_bytes = 1;
   */
  mapBytes: { [key: number]: Uint8Array };

  /**
   * @generated from field: map<int32, string> map_string = 2;
   */
  mapString: { [key: number]: string };
};

// Describes the message protobuf_unittest.TestProto2BytesMap.
// Use `create(TestProto2BytesMapDesc)` to create a new TestProto2BytesMap.
export const TestProto2BytesMapDesc: TypedDescMessage<TestProto2BytesMap> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_map_proto2_unittest, 6);

/**
 * @generated from enum protobuf_unittest.Proto2MapEnum
 */
export enum Proto2MapEnum {
  /**
   * @generated from enum value: PROTO2_MAP_ENUM_FOO = 0;
   */
  FOO = 0,

  /**
   * @generated from enum value: PROTO2_MAP_ENUM_BAR = 1;
   */
  BAR = 1,

  /**
   * @generated from enum value: PROTO2_MAP_ENUM_BAZ = 2;
   */
  BAZ = 2,
}

// Describes the enum protobuf_unittest.Proto2MapEnum.
export const Proto2MapEnumDesc: TypedDescEnum<Proto2MapEnum> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_map_proto2_unittest, 0);

/**
 * @generated from enum protobuf_unittest.Proto2MapEnumPlusExtra
 */
export enum Proto2MapEnumPlusExtra {
  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_FOO = 0;
   */
  E_PROTO2_MAP_ENUM_FOO = 0,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_BAR = 1;
   */
  E_PROTO2_MAP_ENUM_BAR = 1,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_BAZ = 2;
   */
  E_PROTO2_MAP_ENUM_BAZ = 2,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_EXTRA = 3;
   */
  E_PROTO2_MAP_ENUM_EXTRA = 3,
}

// Describes the enum protobuf_unittest.Proto2MapEnumPlusExtra.
export const Proto2MapEnumPlusExtraDesc: TypedDescEnum<Proto2MapEnumPlusExtra> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_map_proto2_unittest, 1);

