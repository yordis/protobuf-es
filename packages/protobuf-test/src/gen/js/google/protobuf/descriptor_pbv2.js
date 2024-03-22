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
// The messages in this file describe the definitions found in .proto files.
// A valid .proto file can be translated directly to a FileDescriptorProto
// without any other information (e.g. without reading its imports).

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/descriptor.proto (package google.protobuf, syntax proto2)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/next/codegenv1";

export const fileDesc_google_protobuf_descriptor = /*@__PURE__*/
  fileDesc("CiBnb29nbGUvcHJvdG9idWYvZGVzY3JpcHRvci5wcm90bxIPZ29vZ2xlLnByb3RvYnVmIkcKEUZpbGVEZXNjcmlwdG9yU2V0EjIKBGZpbGUYASADKAsyJC5nb29nbGUucHJvdG9idWYuRmlsZURlc2NyaXB0b3JQcm90byKGBAoTRmlsZURlc2NyaXB0b3JQcm90bxIMCgRuYW1lGAEgASgJEg8KB3BhY2thZ2UYAiABKAkSEgoKZGVwZW5kZW5jeRgDIAMoCRIZChFwdWJsaWNfZGVwZW5kZW5jeRgKIAMoBRIXCg93ZWFrX2RlcGVuZGVuY3kYCyADKAUSNgoMbWVzc2FnZV90eXBlGAQgAygLMiAuZ29vZ2xlLnByb3RvYnVmLkRlc2NyaXB0b3JQcm90bxI3CgllbnVtX3R5cGUYBSADKAsyJC5nb29nbGUucHJvdG9idWYuRW51bURlc2NyaXB0b3JQcm90bxI4CgdzZXJ2aWNlGAYgAygLMicuZ29vZ2xlLnByb3RvYnVmLlNlcnZpY2VEZXNjcmlwdG9yUHJvdG8SOAoJZXh0ZW5zaW9uGAcgAygLMiUuZ29vZ2xlLnByb3RvYnVmLkZpZWxkRGVzY3JpcHRvclByb3RvEi0KB29wdGlvbnMYCCABKAsyHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMSOQoQc291cmNlX2NvZGVfaW5mbxgJIAEoCzIfLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb2RlSW5mbxIOCgZzeW50YXgYDCABKAkSKQoHZWRpdGlvbhgOIAEoDjIYLmdvb2dsZS5wcm90b2J1Zi5FZGl0aW9uIqkFCg9EZXNjcmlwdG9yUHJvdG8SDAoEbmFtZRgBIAEoCRI0CgVmaWVsZBgCIAMoCzIlLmdvb2dsZS5wcm90b2J1Zi5GaWVsZERlc2NyaXB0b3JQcm90bxI4CglleHRlbnNpb24YBiADKAsyJS5nb29nbGUucHJvdG9idWYuRmllbGREZXNjcmlwdG9yUHJvdG8SNQoLbmVzdGVkX3R5cGUYAyADKAsyIC5nb29nbGUucHJvdG9idWYuRGVzY3JpcHRvclByb3RvEjcKCWVudW1fdHlwZRgEIAMoCzIkLmdvb2dsZS5wcm90b2J1Zi5FbnVtRGVzY3JpcHRvclByb3RvEkgKD2V4dGVuc2lvbl9yYW5nZRgFIAMoCzIvLmdvb2dsZS5wcm90b2J1Zi5EZXNjcmlwdG9yUHJvdG8uRXh0ZW5zaW9uUmFuZ2USOQoKb25lb2ZfZGVjbBgIIAMoCzIlLmdvb2dsZS5wcm90b2J1Zi5PbmVvZkRlc2NyaXB0b3JQcm90bxIwCgdvcHRpb25zGAcgASgLMh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zEkYKDnJlc2VydmVkX3JhbmdlGAkgAygLMi4uZ29vZ2xlLnByb3RvYnVmLkRlc2NyaXB0b3JQcm90by5SZXNlcnZlZFJhbmdlEhUKDXJlc2VydmVkX25hbWUYCiADKAkaZQoORXh0ZW5zaW9uUmFuZ2USDQoFc3RhcnQYASABKAUSCwoDZW5kGAIgASgFEjcKB29wdGlvbnMYAyABKAsyJi5nb29nbGUucHJvdG9idWYuRXh0ZW5zaW9uUmFuZ2VPcHRpb25zGisKDVJlc2VydmVkUmFuZ2USDQoFc3RhcnQYASABKAUSCwoDZW5kGAIgASgFIuUDChVFeHRlbnNpb25SYW5nZU9wdGlvbnMSQwoUdW5pbnRlcnByZXRlZF9vcHRpb24Y5wcgAygLMiQuZ29vZ2xlLnByb3RvYnVmLlVuaW50ZXJwcmV0ZWRPcHRpb24STAoLZGVjbGFyYXRpb24YAiADKAsyMi5nb29nbGUucHJvdG9idWYuRXh0ZW5zaW9uUmFuZ2VPcHRpb25zLkRlY2xhcmF0aW9uQgOIAQISLQoIZmVhdHVyZXMYMiABKAsyGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBJfCgx2ZXJpZmljYXRpb24YAyABKA4yOC5nb29nbGUucHJvdG9idWYuRXh0ZW5zaW9uUmFuZ2VPcHRpb25zLlZlcmlmaWNhdGlvblN0YXRlOgpVTlZFUklGSUVEQgOIAQIaaAoLRGVjbGFyYXRpb24SDgoGbnVtYmVyGAEgASgFEhEKCWZ1bGxfbmFtZRgCIAEoCRIMCgR0eXBlGAMgASgJEhAKCHJlc2VydmVkGAUgASgIEhAKCHJlcGVhdGVkGAYgASgISgQIBBAFIjQKEVZlcmlmaWNhdGlvblN0YXRlEg8KC0RFQ0xBUkFUSU9OEAASDgoKVU5WRVJJRklFRBABKgkI6AcQgICAgAIi1QUKFEZpZWxkRGVzY3JpcHRvclByb3RvEgwKBG5hbWUYASABKAkSDgoGbnVtYmVyGAMgASgFEjoKBWxhYmVsGAQgASgOMisuZ29vZ2xlLnByb3RvYnVmLkZpZWxkRGVzY3JpcHRvclByb3RvLkxhYmVsEjgKBHR5cGUYBSABKA4yKi5nb29nbGUucHJvdG9idWYuRmllbGREZXNjcmlwdG9yUHJvdG8uVHlwZRIRCgl0eXBlX25hbWUYBiABKAkSEAoIZXh0ZW5kZWUYAiABKAkSFQoNZGVmYXVsdF92YWx1ZRgHIAEoCRITCgtvbmVvZl9pbmRleBgJIAEoBRIRCglqc29uX25hbWUYCiABKAkSLgoHb3B0aW9ucxgIIAEoCzIdLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMSFwoPcHJvdG8zX29wdGlvbmFsGBEgASgIIrYCCgRUeXBlEg8KC1RZUEVfRE9VQkxFEAESDgoKVFlQRV9GTE9BVBACEg4KClRZUEVfSU5UNjQQAxIPCgtUWVBFX1VJTlQ2NBAEEg4KClRZUEVfSU5UMzIQBRIQCgxUWVBFX0ZJWEVENjQQBhIQCgxUWVBFX0ZJWEVEMzIQBxINCglUWVBFX0JPT0wQCBIPCgtUWVBFX1NUUklORxAJEg4KClRZUEVfR1JPVVAQChIQCgxUWVBFX01FU1NBR0UQCxIOCgpUWVBFX0JZVEVTEAwSDwoLVFlQRV9VSU5UMzIQDRINCglUWVBFX0VOVU0QDhIRCg1UWVBFX1NGSVhFRDMyEA8SEQoNVFlQRV9TRklYRUQ2NBAQEg8KC1RZUEVfU0lOVDMyEBESDwoLVFlQRV9TSU5UNjQQEiJDCgVMYWJlbBISCg5MQUJFTF9PUFRJT05BTBABEhIKDkxBQkVMX1JFUEVBVEVEEAMSEgoOTEFCRUxfUkVRVUlSRUQQAiJUChRPbmVvZkRlc2NyaXB0b3JQcm90bxIMCgRuYW1lGAEgASgJEi4KB29wdGlvbnMYAiABKAsyHS5nb29nbGUucHJvdG9idWYuT25lb2ZPcHRpb25zIqQCChNFbnVtRGVzY3JpcHRvclByb3RvEgwKBG5hbWUYASABKAkSOAoFdmFsdWUYAiADKAsyKS5nb29nbGUucHJvdG9idWYuRW51bVZhbHVlRGVzY3JpcHRvclByb3RvEi0KB29wdGlvbnMYAyABKAsyHC5nb29nbGUucHJvdG9idWYuRW51bU9wdGlvbnMSTgoOcmVzZXJ2ZWRfcmFuZ2UYBCADKAsyNi5nb29nbGUucHJvdG9idWYuRW51bURlc2NyaXB0b3JQcm90by5FbnVtUmVzZXJ2ZWRSYW5nZRIVCg1yZXNlcnZlZF9uYW1lGAUgAygJGi8KEUVudW1SZXNlcnZlZFJhbmdlEg0KBXN0YXJ0GAEgASgFEgsKA2VuZBgCIAEoBSJsChhFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8SDAoEbmFtZRgBIAEoCRIOCgZudW1iZXIYAiABKAUSMgoHb3B0aW9ucxgDIAEoCzIhLmdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVPcHRpb25zIpABChZTZXJ2aWNlRGVzY3JpcHRvclByb3RvEgwKBG5hbWUYASABKAkSNgoGbWV0aG9kGAIgAygLMiYuZ29vZ2xlLnByb3RvYnVmLk1ldGhvZERlc2NyaXB0b3JQcm90bxIwCgdvcHRpb25zGAMgASgLMh8uZ29vZ2xlLnByb3RvYnVmLlNlcnZpY2VPcHRpb25zIsEBChVNZXRob2REZXNjcmlwdG9yUHJvdG8SDAoEbmFtZRgBIAEoCRISCgppbnB1dF90eXBlGAIgASgJEhMKC291dHB1dF90eXBlGAMgASgJEi8KB29wdGlvbnMYBCABKAsyHi5nb29nbGUucHJvdG9idWYuTWV0aG9kT3B0aW9ucxIfChBjbGllbnRfc3RyZWFtaW5nGAUgASgIOgVmYWxzZRIfChBzZXJ2ZXJfc3RyZWFtaW5nGAYgASgIOgVmYWxzZSK1BgoLRmlsZU9wdGlvbnMSFAoMamF2YV9wYWNrYWdlGAEgASgJEhwKFGphdmFfb3V0ZXJfY2xhc3NuYW1lGAggASgJEiIKE2phdmFfbXVsdGlwbGVfZmlsZXMYCiABKAg6BWZhbHNlEikKHWphdmFfZ2VuZXJhdGVfZXF1YWxzX2FuZF9oYXNoGBQgASgIQgIYARIlChZqYXZhX3N0cmluZ19jaGVja191dGY4GBsgASgIOgVmYWxzZRJGCgxvcHRpbWl6ZV9mb3IYCSABKA4yKS5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMuT3B0aW1pemVNb2RlOgVTUEVFRBISCgpnb19wYWNrYWdlGAsgASgJEiIKE2NjX2dlbmVyaWNfc2VydmljZXMYECABKAg6BWZhbHNlEiQKFWphdmFfZ2VuZXJpY19zZXJ2aWNlcxgRIAEoCDoFZmFsc2USIgoTcHlfZ2VuZXJpY19zZXJ2aWNlcxgSIAEoCDoFZmFsc2USGQoKZGVwcmVjYXRlZBgXIAEoCDoFZmFsc2USHgoQY2NfZW5hYmxlX2FyZW5hcxgfIAEoCDoEdHJ1ZRIZChFvYmpjX2NsYXNzX3ByZWZpeBgkIAEoCRIYChBjc2hhcnBfbmFtZXNwYWNlGCUgASgJEhQKDHN3aWZ0X3ByZWZpeBgnIAEoCRIYChBwaHBfY2xhc3NfcHJlZml4GCggASgJEhUKDXBocF9uYW1lc3BhY2UYKSABKAkSHgoWcGhwX21ldGFkYXRhX25hbWVzcGFjZRgsIAEoCRIUCgxydWJ5X3BhY2thZ2UYLSABKAkSLQoIZmVhdHVyZXMYMiABKAsyGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBJDChR1bmludGVycHJldGVkX29wdGlvbhjnByADKAsyJC5nb29nbGUucHJvdG9idWYuVW5pbnRlcnByZXRlZE9wdGlvbiI6CgxPcHRpbWl6ZU1vZGUSCQoFU1BFRUQQARINCglDT0RFX1NJWkUQAhIQCgxMSVRFX1JVTlRJTUUQAyoJCOgHEICAgIACSgQIKhArSgQIJhAnIucCCg5NZXNzYWdlT3B0aW9ucxImChdtZXNzYWdlX3NldF93aXJlX2Zvcm1hdBgBIAEoCDoFZmFsc2USLgofbm9fc3RhbmRhcmRfZGVzY3JpcHRvcl9hY2Nlc3NvchgCIAEoCDoFZmFsc2USGQoKZGVwcmVjYXRlZBgDIAEoCDoFZmFsc2USEQoJbWFwX2VudHJ5GAcgASgIEjIKJmRlcHJlY2F0ZWRfbGVnYWN5X2pzb25fZmllbGRfY29uZmxpY3RzGAsgASgIQgIYARItCghmZWF0dXJlcxgMIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0EkMKFHVuaW50ZXJwcmV0ZWRfb3B0aW9uGOcHIAMoCzIkLmdvb2dsZS5wcm90b2J1Zi5VbmludGVycHJldGVkT3B0aW9uKgkI6AcQgICAgAJKBAgEEAVKBAgFEAZKBAgGEAdKBAgIEAlKBAgJEAoijQkKDEZpZWxkT3B0aW9ucxI6CgVjdHlwZRgBIAEoDjIjLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMuQ1R5cGU6BlNUUklORxIOCgZwYWNrZWQYAiABKAgSPwoGanN0eXBlGAYgASgOMiQuZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucy5KU1R5cGU6CUpTX05PUk1BTBITCgRsYXp5GAUgASgIOgVmYWxzZRIeCg91bnZlcmlmaWVkX2xhenkYDyABKAg6BWZhbHNlEhkKCmRlcHJlY2F0ZWQYAyABKAg6BWZhbHNlEhMKBHdlYWsYCiABKAg6BWZhbHNlEhsKDGRlYnVnX3JlZGFjdBgQIAEoCDoFZmFsc2USQAoJcmV0ZW50aW9uGBEgASgOMi0uZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucy5PcHRpb25SZXRlbnRpb24SPwoHdGFyZ2V0cxgTIAMoDjIuLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMuT3B0aW9uVGFyZ2V0VHlwZRJGChBlZGl0aW9uX2RlZmF1bHRzGBQgAygLMiwuZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucy5FZGl0aW9uRGVmYXVsdBItCghmZWF0dXJlcxgVIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0EkMKFHVuaW50ZXJwcmV0ZWRfb3B0aW9uGOcHIAMoCzIkLmdvb2dsZS5wcm90b2J1Zi5VbmludGVycHJldGVkT3B0aW9uGkoKDkVkaXRpb25EZWZhdWx0EikKB2VkaXRpb24YAyABKA4yGC5nb29nbGUucHJvdG9idWYuRWRpdGlvbhINCgV2YWx1ZRgCIAEoCSIvCgVDVHlwZRIKCgZTVFJJTkcQABIICgRDT1JEEAESEAoMU1RSSU5HX1BJRUNFEAIiNQoGSlNUeXBlEg0KCUpTX05PUk1BTBAAEg0KCUpTX1NUUklORxABEg0KCUpTX05VTUJFUhACIlUKD09wdGlvblJldGVudGlvbhIVChFSRVRFTlRJT05fVU5LTk9XThAAEhUKEVJFVEVOVElPTl9SVU5USU1FEAESFAoQUkVURU5USU9OX1NPVVJDRRACIowCChBPcHRpb25UYXJnZXRUeXBlEhcKE1RBUkdFVF9UWVBFX1VOS05PV04QABIUChBUQVJHRVRfVFlQRV9GSUxFEAESHwobVEFSR0VUX1RZUEVfRVhURU5TSU9OX1JBTkdFEAISFwoTVEFSR0VUX1RZUEVfTUVTU0FHRRADEhUKEVRBUkdFVF9UWVBFX0ZJRUxEEAQSFQoRVEFSR0VUX1RZUEVfT05FT0YQBRIUChBUQVJHRVRfVFlQRV9FTlVNEAYSGgoWVEFSR0VUX1RZUEVfRU5VTV9FTlRSWRAHEhcKE1RBUkdFVF9UWVBFX1NFUlZJQ0UQCBIWChJUQVJHRVRfVFlQRV9NRVRIT0QQCSoJCOgHEICAgIACSgQIBBAFSgQIEhATIo0BCgxPbmVvZk9wdGlvbnMSLQoIZmVhdHVyZXMYASABKAsyGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBJDChR1bmludGVycHJldGVkX29wdGlvbhjnByADKAsyJC5nb29nbGUucHJvdG9idWYuVW5pbnRlcnByZXRlZE9wdGlvbioJCOgHEICAgIACIvYBCgtFbnVtT3B0aW9ucxITCgthbGxvd19hbGlhcxgCIAEoCBIZCgpkZXByZWNhdGVkGAMgASgIOgVmYWxzZRIyCiZkZXByZWNhdGVkX2xlZ2FjeV9qc29uX2ZpZWxkX2NvbmZsaWN0cxgGIAEoCEICGAESLQoIZmVhdHVyZXMYByABKAsyGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBJDChR1bmludGVycHJldGVkX29wdGlvbhjnByADKAsyJC5nb29nbGUucHJvdG9idWYuVW5pbnRlcnByZXRlZE9wdGlvbioJCOgHEICAgIACSgQIBRAGIskBChBFbnVtVmFsdWVPcHRpb25zEhkKCmRlcHJlY2F0ZWQYASABKAg6BWZhbHNlEi0KCGZlYXR1cmVzGAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQSGwoMZGVidWdfcmVkYWN0GAMgASgIOgVmYWxzZRJDChR1bmludGVycHJldGVkX29wdGlvbhjnByADKAsyJC5nb29nbGUucHJvdG9idWYuVW5pbnRlcnByZXRlZE9wdGlvbioJCOgHEICAgIACIqoBCg5TZXJ2aWNlT3B0aW9ucxItCghmZWF0dXJlcxgiIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0EhkKCmRlcHJlY2F0ZWQYISABKAg6BWZhbHNlEkMKFHVuaW50ZXJwcmV0ZWRfb3B0aW9uGOcHIAMoCzIkLmdvb2dsZS5wcm90b2J1Zi5VbmludGVycHJldGVkT3B0aW9uKgkI6AcQgICAgAIi3AIKDU1ldGhvZE9wdGlvbnMSGQoKZGVwcmVjYXRlZBghIAEoCDoFZmFsc2USXwoRaWRlbXBvdGVuY3lfbGV2ZWwYIiABKA4yLy5nb29nbGUucHJvdG9idWYuTWV0aG9kT3B0aW9ucy5JZGVtcG90ZW5jeUxldmVsOhNJREVNUE9URU5DWV9VTktOT1dOEi0KCGZlYXR1cmVzGCMgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQSQwoUdW5pbnRlcnByZXRlZF9vcHRpb24Y5wcgAygLMiQuZ29vZ2xlLnByb3RvYnVmLlVuaW50ZXJwcmV0ZWRPcHRpb24iUAoQSWRlbXBvdGVuY3lMZXZlbBIXChNJREVNUE9URU5DWV9VTktOT1dOEAASEwoPTk9fU0lERV9FRkZFQ1RTEAESDgoKSURFTVBPVEVOVBACKgkI6AcQgICAgAIingIKE1VuaW50ZXJwcmV0ZWRPcHRpb24SOwoEbmFtZRgCIAMoCzItLmdvb2dsZS5wcm90b2J1Zi5VbmludGVycHJldGVkT3B0aW9uLk5hbWVQYXJ0EhgKEGlkZW50aWZpZXJfdmFsdWUYAyABKAkSGgoScG9zaXRpdmVfaW50X3ZhbHVlGAQgASgEEhoKEm5lZ2F0aXZlX2ludF92YWx1ZRgFIAEoAxIUCgxkb3VibGVfdmFsdWUYBiABKAESFAoMc3RyaW5nX3ZhbHVlGAcgASgMEhcKD2FnZ3JlZ2F0ZV92YWx1ZRgIIAEoCRozCghOYW1lUGFydBIRCgluYW1lX3BhcnQYASACKAkSFAoMaXNfZXh0ZW5zaW9uGAIgAigIIq0JCgpGZWF0dXJlU2V0EnwKDmZpZWxkX3ByZXNlbmNlGAEgASgOMikuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQuRmllbGRQcmVzZW5jZUI5iAEBmAEEmAEBogENEghFWFBMSUNJVBjmB6IBDRIISU1QTElDSVQY5weiAQ0SCEVYUExJQ0lUGOgHElwKCWVudW1fdHlwZRgCIAEoDjIkLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0LkVudW1UeXBlQiOIAQGYAQaYAQGiAQsSBkNMT1NFRBjmB6IBCRIET1BFThjnBxJ7ChdyZXBlYXRlZF9maWVsZF9lbmNvZGluZxgDIAEoDjIxLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0LlJlcGVhdGVkRmllbGRFbmNvZGluZ0IniAEBmAEEmAEBogENEghFWFBBTkRFRBjmB6IBCxIGUEFDS0VEGOcHEmgKD3V0ZjhfdmFsaWRhdGlvbhgEIAEoDjIqLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0LlV0ZjhWYWxpZGF0aW9uQiOIAQGYAQSYAQGiAQkSBE5PTkUY5geiAQsSBlZFUklGWRjnBxJnChBtZXNzYWdlX2VuY29kaW5nGAUgASgOMisuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQuTWVzc2FnZUVuY29kaW5nQiCIAQGYAQSYAQGiARQSD0xFTkdUSF9QUkVGSVhFRBjmBxJwCgtqc29uX2Zvcm1hdBgGIAEoDjImLmdvb2dsZS5wcm90b2J1Zi5GZWF0dXJlU2V0Lkpzb25Gb3JtYXRCM4gBAZgBA5gBBpgBAaIBFxISTEVHQUNZX0JFU1RfRUZGT1JUGOYHogEKEgVBTExPVxjnByJcCg1GaWVsZFByZXNlbmNlEhoKFkZJRUxEX1BSRVNFTkNFX1VOS05PV04QABIMCghFWFBMSUNJVBABEgwKCElNUExJQ0lUEAISEwoPTEVHQUNZX1JFUVVJUkVEEAMiNwoIRW51bVR5cGUSFQoRRU5VTV9UWVBFX1VOS05PV04QABIICgRPUEVOEAESCgoGQ0xPU0VEEAIiVgoVUmVwZWF0ZWRGaWVsZEVuY29kaW5nEiMKH1JFUEVBVEVEX0ZJRUxEX0VOQ09ESU5HX1VOS05PV04QABIKCgZQQUNLRUQQARIMCghFWFBBTkRFRBACIkMKDlV0ZjhWYWxpZGF0aW9uEhsKF1VURjhfVkFMSURBVElPTl9VTktOT1dOEAASCgoGVkVSSUZZEAISCAoETk9ORRADIlMKD01lc3NhZ2VFbmNvZGluZxIcChhNRVNTQUdFX0VOQ09ESU5HX1VOS05PV04QABITCg9MRU5HVEhfUFJFRklYRUQQARINCglERUxJTUlURUQQAiJICgpKc29uRm9ybWF0EhcKE0pTT05fRk9STUFUX1VOS05PV04QABIJCgVBTExPVxABEhYKEkxFR0FDWV9CRVNUX0VGRk9SVBACKgYI6AcQ6QcqBgjpBxDqByoGCOoHEOsHKgYIi04QkE4qBgiQThCRTkoGCOcHEOgHIsACChJGZWF0dXJlU2V0RGVmYXVsdHMSTgoIZGVmYXVsdHMYASADKAsyPC5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldERlZmF1bHRzLkZlYXR1cmVTZXRFZGl0aW9uRGVmYXVsdBIxCg9taW5pbXVtX2VkaXRpb24YBCABKA4yGC5nb29nbGUucHJvdG9idWYuRWRpdGlvbhIxCg9tYXhpbXVtX2VkaXRpb24YBSABKA4yGC5nb29nbGUucHJvdG9idWYuRWRpdGlvbhp0ChhGZWF0dXJlU2V0RWRpdGlvbkRlZmF1bHQSKQoHZWRpdGlvbhgDIAEoDjIYLmdvb2dsZS5wcm90b2J1Zi5FZGl0aW9uEi0KCGZlYXR1cmVzGAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQi1QEKDlNvdXJjZUNvZGVJbmZvEjoKCGxvY2F0aW9uGAEgAygLMiguZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvZGVJbmZvLkxvY2F0aW9uGoYBCghMb2NhdGlvbhIQCgRwYXRoGAEgAygFQgIQARIQCgRzcGFuGAIgAygFQgIQARIYChBsZWFkaW5nX2NvbW1lbnRzGAMgASgJEhkKEXRyYWlsaW5nX2NvbW1lbnRzGAQgASgJEiEKGWxlYWRpbmdfZGV0YWNoZWRfY29tbWVudHMYBiADKAkinAIKEUdlbmVyYXRlZENvZGVJbmZvEkEKCmFubm90YXRpb24YASADKAsyLS5nb29nbGUucHJvdG9idWYuR2VuZXJhdGVkQ29kZUluZm8uQW5ub3RhdGlvbhrDAQoKQW5ub3RhdGlvbhIQCgRwYXRoGAEgAygFQgIQARITCgtzb3VyY2VfZmlsZRgCIAEoCRINCgViZWdpbhgDIAEoBRILCgNlbmQYBCABKAUSSAoIc2VtYW50aWMYBSABKA4yNi5nb29nbGUucHJvdG9idWYuR2VuZXJhdGVkQ29kZUluZm8uQW5ub3RhdGlvbi5TZW1hbnRpYyIoCghTZW1hbnRpYxIICgROT05FEAASBwoDU0VUEAESCQoFQUxJQVMQAiqSAgoHRWRpdGlvbhITCg9FRElUSU9OX1VOS05PV04QABITCg5FRElUSU9OX1BST1RPMhDmBxITCg5FRElUSU9OX1BST1RPMxDnBxIRCgxFRElUSU9OXzIwMjMQ6AcSEQoMRURJVElPTl8yMDI0EOkHEhcKE0VESVRJT05fMV9URVNUX09OTFkQARIXChNFRElUSU9OXzJfVEVTVF9PTkxZEAISHQoXRURJVElPTl85OTk5N19URVNUX09OTFkQnY0GEh0KF0VESVRJT05fOTk5OThfVEVTVF9PTkxZEJ6NBhIdChdFRElUSU9OXzk5OTk5X1RFU1RfT05MWRCfjQYSEwoLRURJVElPTl9NQVgQ/////wdCfgoTY29tLmdvb2dsZS5wcm90b2J1ZkIQRGVzY3JpcHRvclByb3Rvc0gBWi1nb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9kZXNjcmlwdG9ycGL4AQGiAgNHUEKqAhpHb29nbGUuUHJvdG9idWYuUmVmbGVjdGlvbg");

