import * as vscode from 'vscode';

let activeTerminal: vscode.Terminal | null = null;

export function activate(context: vscode.ExtensionContext) {
  const runCursorAgentDisposable = vscode.commands.registerCommand('cursor-agent.run', async () => {
    // Check if there's already an active terminal
    if (activeTerminal && vscode.window.terminals.includes(activeTerminal)) {
      activeTerminal.show(true);
      return;
    }

    const lightIconUri = vscode.Uri.joinPath(context.extensionUri, 'icons', 'cursor.svg');
    const darkIconUri = vscode.Uri.joinPath(context.extensionUri, 'icons', 'cursor_dark.svg');
    const terminal = vscode.window.createTerminal({
      name: 'Cursor Agent',
      location: { viewColumn: vscode.ViewColumn.Beside },
      iconPath: { light: lightIconUri, dark: darkIconUri }
    });
    
    activeTerminal = terminal;
    terminal.sendText('cursor-agent');
    terminal.show(true);

    await vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');
  });

  // Clean up terminal reference when it's closed
  const terminalCloseDisposable = vscode.window.onDidCloseTerminal((terminal) => {
    if (terminal === activeTerminal) {
      activeTerminal = null;
    }
  });

  context.subscriptions.push(runCursorAgentDisposable, terminalCloseDisposable);
}

export function deactivate() {}
