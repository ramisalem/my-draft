import 'draft-js/dist/Draft.css';
import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';

/* Import the `basicTextStylePlugin` */
import basicTextStylePlugin from './Plugins/basicTextStylePlugin';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };

    /* Create an array of plugins to be passed to `Editor` */
    this.plugins = [
      basicTextStylePlugin,
    ];
  }

  componentDidMount() {
    this.focus();
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  focus = () => {
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor" onClick={this.focus}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          plugins={this.plugins} // Pass the plugins to the Editor
          ref={(element) => { this.editor = element; }}
          placeholder="Tell your story"
          spellCheck
        />
      </div>
    );
  }
}

export default MyEditor;