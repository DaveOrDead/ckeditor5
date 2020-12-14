/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";

import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Placeholder from "../plugins/tokens";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";

import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

class ClassicEditor extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
const plugins = [
	Essentials,
	Bold,
	Italic,
	Heading,
	Highlight,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Placeholder,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TextTransformation,
];

ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins.concat([Autosave]);

// Editor configuration.
const config = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"highlight",
			"link",
			"bulletedList",
			"numberedList",
			"|",
			"indent",
			"outdent",
			"|",
			"insertTable",
			"|",
			"placeholder",
		],
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableProperties",
			"tableCellProperties",
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};

ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;

export default {
	ClassicEditor,
	InlineEditor,
};
