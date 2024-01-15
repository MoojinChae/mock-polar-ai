import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);


type CodeSnippetProps = {
  code: object;
}

const CodeSnippet = (props: CodeSnippetProps) => {
  const codeJson = JSON.stringify(props.code, null, 2)
  const highlightedCode = hljs.highlight(codeJson, { language: 'json' }).value
 
   return (
    <pre>
      <code className="hljs" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
   );
}

export { CodeSnippet };