import { Marked } from "@ts-stack/markdown"
import { ChangeEvent, useState } from "react"
import highlight from 'highlight.js';
import "./Editor.css"
import "highlight.js/styles/github.css"

const defaultMd = `# Dominik's Fancy Markdown Editor
## Memes!
![silly memes](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-021-00857-8/MediaObjects/41598_2021_857_Fig1_HTML.png)

Don't forget to \`sudo make me a sandwich\`
Here's some **bold text**.

## Emojis!
😀 😃 😄 😁 😆 😅 😂 🤣 🥲

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

> Adapt yourself to the things among which your lot has been cast and love sincerely the fellow creatures with whom destiny has ordained that you shall live.`



Marked.setOptions({
    highlight: (code, language) => language && highlight.getLanguage(language)
        ? highlight.highlight(code, {language}).value
        : code
        ,
    gfm: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    tables: true,
    breaks: true
})

export default function Editor(): JSX.Element {
    const [md, setMd] = useState(defaultMd)
    const [html, setHtml] = useState(Marked.parse(defaultMd))

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMd(e.currentTarget.value)
        setHtml(Marked.parse(e.currentTarget.value))
    }

    return (
        <div className="dual-editor">
            <textarea aria-multiline="true" id="editor" onChange={onChange} value={md} />
            <section id="preview" dangerouslySetInnerHTML={{__html:html}}></section>
        </div>
    )
}
