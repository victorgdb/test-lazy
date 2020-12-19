import React from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, withReact } from 'slate-react';
import {
  BoldPlugin,
  EditablePlugins,
  BlockquotePlugin,
  ItalicPlugin,
  ListPlugin,
  pipe,
} from '@udecode/slate-plugins';

import './Editor.css';

const initialValue = [
  {
    type: 'blockquote',
    children: [
      {
        type: 'span',
        text: 'hello world ',
        italic: true
      },
      {
        type: 'span',
        text: 'My friend',
        italic: true,
        bold: true
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [
              {
                text: 'First List Element',
                italic: true,
              },
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'Second List Element',
                italic: true,
              }
            ]
          }
        ],
      }
    ]
  }
];

const plugins = [
  BoldPlugin(),
  ListPlugin(),
  ItalicPlugin(),
  BlockquotePlugin()
];
const withPlugins = [withReact, withHistory];

const Editor = () => {
  const [value, setValue] = React.useState(initialValue);
  const editor = React.useMemo(() => pipe(createEditor(), ...withPlugins), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <EditablePlugins plugins={plugins}/>
    </Slate>
  );
};

export default Editor;