// Describes the message google.protobuf.FileDescriptorSet. Use `create(FileDescriptorSetDesc)` to create a new FileDescriptorSet.
export const FileDescriptorSetDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 0);

// Describes the message google.protobuf.FileDescriptorProto. Use `create(FileDescriptorProtoDesc)` to create a new FileDescriptorProto.
export const FileDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 1);

// Describes the message google.protobuf.DescriptorProto. Use `create(DescriptorProtoDesc)` to create a new DescriptorProto.
export const DescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 2);

// Describes the message google.protobuf.DescriptorProto.ExtensionRange. Use `create(DescriptorProto_ExtensionRangeDesc)` to create a new DescriptorProto_ExtensionRange.
export const DescriptorProto_ExtensionRangeDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 2, 0);

// Describes the message google.protobuf.DescriptorProto.ReservedRange. Use `create(DescriptorProto_ReservedRangeDesc)` to create a new DescriptorProto_ReservedRange.
export const DescriptorProto_ReservedRangeDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 2, 1);

// Describes the message google.protobuf.ExtensionRangeOptions. Use `create(ExtensionRangeOptionsDesc)` to create a new ExtensionRangeOptions.
export const ExtensionRangeOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 3);

// Describes the message google.protobuf.ExtensionRangeOptions.Declaration. Use `create(ExtensionRangeOptions_DeclarationDesc)` to create a new ExtensionRangeOptions_Declaration.
export const ExtensionRangeOptions_DeclarationDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 3, 0);

