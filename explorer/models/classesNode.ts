import * as vscode from "vscode";
import { DocumentContentProvider } from "../../providers/DocumentContentProvider";
import { NodeBase } from "./nodeBase";

export class ClassNode extends NodeBase {
  public static readonly contextValue: string = "dataNode:classNode";
  constructor(
    public readonly label: string,
    public readonly fullName: string,
    private _workspaceFolder: string,
    private _namespace: string,
  ) {
    super(label);
  }

  get workspaceFolder(): string {
    return this._workspaceFolder;
  }

  public getTreeItem(): vscode.TreeItem {
    const displayName: string = this.label;

    return {
      collapsibleState: vscode.TreeItemCollapsibleState.None,
      command: {
        arguments: [DocumentContentProvider.getUri(this.fullName, this._workspaceFolder, this._namespace, true)],
        command: "vscode-objectscript.explorer.openClass",
        title: "Open class",
      },
      contextValue: "dataNode:classNode",
      label: `${displayName}`,
      // iconPath: {
      //     light: path.join(__filename, '..', '..', '..', '..', 'images', 'light', 'class.svg'),
      //     dark: path.join(__filename, '..', '..', '..', '..', 'images', 'dark', 'class.svg')
      // }
    };
  }
}
