(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{464:function(e,l,i){"use strict";i.r(l);var a=i(25),r=Object(a.a)({},(function(){var e=this,l=e.$createElement,i=e._self._c||l;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"explaining-the-patches-in-opencore-legacy-patcher"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#explaining-the-patches-in-opencore-legacy-patcher"}},[e._v("#")]),e._v(" Explaining the patches in OpenCore Legacy Patcher")]),e._v(" "),i("p",[e._v("In our patcher, there are numerous patches used to ensure a stable system. Here, we're going to go over what patches are used and why we recommend or even require them.")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#opencore-settings"}},[e._v("OpenCore Settings")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#injected-kexts"}},[e._v("Injected Kexts")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#on-disk-patches"}},[e._v("On-Disk Patches")])])]),e._v(" "),i("h2",{attrs:{id:"opencore-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opencore-settings"}},[e._v("#")]),e._v(" OpenCore Settings")]),e._v(" "),i("p",[e._v("Below is a rundown of the main logic that OpenCore Legacy Patcher uses to gain native support in macOS. Note that OpenCore's configuration is documented within "),i("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),i("OutboundLink")],1),e._v(" as well as on an online version provided by us:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://dortania.github.io/docs/latest/Configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg Online Docs"),i("OutboundLink")],1)])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Configuration Explanation")]),e._v(" "),i("h3",{attrs:{id:"acpi-add"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acpi-add"}},[e._v("#")]),e._v(" ACPI -> Add")]),e._v(" "),i("ul",[i("li",[e._v("SSDT-CPBG\n"),i("ul",[i("li",[e._v("Reason: Resolves Kernel Panic on Arrandale Macs in early Big Sur builds")]),e._v(" "),i("li",[e._v("Logic: Disable dummy CPBG device in ACPI")]),e._v(" "),i("li",[e._v("Models: MacBookPro6,x and iMac11,x")])])]),e._v(" "),i("li",[e._v("SSDT-PCI\n"),i("ul",[i("li",[e._v("Reason: Patch Windows Audio support for Sandy and Ivy Bridge")]),e._v(" "),i("li",[e._v("Logic: Removes PCI0's 32-bit Allocation Limitation")]),e._v(" "),i("li",[e._v("Models: All Sandy and Ivy Bridge Macs, excluding MacPro6,1")])])]),e._v(" "),i("li",[e._v("SSDT-DGPU\n"),i("ul",[i("li",[e._v("Reason: Allows for software based deMUX disabling dGPUs in 2011 MacBook Pros")]),e._v(" "),i("li",[e._v("Logic: Sends power down request to dGPU via ACPI")]),e._v(" "),i("li",[e._v("Models: MacBookPro8,2 and MacBookPro8,3 with dead dGPUs")])])])]),e._v(" "),i("h3",{attrs:{id:"acpi-patch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acpi-patch"}},[e._v("#")]),e._v(" ACPI -> Patch")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("EHCx")]),e._v(" and "),i("code",[e._v("XHC1")]),e._v(" Patches\n"),i("ul",[i("li",[e._v("Reason: Required for proper USB operation")]),e._v(" "),i("li",[e._v("Logic: Avoids USB maps of newer models attaching and breaking USB port functionality")]),e._v(" "),i("li",[e._v("Models: All models require when spoofing with Moderate or Advanced SMBIOS")])])]),e._v(" "),i("li",[i("code",[e._v("BUF0")]),e._v(" to "),i("code",[e._v("BUF1")]),e._v(" Patch\n"),i("ul",[i("li",[e._v("Reason: To be paired with SSDT-PCI")])])]),e._v(" "),i("li",[i("code",[e._v("_INI")]),e._v(" to "),i("code",[e._v("XINI")]),e._v(" Patch\n"),i("ul",[i("li",[e._v("Reason: To be paired with SSDT-DGPU")])])])]),e._v(" "),i("h3",{attrs:{id:"booter-patch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#booter-patch"}},[e._v("#")]),e._v(" Booter -> Patch")]),e._v(" "),i("ul",[i("li",[e._v("Reroute "),i("code",[e._v("HW_BID")]),e._v(" to "),i("code",[e._v("OC_BID")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Allows macOS installers to be used on unsupported models")]),e._v(" "),i("li",[e._v("Logic: Reroutes Board ID macOS checks to custom variable")]),e._v(" "),i("li",[e._v("Models: All systems using VMM spoofing")])])])]),e._v(" "),i("h3",{attrs:{id:"booter-quirks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#booter-quirks"}},[e._v("#")]),e._v(" Booter -> Quirks")]),e._v(" "),i("ul",[i("li",[e._v("ForceBooterSignature\n"),i("ul",[i("li",[e._v("Reason: Required to ensure Hibernation support")]),e._v(" "),i("li",[e._v("Logic: Tricks boot.efi into thinking OpenCore is Apple's firmware")]),e._v(" "),i("li",[e._v("Models: All models require")])])])]),e._v(" "),i("h3",{attrs:{id:"deviceproperties-add"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deviceproperties-add"}},[e._v("#")]),e._v(" DeviceProperties -> Add")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("PciRoot(0x0)/Pci(0x3,0x0)/Pci(0x0,0x0)")])]),e._v(" "),i("li",[i("code",[e._v("PciRoot(0x0)/Pci(0x1,0x0)/Pci(0x0,0x0)")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Required to ensure Brightness Control works on upgraded iMacs")]),e._v(" "),i("li",[e._v("Logic: Sets AppleBackLight properties")]),e._v(" "),i("li",[e._v("Models: iMac11,x and iMac12,x with upgraded NVIDIA Metal GPUs")])])]),e._v(" "),i("li",[i("code",[e._v("PciRoot(0x0)/Pci(0x2,0x0)")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Disables internal GPU to fix sleep issues on upgraded iMacs")]),e._v(" "),i("li",[e._v("Logic: Tricks macOS into thinking iGPU is a generic PCI device")]),e._v(" "),i("li",[e._v("Models: iMac12,x with upgraded Metal GPUs")])])])]),e._v(" "),i("h3",{attrs:{id:"kernel-patch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kernel-patch"}},[e._v("#")]),e._v(" Kernel -> Patch")]),e._v(" "),i("ul",[i("li",[e._v("SMC Patch\n"),i("ul",[i("li",[e._v("Reason: Required to avoid SMC Firmware updates")]),e._v(" "),i("li",[e._v("Logic: Patches out "),i("code",[e._v("smc-version")]),e._v(" in AppleSMC.kext, requires SMC-Spoof.kext for full functionality")]),e._v(" "),i("li",[e._v("Models: All models require when spoofing SMBIOS")])])]),e._v(" "),i("li",[e._v("IOHIDFamily Patch\n"),i("ul",[i("li",[e._v("Reason: Required for HID peripheral support in macOS on older hardware")]),e._v(" "),i("li",[e._v("Logic: Tricks IOHIDFamily into thinking it's always booting recovery")]),e._v(" "),i("li",[e._v("Models: Penryn CPUs (Core2 series)")])])]),e._v(" "),i("li",[e._v("Force FileVault on Broken Seal Patch\n"),i("ul",[i("li",[e._v("Reason: Allow FileVault on root patched Macs")]),e._v(" "),i("li",[e._v("Logic: Forces APFS.kext to always return true on FileVault support")]),e._v(" "),i("li",[e._v("Models: Any model needing root patches")])])]),e._v(" "),i("li",[e._v("Disable Library Validation Enforcement Patch\n"),i("ul",[i("li",[e._v("Reason: non-Metal Root Volume Patches do not pass library validation tests")]),e._v(" "),i("li",[e._v("Logic: Forces Library Validation function to always return not required")]),e._v(" "),i("li",[e._v("Models: Non-Metal GPUs")])])]),e._v(" "),i("li",[e._v("SurPlus Patch\n"),i("ul",[i("li",[e._v("Reason: macOS 11.3-12.0.1 require systems to have RDRAND support in the CPU for stable boot")]),e._v(" "),i("li",[e._v("Logic: Forces RDRAND code to return predetermined value")]),e._v(" "),i("li",[e._v("Models: All pre-Ivy Bridge Macs")])])]),e._v(" "),i("li",[e._v("Reroute "),i("code",[e._v("kern.hv_vmm_present")]),e._v(" Patch\n"),i("ul",[i("li",[e._v("Reason: Allows macOS to be installed and updated on unsupported hardware")]),e._v(" "),i("li",[e._v("Logic: Forces userspace to see system as Virtual Machine")]),e._v(" "),i("li",[e._v("Models: Any model using VMM spoofing")])])])]),e._v(" "),i("h3",{attrs:{id:"kernel-quirks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kernel-quirks"}},[e._v("#")]),e._v(" Kernel -> Quirks")]),e._v(" "),i("ul",[i("li",[e._v("ThirdPartyDrives\n"),i("ul",[i("li",[e._v("Reason: Required to avoid Hibernation wake issues on 3rd party drives")]),e._v(" "),i("li",[e._v("Logic: Patches AppleAHCIPort.kext into support")]),e._v(" "),i("li",[e._v("Models: All models with standard SATA ports")])])]),e._v(" "),i("li",[e._v("PanicNoKextDump\n"),i("ul",[i("li",[e._v("Reason: Avoids kext dump on kernel panics, easier kernel debugging")]),e._v(" "),i("li",[e._v("Logic: Patches Kernel to not dump dump unnecessary info")]),e._v(" "),i("li",[e._v("Models: Only set when Verbose Boot is enabled by the user")])])])]),e._v(" "),i("h3",{attrs:{id:"misc-security"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#misc-security"}},[e._v("#")]),e._v(" Misc -> Security")]),e._v(" "),i("ul",[i("li",[e._v("SecureBootModel\n"),i("ul",[i("li",[e._v("Reason: Required to allow native OS updates on T2 model spoofs")]),e._v(" "),i("li",[e._v("Logic: Sets T2's Secure Enclave Identifier")]),e._v(" "),i("li",[e._v("Models: All models required that spoof T2 model with minimal or higher")])])])]),e._v(" "),i("h3",{attrs:{id:"nvram-add"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nvram-add"}},[e._v("#")]),e._v(" NVRAM -> Add")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("-v keepsyms=1 debug=0x100")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Used to see debug info of macOS's kernel and kexts, and avoids reboots on panic")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: Only set when Verbose Boot is enabled by the user")])])]),e._v(" "),i("li",[i("code",[e._v("-liludbgall")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Enables Lilu and plugin debug logging")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: Only set when Kext DEBUG is enabled by the user")])])]),e._v(" "),i("li",[i("code",[e._v("msgbuf=1048576")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Sets message buffer size to 1MB, ensures boot logs are retained")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: Only set when Kext DEBUG is enabled by the user")])])]),e._v(" "),i("li",[i("code",[e._v("agdpmod=pikera")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Fixes GPU switching on MacBookPro9,x")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: MacBookPro9,x")])])]),e._v(" "),i("li",[i("code",[e._v("shikigva=80 unfairgva=1")])]),e._v(" "),i("li",[i("code",[e._v("shikigva=128 unfairgva=1 -wegtree")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Fixes DRM support on models with upgraded AMD Metal GPUs")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: Models with upgraded AMD Metal GPUs")])])]),e._v(" "),i("li",[i("code",[e._v("-revasset")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Enables Content Caching when using VMM spoofing")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: Any model using VMM spoofing")])])]),e._v(" "),i("li",[i("code",[e._v("amfi=0x80")]),e._v(" "),i("ul",[i("li",[e._v("Reason: Disables Apple Mobile File Integrity to allow for root patches")]),e._v(" "),i("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),i("li",[e._v("Models: Any model that requires unsigned root patches")])])])]),e._v(" "),i("h3",{attrs:{id:"uefi-protocoloverrides"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uefi-protocoloverrides"}},[e._v("#")]),e._v(" UEFI -> ProtocolOverrides")]),e._v(" "),i("ul",[i("li",[e._v("GopPassThrough\n"),i("ul",[i("li",[e._v("Reason: Used for proper output on machines with UGA firmware but GOP GPU")]),e._v(" "),i("li",[e._v("Logic: Provide GOP protocol instances on top of UGA protocol instances")]),e._v(" "),i("li",[e._v("Models: MacPro3,1, iMac7,1-8,1")])])])])]),e._v(" "),i("h2",{attrs:{id:"injected-kext"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#injected-kext"}},[e._v("#")]),e._v(" Injected Kext")]),e._v(" "),i("p",[e._v("Below is an explanation of what Kexts OpenCore Legacy Patcher will inject into memory on boot-up.")]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Injected Kext Explanation")]),e._v(" "),i("h3",{attrs:{id:"acidanthera"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acidanthera"}},[e._v("#")]),e._v(" Acidanthera")]),e._v(" "),i("ul",[i("li",[e._v("Lilu\n"),i("ul",[i("li",[e._v("Reason: Patching engine for other kexts")]),e._v(" "),i("li",[e._v("Models: All models require")])])]),e._v(" "),i("li",[e._v("WhateverGreen\n"),i("ul",[i("li",[e._v("Reason: Patches GPU Frameworks and kext to ensure proper support")]),e._v(" "),i("li",[e._v("Models: All models require when spoofing or have non-stock GPU")])])]),e._v(" "),i("li",[e._v("CPUFriend\n"),i("ul",[i("li",[e._v("Reason: Patches IOx86PlatformPlugin to restore previous CPU profiles")]),e._v(" "),i("li",[e._v("Models: All models using minimal or higher spoofing")])])]),e._v(" "),i("li",[e._v("AirportBrcmFixup\n"),i("ul",[i("li",[e._v("Reason: Patches IO80211 and co to fix networking support for unsupported cards, and fix bugs on native ones as well (ie. random degraded network performance)")]),e._v(" "),i("li",[e._v("Models: BCM943224, BCM94331, BCM94360 and BCM943602")])])]),e._v(" "),i("li",[e._v("BlueToolFixup\n"),i("ul",[i("li",[e._v("Reason: Patches BlueTool to enable bluetooth functionality on Monterey")]),e._v(" "),i("li",[e._v("Models: All models with pre-BCM94360 wireless cards or 3rd-party chipsets")])])]),e._v(" "),i("li",[e._v("Bluetooth-Spoof\n"),i("ul",[i("li",[e._v("Reason: Injects extra data into certain bluetooth chipsets for recognition by the system")]),e._v(" "),i("li",[e._v("Models: Models with the BCM2070 or BCM2046 chipsets")])])]),e._v(" "),i("li",[e._v("FeatureUnlock (Night Shift)\n"),i("ul",[i("li",[e._v("Reason: Patches CoreBrightness.framework to enable Night Shift on unsupported models")]),e._v(" "),i("li",[e._v("Models: 2011 or older")])])]),e._v(" "),i("li",[e._v("FeatureUnlock (Sidecar/AirPlay)\n"),i("ul",[i("li",[e._v("Reason: Patches SidecarCore.framework and AirPlaySupport.framework to enable Sidecar and AirPlay to Mac on unsupported models")]),e._v(" "),i("li",[e._v("Models: All models with Metal capable GPUs")])])]),e._v(" "),i("li",[e._v("RestrictEvents\n"),i("ul",[i("li",[e._v("Reason: Disables memory errors on MacPro7,1")]),e._v(" "),i("li",[e._v("Models: Mac Pros and Xserves")])])]),e._v(" "),i("li",[e._v("CryptexFixup\n"),i("ul",[i("li",[e._v("Reason: Installs non AVX2.0 Cryptex on non AVX2.0 CPUs")]),e._v(" "),i("li",[e._v("Models: All CPUs Ivy Bridge and older")])])]),e._v(" "),i("li",[e._v("AutoPkgInstaller\n"),i("ul",[i("li",[e._v("Reason: Allows for automatic root patching")])])]),e._v(" "),i("li",[e._v("NVMeFix\n"),i("ul",[i("li",[e._v("Reason: Fixes 3rd party NVMe support")])])]),e._v(" "),i("li",[e._v("RSRHelper\n"),i("ul",[i("li",[e._v("Reason: Fixes Rapid Security Response Support on root patched installs")])])]),e._v(" "),i("li")]),e._v(" "),i("h3",{attrs:{id:"ethernet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ethernet"}},[e._v("#")]),e._v(" Ethernet")]),e._v(" "),i("ul",[i("li",[e._v("nForceEthernet\n"),i("ul",[i("li",[e._v("Reason: Inject old NVIDIA Ethernet kext to resolve networking in Catalina and newer")]),e._v(" "),i("li",[e._v("Models: 2010 and older NVIDIA Ethernet require")])])]),e._v(" "),i("li",[e._v("MarvelYukonEthernet\n"),i("ul",[i("li",[e._v("Reason: Inject old Marvel Ethernet kext to resolve networking in Catalina and newer")]),e._v(" "),i("li",[e._v("Models: 2008 and older Marvel Ethernet require")])])]),e._v(" "),i("li",[e._v("CatalinaBCM5701Ethernet\n"),i("ul",[i("li",[e._v("Reason: Inject old Broadcom Ethernet kext to resolve networking in Big Sur")]),e._v(" "),i("li",[e._v("Logic: Patch out conflicting symbols to not collide existing BCM5701Ethernet")]),e._v(" "),i("li",[e._v("Models: 2011 and older Broadcom Ethernet require")])])]),e._v(" "),i("li",[e._v("Intel82574L\n"),i("ul",[i("li",[e._v("Reason: Resolves Ethernet Support on MacPros")]),e._v(" "),i("li",[e._v("Models: MacPro3,1 - 5,1")])])]),e._v(" "),i("li",[e._v("CatalinaIntelI210Ethernet\n"),i("ul",[i("li",[e._v("Reason: Fixes Intel i210/i225 NIC support on pre-Ivy Macs")])])]),e._v(" "),i("li",[e._v("AppleIntel8254XEthernet\n"),i("ul",[i("li",[e._v("Reason: Resolves Ethernet Support on MacPros")]),e._v(" "),i("li",[e._v("Models: MacPro3,1 - 5,1")])])])]),e._v(" "),i("h3",{attrs:{id:"firewire"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#firewire"}},[e._v("#")]),e._v(" Firewire")]),e._v(" "),i("ul",[i("li",[e._v("IOFireWireFamily\n"),i("ul",[i("li",[e._v("Reason: Allows for FireWire Boot Support")])])]),e._v(" "),i("li",[e._v("IOFireWireSBP2\n"),i("ul",[i("li",[e._v("Reason: Allows for FireWire Boot Support")])])]),e._v(" "),i("li",[e._v("IOFireWireSerialBusProtoColTransport\n"),i("ul",[i("li",[e._v("Reason: Allows for FireWire Boot Support")])])])]),e._v(" "),i("h3",{attrs:{id:"maps"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#maps"}},[e._v("#")]),e._v(" Maps")]),e._v(" "),i("ul",[i("li",[e._v("USBMap\n"),i("ul",[i("li",[e._v("Reason: Inject old USB map profiles to fix USB")]),e._v(" "),i("li",[e._v("Models: All models require when spoofing moderate or higher, as well as pre-2012 models")])])])]),e._v(" "),i("h3",{attrs:{id:"sse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sse"}},[e._v("#")]),e._v(" SSE")]),e._v(" "),i("ul",[i("li",[e._v("AAMouSSE\n"),i("ul",[i("li",[e._v("Reason: Translates SSE4.2 instructions to compatible code for SSE4,1 CPUs, required for AMD Metal drives")]),e._v(" "),i("li",[e._v("Models: MacPro3,1")])])]),e._v(" "),i("li",[e._v("telemetrap\n"),i("ul",[i("li",[e._v("Reason: Ensures telemetry.plugin doesn't run, required for SSE4,1 CPUs")]),e._v(" "),i("li",[e._v("Models: Penryn CPUs")])])])]),e._v(" "),i("h3",{attrs:{id:"wifi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wifi"}},[e._v("#")]),e._v(" Wifi")]),e._v(" "),i("ul",[i("li",[e._v("IO80211ElCap\n"),i("ul",[i("li",[e._v("Reason: Re-inject WiFi drivers from El Capitan")]),e._v(" "),i("li",[e._v("Models: BCM94328, BCM94322 and Atheros chipsets")])])]),e._v(" "),i("li",[e._v("corecaptureElCap.kext\n"),i("ul",[i("li",[e._v("Reason: Re-inject WiFi drivers from El Capitan")]),e._v(" "),i("li",[e._v("Models: BCM94328, BCM94322 and Atheros chipsets")])])])]),e._v(" "),i("h3",{attrs:{id:"misc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" Misc")]),e._v(" "),i("ul",[i("li",[e._v("AppleBackLightFixup\n"),i("ul",[i("li",[e._v("Reason: Patch AppleBacklight for iMacs with NVIDIA Metal GPU upgrades")]),e._v(" "),i("li",[e._v("Models: iMac11,x, iMac12,x with upgraded NVIDIA Metal GPUs")])])]),e._v(" "),i("li",[e._v("AppleIntelPIIXATA\n"),i("ul",[i("li",[e._v("Reason: Fix IDE support on MacPro3,1")]),e._v(" "),i("li",[e._v("Models: MacPro3,1")])])]),e._v(" "),i("li",[e._v("AppleIntelMCEDisabler\n"),i("ul",[i("li",[e._v("Reason: Fix dual socket support in Catalina and newer")]),e._v(" "),i("li",[e._v("Models: Mac Pros and Xserves")])])]),e._v(" "),i("li",[e._v("SMC-Spoof\n"),i("ul",[i("li",[e._v("Reason: Spoofs SMC version to 9.9999")]),e._v(" "),i("li",[e._v("Models: All models require when spoofing minimal or higher")])])]),e._v(" "),i("li",[e._v("AppleRAIDCard\n"),i("ul",[i("li",[e._v("Adds AppleRaidCard Support for Xserves")])])]),e._v(" "),i("li",[e._v("AMDGPUWakeHandler\n"),i("ul",[i("li",[e._v("Reason: Adds Software Based Demux for 2011 15/17 Macbook Pros")])])]),e._v(" "),i("li",[e._v("AppleIntelCPUPowerManagement and AppleIntelCPUPowerManagementClient\n"),i("ul",[i("li",[e._v("Reason: Restores Ivy Bridge and older CPU Power Management")])])]),e._v(" "),i("li",[e._v("AppleUSBTopCase\n"),i("ul",[i("li",[e._v("Reason: Restore USB Keyboard support on Mac OS Ventura")])])]),e._v(" "),i("li",[e._v("AppleUSBMultitouch and AppleUSBTrackpad\n"),i("ul",[i("li",[e._v("Reason: Restore USB Trackpad support on Mac OS Ventura")])])]),e._v(" "),i("li",[e._v("ASPP-Override\n"),i("ul",[i("li",[e._v("Reason: Forces ACPI_SMC_PlatformPlugin to outmatch X86PlatformPlugin and disable firmware throttling")])])]),e._v(" "),i("li",[e._v("BacklightInjector\n"),i("ul",[i("li",[e._v("Reason: Fixes Brightness in iMacs with upgraded GPUs")])])]),e._v(" "),i("li",[e._v("BigSurSDXC\n"),i("ul",[i("li",[e._v("Reason: Restores SDXC Support in Pre Ivy-Bridge Macs")])])]),e._v(" "),i("li",[e._v("Bluetooth-spoof\n"),i("ul",[i("li",[e._v("Reason: Spoofs legacy Bluetooth to work on Monterey and newer")])])]),e._v(" "),i("li",[e._v("Innie\n"),i("ul",[i("li",[e._v("Reason: Makes all PCIe drives appear internal")]),e._v(" "),i("li",[e._v("Models: MacPro3,1 and newer & Xserve3,1 and newer")])])]),e._v(" "),i("li",[e._v("KDKlessWorkaround\n"),i("ul",[i("li",[e._v("Reason: Helps with Mac os updates on KDKless patched systems")])])]),e._v(" "),i("li",[e._v("LegacyUSBVieoSupport\n"),i("ul",[i("li",[e._v("Reason: Fixes Legacy USB iSight support")])])]),e._v(" "),i("li",[e._v("MonteAHCIPort\n"),i("ul",[i("li",[e._v("Reason: Fixes SSD support for stock SSD found in MacBookAir6,x")])])]),e._v(" "),i("li",[e._v("NoAVXFSCompressionTypeZlib\n"),i("ul",[i("li",[e._v("Reason: Prevents AVXFSCompressionTypeZlib crash on pre AVX1.0 systems in 12.4+")])])]),e._v(" "),i("li",[e._v("SimpleMSR\n"),i("ul",[i("li",[e._v("Reason: Disables BD PROCHOT to prevent firmware throttling on Nehalem+ MacBooks")])])]),e._v(" "),i("li",[e._v("LegacyKeyboardInjector\n"),i("ul",[i("li",[e._v("Reason: Fixes function keys on MacBook5,2")])])])])]),e._v(" "),i("h2",{attrs:{id:"on-disk-patches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#on-disk-patches"}},[e._v("#")]),e._v(" On-Disk Patches")]),e._v(" "),i("p",[e._v("Unfortunately certain on-disk patches are required to achieve full functionality. Below is a breakdown of patches supported")]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Audio Patches (11.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AppleHDA\n"),i("ul",[i("li",[e._v("Reason: Re-add El Capitan's AppleHDA to achieve audio support")]),e._v(" "),i("li",[e._v("Models: iMac7,1 and iMac8,1")])])])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Legacy Wireless Patches (12.0+)")]),e._v(" "),i("p",[e._v("Applicable for BCM94328, BCM94322 and Atheros Wifi cards")]),e._v(" "),i("h3",{attrs:{id:"coreservices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#coreservices"}},[e._v("#")]),e._v(" CoreServices")]),e._v(" "),i("ul",[i("li",[e._v("WiFiAgent.app")])]),e._v(" "),i("h3",{attrs:{id:"usr-libexec"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#usr-libexec"}},[e._v("#")]),e._v(" /usr/libexec")]),e._v(" "),i("ul",[i("li",[e._v("airportd")])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("NVIDIA Kepler Graphics Acceleration Patches (12.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-2"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("GeForce.kext")]),e._v(" "),i("li",[e._v("GeForceAIRPlugin.bundle")]),e._v(" "),i("li",[e._v("GeForceGLDriver.bundle")]),e._v(" "),i("li",[e._v("GeForceMTLDriver.bundle")]),e._v(" "),i("li",[e._v("GeForceVADriver.bundle")]),e._v(" "),i("li",[e._v("NVDAGF100Hal.kext")]),e._v(" "),i("li",[e._v("NVDAGK100Hal.kext")]),e._v(" "),i("li",[e._v("NVDAResman.kext")]),e._v(" "),i("li",[e._v("NVDAStartup.kext")])]),e._v(" "),i("h3",{attrs:{id:"frameworks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frameworks"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),i("ul",[i("li",[e._v("OpenCL (libCLVMNVPTXPlugin.dylib, NVPTX.dylib)\n"),i("ul",[i("li",[e._v("Reason: Re-add Kepler hardware acceleration support")])])]),e._v(" "),i("li",[e._v("Metal\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a Metal downgrade to 13.2.1")])])])]),e._v(" "),i("h3",{attrs:{id:"privateframeworks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#privateframeworks"}},[e._v("#")]),e._v(" PrivateFrameworks")]),e._v(" "),i("ul",[i("li",[e._v("MTLCompiler\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a MTLCompiler downgrade to 13.2.1")])])]),e._v(" "),i("li",[e._v("GPUCompiler\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a GPUCompiler downgrade to 13.2.1")])])])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Intel Ivy Bridge Graphics Acceleration Patches (12.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-3"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AppleIntelIVBVA.bundle")]),e._v(" "),i("li",[e._v("AppleIntelFramebufferCapri.kext")]),e._v(" "),i("li",[e._v("AppleIntelGraphicsShared.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHD4000Graphics.kext")]),e._v(" "),i("li",[e._v("AppleIntelHD4000GraphicsGLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHD4000GraphicsMTLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHD4000GraphicsVADriver.bundle")])]),e._v(" "),i("h3",{attrs:{id:"privateframeworks-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#privateframeworks-2"}},[e._v("#")]),e._v(" PrivateFrameworks")]),e._v(" "),i("ul",[i("li",[e._v("AppleGVA/AppleGVACore\n"),i("ul",[i("li",[e._v("Reason: Enable DRM support")])])]),e._v(" "),i("li",[e._v("MTLCompiler\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a MTLCompiler downgrade to 13.2.1")])])]),e._v(" "),i("li",[e._v("GPUCompiler\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a GPUCompiler downgrade to 13.2.1")])])])]),e._v(" "),i("h3",{attrs:{id:"frameworks-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frameworks-2"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),i("ul",[i("li",[e._v("OpenCL (libCLVMIGILPlugin.dylib)\n"),i("ul",[i("li",[e._v("Reason: Re-add Ivy Bridge hardware acceleration support")])])]),e._v(" "),i("li",[e._v("WebKit (com.apple.WebProcess.sb)\n"),i("ul",[i("li",[e._v("Reason: Re-add Ivy Bridge Safari rendering support")])])]),e._v(" "),i("li",[e._v("Metal\n"),i("ul",[i("li",[e._v("Reason:  3802 based GPU's broken by 13.3, requiring a Metal downgrade to 13.2.1")])])])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Intel Haswell Graphics Acceleration Patches (13.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-4"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AppleIntelFramebufferAzul.kext")]),e._v(" "),i("li",[e._v("AppleIntelHD5000Graphics.kext")]),e._v(" "),i("li",[e._v("AppleIntelHD5000GraphicsGLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHD5000GraphicsMTLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHD5000GraphicsVADriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHSWVA.bundle")]),e._v(" "),i("li",[e._v("AppleIntelGraphicsShared.bundle")])]),e._v(" "),i("h3",{attrs:{id:"frameworks-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frameworks-3"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),i("ul",[i("li",[e._v("Metal\n"),i("ul",[i("li",[e._v("Reason:  3802 based GPU's broken by 13.3, requiring a Metal downgrade to 13.2.1")])])])]),e._v(" "),i("h3",{attrs:{id:"privateframeworks-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#privateframeworks-3"}},[e._v("#")]),e._v(" PrivateFrameworks")]),e._v(" "),i("ul",[i("li",[e._v("MTLCompiler\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a MTLCompiler downgrade to 13.2.1")])])]),e._v(" "),i("li",[e._v("GPUCompiler\n"),i("ul",[i("li",[e._v("Reason: 3802 based GPU's broken by 13.3, requiring a GPUCompiler downgrade to 13.2.1")])])])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Intel Broadwell Graphics Acceleration Patches (13.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-5"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AppleIntelBDWGraphics.kext")]),e._v(" "),i("li",[e._v("AppleIntelBDWGraphicsFramebuffer.kext")]),e._v(" "),i("li",[e._v("AppleIntelBDWGraphicsGLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelBDWGraphicsMTLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelBDWGraphicsVADriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelBDWGraphicsVAME.bundle")]),e._v(" "),i("li",[e._v("AppleIntelGraphicsShared.bundle")])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("Intel Skylake Graphics Acceleration Patches (13.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-6"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-6"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AppleIntelSKLGraphics.kext")]),e._v(" "),i("li",[e._v("AppleIntelSKLGraphicsFramebuffer.kext")]),e._v(" "),i("li",[e._v("AppleIntelSKLGraphicsGLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelSKLGraphicsMTLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelSKLGraphicsVADriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelSKLGraphicsVAME.bundle")]),e._v(" "),i("li",[e._v("AppleIntelGraphicsShared.bundle")])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("AMD Legacy Vega Graphics Acceleration Patches (13.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-7"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-7"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AMDRadeonX5000.kext")]),e._v(" "),i("li",[e._v("AMDRadeonVADriver2.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonX5000GLDriver.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonX5000MTLDriver.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonX5000Shared.bundle")]),e._v(" "),i("li",[e._v("AMDShared.bundle")])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("AMD Legacy Polaris Graphics Acceleration Patches (13.0+)")]),e._v(" "),i("h3",{attrs:{id:"extensions-8"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-8"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AMDRadeonX4000.kext")]),e._v(" "),i("li",[e._v("AMDRadeonX4000HWServices.kext")]),e._v(" "),i("li",[e._v("AMDRadeonVADriver2.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonX4000GLDriver.bundle")]),e._v(" "),i("li",[e._v("AMDMTLBronzeDriver.bundle")]),e._v(" "),i("li",[e._v("AMDShared.bundle")])])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("AMD Legacy GCN Graphics Acceleration Patches")]),e._v(" "),i("h3",{attrs:{id:"extensions-9"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions-9"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("ul",[i("li",[e._v("AMD7000Controller.kext")]),e._v(" "),i("li",[e._v("AMD8000Controller.kext")]),e._v(" "),i("li",[e._v("AMD9000Controller.kext")]),e._v(" "),i("li",[e._v("AMD9500Controller.kext")]),e._v(" "),i("li",[e._v("AMD10000Controller.kext")]),e._v(" "),i("li",[e._v("AMDRadeonX4000.kext")]),e._v(" "),i("li",[e._v("AMDRadeonX4000HWServices.kext")]),e._v(" "),i("li",[e._v("AMDFramebuffer.kext")]),e._v(" "),i("li",[e._v("AMDSupport.kext")]),e._v(" "),i("li",[e._v("AMDRadeonVADriver.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonVADriver2.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonX4000GLDriver.bundle")]),e._v(" "),i("li",[e._v("AMDMTLBronzeDriver.bundle")]),e._v(" "),i("li",[e._v("AMDShared.bundle")])]),e._v(" "),i("details",{staticClass:"custom-block details"},[i("summary",[e._v("non-Metal Graphics Acceleration Patches (11.0+)")]),e._v(" "),i("h4",{attrs:{id:"general-patches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#general-patches"}},[e._v("#")]),e._v(" General Patches")]),e._v(" "),i("ul",[i("li",[e._v("IOSurface.kext\n"),i("ul",[i("li",[e._v("Reason: Fixes immediate logout on login")]),e._v(" "),i("li",[e._v("Logic: Downgrade to Catalina IOSurface")]),e._v(" "),i("li",[e._v("Note: For AMD and Intel, additional "),i("code",[e._v("addMemoryRegion/removeMemoryRegion")]),e._v(" patch added changing the first conditional jump to non conditional jump\n"),i("ul",[i("li",[e._v("At Offset "),i("code",[e._v("0xdb52")]),e._v(" and "),i("code",[e._v("0xdbc6")]),e._v(", replace following bytes with "),i("code",[e._v("0xeb")])])])])])])]),e._v(" "),i("h4",{attrs:{id:"dropped-acceleration-binaries"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dropped-acceleration-binaries"}},[e._v("#")]),e._v(" Dropped Acceleration Binaries")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("NVIDIA Binaries")]),e._v(" "),i("ul",[i("li",[e._v("GeForceGA.bundle")]),e._v(" "),i("li",[e._v("GeForceTesla.kext\n"),i("ul",[i("li",[e._v("Skip IOFree Panic - Mojave+\n"),i("ul",[i("li",[e._v("At Offset "),i("code",[e._v("0x5CF9A")]),e._v(" replace following bytes with "),i("code",[e._v("0xEB")])])])]),e._v(" "),i("li",[e._v("Avoids "),i("code",[e._v("addMemoryRegion/removeMemoryRegion")]),e._v(" calls\n"),i("ul",[i("li",[e._v("At Offset "),i("code",[e._v("0x5527")]),e._v(" and "),i("code",[e._v("0x77993")]),e._v(", replace following bytes with "),i("code",[e._v("0x909090909090")])])])])])]),e._v(" "),i("li",[e._v("GeForceTeslaGLDriver.bundle")]),e._v(" "),i("li",[e._v("GeForceTeslaVADriver.bundle")]),e._v(" "),i("li",[e._v("NVDANV50HalTesla.kext")]),e._v(" "),i("li",[e._v("NVDAResmanTesla.kext\n"),i("ul",[i("li",[e._v("0x1ea59a - 0x1ea5b3: nop")]),e._v(" "),i("li",[e._v("Replace VSLGestalt to IOLockLock or any other known symbol of the same length.")])])])])]),e._v(" "),i("li",[i("p",[e._v("NVIDIA Web Drivers Binaries")]),e._v(" "),i("ul",[i("li",[e._v("GeForceWeb.kext")]),e._v(" "),i("li",[e._v("NVDAGF100HalWeb.kext")]),e._v(" "),i("li",[e._v("NVDAGK100HalWeb.kext")]),e._v(" "),i("li",[e._v("NVDAGM100HalWeb.kext")]),e._v(" "),i("li",[e._v("NVDAGP100HalWeb.kext")]),e._v(" "),i("li",[e._v("NVDAResmanWeb.kext")]),e._v(" "),i("li",[e._v("NVDAStartupWeb.kext")]),e._v(" "),i("li",[e._v("GeForceTeslaWeb.kext")]),e._v(" "),i("li",[e._v("NVDANV50HalTeslaWeb.kext")]),e._v(" "),i("li",[e._v("NVDAResmanTeslaWeb.kext\n"),i("ul",[i("li",[e._v("Reason: Allows for non-Metal Acceleration for NVIDIA Maxwell and Pascal GPUs")])])])])]),e._v(" "),i("li",[i("p",[e._v("AMD/ATI Binaries")]),e._v(" "),i("ul",[i("li",[e._v("AMD2400Controller.kext")]),e._v(" "),i("li",[e._v("AMD2600Controller.kext")]),e._v(" "),i("li",[e._v("AMD3800Controller.kext")]),e._v(" "),i("li",[e._v("AMD4600Controller.kext")]),e._v(" "),i("li",[e._v("AMD4800Controller.kext")]),e._v(" "),i("li",[e._v("AMD5000Controller.kext")]),e._v(" "),i("li",[e._v("AMD6000Controller.kext")]),e._v(" "),i("li",[e._v("AMDFramebuffer.kext")]),e._v(" "),i("li",[e._v("AMDLegacyFramebuffer.kext")]),e._v(" "),i("li",[e._v("AMDLegacySupport.kext")]),e._v(" "),i("li",[e._v("AMDRadeonVADriver.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonVADriver2.bundle")]),e._v(" "),i("li",[e._v("AMDRadeonX3000.kext")]),e._v(" "),i("li",[e._v("AMDRadeonX3000GLDriver.bundle")]),e._v(" "),i("li",[e._v("AMDShared.bundle")]),e._v(" "),i("li",[e._v("AMDSupport.kext")]),e._v(" "),i("li",[e._v("ATIRadeonX2000.kext")]),e._v(" "),i("li",[e._v("ATIRadeonX2000GA.plugin")]),e._v(" "),i("li",[e._v("ATIRadeonX2000GLDriver.bundle")]),e._v(" "),i("li",[e._v("ATIRadeonX2000VADriver.bundle")])])]),e._v(" "),i("li",[i("p",[e._v("Intel 5th Gen Binaries")]),e._v(" "),i("ul",[i("li",[e._v("AppleIntelFramebufferAzul.kext")]),e._v(" "),i("li",[e._v("AppleIntelFramebufferCapri.kext")]),e._v(" "),i("li",[e._v("AppleIntelHDGraphics.kext")]),e._v(" "),i("li",[e._v("AppleIntelHDGraphicsFB.kext")]),e._v(" "),i("li",[e._v("AppleIntelHDGraphicsGA.plugin")]),e._v(" "),i("li",[e._v("AppleIntelHDGraphicsGLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHDGraphicsVADriver.bundle")])])]),e._v(" "),i("li",[i("p",[e._v("Intel 6th Gen Binaries")]),e._v(" "),i("ul",[i("li",[e._v("AppleIntelHD3000Graphics.kext")]),e._v(" "),i("li",[e._v("AppleIntelHD3000GraphicsGA.plugin")]),e._v(" "),i("li",[e._v("AppleIntelHD3000GraphicsGLDriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelHD3000GraphicsVADriver.bundle")]),e._v(" "),i("li",[e._v("AppleIntelSNBGraphicsFB.kext\n"),i("ul",[i("li",[e._v("Board ID Patch\n"),i("ul",[i("li",[e._v("Replace original Board ID with updated model")])])])])]),e._v(" "),i("li",[e._v("AppleIntelSNBVA.bundle")])])])]),e._v(" "),i("h3",{attrs:{id:"frameworks-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frameworks-4"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),i("ul",[i("li",[e._v("CoreDisplay.framework\n"),i("ul",[i("li",[e._v("Logic: Copied from Mojave, heavy modifications/shims")])])]),e._v(" "),i("li",[e._v("IOSurface.framework")]),e._v(" "),i("li",[e._v("OpenGL.framework\n"),i("ul",[i("li",[e._v("Logic: Copied from Mojave")])])])]),e._v(" "),i("h3",{attrs:{id:"privateframeworks-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#privateframeworks-4"}},[e._v("#")]),e._v(" PrivateFrameworks")]),e._v(" "),i("ul",[i("li",[e._v("GPUSupport.framework\n"),i("ul",[i("li",[e._v("Logic: Copied from Mojave")])])]),e._v(" "),i("li",[e._v("SkyLight.framework\n"),i("ul",[i("li",[e._v("Logic: Copied from Mojave, heavy modifications/shims")])])])])])])])}),[],!1,null,null,null);l.default=r.exports}}]);