// Describes the enum google.protobuf.ExtensionRangeOptions.VerificationState.
export const ExtensionRangeOptions_VerificationStateDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 3, 0);

/**
 * The verification state of the extension range.
 *
 * @generated from enum google.protobuf.ExtensionRangeOptions.VerificationState
 */
export const ExtensionRangeOptions_VerificationState = /*@__PURE__*/
  tsEnum(ExtensionRangeOptions_VerificationStateDesc);

// Describes the message google.protobuf.FieldDescriptorProto. Use `create(FieldDescriptorProtoDesc)` to create a new FieldDescriptorProto.
export const FieldDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 4);

// Describes the enum google.protobuf.FieldDescriptorProto.Type.
export const FieldDescriptorProto_TypeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 4, 0);

/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Type
 */
export const FieldDescriptorProto_Type = /*@__PURE__*/
  tsEnum(FieldDescriptorProto_TypeDesc);

// Describes the enum google.protobuf.FieldDescriptorProto.Label.
export const FieldDescriptorProto_LabelDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 4, 1);

/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Label
 */
export const FieldDescriptorProto_Label = /*@__PURE__*/
  tsEnum(FieldDescriptorProto_LabelDesc);

// Describes the message google.protobuf.OneofDescriptorProto. Use `create(OneofDescriptorProtoDesc)` to create a new OneofDescriptorProto.
export const OneofDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 5);

