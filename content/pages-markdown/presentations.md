---
title: Presentations
slug: /presentations
author: Kevin Hakanson
---

Descriptions and links to various presentations from Kevin Hakanson.

## Biography

Kevin Hakanson is an experienced Software Architect focused on highly scalable web applications, especially the JavaScript and security aspects. His background includes both .NET and Java, but he is most nostalgic about Lotus Notes. He has been developing professionally since 1994 and holds a Master’s degree in Software Engineering. When not staring at a computer screen, he is probably staring at another screen, either watching TV or playing video games with his family.

---
### Securing GenAI apps: Fine-grained access control for Bedrock Agents (IAM451)

Want to secure generative AI applications accessing your organizational data? Learn how to implement intelligent access controls for Amazon Bedrock-powered applications accessing your organizational data. In this builders' session, you'll build a defense-in-depth approach that combines authentication using Amazon Cognito and fine-grained authorization with Amazon Verified Permissions to secure access for Bedrock AI agents. Implement layered permissions that protect sensitive data without limiting your GenAI capabilities. You must bring your laptop to participate.

* AWS re:Inforce 2025 (16 June 2025 - 18 June 2025)

### A Conversation with your Architecture

Software and architecture diagrams are critical tools as they help developers and stakeholders understand complex systems. What if you could have a conversation with your diagrams? This session explores how generative AI can facilitate meaningful conversations with your architecture to gain deeper insights, make decisions, generate diagrams, and even generate infrastructure code. Leave with both a theoretical understanding and practical implementation guidance for using generative AI in architecture documentation and analysis.

* Open Source North (29 May 2025) (with Jenna Pederson)

### Harnessing generative AI to create & understand architecture diagrams (ARC308)

This builders' session explores using generative AI to create and comprehend architecture diagrams, a critical aspect of software design and communication. Diagrams are often image data, custom formats of drawing programs, or text-based representations from diagram-as-code tools. Techniques are used from two different layers of the generative AI stack, Amazon Q Developer and foundational models on Amazon Bedrock. Chat-based workflows first understand and analyze existing diagrams, and then ask follow-up questions about best practices. New diagrams are created using diagram-as-code formats. Leave with practical strategies for harnessing generative AI in your software architecture workflows. You must bring your laptop to participate.

* AWS re:Invent 2024 (2 December 2024 - 6 December 2024) ( [workshop][56] )

### Fine-Grained Authorization in Modern Software Applications

Authentication (AuthN) and Authorization (AuthZ) are critical for most software applications. The increased adoption of standardized frameworks for AuthN has improved overall security posture. “Broken Authentication” was #2 risk on the OWASP Top 10:2017 list but slid in 2021 to be part of a rescoped #7. AuthZ is trending the wrong direction with “Broken Access Control” the #1 security risk on 2021 list. This session discusses how open-source policy languages and evaluation engines can improve access control in applications.

The key acronyms are reviewed for background: JWT concepts (claims, scopes); access control models (RBAC, ABAC, ReBAC), data-flow model of XACML (PAP, PDP, PEP, PIP). Examples of applications requiring fine-grained authorization are modeled using different open-source solutions (Cedar, OpenFGA, OPA) focusing on their policy language and evaluation engine integration. This session spans high-level architecture to low-level code, and sprinkles humor (and acronyms) throughout.

* That Conference (30 July 2024 - 1 August 2024) ( [presentation][54], [code][55] )
* AWS NAMER Tech Summit 2024 (17 September 2024 - 19 September 2024)

### Using Cedar to secure application authorization (OPS301)

Cedar is an open source authorization policy language designed to be ergonomic, fast, safe, and analyzable. Rather than embedding authorization logic in an application’s code, developers write that logic as Cedar policies and delegate access decisions to Cedar’s evaluation engine. Cedar supports common authorization use cases with readable policies, naturally supporting concepts from role-based, attribute-based, and relation-based access control models. In this chalk talk, learn how to build a secure application delegating all authorization decisions to Cedar, and then see how to use Cedar together with Amazon Verified Permissions to control access to Amazon API Gateway APIs.

* AWS Summit Washington, DC (26 June 2024 - 27 June 2024)

### Cedar policy language in action

Cedar is a language for defining permissions as policies that describe who should have access to what. Amazon Verified Permissions and AWS Verified Access use Cedar to define fine-grained permissions for applications and end users. In this builders’ session, first learn how to write Cedar policies. Then, take on a challenge problem building the set of policies representing a full application. This session uses open source Cedar and the free online playground, so there is no need to install anything or have an AWS account. You must bring your laptop to participate.

