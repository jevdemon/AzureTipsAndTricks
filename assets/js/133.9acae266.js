(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{485:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Network Security Groups"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("This post was brought to you by "),s("strong",[s("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),s("OutboundLink")],1)]),e._v(".")]),e._v(" "),s("p",[e._v("Have you ever wondered that your NSG blade was cluttered with too many Network Security Groups? See my NSG blade.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/file1-nsg.png")}}),e._v(" "),s("p",[e._v("Shocking huh? This list was even bigger in my customer's environment. When you create a new Virtual Machine from Azure Portal or CLI, a new network security group is created for each VM. This is by design. However there's a way to specify an existing NSG assuming you want to apply the same inbound and outbound rules for a group of virtual machines.")]),e._v(" "),s("p",[e._v('This can be done by choosing the Advanced option in the Networking tab. The default option is "None".')]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/file2-nsg.png")}}),e._v(" "),s("p",[e._v('When you select Advanced option, you will have an option to select the existing NSGs. I have created a network security group called "mynsg1" with a set of inbound and outbound rules prior to creating a VM. See the screenshot below.')]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/file3-nsg.png")}}),e._v(" "),s("p",[e._v("In this case, I'm allowing access to my VMs only from my Home and Office IPs. You can further fine tune the NGSG by the protocol and specific ports and re-use the same NSG.")]),e._v(" "),s("p",[e._v("When you create a VM using az CLI, you have an option to specify the NSG. See below.")]),e._v(" "),s("p",[e._v("The following example creates a simple Ubuntu Linux VM with a public IP address, DNS entry, wih an existing NSG, two data disks (10GB and 20GB), and then generates ssh key pairs.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("az vm create -n MyVm -g MyResourceGroup --nsg mynsg1 --public-ip-address-dns-name MyUniqueDnsName --image ubuntults --data-disk-sizes-gb 10 20 --size Standard_DS2_v2 \\\n--generate-ssh-keys\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Now if you want to apply this NSG to all your VMs that shares the same set of allow/deny rules, you can stop the VM, go to the vNet blade attached to your VM, click on the device under Connected Devices, under Network Security Group blade click on Edit icon and select the new NSG that was created above and restart your VM(s). The same rule applies to existing VMs as well.")]),e._v(" "),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("Network Security Groups is an important feature in Azure Virtual Networking that allows you to filter traffic to and from Internet and across Azure resources. The intent of this article is to share a quick Azure tip but NSG shouldn't be used as a first line of defense to your Azure resources.")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Networks"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/network/nsg?view=azure-cli-latest/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("az CLI nsg"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);