// Describes the message google.protobuf.EnumDescriptorProto. Use `create(EnumDescriptorProtoDesc)` to create a new EnumDescriptorProto.
export const EnumDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 6);

// Describes the message google.protobuf.EnumDescriptorProto.EnumReservedRange. Use `create(EnumDescriptorProto_EnumReservedRangeDesc)` to create a new EnumDescriptorProto_EnumReservedRange.
export const EnumDescriptorProto_EnumReservedRangeDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 6, 0);

// Describes the message google.protobuf.EnumValueDescriptorProto. Use `create(EnumValueDescriptorProtoDesc)` to create a new EnumValueDescriptorProto.
export const EnumValueDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 7);

// Describes the message google.protobuf.ServiceDescriptorProto. Use `create(ServiceDescriptorProtoDesc)` to create a new ServiceDescriptorProto.
export const ServiceDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 8);

// Describes the message google.protobuf.MethodDescriptorProto. Use `create(MethodDescriptorProtoDesc)` to create a new MethodDescriptorProto.
export const MethodDescriptorProtoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 9);

// Describes the message google.protobuf.FileOptions. Use `create(FileOptionsDesc)` to create a new FileOptions.
export const FileOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 10);

// Describes the enum google.protobuf.FileOptions.OptimizeMode.
export const FileOptions_OptimizeModeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 10, 0);