* AWS re:Inforce 2023 (13 June 2023 - 14 June 2023) ( [workshop][50], [code][51]  )
* AWS re:Invent 2023 (27 November 2023 - 1 December 2023)

### Build On AWS weekly - Go Apps on AWS - CDK 💜 Go

This episode reviewed different options for deploying Go based services on AWS, starting with a code-based service using AWS App Runner, then container-based using CDK (also written in Go) to deploy to both Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Kubernetes Service (Amazon EKS).

* AWS Twitch Channel (23 March 2023) ( [video][48] )

### Resilience on AWS

Resilience refers to the ability for workloads to respond and quickly recover from failures. Workloads deployed to the AWS cloud follow the Shared Responsibility Model separating resilience “of” the cloud from workloads running “in” the cloud. Part of a workload’s responsibility is to think about resilience threat modeling, the scenarios where things could go wrong, and the cost, business, or mission impact. This session will review strategies and design considerations around resilience, and reference how some AWS Public Sector customers are building resilience into their mission-focused workloads.

* Code Freeze 2023 (12 January 2023)

### Build On AWS weekly - Code me some diagrams

This episode reviewed diagram types, when teams should create architecture diagrams, when to choose diagrams-as-code instead of presentation software or drawing tools, and sprinkled in a bit of fun.

* AWS Twitch Channel (15 December 2022) ( [video][47] )

### Run your Go applications on the cloud (BOA104)

Start building deployment pipelines for your Go applications on the cloud. You’ve been running Go applications on your machine, but how do you run these in the cloud? In this chalk talk, discuss an easy-to-deploy pipeline for the development, testing, building, and deployment of applications written in Go. Although this example is tailored to Go, it can be easily modified to deploy applications written in other languages too. Join this chalk talk to learn how to deploy your application as containers from GitHub to the cloud with AWS CodePipeline, AWS CodeBuild, AWS CDK, and AWS CodeDeploy.

* AWS re:Invent 2022 (28 November 2022 - 2 December 2022) ( [presentation][45], [code][46] )

### Sharpen your "Architecture Documentation" Saw: Architectural Decision Records (ADR) and Diagrams-as-Code

All solutions implicitly have an architecture, ideally one which is both intentional and documented. The Architectural Decision Records (ADR) process distributes architectural decision-making across team members. Accelerate the time consuming process of hand drawing diagrams by rendering from a text-based source. Communicate effectively by committing both your markdown-based ADRs and text-based diagrams into your source code repository. This talk will review these techniques, provide actionable steps to adoption, and even live-code some examples.

* AWS WWPS SLG/EDU xTech Solutions Architect offsite (23-24 August 2022)
* Open Source North (24 May 2023) ( [presentation][49])
* Minnesota Developers Conference 2023 (3 October 2023) ( [presentation][52], [code][53] )
* Twin Cities .NET User Group (7 December 2023)

### Building SaaS on AWS - Multi-Tenant Data on S3

