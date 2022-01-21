(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{320:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Main-Menu.1d2b0f08.png"},381:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Create-Installer-Menu.3629bfb9.png"},382:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Download-Catalog.d2af601b.png"},383:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Download-Listed-Products.1a5dc2c8.png"},384:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Download-Progress.84e96f79.png"},385:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Needs-Installing.297e4912.png"},386:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Download-Finished.ecc832c2.png"},387:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Select-Local-Installer.88e785bd.png"},388:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Format-USB.a14e2cea.png"},389:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Flashing-Process.1d538441.png"},390:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Sucess-Prompt.d2daa669.png"},391:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Installer-Finished-Script.554b202c.png"},422:function(t,e,a){"use strict";a.r(e);var l=a(25),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"download-and-build-macos-installers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#download-and-build-macos-installers"}},[t._v("#")]),t._v(" Download and build macOS Installers")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"#downloading"}},[t._v("Downloading")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#building"}},[t._v("Building")])])]),t._v(" "),l("p",[t._v("This doc is centered around downloading and writing the macOS installer to a USB. If you're already familiar with how to do this, you can skip.")]),t._v(" "),l("ul",[l("li",[t._v("Note: 16GB+ USB will be required for the installer")])]),t._v(" "),l("h2",{attrs:{id:"creating-the-installer"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-installer"}},[t._v("#")]),t._v(" Creating the installer")]),t._v(" "),l("p",[t._v("With OpenCore Legacy Patcher, our new GUI includes a download menu for macOS installers. So to start off, you'll want to grab our app:")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCore Legacy Patcher Release Apps"),l("OutboundLink")],1)])]),t._v(" "),l("p",[t._v("For this guide, we'll be using the standard OpenCore-Patcher (GUI).")]),t._v(" "),l("p",[t._v("Once downloaded, open the app and you should be greeted with this menu:")]),t._v(" "),l("p",[l("img",{attrs:{src:a(320),alt:"OCLP GUI Main Menu"}})]),t._v(" "),l("p",[t._v('First we\'ll want to select the "Create macOS Installer" button. This will present you with 2 options:')]),t._v(" "),l("p",[l("img",{attrs:{src:a(381),alt:""}})]),t._v(" "),l("p",[t._v("For this example, we'll assume you'll need an installer. Selecting this option will download Apple's Installer Catalogs and build a list for you to choose:")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Downloading")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Listed Installers")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(382),alt:"OCLP GUI Installer Download Catalog"}})]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(383),alt:"OCLP GUI Installer Download Listed Products"}})])])])]),t._v(" "),l("p",[t._v("Since the patcher officially supports Big Sur and newer for patching, only those entires will be showen. For ourselves, we'll select 12.1 as that's the latest public release at the time of writing. This will download and install the macOS installer to your applications folder.")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Downloading the Installer")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Requesting to install")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Finished Installing")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(384),alt:"OCLP GUI Installer Download Progress"}})]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(385),alt:"OCLP GUI Installer Needs Installing"}})]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(386),alt:"OCLP GUI Installer Download Finished"}})])])])]),t._v(" "),l("p",[t._v("Once finished, you can proceed to write the installer onto a USB drive.")]),t._v(" "),l("ul",[l("li",[t._v("Note: The entire USB drive will be formatted")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Select Downloaded Installer")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Select disk to format")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(387),alt:""}})]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(388),alt:""}})])])])]),t._v(" "),l("p",[t._v("Now the patcher will start the installer flashing!")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Flashing")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Success Prompt")]),t._v(" "),l("th",[t._v("Finished Flashing")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(389),alt:""}})]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("img",{attrs:{src:a(390),alt:""}})]),t._v(" "),l("td",[l("img",{attrs:{src:a(391),alt:""}})])])])]),t._v(" "),l("h1",{attrs:{id:"once-finished-head-to-building-and-installing-opencore"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#once-finished-head-to-building-and-installing-opencore"}},[t._v("#")]),t._v(" Once finished, head to "),l("RouterLink",{attrs:{to:"/BUILD.html"}},[t._v("Building and installing OpenCore")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);