/**
 * Generated classes can be optimized for speed or code size.
 *
 * @generated from enum google.protobuf.FileOptions.OptimizeMode
 */
export const FileOptions_OptimizeMode = /*@__PURE__*/
  tsEnum(FileOptions_OptimizeModeDesc);

// Describes the message google.protobuf.MessageOptions. Use `create(MessageOptionsDesc)` to create a new MessageOptions.
export const MessageOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 11);

// Describes the message google.protobuf.FieldOptions. Use `create(FieldOptionsDesc)` to create a new FieldOptions.
export const FieldOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 12);

// Describes the message google.protobuf.FieldOptions.EditionDefault. Use `create(FieldOptions_EditionDefaultDesc)` to create a new FieldOptions_EditionDefault.
export const FieldOptions_EditionDefaultDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 12, 0);

// Describes the enum google.protobuf.FieldOptions.CType.
export const FieldOptions_CTypeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 12, 0);

/**
 * @generated from enum google.protobuf.FieldOptions.CType
 */
export const FieldOptions_CType = /*@__PURE__*/
  tsEnum(FieldOptions_CTypeDesc);

// Describes the enum google.protobuf.FieldOptions.JSType.
export const FieldOptions_JSTypeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 12, 1);

/**
 * @generated from enum google.protobuf.FieldOptions.JSType
 */
