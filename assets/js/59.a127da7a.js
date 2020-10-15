(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{414:function(e,a,t){"use strict";t.r(a);var r=t(42),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database Documentation"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"rename-an-azure-sql-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rename-an-azure-sql-database"}},[e._v("#")]),e._v(" Rename an Azure SQL database")]),e._v(" "),t("p",[e._v("Last week, I did a SQL post on "),t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip145.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Easily reset the Administrator password for an Azure SQL database"),t("OutboundLink")],1),e._v(' and it did rather well. So I\'m back with another SQL post that addresses another common scenario that folks ask "How do I rename an Azure SQL database"?')]),e._v(" "),t("h4",{attrs:{id:"rename-with-command-line-tsql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rename-with-command-line-tsql"}},[e._v("#")]),e._v(" Rename with command-line - TSQL")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Connect with "),t("strong",[e._v("SQL Server Management Studio")]),e._v(" to your Azure database server")])]),e._v(" "),t("li",[t("p",[e._v("Right-click on the master database and select "),t("strong",[e._v("New Query")])])]),e._v(" "),t("li",[t("p",[e._v("In the "),t("strong",[e._v("New Query window")]),e._v(" type "),t("code",[e._v("ALTER DATABASE [dbname] MODIFY NAME = [newdbname]")]),e._v(". (Make sure you include the square brackets around both database names.)")])])]),e._v(" "),t("h4",{attrs:{id:"rename-with-a-gui-sql-server-management-studio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rename-with-a-gui-sql-server-management-studio"}},[e._v("#")]),e._v(" Rename with a GUI - SQL Server Management Studio")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Connect with SQL Server Management Studio")])]),e._v(" "),t("li",[t("p",[e._v("Make sure "),t("strong",[e._v("Object Explorer")]),e._v(" pane is open.")])]),e._v(" "),t("li",[t("p",[e._v("Click on the database name "),t("em",[e._v("(as the rename option from the dropdown will be greyed out)")]),e._v(" and type in the new name.")])]),e._v(" "),t("li",[t("p",[e._v("The Azure Portal should show the reflected the change almost immediately.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);