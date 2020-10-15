(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{457:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service-mobile/app-service-mobile-ios-get-started?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create an iOS app"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"create-a-back-end-for-your-next-native-ios-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-back-end-for-your-next-native-ios-application"}},[e._v("#")]),e._v(" Create a back end for your next native iOS application")]),e._v(" "),a("p",[e._v("Azure defines a number of services for app developers covering data storage, notifications, authentication, etc. Wouldn't it be great if there was a simple platform-as-a-service (PaaS) offering that tied all these together to quickly build a back end for your app? Good news. That offering already exists: the "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/mobile?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mobile Apps"),a("OutboundLink")],1),e._v(" feature in Azure App Service.")]),e._v(" "),a("h4",{attrs:{id:"start-my-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-my-app"}},[e._v("#")]),e._v(" Start my app")]),e._v(" "),a("p",[e._v("From the Azure portal, select "),a("strong",[e._v("Create a resource")]),e._v(", search for "),a("strong",[e._v("Mobile")]),e._v(", and you'll find the "),a("strong",[e._v("Mobile App")]),e._v(" item. To create a new app, you'll need a unique name and you can select an app service plan. For development, there is a free tier that allows you to get started.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-create.png")}}),e._v(" "),a("p",[e._v("Once created you can view the settings for the app via "),a("strong",[e._v("All resources")]),e._v(" in the Azure portal. The unique URL that you specified on creation will open in a browser and show a placeholder webpage.")]),e._v(" "),a("h4",{attrs:{id:"off-to-a-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#off-to-a-quick-start"}},[e._v("#")]),e._v(" Off to a quick start")]),e._v(" "),a("p",[e._v("Looking at all the options available in the Azure portal might seem overwhelming, but luckily there is a quick way to get started. Click "),a("strong",[e._v("Quickstart")]),e._v(" to set up a simple database back end and generate a sample project.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-quickstart1.png")}}),e._v(" "),a("p",[e._v("For native iOS apps, you can choose either Objective-C or, as in this example, Swift to create a ready-made project configured to talk to your newly created back end.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-quickstart2.png")}}),e._v(" "),a("p",[e._v("You'll need to select an Azure SQL database connection or create a new one. Again, there is a free tier to get started with development.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-quickstart3.png")}}),e._v(" "),a("p",[e._v("For the second step, the Quickstart will generate a "),a("strong",[e._v("TodoItem")]),e._v(" table for the app. As we'll see later, you can manage this table through the "),a("strong",[e._v("Easy tables")]),e._v(" settings for the Mobile app.")]),e._v(" "),a("p",[e._v("The third step is to decide whether to generate a new generic app or to receive instructions to integrate with an existing app.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-quickstart4.png")}}),e._v(" "),a("p",[e._v("The downloaded Xcode project can be deployed and run on a device or simulator. The Quickstart code is for a generic To-do app and the code creates the "),a("strong",[e._v("QSTodoDataModel")]),e._v(" and related UI code.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-xcode.png")}}),e._v(" "),a("p",[e._v("In the "),a("strong",[e._v("ToDoTableViewController")]),e._v(" class, you'll see that your application URL is pre-populated in the "),a("strong",[e._v("viewDidLoad")]),e._v(" method. Before you can build and deploy, you'll need to pick a development team in the Code Signing properties for the project.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-quickstart-ios.png")}}),e._v(" "),a("p",[e._v("When you deploy and run the app you'll see a simple clear list interface with the ability to add a new item and pull-to-refresh on the list. You can view the contents of the database from the app entry in the Azure portal under "),a("strong",[e._v("Easy tables")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-easytables.png")}}),e._v(" "),a("p",[e._v("The sample app is very basic, but you can easily see how it works from the generated code. It's very easy to create tables and edit their schema to fit your app requirements.")]),e._v(" "),a("p",[e._v("A limitation of the Quickstart code is that it uses anonymous access. From the "),a("strong",[e._v("Authentication / Authorization")]),e._v(" tab you can turn on Authentication and link to ready-made configuration providers for Azure AD and a number of social and online networks.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-mobile-authentication.png")}}),e._v(" "),a("h4",{attrs:{id:"go-your-own-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-your-own-way"}},[e._v("#")]),e._v(" Go your own way")]),e._v(" "),a("p",[e._v("For detailed instructions on building your own Azure Mobile App, you can follow this "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service-mobile/app-service-mobile-ios-get-started?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quickstart"),a("OutboundLink")],1),e._v(". You can also find more details about "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service-mobile/app-service-mobile-ios-get-started-users?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("adding authentication and configuring your tables"),a("OutboundLink")],1),e._v(". Support for authentication is already in the MicrosoftAzureMobile.framework, so it only requires a few additional lines of code. The Mobile App can easily be extended with push notification support using "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/notification-hubs?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Notification Hubs"),a("OutboundLink")],1),e._v(", but that warrants a separate blog post.")])])}),[],!1,null,null,null);t.default=o.exports}}]);