export const FieldOptions_JSType = /*@__PURE__*/
  tsEnum(FieldOptions_JSTypeDesc);

// Describes the enum google.protobuf.FieldOptions.OptionRetention.
export const FieldOptions_OptionRetentionDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 12, 2);

/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionRetention
 */
export const FieldOptions_OptionRetention = /*@__PURE__*/
  tsEnum(FieldOptions_OptionRetentionDesc);

// Describes the enum google.protobuf.FieldOptions.OptionTargetType.
export const FieldOptions_OptionTargetTypeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 12, 3);

/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionTargetType
 */
export const FieldOptions_OptionTargetType = /*@__PURE__*/
  tsEnum(FieldOptions_OptionTargetTypeDesc);

// Describes the message google.protobuf.OneofOptions. Use `create(OneofOptionsDesc)` to create a new OneofOptions.
export const OneofOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 13);

// Describes the message google.protobuf.EnumOptions. Use `create(EnumOptionsDesc)` to create a new EnumOptions.
export const EnumOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 14);

// Describes the message google.protobuf.EnumValueOptions. Use `create(EnumValueOptionsDesc)` to create a new EnumValueOptions.
export const EnumValueOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 15);

// Describes the message google.protobuf.ServiceOptions. Use `create(ServiceOptionsDesc)` to create a new ServiceOptions.
export const ServiceOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 16);