In this episode we chat about best practices and patterns to adopt when dealing with [Partitioning and Isolating Multi-Tenant SaaS Data with Amazon S3](https://aws.amazon.com/blogs/apn/partitioning-and-isolating-multi-tenant-saas-data-with-amazon-s3/)

* AWS Twitch Channel (3 August 2022) ( [video][44] )

### Accelerate building your demo web app with an AWS UI template

Customer-facing builders (including AWS Solutions Architects like myself) want to create great looking demo web apps and AWS Samples.  Would you like to avoid front-end fatigue and have a working web application in moments?  Scaffolding your project using a pre-built template can be a “polyfill” for your web development skills. 

This session will review the choices made for a circa 2022 template, which also works for external customers.  It starts with the open source variant of the AWS Design System (AWS UI), React, and TypeScript.  Vite is used for a lightning fast dev server and Amplify Hosting support is pre-configured. Routing, state management, testing, code quality, and more are included.  Come learn if a template like this can accelerate your next project.

* Amazon WebDevCon Seattle 2022 (27-29 April 2022)

### Who's in your Cloud? Cloud State Monitoring

When it comes to cloud operations, monitoring security and visibility are critical. Integration by other systems via Cloud APIs is one of the most powerful value drivers of the hyperscale cloud providers.

In this session, we will describe Cloud State Monitoring, including why it is important and who needs awareness in your organization.  An explanation of the categories of Cloud APIs (including the management plane, control plane, and data plane) will give us background.  Specific use cases across AWS, Azure, and GCP will dive deep into various changes you might not have considered monitoring.

* MN ISSA and CSA MN Joint Chapter Meeting (15 December 2020)  ( [presentation][42], [video][43] )

### Adopting Multi-Cloud Services with Confidence

In transitioning to multi-cloud, IT organizations have the same responsibility to provide quality service and operational security, yet have a much greater need to understand how to efficiently govern and manage these disparate cloud services.

In this session, we will examine some key patterns and models taken from a Cloud Adoption Framework through a multi-cloud lens. The presentation will include a mixture of high-level guidance, examples where vocabulary and terminology differ, and opinions on when to utilize cloud-agnostic vs cloud-native technologies for strategic decisions. Attendees will leave with a better understanding of how to implement a Cloud Adoption Framework across multiple clouds and a higher level of confidence in their multi-cloud adoption plans.

* The Complete Cloud Summit (15 September 2020)  ( [presentation][41], [video][39] )

### Aumentum Cloud Strategy: Public Cloud vs. Government Cloud

As Aumentum transitions to a cloud hosted SaaS product, the conversation about "public cloud" vs. "government cloud" is of interest to customers.  This session will review some cloud computing definitions, discuss what is commonly referred to as "government cloud," and provide a preview of the Aumentum cloud strategy.

* Thomson Reuters Synergy 2019 (23-26 September 2019) ( [presentation][40] )

### Introduction to Speech Interfaces for Web Applications

Speaking with your computing device is becoming commonplace.  Most of us have used Apple's Siri, Google Now, Microsoft's Cortana, or Amazon's Alexa - but how can you speak with your web application?  The Web Speech API can enable a voice interface by adding both Speech Synthesis (Text to Speech) and Speech Recognition (Speech to Text) functionality.

This session will introduce the core concepts of Speech Synthesis and Speech Recognition.  We will evaluate the current browser support and review alternative options.  See the JavaScript code and UX design considerations required to add a speech interface to your web application.  Come hear if it's as easy as it sounds?

* Twin Cities Code Camp 20 (16 April 2016)
* MinneBar 11 (23 April 2016)
* Midwest JS (10-12 August 2016) ( [presentation][37] )
* Thomson Reuters Beyond the Edge - Ann Arbor (12 September 2016)

### Learning to Mod Minecraft: A Father/Daughter Retrospective

What do Minecraft and Blockly have in common? Minecraft is a popular, open world video game where players can build structures using digital blocks. Blockly is a open source visual programming language where students can build programs using blocks. LearnToMod combined these together to teach students how to modify Minecraft using either the Blockly visual editor or JavaScript.

This session will be the retrospective of an enthusiastic father teaching his hesitant daughter (who loves Minecraft) about programming. We started with Hour of Code and pair-programmed through LearnToMod’s video lessons. What did we create? How did we like it? What would we recommend to others? Come learn about our experience and ask questions.

* That Conference (10-12 August 2015) (with Audra Hakanson) ( [presentation][35], [video][36] )

### ng-owasp: OWASP Top 10 for AngularJS Applications

The OWASP Top 10 provides a list of the 10 most critical web application security risks.  How do these relate to AngularJS applications? What security vulnerabilities should developers be aware of beyond XSS and CSRF?

This session will review the OWASP Top 10 with a front-end development focus on HTML and JavaScript.  It will look at patterns to implement and others to consider avoiding.  We will also explore several built-in features of AngularJS that help secure your application.

* Thomson Reuters Beyond the Edge - Ann Arbor (17 September 2014)
* AngularMN Monthly Meetup (4 March 2015) ( [presentation][30], [video][31] )
* Twin Cities Code Camp 18 (25 April 2015)
* NDC Oslo (17-19 June 2015) ( [presentation][32], [video][33] )
* That Conference (10-12 August 2015) ( [presentation][34] )
* DevFestMN 2016 (6 February 2016)

### Securing TodoMVC Using the Web Cryptography API

The open source TodoMVC project implements a Todo application using popular JavaScript MV* frameworks. Some of the implementations add support for compile to JavaScript languages, module loaders and real time backends. This presentation will demonstrate a TodoMVC implementation which adds support for the forthcoming W3C Web Cryptography API, as well as review some key cryptographic concepts and definitions.

Instead of storing the Todo list as plaintext in localStorage, this "secure" TodoMVC implementation encrypts Todos using a password derived key. The PBKDF2 algorithm is used for the deriveBits operation, with getRandomValues generating a cryptographically random salt. The importKey method sets up usage of AES-CBC for both encrypt and decrypt operations. The final solution helps address item "A6-Sensitive Data Exposure" from the OWASP Top 10.

With the Web Cryptography API being a recommendation in 2014, any Q&A time will likely include browser implementations and limitations, and whether JavaScript cryptography adds any value.

* JavaScriptMN Monthly Meetup (28 August 2014)
* Thomson Reuters Eagan Technology Unconference (5 September 2014)
* jQuery Conference (12-13 September 2014) ( [presentation][26], [code][27], [demo][28], [video][29] )
* Twin Cities Code Camp 17 (4 October 2014)

### Make your own *Print & Play* card game using SVG and JavaScript 

Want to leverage your creativity, love of board games, and web platform experience to do something different?  Turn your imagination into a Print & Play card game using only a modern web browser, color printer and text editor.

This session will use the Scalable Vector Graphics (SVG) image format and JavaScript programming language to make a deck of cards for a simple game.  Creating a few cards in graphics software like Inkscape is one thing, but what about 50 or 100 cards?  What happens when you need to update them all?  That’s the value of generating your SVG using JavaScript.

We will start with a blank screen, adding color and graphics elements like lines, shapes, text and images.  Learn about container elements and defining content for re-use.  Understand how units in the SVG coordinate system can transform our on-screen creation into an 8.5 by 11 inch printed page (or PDF). SVG examples will be both in their native XML format and created from JavaScript using Snap.svg, an open source library from Adobe designed for modern web browsers.

You will leave this session with a basic knowledge of SVG concepts, how to programmatically generate SVG using JavaScript, and how to make your SVG creation printer friendly.

* Twin Cities Code Camp 16 (5 April 2014) ( [presentation][38], [code][21] )

### Scaling Agility from the Trenches

Let’s start a conference with a conversation. Instead of an opening talk, Twin Cities agile practitioners will share a fishbowl with coaches in a free-for-all discussion around the good the bad and the ugly of scaling agility instead of simply adding more process. Stop back for more details or stop in and enjoy the (fishbowl) madness.

* Agile Day Twin Cities 2013 (15 November 2013) ( panel participant; facilitated by David Hussman )
 
### Internationalize your JavaScript Application: Prepare for "the next billion" internet users.

Are you prepared for "the next billion" internet users, most of whom don't use English as their primary language?  This session will explore the globalization (internationalization and localization) of JavaScript based applications. It will look at the ECMAScript Internationalization API and popular open source projects like AngularJS, messageformat.js, jQuery Globalize and twitter-cldr-js.  Topics will include cultures/locales, character encoding, number formatting, date formatting, choice/plural formatting and translations.

* Thomson Reuters Eagan Technology Unconference (6 September 2013)  ( short [presentation][11] )
* Twin Cities Code Camp 15 (19 October 2013)  ( [presentation][14] )
* Iowa Code Camp 12 (2 November 2013)  ( [presentation][15], [video][16] )
* Google DevFest Twin Cities (8 February 2014) ( [presentation][19], [demo][20] )
* That Conference (11-13 August 2014) ( [presentation][23], [code][24], [demo][25] )
 
### A Humorous Comparison of Software Development with Star Wars: The Clone Wars
Lightning talk style presentation describing software development using references from Star Wars: The Clone Wars. ( [screencast][18] )

* Thomson Reuters Eagan Technology Unconference (6 September 2013)
* JavaScriptMN Monthly Meetup (26 September 2013)
* Iowa Code Camp 12 (2 November 2013)

### Developer's Guide to JavaScript and Web Cryptography

The increasing capabilities and performance of the web platform allow for more feature-rich user experiences. How can JavaScript based applications utilize information security and cryptography principles? This session will explore the current state of JavaScript and Web Cryptography. We will review some basic concepts and definitions, discuss the role of TLS/SSL, show some working examples that apply cryptography to real-world use cases and take a peek at the upcoming W3C WebCryptoAPI. Code samples will use CryptoJS in the browser and the Node.js Crypto module on the server.  An extended example will secure the popular TodoMVC project using PBKDF2 for key generation, HMAC for data integrity and AES for encryption.

* Twin Cities Code Camp 14 (27 April 2013) ( [presentation][7], [video][5], [demo][13] )
* JavaScriptMN Monthly Meetup (30 May 2013) ( [presentation][8] )
* Iowa Code Camp 11 (8 June 2013) ( [presentation][9] )
* Thomson Reuters Legal Market Dev Tech Forum Series (11 July 2013)
* Minnesota Developers Conference 2013 (26 September 2013) ( [presentation][10] )
* cf.Objective() 2014 (13-16 May 2014) ( [presentation][22] )

### HTTP Potpourri

Embracing HTTP is an important property of well constructed ReSTful and web apis. Every web developer is familiar with GET and POST, 200 and 404, Accept and Content-Type; but what about 207 and 413, OPTIONS and PROPFIND, Transfer-Encoding and X-File-Size? This session will be based on usage of various HTTP methods, headers and status codes drawn from the development of large scale, web applications. Examples will include raw HTTP, mixed in with JavaScript and ASP.NET MVC code.

* Twin Cities Code Camp 12 (14-15 April 2012) ( [presentation][6] )

### Implementing Messaging Patterns in JavaScript using the OpenAjax Hub

Is your web application a tightly coupled, DOM event handler mess?  Use techniques from the Enterprise Integration Patterns book to build better components.  Concepts including message, publish-subscribe channel, request-reply and message filter will be demonstrated in JavaScript (along with corresponding tests) using the OpenAjax Hub.

* Twin Cities Code Camp 11 (8-9 October 2011) ( [presentation][4], [code][12] )


---


#### BP101 Adding Lotus Sametime to Your Collaborative Commerce Web site

There are many statistics on the number of shopping carts being abandoned.  This session will show how to use Lotus Sametime to add real-time, online customer service to your Collaborative Commerce Web site.  A real-time intervention by a company representative can happen as a reaction to a customer request or a proactive response to a potential need.  These and other situations will be demonstrated.

* Lotusphere 2001 (14-18 January 2001)

#### BST108 eCommerce with Domino

In this session, you will learn the ins-and-outs of building an eCommerce site with Domino, and how you can build a site faster and easier with Domino than with other technologies.  We will explain how to set up customer registration, build a product catalog, and manage the shopping cart.  Tips on how to implement effective application security and get the best site performance will also be included.  Finally, this session will describe the different ways to integrate you eCommerce applications with existing ERP applications.

* Lotus Developers' Conference 1999 (20-23 June 1999)

[1]: https://twitter.com/hakanson
[2]: https://www.linkedin.com/in/kevinhakanson
[3]: https://stackoverflow.com/users/22514/kevin-hakanson
[4]: https://docs.google.com/presentation/d/1h95HJrrijsqNPvteAO4oo9NkcogfJWE4zS4MDUJJluo/pub?start=false&loop=false&delayms=3000
[5]: https://www.youtube.com/watch?v=iQ0PSR8xyGQ
[6]: https://docs.google.com/presentation/d/1hbUdAj1BrRVRgYK-_LR2cbG3M88HfFQwzhYFCxW-kqk/pub?start=false&loop=false&delayms=3000
[7]: https://docs.google.com/presentation/d/1Sx5ODjh_4lgfYgPNY3RqFzL4snvBbcGZ6byOn78K2ME/pub?start=false&loop=false&delayms=3000
[8]: https://docs.google.com/presentation/d/1ed8gcFiXtye9CTcbKkgoki8GM3Ix38Z00dcy_desKRE/pub?start=false&loop=false&delayms=3000
[9]: https://docs.google.com/presentation/d/1duucrW1Df5GgpzxUJp6RO-PminSYCDQKbSvHZYU4Uyw/pub?start=false&loop=false&delayms=3000
[10]: https://docs.google.com/presentation/d/1dpuhK96oyWndiiY9WLAFiEKFurIppv2mvS1WHVFbfqQ/pub?start=false&loop=false&delayms=3000
[11]: https://docs.google.com/presentation/d/18WgfvLWPFtaQaWcUS6LF4-NXFJX0dkEbFCqvG2k352I/pub?start=false&loop=false&delayms=3000
[12]: https://github.com/hakanson/tccc11
[13]: http://jswebcrypto.azurewebsites.net/demo.html#/
[14]: https://docs.google.com/presentation/d/1AbWHPOeNTL9w5nddBrRQ5f-3dJ1gp_JPtmHinLq9K80/pub?start=false&loop=false&delayms=3000
[15]: https://docs.google.com/presentation/d/1ZA8dp-SsXXqjKyFxsnVDrGcdoo0NaqE8dz-DCB8wA2M/pub?start=false&loop=false&delayms=3000
[16]: https://www.youtube.com/watch?v=h3p8cGOZ8CU
[17]: https://kevinhakanson.com
[18]: https://youtu.be/nIS-XrNrv-0
[19]: https://docs.google.com/presentation/d/1MeQzuoyrPulLcyv_eOCoVrfHvs5tQATO0YLH2HyG-bg/pub?start=false&loop=false&delayms=3000
[20]: http://jsi18n.azurewebsites.net/demo.html
[21]: https://github.com/hakanson/tccc16
[22]: https://docs.google.com/presentation/d/1VC2yX5fEoXO2XTBpdGOMlZwFzuIu1A0PU2DpQ8fTxGs/pub?start=false&loop=false&delayms=3000
[23]: https://github.com/hakanson/jsi18n/blob/gh-pages/JavaScript%20Internationalization%20(That%20Conference).pdf
[24]: https://github.com/hakanson/jsi18n
[25]: http://hakanson.github.io/jsi18n/
[26]: https://docs.google.com/presentation/d/1lIMvkPXM2gsieAJ56aokX9QEKsEyTCHiHcJ8SjSU4DQ/pub?start=false&loop=false&delayms=3000
[27]: https://github.com/hakanson/todomvc-jquery-webcryptoapi
[28]: https://hakanson.github.io/todomvc-jquery-webcryptoapi/
[29]: https://youtu.be/kqwaZ-LzDag?list=PL-0yjdC10QYpmXI3l-PGK1od4kTWOjm_A
[30]: https://docs.google.com/presentation/d/1sXeJIMAUorz-EBEvxze2FTYWDqUTulaiR8XTo2C0_BA/pub?start=false&loop=false&delayms=3000
[31]: https://youtu.be/6uloYE87pkk
[32]: https://www.slideshare.net/kevinhakanson/ng-owasp-ndc
[33]: https://vimeo.com/131757758
[34]: https://docs.google.com/presentation/d/11dCU6lJ27R5RpuMDopMvkTzzcYmNAmv4CWzv4gYRxzs/pub?start=false&loop=false&delayms=3000
[35]: https://www.slideshare.net/kevinhakanson/learning-to-mod-minecraft-a-fatherdaughter-retrospective
[36]: https://youtu.be/InbVSEA8V0U
[37]: https://www.slideshare.net/kevinhakanson/introduction-to-speech-interfaces-for-web-applications
[38]: https://www.slideshare.net/kevinhakanson/make-your-own-print-play-card-game-using-svg-and-java-script
[39]: https://youtu.be/wgoSzIjqT5s
[40]: https://www.slideshare.net/secret/7PaI49fYLA0d24
[41]: https://www.slideshare.net/kevinhakanson/adopting-multicloud-services-with-confidence
[42]: https://www.slideshare.net/kevinhakanson/whos-in-your-cloud-cloud-state-monitoring
[43]: https://youtu.be/a4CNQsaRPts
[44]: https://www.youtube.com/watch?v=fryghbOuIFE
[45]: https://d1.awsstatic.com/events/Summits/reinvent2022/BOA104_Run-your-Go-applications-on-the-cloud.pdf
[46]: https://github.com/aws-samples/hello-go-cdk
[47]: https://www.twitch.tv/videos/1679798127
[48]: https://www.twitch.tv/videos/1773342293
[49]: https://www.slideshare.net/kevinhakanson/sharpen-your-architectural-documentation-saw
[50]: https://catalog.workshops.aws/cedar-policy-language-in-action
[51]: https://github.com/cedar-policy/cedar-examples/tree/main/cedar-policy-language-in-action
[52]: https://github.com/hakanson/mdc2023/blob/main/Sharpen%20your%20%22Architectural%20Documentation%22%20Saw.pdf
[53]: https://github.com/hakanson/mdc2023
[54]: https://github.com/hakanson/that2024/blob/main/Fine-Grained%20Authorization%20in%20Modern%20Software%20Applications.pdf
[55]: https://github.com/hakanson/that2024
[56]: https://catalog.workshops.aws/generative-ai-architecture-diagrams