# Initial project setup with this command
npx create-nx-workspace@latest

# For ui lib we need to add bootstrap
$ ng add @ng-bootstrap/ng-bootstrap

# After adding state in to feature we need to install store and devtools-plugin.(if we can use any api then only)
npm install @ngxs/store
npm install @ngxs/devtools-plugin
# Run Project
npm install
ng serve

# Project Documentation

[Module design](apps/documentation/app-module-design.md)

[App Technical](apps/documentation/app-technical.md)
