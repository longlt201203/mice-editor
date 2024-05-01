import 'draft-js/dist/Draft.css';

import { CompositeDecorator, ContentBlock, ContentState, DraftHandleValue, Editor, EditorCommand, EditorState, Modifier, RichUtils, SelectionState, genKey, getDefaultKeyBinding } from 'draft-js';
import { useEffect, useState } from 'react';
import { h1Styling } from './H1';
import { paragraphStyling } from './Paragraph';
import { h2Styling } from './H2';
import { h3Styling } from './H3';
import { codeBlockStyling } from './CodeBlock';

function addBlockAfter(editorState: EditorState, keyBefore: string, blockParams: any | null) {
    const newBlock = new ContentBlock({
        key: genKey(),
        type: 'unstyled',
        text: '',
        ...blockParams,
    });

    const contentState = editorState.getCurrentContent();
    const oldBlockMap = contentState.getBlockMap();
    const newBlockMap = Immutable.OrderedMap().withMutations(map => {
        oldBlockMap.forEach((val, key) => {
            map.set(key, val);

            if (keyBefore === key) {
                map.set(newBlock.getKey(), newBlock);
            }
        });
    });

    return EditorState.forceSelection(
        EditorState.push(
            editorState,
            ContentState
                .createFromBlockArray(newBlockMap.toArray() as Array<ContentBlock>)
                .set('selectionBefore', contentState.getSelectionBefore())
                .set('selectionAfter', contentState.getSelectionAfter()) as ContentState,
            'change-block-data'
        ),
        SelectionState.createEmpty(newBlock.getKey())
    );
}


function miceEditorBlockStylingFn(contentBlock: ContentBlock) {
    const type = contentBlock.getType();
    switch (type) {
        case "h1":
            return h1Styling;
        case "h2":
            return h2Styling;
        case "h3":
            return h3Styling;
        case "codeblock":
            return codeBlockStyling;
        default:
            return paragraphStyling;
    }
}

function miceEditorKeyBindingFn(e: React.KeyboardEvent): EditorCommand | null {
    if (e.key == "Enter") {
        return "preprocessNewLine";
    }
    return getDefaultKeyBinding(e);
}

const decorators = new CompositeDecorator([]);

export default function MiceEditor() {
    const [editorState, setEditorState] = useState<EditorState>();

    useEffect(() => {
        setEditorState(EditorState.createEmpty(decorators));
    }, []);

    const handleEditorStateChange = (newState: EditorState) => {
        setEditorState(newState);
    }

    const toggleBlockElement = (type: string) => {
        if (editorState) {
            const selectionState = editorState.getSelection();
            const anchorKey = selectionState.getAnchorKey();

            let contentState = editorState.getCurrentContent();
            const block = contentState.getBlockForKey(anchorKey);
            contentState = Modifier.setBlockType(contentState, selectionState, block.getType() == type ? "unstyled" : type);

            const newEditorState = EditorState.set(editorState, { currentContent: contentState });
            setEditorState(newEditorState);
        }
    }

    const handleKeyCommand = (command: string): DraftHandleValue => {
        if (editorState) {
            switch (command) {
                case "preprocessNewLine": {
                    if (RichUtils.getCurrentBlockType(editorState) == "codeblock") {
                        const newEditorState = RichUtils.insertSoftNewline(editorState);
                        setEditorState(newEditorState);

                    } else {
                        const selectionState = editorState.getSelection();
                        const anchorKey = selectionState.getAnchorKey();
                        const contentState = editorState.getCurrentContent();
                        const block = contentState.getBlockForKey(anchorKey);

                        setEditorState(addBlockAfter(editorState, block.getKey(), null));
                    }

                    return "handled";
                }
            }
        }
        return "not-handled";
    }

    return (
        <>
            {editorState && (
                <div className="border rounded p-3 flex flex-col gap-y-2">
                    <div className='flex flex-row gap-x-1'>
                        <button type='button' className='px-2 py-1 font-label bg-navyBlue-0 text-myNeutral-white rounded' onClick={() => toggleBlockElement("h1")}>H1</button>
                        <button type='button' className='px-2 py-1 font-label bg-navyBlue-0 text-myNeutral-white rounded' onClick={() => toggleBlockElement("h2")}>H2</button>
                        <button type='button' className='px-2 py-1 font-label bg-navyBlue-0 text-myNeutral-white rounded' onClick={() => toggleBlockElement("h3")}>H3</button>
                        <button type='button' className='px-2 py-1 font-label bg-navyBlue-0 text-myNeutral-white rounded' onClick={() => toggleBlockElement("codeblock")}>&lt;/&gt;</button>
                    </div>
                    <div className="p-1 border rounded-lg">
                        <Editor keyBindingFn={miceEditorKeyBindingFn} handleKeyCommand={handleKeyCommand} blockStyleFn={miceEditorBlockStylingFn} editorState={editorState} onChange={handleEditorStateChange} />
                    </div>
                </div>
            )}
        </>
    );
}