// Describes the message google.protobuf.MethodOptions. Use `create(MethodOptionsDesc)` to create a new MethodOptions.
export const MethodOptionsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 17);

// Describes the enum google.protobuf.MethodOptions.IdempotencyLevel.
export const MethodOptions_IdempotencyLevelDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 17, 0);

/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 *
 * @generated from enum google.protobuf.MethodOptions.IdempotencyLevel
 */
export const MethodOptions_IdempotencyLevel = /*@__PURE__*/
  tsEnum(MethodOptions_IdempotencyLevelDesc);

// Describes the message google.protobuf.UninterpretedOption. Use `create(UninterpretedOptionDesc)` to create a new UninterpretedOption.
export const UninterpretedOptionDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 18);

// Describes the message google.protobuf.UninterpretedOption.NamePart. Use `create(UninterpretedOption_NamePartDesc)` to create a new UninterpretedOption_NamePart.
export const UninterpretedOption_NamePartDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 18, 0);

// Describes the message google.protobuf.FeatureSet. Use `create(FeatureSetDesc)` to create a new FeatureSet.
export const FeatureSetDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 19);

// Describes the enum google.protobuf.FeatureSet.FieldPresence.
export const FeatureSet_FieldPresenceDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 19, 0);

/**
 * @generated from enum google.protobuf.FeatureSet.FieldPresence
 */
