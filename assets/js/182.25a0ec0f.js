(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{535:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("This tip is marked obsolete. :::")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=S-NNM_4j0YQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=21?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Load Test Your Web Apps with Azure App Services"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("h4",{attrs:{id:"intro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),o("p",[e._v("We've recently created a "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web app"),o("OutboundLink")],1),e._v(" and uploaded it to Azure App Service. We also took a look at "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple ways"),o("OutboundLink")],1),e._v(" to examine those files through the Azure portal interface and how we'd add "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment slots"),o("OutboundLink")],1),e._v(" for our web app. We also took a look at a feature called "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testing in Production"),o("OutboundLink")],1),e._v(" which allows us to distribute traffic between our production and other slots. We also looked at using "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip24.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell"),o("OutboundLink")],1),e._v(" to automatically distribute the load between your Production and deployment slot sites with the Testing in Production feature and looking briefly at the "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip25.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Resource Explorer"),o("OutboundLink")],1),e._v(" to explore REST APIs. In this post, we'll look at a simple and quick way to perform load testing of your web app.")]),e._v(" "),o("h4",{attrs:{id:"load-testing-web-apps-with-azure-app-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-testing-web-apps-with-azure-app-services"}},[e._v("#")]),e._v(" Load Testing web apps with Azure App Services")]),e._v(" "),o("p",[e._v("Load Testing allows you to test your web app's performance and determine if your app can handle increased traffic during peak times. If you log into your Azure account and go to your App Service that you created and look under "),o("strong",[e._v("Development Tools")]),e._v(" then you will see it.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azureperformance1.png")}}),e._v(" "),o("p",[e._v("Inside the blade, select "),o("strong",[e._v("New")]),e._v(" and you will see the following options:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azureperformance2.png")}}),e._v(" "),o("p",[e._v("You have the option to "),o("strong",[e._v("Configure Test")]),e._v(" and you can leave this as "),o("strong",[e._v("Manual Test")]),e._v(" or "),o("strong",[e._v("Visual Studio Web Test")]),e._v(". The main difference between the two is that with the latter you can select multiple URLs and even use a HTTP Archive file (such as one created by Fiddler). Leave the testing option as manual and select a name and location and make sure you leave the defaults as 250 users for 5 minutes.")]),e._v(" "),o("p",[o("strong",[e._v("Use Case Scenario")]),e._v(" Suppose you have a web app and you have something for sale. You have an upcoming promo that last year had 175 users connected for 5 minutes. Users complained that the site was slow and since your site has grown, you want to improve customer satisfaction by reducing the page load time and test your web app with a load of 250 users for 5 minutes.")]),e._v(" "),o("p",[e._v("Let the test run and you'll be presented with the following information once it has completed.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azureperformance3.gif")}}),e._v(" "),o("p",[e._v("For this demo, We can see that the average response time decreased while request per second increased. If we had of chosen a larger time, then we probably would have more detail to help locate where we could improve performance of our web app. You may also want to check out the "),o("strong",[e._v("Status Message")]),e._v(" panel for additional information about the test.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azureperformance4.png")}}),e._v(" "),o("p",[o("strong",[e._v("Look out!")]),e._v(" Keep in mind that there is a charge for performing a load test in terms of virtual-users as indicated in the screen-shot.")])])}),[],!1,null,null,null);t.default=a.exports}}]);