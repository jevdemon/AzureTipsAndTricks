(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{549:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥  The FREE Azure Developer Guide eBook is available "),a("a",{attrs:{href:"http://aka.ms/azuredevebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/security/fundamentals/best-practices-and-patterns?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure security best practices and patterns"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=mntOLLNejUo&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=7&t=0s?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Best Practices"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"security-is-essential"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-is-essential"}},[e._v("#")]),e._v(" Security is essential")]),e._v(" "),a("p",[e._v("When you run an application, it needs to be secure. There are many ways that attackers can attack your application and potentially get at your data or bring your app down. When you run your application in Azure, you get a lot of world-class protection out-of-the-box. However, you should still follow security best practices to make sure that your application and infrastructure in Azure is as secure as possible. In this post, we'll explore some of the security best practices for Azure that can help you to make your application more secure.")]),e._v(" "),a("h4",{attrs:{id:"_1-encrypt-data-at-rest-and-in-flight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-encrypt-data-at-rest-and-in-flight"}},[e._v("#")]),e._v(" 1. Encrypt data at rest and in-flight")]),e._v(" "),a("p",[e._v("Your data is often the most important asset of your business. This means that you need to protect it against attackers. There are many things that you can do, but in the worst-case scenario, it could be that an attacker gains access to your data, like data in your "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/sql-database-technical-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database"),a("OutboundLink")],1),e._v(". Even if this happens, your data can be protected. Because by default, "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/transparent-data-encryption-azure-sql?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("TDE (Transparent Data Encryption)"),a("OutboundLink")],1),e._v(" is enabled in Azure SQL and "),a("a",{attrs:{href:"https://azure.microsoft.com/services/synapse-analytics?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Synapse Analytics"),a("OutboundLink")],1),e._v(". And equivalent technology is enabled for "),a("a",{attrs:{href:"https://azure.microsoft.com/services/postgresql?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database of PostgreSQL"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://azure.microsoft.com/services/mysql?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),a("OutboundLink")],1),e._v(". These technologies encrypt your data, so that it is not readable by anybody but the services that hold the encryption keys. Azure manages the encryption keys for encryption of data at rest. And if you need to, you can "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/transparent-data-encryption-byok-azure-sql?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("bring your own encryption keys"),a("OutboundLink")],1),e._v(" to Azure SQL Database and Azure Synapse Analytics.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/60azuresqltde.png")}}),e._v(" "),a("p",[e._v("(Azure SQL Database TDE setting)")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/storage?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),a("OutboundLink")],1),e._v(" also encrypts data at rest by default. This encryption cannot be disabled, which is a good thing. By default, Azure manages the encryption keys for Azure Storage encryption. You can also bring your own encryption keys to encrypt and decrypt data in "),a("a",{attrs:{href:"https://azure.microsoft.com/services/storage/blobs?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blob Storage"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://azure.microsoft.com/services/storage/files?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Files"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Encrypting data at rest is very important, but it is also important to make sure that attackers can't intercept data when it travels from service to service or to a web browser. This type of data is called in-flight data and you can encrypt it using TLS (also called SSL) encryption. TLS is enabled for all Azure services by default and for most services, it cannot be disabled. It encrypts the tunnel that data travels through. On top of using TLS, you can use the "),a("a",{attrs:{href:"https://docs.microsoft.com/dotnet/api/overview/azure/storage/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Client Library"),a("OutboundLink")],1),e._v(" to encrypt data within client applications before uploading to Azure Storage, and decrypting data while downloading to the client.")]),e._v(" "),a("p",[e._v("The best practices to take away are:")]),e._v(" "),a("ul",[a("li",[e._v("Always encrypt data at rest")]),e._v(" "),a("li",[e._v("Always encrypt in-flight data")])]),e._v(" "),a("h4",{attrs:{id:"_2-restrict-access-to-your-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-restrict-access-to-your-databases"}},[e._v("#")]),e._v(" 2. Restrict access to your databases")]),e._v(" "),a("p",[e._v("Your databases serve as the backbone of your applications. Your applications need to access them and sometimes administrators need to access them from workstations, to run queries or perform maintenance. How can you make sure that your databases can be accessed securely, without leaving vulnerabilities that attackers might use to gain access to your database?")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/sql-database-technical-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Databases"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://azure.microsoft.com/services/synapse-analytics?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Synapse Analytics"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://azure.microsoft.com/services/postgresql?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for PostgreSQL"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://azure.microsoft.com/services/mysql?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),a("OutboundLink")],1),e._v(", you should make sure that firewalls are enabled. The firewall for these services is enabled by default and only let's Azure services through and IP-addresses that you specify. This is a big restriction on who can access your database, which is a really good step towards securing your databases.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/60azuresqlfirewall.png")}}),e._v(" "),a("p",[e._v("(Azure SQL Database Firewall)")]),e._v(" "),a("p",[e._v("Using the database firewall is a good idea, but is hard to manage in a production environment. In production, you ideally want the database to be completely shielded from the outside world, and be only accessible from the services that you want. You can do that by using "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/sql-database-private-endpoint-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Private Link"),a("OutboundLink")],1),e._v(", which allows you to connect to various services in Azure via a private endpoint. A private endpoint is a private IP address within a specific VNet and Subnet. With Private Link, you could grant access to your web application and maybe to a Virtual Machine in the VNet, that you use to log into the database (using a tool like "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/ssms/download-sql-server-management-studio-ssms?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server Management Studio"),a("OutboundLink")],1),e._v(") and manage it.")]),e._v(" "),a("p",[e._v("The databases in Azure also "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/sql-database-aad-authentication-configure?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("support authentication through an Azure Active Directory (AAD) account"),a("OutboundLink")],1),e._v(". When you use an AAD account, instead of a database server specific account (like a SQL Server Authentication account), your database is more secure, because:")]),e._v(" "),a("ul",[a("li",[e._v("An AAD account can authenticate identities on a database level, where a database server specific account grants access to the whole server and all its databases by default")]),e._v(" "),a("li",[e._v("You can manage password policies and password rotation for an AAD account in a single place")]),e._v(" "),a("li",[e._v("Authenticating with AAD accounts is secure by default. You can couple it to a Windows user you can enable Multi-Factor Authentication")])]),e._v(" "),a("p",[e._v("The best practices to take away are:")]),e._v(" "),a("ul",[a("li",[e._v("Enable database firewalls and maintain them strictly")]),e._v(" "),a("li",[e._v("In production, shield databases from the outside world using "),a("a",{attrs:{href:"https://azure.microsoft.com/services/private-link?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Private Link"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Use "),a("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory"),a("OutboundLink")],1),e._v(" accounts for database access")])]),e._v(" "),a("h4",{attrs:{id:"_3-restrict-access-to-your-vms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-restrict-access-to-your-vms"}},[e._v("#")]),e._v(" 3. Restrict access to your VMS")]),e._v(" "),a("p",[e._v("If you are running applications in Azure Virtual Machines (VM), or if you use a VM for something else, like managing a database, you need to make sure that the VM is secure. Most people log into a VM using RDP or SSH, which requires you to open ports on the VM that expose it to attackers. What can you do to make your VMs more secure?")]),e._v(" "),a("p",[e._v("You should disable RDP/SSH Access to your VMs. When you create a VM in Azure, the RDP and SSH ports can be enabled in the creation wizard. Disable them as that minimizes the attack surface of your VM. Instead, you should deploy your VMs in a Virtual Network and use "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/bastion/bastion-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Bastion"),a("OutboundLink")],1),e._v(" to access them. Azure Bastion provides secure RDP and SSH connectivity to your VMS, without the need to open RDP or SSH ports on your VMS. When you use Azure Bastion, your VMs don't need to have a public IP address, which means that attackers haven no chance of accessing the VM.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/60defaultports.png")}}),e._v(" "),a("p",[e._v("(Enable ports in the Azure VM creation wizard)")]),e._v(" "),a("p",[e._v("The best practices to take away are:")]),e._v(" "),a("ul",[a("li",[e._v("Keep the RDP and SSH ports of your VMs disabled")]),e._v(" "),a("li",[e._v("Use "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/bastion/bastion-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Bastion"),a("OutboundLink")],1),e._v(" to connect to your VMs")])]),e._v(" "),a("h4",{attrs:{id:"_4-protect-your-application-secrets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-protect-your-application-secrets"}},[e._v("#")]),e._v(" 4. Protect your application secrets")]),e._v(" "),a("p",[e._v("You applications store secrets, like API keys and connection keys, to connect to other services, like APIs and databases. It is not a good idea to store these secrets in application code, as the keys would be available for everybody who has access to the code. Instead, application secrets should be stored in a secure place, that is meant for storing secrets.")]),e._v(" "),a("p",[e._v("In Azure, you should store your application secrets, keys and certificates in "),a("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),a("OutboundLink")],1),e._v(". Azure Key Vault is a secure service that your applications can connect to, in order to retrieve secrets. In addition to storing your secrets safely, you can let your secrets be managed by the people that should manage them (not by developers). For instance, a DevOps engineer can manage a connection string to a database in Azure Key Vault. Only that engineer handles the secret and anybody else that works on the application or infrastructure doesn't know the secret. This is a secure way of working.")]),e._v(" "),a("p",[e._v("If secrets are stored in Azure Key Vault and your applications retrieve these secrets, how do your applications connect to Azure Key Vault? Your applications run in services like "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Web Apps"),a("OutboundLink")],1),e._v(", which support "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Managed Service Identities"),a("OutboundLink")],1),e._v(". These are identities that live in Azure Active Directory. Using these, your Web Apps can be granted access to Azure Key Vault without using connection strings or API keys.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/60keyvaultsecret.png")}}),e._v(" "),a("p",[e._v("(Azure Key Vault secret)")]),e._v(" "),a("p",[e._v("The best practices to take away are:")]),e._v(" "),a("ul",[a("li",[e._v("Store application secrets in a central place, like "),a("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Use a built-in mechanism, like "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Managed Service Identities"),a("OutboundLink")],1),e._v(", to connect to Azure Key Vault")])]),e._v(" "),a("h4",{attrs:{id:"_5-use-a-separate-azure-subscription-for-production"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-use-a-separate-azure-subscription-for-production"}},[e._v("#")]),e._v(" 5. Use a separate Azure Subscription for production")]),e._v(" "),a("p",[e._v("You might have many different environment that you use to develop and test your applications. These environments might be separated into different Azure Resource Groups to make it clear which service belongs to which environment. You could use this mechanism to secure access to your services, as you can apply "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/role-based-access-control/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Role-based Access Control (RBAC)"),a("OutboundLink")],1),e._v(" to Resource Groups. Using RBAC, you can grant rights to certain people, to be able to manage services in certain resource groups. This works well and is recommended for development and test environments.")]),e._v(" "),a("p",[e._v("For production environments, the best practice is to create a separate Azure subscription. This helps you keep your production data and other assets out of your dev/test environments. You can also easily apply two different sets of policies across the resources in the two subscriptions. If your setup is complicated and contains many services, possibly spread out over multiple geographic locations and serving different purposes, you might want to consider creating an "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-adoption-framework/decision-guides/subscriptions?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Management Group structure"),a("OutboundLink")],1),e._v(" that can have multiple subscriptions and policies for the production environment.")]),e._v(" "),a("p",[e._v("The best practices to take away are:")]),e._v(" "),a("ul",[a("li",[e._v("Always apply "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/role-based-access-control/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Role-based Access Control"),a("OutboundLink")],1),e._v(" to control who can access which Azure resources")]),e._v(" "),a("li",[e._v("Separate production resources from non-production resources")])]),e._v(" "),a("h4",{attrs:{id:"_6-implement-a-web-application-firewall-waf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-implement-a-web-application-firewall-waf"}},[e._v("#")]),e._v(" 6. Implement a Web Application Firewall (WAF)")]),e._v(" "),a("p",[e._v("When your applications are exposed to the internet, they will be attacked. Common attacks that you face are SQL injection attacks and cross site scripting attacks and there are many more.")]),e._v(" "),a("p",[e._v("You can protect your web applications from attacks by implementing a Web Application Firewall (WAF). In Azure, You can enable the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/web-application-firewall/afds/afds-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("WAF feature of Azure Front Door"),a("OutboundLink")],1),e._v(", which is a service that you put in front of your web applications and it acts as a gateway to your applications, allowing you to set routing rules and filter traffic. You can also enable the WAF feature of "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/application-gateway/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Application Gateway"),a("OutboundLink")],1),e._v(", which is a similar service to "),a("a",{attrs:{href:"https://azure.microsoft.com/services/frontdoor?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Front Door"),a("OutboundLink")],1),e._v(", but operates on a different network layer and has different features. The WAF protects you against all sorts of attacks, including those from the "),a("a",{attrs:{href:"https://owasp.org/www-project-modsecurity-core-rule-set?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Web Application Security Project (OWASP) core rule sets"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("You can customize the behavior of the WAF by selecting the attack that it needs to protect against and telling it what to do when you get attacked. You can block an attack, forward it to somewhere else, log it, and more. You can also add more rules and restrict IP addresses that are allowed to access your web applications or limit the amount of traffic from certain IP addresses.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/60wafpolicies.png")}}),e._v(" "),a("p",[e._v("(Azure WAF policies)")]),e._v(" "),a("p",[e._v("The best practices to take away are:")]),e._v(" "),a("ul",[a("li",[e._v("Implement a gateway service, like "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/application-gateway/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Application Gateway"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://azure.microsoft.com/services/frontdoor?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Front Door"),a("OutboundLink")],1),e._v(", in front of your web applications")]),e._v(" "),a("li",[e._v("Enable the Web Application Firewall feature to protect you against attacks")])]),e._v(" "),a("h4",{attrs:{id:"_7-use-azure-security-center-to-monitor-and-improve-security-and-act-on-security-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-use-azure-security-center-to-monitor-and-improve-security-and-act-on-security-events"}},[e._v("#")]),e._v(" 7. Use Azure Security Center to monitor and improve security and act on security events")]),e._v(" "),a("p",[e._v("If there is only one best practice that you adopt from this post, it should be this one. Use "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/security-center/security-center-intro?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center"),a("OutboundLink")],1),e._v(". This is an Azure service that you can use for free, or in a paid tier, that tells you what your security state is, what you can improve and how to do that. You can use Azure Security Center to periodically check the security of your resources and to be alerted when something needs your attention. Security Center helps you to implement security best practices by telling you where they need to be implemented and allows you to directly implement them from the Security Center.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/60securitycenter.png")}}),e._v(" "),a("p",[e._v("(Azure Security Center)")]),e._v(" "),a("p",[e._v("The best practice to take away is:")]),e._v(" "),a("ul",[a("li",[e._v("Use "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/security-center/security-center-intro?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Security is a complex topic. There are many things that you should do to optimize your security and maintain it. Learn more about Azure security best practices "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/security/fundamentals/best-practices-and-patterns?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and make sure to use the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/security-center/security-center-intro?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center"),a("OutboundLink")],1),e._v(" to implement the best practices in your Azure subscription. Stay safe!")])])}),[],!1,null,null,null);t.default=o.exports}}]);