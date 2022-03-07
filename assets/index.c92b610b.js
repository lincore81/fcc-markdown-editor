import{j as g,M as l,l as d,r as c,R as m,a as p}from"./vendor.215829ab.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};f();var y="/fcc-markdown-editor/assets/favicon.d86307e1.svg";const s=g.exports.jsx,u=g.exports.jsxs,h=`# Dominik's Fancy Markdown Editor
## Memes!
![silly memes](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-021-00857-8/MediaObjects/41598_2021_857_Fig1_HTML.png)

Don't forget to \`sudo make me a sandwich\`
Here's some **bold text**.

## Emojis!
\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F972}

## Links!
Here's a link to the [markdown library](https://github.com/ts-stack/markdown) I used.

\`\`\`js
// Syntax highlighting is easy if you don't do it yourself!
highlight: (code, language) => language && highlight.getLanguage(language)
        ? highlight.highlight(code, {language}).value
        : code
\`\`\`


## Shopping List
- Eggs
- Milk
- Flour
  - Wheat
  - Rye

## Blockquote

> Adapt yourself to the things among which your lot has been cast and love sincerely the fellow creatures with whom destiny has ordained that you shall live.`;l.setOptions({highlight:(i,r)=>r&&d.getLanguage(r)?d.highlight(i,{language:r}).value:i,gfm:!0,pedantic:!1,sanitize:!0,smartLists:!0,tables:!0,breaks:!0});function v(){const[i,r]=c.exports.useState(h),[a,o]=c.exports.useState(l.parse(h));return u("div",{className:"dual-editor",children:[s("textarea",{"aria-multiline":"true",id:"editor",onChange:t=>{r(t.currentTarget.value),o(l.parse(t.currentTarget.value))},value:i}),s("section",{id:"preview",dangerouslySetInnerHTML:{__html:a}})]})}function k(){return u("div",{className:"App",children:[u("header",{className:"App-header",children:[s("img",{src:y,className:"App-logo",alt:""}),s("h1",{children:"Markdown Editor"})]}),s("main",{children:s(v,{})})]})}m.render(s(p.StrictMode,{children:s(k,{})}),document.getElementById("root"));
