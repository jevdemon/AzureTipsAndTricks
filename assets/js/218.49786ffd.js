(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{571:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Logic Apps Documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=mhCxxCXIkrU&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=31?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to easily work with JSON with Azure Logic Apps"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"my-scenario-tracking-run-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-scenario-tracking-run-data"}},[t._v("#")]),t._v(" My Scenario - Tracking Run Data")]),t._v(" "),s("p",[t._v("I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of "),s("a",{attrs:{href:"http://www.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier.com"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure"),s("OutboundLink")],1),t._v(" to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parse Emails to be used in a Azure Logic Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("This post - Create JSON Schema to be used in a Azure Logic Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setup an HTTP Request Trigger that is used in an Azure Logic Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip40.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Upload Files from a URL with Azure Logic Apps"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"create-json-schema-to-be-used-in-a-azure-logic-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-json-schema-to-be-used-in-a-azure-logic-apps"}},[t._v("#")]),t._v(" Create JSON Schema to be used in a Azure Logic Apps")]),t._v(" "),s("p",[t._v("In the "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this post"),s("OutboundLink")],1),t._v(", we decided that we'd extract the following 4 pieces of information from the email.")]),t._v(" "),s("ul",[s("li",[t._v("Filename - This is the general filename that the app uses and I think it's a piece of data we may want to store.")]),t._v(" "),s("li",[t._v("CSV URL - A URL to the CSV File that we'll be posting to OneDrive.")]),t._v(" "),s("li",[t._v("GPX URL - A URL to the GPX File that we'll be posting to OneDrive.")]),t._v(" "),s("li",[t._v("KML URL - A URL to the KML File that we'll be posting to OneDrive.")])]),t._v(" "),s("p",[t._v("We need to create the JSON body which we'll use to create the schema. I used "),s("a",{attrs:{href:"http://www.objgen.com/json",target:"_blank",rel:"noopener noreferrer"}},[t._v("objgen.com/json"),s("OutboundLink")],1),t._v(" to quickly create this piece, but you can just manually type it if you want.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/schemablog1.gif")}}),t._v(" "),s("p",[t._v("Here is the JSON payload with some sample data.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "filename": "myfilename",\n  "gpx": "http://www.someurl.com",\n  "csv": "http://www.someurl.com",\n  "kml": "http://www.someurl.com"\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v('OK, now I clicked the "Copy" Button and headed over to '),s("a",{attrs:{href:"https://jsonschema.net/#/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonschema.net"),s("OutboundLink")],1),t._v(" and pasted it in and my JSON schema was generated.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/jsonschema2.png")}}),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json-schema.org/draft-06/schema#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"definitions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/example.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"csv"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"filename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/filename"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gpx"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/gpx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kml"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/kml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[t._v("Too easy! Now head over to the "),s("a",{attrs:{href:"https://zapier.com/app/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier Editor"),s("OutboundLink")],1),t._v(" and create a new app.")]),t._v(" "),s("p",[t._v("You'll want to use the "),s("strong",[t._v("New Email")]),t._v(" Trigger and use the "),s("strong",[t._v("Email Parser by Zappier")]),t._v(" and allow it to connect to your mailbox that you "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("created earlier"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("For the next step, you'll want to use an "),s("strong",[t._v("Action")]),t._v(" that is a "),s("strong",[t._v("POST")]),t._v(" request that uses "),s("strong",[t._v("Webhooks by Zappier")]),t._v(". When you get to the point to where it asks you for a URL, then use "),s("a",{attrs:{href:"https://requestbin.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestbin"),s("OutboundLink")],1),t._v(" to see what your HTTP client is sending or to inspect and debug webhook requests. Now you have a URL that you can use for testing. Ensure your payload is set to "),s("strong",[t._v("JSON")]),t._v(" and now you can select the data from your parsed email (filename, csv, kml, gpx). You can leave the rest of the fields as-is. When you finish your screen should look like the following:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/schemablog3.png")}}),t._v(" "),s("p",[t._v("Go ahead and save and run the test. After you switch over to your "),s("a",{attrs:{href:"https://requestbin.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestbin"),s("OutboundLink")],1),t._v(". You should see the output that matches the parsed data from the email.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/schemablog4.png")}})])}),[],!1,null,null,null);e.default=r.exports}}]);