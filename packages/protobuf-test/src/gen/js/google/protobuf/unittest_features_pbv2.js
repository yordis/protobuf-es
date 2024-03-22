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
// @generated from file google/protobuf/unittest_features.proto (package pb, syntax proto2)
/* eslint-disable */

import { enumDesc, extDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc_google_protobuf_descriptor } from "@bufbuild/protobuf/next/wkt";

export const fileDesc_google_protobuf_unittest_features = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvcHJvdG9idWYvdW5pdHRlc3RfZmVhdHVyZXMucHJvdG8SAnBiIrsBCgtUZXN0TWVzc2FnZRpZCgZOZXN0ZWQyTwoLdGVzdF9uZXN0ZWQSGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBiNTiABKAsyEC5wYi5UZXN0RmVhdHVyZXNSCnRlc3ROZXN0ZWQyUQoMdGVzdF9tZXNzYWdlEhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQYjk4gASgLMhAucGIuVGVzdEZlYXR1cmVzUgt0ZXN0TWVzc2FnZSL9CgoMVGVzdEZlYXR1cmVzElEKEGludF9maWxlX2ZlYXR1cmUYASABKAVCN4gBAZgBAaIBBxICLTIY5geiAQcSAi0zGOcHogEGEgExGOgHogEHEgEyGJ2NBqIBBxIBMxiejQYSNAobaW50X2V4dGVuc2lvbl9yYW5nZV9mZWF0dXJlGAIgASgFQg+IAQGYAQKiAQYSATEY5gcSLAoTaW50X21lc3NhZ2VfZmVhdHVyZRgDIAEoBUIPiAEBmAEDogEGEgExGOYHEioKEWludF9maWVsZF9mZWF0dXJlGAQgASgFQg+IAQGYAQSiAQYSATEY5gcSKgoRaW50X29uZW9mX2ZlYXR1cmUYBSABKAVCD4gBAZgBBaIBBhIBMRjmBxIpChBpbnRfZW51bV9mZWF0dXJlGAYgASgFQg+IAQGYAQaiAQYSATEY5gcSLwoWaW50X2VudW1fZW50cnlfZmVhdHVyZRgHIAEoBUIPiAEBmAEHogEGEgExGOYHEiwKE2ludF9zZXJ2aWNlX2ZlYXR1cmUYCCABKAVCD4gBAZgBCKIBBhIBMRjmBxIrChJpbnRfbWV0aG9kX2ZlYXR1cmUYCSABKAVCD4gBAZgBCaIBBhIBMRjmBxJFChRpbnRfbXVsdGlwbGVfZmVhdHVyZRgKIAEoBUIniAEBmAEBmAEEmAEDmAEGmAEHmAEImAEJmAEFmAECogEGEgExGOYHEjwKEmJvb2xfZmllbGRfZmVhdHVyZRgLIAEoCEIgiAEBmAEEogEKEgVmYWxzZRjmB6IBChIEdHJ1ZRidjQYSOgoTZmxvYXRfZmllbGRfZmVhdHVyZRgMIAEoAkIdiAEBmAEEogEIEgMxLjEY5geiAQkSAzEuMhidjQYSzAEKFW1lc3NhZ2VfZmllbGRfZmVhdHVyZRgNIAEoCzIfLnBiLlRlc3RGZWF0dXJlcy5NZXNzYWdlRmVhdHVyZUKLAYgBAZgBBKIBEhIMaW50X2ZpZWxkOiAyGJ2NBqIBGhIUc3RyaW5nX2ZpZWxkOiAnMjAyNCcYno0GogFIEkNib29sX2ZpZWxkOiB0cnVlIGludF9maWVsZDogMSBmbG9hdF9maWVsZDogMS41IHN0cmluZ19maWVsZDogJzIwMjMnGOgHogEFEgAY5gcSnAEKEmVudW1fZmllbGRfZmVhdHVyZRgOIAEoDjIcLnBiLlRlc3RGZWF0dXJlcy5FbnVtRmVhdHVyZUJiiAEBmAEEogEeEhlURVNUX0VOVU1fRkVBVFVSRV9VTktOT1dOGOYHogEQEgtFTlVNX1ZBTFVFMRjoB6IBERILRU5VTV9WQUxVRTIYnY0GogEREgtFTlVNX1ZBTFVFMxiejQYSQwoSaW50X3NvdXJjZV9mZWF0dXJlGA8gASgFQieIAQKYAQGYAQSYAQOYAQaYAQeYAQiYAQmYAQWYAQKiAQYSATEY5gcSSwoVc3RyaW5nX3NvdXJjZV9mZWF0dXJlGBAgASgJQiyIAQKYAQGYAQSYAQOYAQaYAQeYAQiYAQmYAQWYAQKiAQsSBicyMDIzJxjmBxpiCg5NZXNzYWdlRmVhdHVyZRISCgpib29sX2ZpZWxkGAEgASgIEhEKCWludF9maWVsZBgCIAEoBRITCgtmbG9hdF9maWVsZBgDIAEoAhIUCgxzdHJpbmdfZmllbGQYBCABKAkigQEKC0VudW1GZWF0dXJlEh0KGVRFU1RfRU5VTV9GRUFUVVJFX1VOS05PV04QABIPCgtFTlVNX1ZBTFVFMRABEg8KC0VOVU1fVkFMVUUyEAISDwoLRU5VTV9WQUxVRTMQAxIPCgtFTlVNX1ZBTFVFNBAEEg8KC0VOVU1fVkFMVUU1EAU6QgoEdGVzdBIbLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0GI9OIAEoCzIQLnBiLlRlc3RGZWF0dXJlc1IEdGVzdA", [fileDesc_google_protobuf_descriptor]);

// Describes the message pb.TestMessage. Use `create(TestMessageDesc)` to create a new TestMessage.
export const TestMessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_features, 0);

// Describes the message pb.TestMessage.Nested. Use `create(TestMessage_NestedDesc)` to create a new TestMessage_Nested.
export const TestMessage_NestedDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_features, 0, 0);

/**
 * @generated from extension: optional pb.TestFeatures test_nested = 9997;
 */
export const TestMessage_Nested_test_nested = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_features, 0, 0, 0);

/**
 * @generated from extension: optional pb.TestFeatures test_message = 9998;
 */
export const TestMessage_test_message = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_features, 0, 0);

// Describes the message pb.TestFeatures. Use `create(TestFeaturesDesc)` to create a new TestFeatures.
export const TestFeaturesDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_features, 1);

// Describes the message pb.TestFeatures.MessageFeature. Use `create(TestFeatures_MessageFeatureDesc)` to create a new TestFeatures_MessageFeature.
export const TestFeatures_MessageFeatureDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_features, 1, 0);

// Describes the enum pb.TestFeatures.EnumFeature.
export const TestFeatures_EnumFeatureDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_unittest_features, 1, 0);

/**
 * @generated from enum pb.TestFeatures.EnumFeature
 */
export const TestFeatures_EnumFeature = /*@__PURE__*/
  tsEnum(TestFeatures_EnumFeatureDesc);

/**
 * @generated from extension: optional pb.TestFeatures test = 9999;
 */
export const test = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_features, 0);

