(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{534:function(e,t,a){"use strict";a.r(t);var r=a(42),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥  Hold the date. April 9th is the "),a("a",{attrs:{href:"https://captcalli.github.io/LiveCodersConf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Coders Conference!"),a("OutboundLink")],1),e._v(". The Live Coders, an outgoing and enthusiastic group of friendly channels that write code, teach about technology, and promote the technical community.")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add an SSL certificate in Azure App Service"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=qPphhM2v3xU&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Azure App Service managed certificates"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"how-to-use-azure-app-service-managed-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-azure-app-service-managed-certificates"}},[e._v("#")]),e._v(" How to use Azure App Service managed certificates")]),e._v(" "),a("h4",{attrs:{id:"securing-your-app-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-app-services"}},[e._v("#")]),e._v(" Securing your App Services")]),e._v(" "),a("p",[e._v("As you know, it is important to secure your applications. One of the security measures that you need to take is to protect traffic to and from your web application. You can do that by encrypting traffic with SSL certificates, so that traffic will always go through the HTTPS protocol.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service"),a("OutboundLink")],1),e._v(" makes it very easy to protect your application that has a custom domain, with SSL certificates. You can bring your own certificate, buy an "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate#import-an-app-service-certificate?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Certificate"),a("OutboundLink")],1),e._v(" and now you can use a "),a("strong",[e._v("free")]),e._v(" "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate#create-a-free-certificate-preview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Managed Certificate"),a("OutboundLink")],1),e._v(". Each of these can be used for different requirements as you can see in the table below:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Requirement")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("App Service Certificate")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("App Service Managed Certificate")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Protect www domain (i.e. https://www.microsoft.com)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),a("tr",[a("td",[e._v("Protect naked domain (i.e. https://microsoft.com)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",[e._v("Protect wildcard domain (i.e. https://azure.microsoft.com)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",[e._v("Certificate is exportable")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",[e._v("Certificate Issuer")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("GoDaddy")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("DigiCert")])]),e._v(" "),a("tr",[a("td",[e._v("Costs")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("$69,99 (standard) - $299,99 (wildcard) / year")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Free")])])])]),e._v(" "),a("p",[e._v("In this post, we'll protect an "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Web App"),a("OutboundLink")],1),e._v(" with a free App Service Managed Certificate.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("An existing Azure App Service Web App with a valid custom domain coupled to it")])]),e._v(" "),a("h4",{attrs:{id:"protect-an-app-service-web-app-with-an-app-service-managed-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protect-an-app-service-web-app-with-an-app-service-managed-certificate"}},[e._v("#")]),e._v(" Protect an App Service Web App with an App Service Managed Certificate")]),e._v(" "),a("p",[e._v("Standard Azure domains (yourwebsite.azurewebsites.net) are already SSL protected by default, but custom domains aren't. So let's use an App Service Managed Certificate to protect a Web App with a custom domain.\nI start out with a website that runs in an Azure Web App under a custom domain and doesn't have any SSL bindings configured. When I navigate to this website, my browser warns me that my connection isn't private. Let's fix that.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/50sslerror.png")}}),e._v(" "),a("p",[e._v("(Website without SSL)")]),e._v(" "),a("ol",[a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Open your Web App that has a valid custom domain coupled to it")]),e._v(" "),a("li",[e._v("In order to use custom domains and protect them in Azure App Service, your App Service need to run in the "),a("strong",[e._v("B1 service tier")]),e._v(" or higher. You can check if this is the case by taking a look at your settings in the "),a("strong",[e._v("Scale up (App Service Plan) menu")]),e._v(" in the Web App")]),e._v(" "),a("li",[e._v("Go to the "),a("strong",[e._v("TLS/SSL settings menu")]),e._v(" in the Web App. Here, you can see that there are no SSL bindings for the custom domain yet")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/50tslsettings.png")}}),e._v(" "),a("p",[e._v("(TSL/SSL settings menu in a Web App in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Click on the "),a("strong",[e._v("Private Key Certificates (.pfx)")]),e._v(" button. This opens the Private Key Certificate blade")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/50privatekeysettings.png")}}),e._v(" "),a("p",[e._v("(Private Key Certificate settings in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("In the Private Key Certificate blade, there are no certificates yet, so let's create one. Click on "),a("strong",[e._v("Create App Service Managed Certificate")]),e._v(" to start creating one")]),e._v(" "),a("li",[e._v("Select the custom domain name to create the App Service Managed Certificate for and click "),a("strong",[e._v("Create")]),e._v(" to create it. Remember that you can only use managed certificates for www domains, not naked domains")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/50createmanagedcerts.png")}}),e._v(" "),a("p",[e._v("(Create App Service Managed Certificate in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("When the certificate is created, go back to the Bindings blade. Here, you need to create a binding between your domain and the certificate. Click the "),a("strong",[e._v("Add TLS/SSL Binding")]),e._v(" button in the bottom of the blade\na. Select the "),a("strong",[e._v("Custom domain")]),e._v(" to create the binding for\nb. And select the "),a("strong",[e._v("Certificate")]),e._v(" that you've just created\nc. Also select the "),a("strong",[e._v("TLS/SSL type")]),e._v(". In this case, only SNI SSL will be available\nd. Click "),a("strong",[e._v("Add Binding")]),e._v(" to add the binding")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/50addbinding.png")}}),e._v(" "),a("p",[e._v("(Add TLS/SSL binding in the Azure portal)")]),e._v(" "),a("p",[e._v("That's it! Now, when you navigate to the website, the warning will no longer be visible. Instead, you'll see a green lock next to the URL. And when you click on it, you can see that the connection is secure and that the certificate is valid.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/50secureconnection.png")}}),e._v(" "),a("p",[e._v("(Website with SSL)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Azure App Service Managed Certificates provide a great way to implement basic security for your application. It is free and once you've generated a certificate, it will renew itself, so you don't have to think about it. Read more about it "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate#create-a-free-certificate-preview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and check it out!")])])}),[],!1,null,null,null);t.default=i.exports}}]);