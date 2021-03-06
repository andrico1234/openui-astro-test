---
title: 'Open UI'
name: 'Home'
showInMenu: false
layout: '../layouts/Layout.astro'
---

> This project is in its infancy. Expect rapid iteration and high-flux while we flesh out the mission and process.
>
> Thanks!

<h2 style="margin: 30px 15px 25px 0;color: #888">
  The missing industry standard definition of UI
</h2>

# Web platform

The purpose of Open UI to the web platform is to allow web developers to style and extend built-in web UI controls, such as `<select>` dropdowns, checkboxes, radio buttons, and date/color pickers.

To do that, we'll need to fully specify the component parts, states, and behaviors of the built-in controls, as well as necessary accessibility requirements, and provide test suites to ensure compatibility. We'll also implement polyfills for our extensible web UI controls.

Today, component frameworks and design systems reinvent common web UI controls to give designers full control over their appearance and behavior. We hope to make it unnecessary to reinvent built-in UI controls, but for those who choose to do so, we expect that these design systems will benefit from Open UI's specifications and test suites.

Long term, we hope that Open UI will establish a standard process for developing high-quality UI controls suitable for addition to the web platform.

For complete outline of goals and process view our [full charter](./charter).

## Out of scope

We do not intend to standardize the default appearance for built-in web UI controls, leaving this up to each browser to decide.
(We do intend to standardize the "reset" `appearance: none` appearance for these controls.)

# Other platforms

Open UI is for designers, developers, and implementers on all platforms.
[Contact us](mailto:public-open-ui@w3.org) to learn how to contribute toward other platforms.