export const FeatureSet_FieldPresence = /*@__PURE__*/
  tsEnum(FeatureSet_FieldPresenceDesc);

// Describes the enum google.protobuf.FeatureSet.EnumType.
export const FeatureSet_EnumTypeDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 19, 1);

/**
 * @generated from enum google.protobuf.FeatureSet.EnumType
 */
export const FeatureSet_EnumType = /*@__PURE__*/
  tsEnum(FeatureSet_EnumTypeDesc);

// Describes the enum google.protobuf.FeatureSet.RepeatedFieldEncoding.
export const FeatureSet_RepeatedFieldEncodingDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 19, 2);

/**
 * @generated from enum google.protobuf.FeatureSet.RepeatedFieldEncoding
 */
export const FeatureSet_RepeatedFieldEncoding = /*@__PURE__*/
  tsEnum(FeatureSet_RepeatedFieldEncodingDesc);

// Describes the enum google.protobuf.FeatureSet.Utf8Validation.
export const FeatureSet_Utf8ValidationDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 19, 3);

/**
 * @generated from enum google.protobuf.FeatureSet.Utf8Validation
 */
export const FeatureSet_Utf8Validation = /*@__PURE__*/
  tsEnum(FeatureSet_Utf8ValidationDesc);

// Describes the enum google.protobuf.FeatureSet.MessageEncoding.
export const FeatureSet_MessageEncodingDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 19, 4);

/**
 * @generated from enum google.protobuf.FeatureSet.MessageEncoding
 */
export const FeatureSet_MessageEncoding = /*@__PURE__*/
  tsEnum(FeatureSet_MessageEncodingDesc);

// Describes the enum google.protobuf.FeatureSet.JsonFormat.
export const FeatureSet_JsonFormatDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 19, 5);

/**
 * @generated from enum google.protobuf.FeatureSet.JsonFormat
 */
export const FeatureSet_JsonFormat = /*@__PURE__*/
  tsEnum(FeatureSet_JsonFormatDesc);

// Describes the message google.protobuf.FeatureSetDefaults. Use `create(FeatureSetDefaultsDesc)` to create a new FeatureSetDefaults.
export const FeatureSetDefaultsDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 20);

// Describes the message google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault. Use `create(FeatureSetDefaults_FeatureSetEditionDefaultDesc)` to create a new FeatureSetDefaults_FeatureSetEditionDefault.
export const FeatureSetDefaults_FeatureSetEditionDefaultDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 20, 0);

// Describes the message google.protobuf.SourceCodeInfo. Use `create(SourceCodeInfoDesc)` to create a new SourceCodeInfo.
export const SourceCodeInfoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 21);

// Describes the message google.protobuf.SourceCodeInfo.Location. Use `create(SourceCodeInfo_LocationDesc)` to create a new SourceCodeInfo_Location.
export const SourceCodeInfo_LocationDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 21, 0);

// Describes the message google.protobuf.GeneratedCodeInfo. Use `create(GeneratedCodeInfoDesc)` to create a new GeneratedCodeInfo.
export const GeneratedCodeInfoDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 22);

// Describes the message google.protobuf.GeneratedCodeInfo.Annotation. Use `create(GeneratedCodeInfo_AnnotationDesc)` to create a new GeneratedCodeInfo_Annotation.
export const GeneratedCodeInfo_AnnotationDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_descriptor, 22, 0);

// Describes the enum google.protobuf.GeneratedCodeInfo.Annotation.Semantic.
export const GeneratedCodeInfo_Annotation_SemanticDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 22, 0, 0);

/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 *
 * @generated from enum google.protobuf.GeneratedCodeInfo.Annotation.Semantic
 */
export const GeneratedCodeInfo_Annotation_Semantic = /*@__PURE__*/
  tsEnum(GeneratedCodeInfo_Annotation_SemanticDesc);

// Describes the enum google.protobuf.Edition.
export const EditionDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_descriptor, 0);

/**
 * The full set of known editions.
 *
 * @generated from enum google.protobuf.Edition
 */
export const Edition = /*@__PURE__*/
  tsEnum(EditionDesc);

