import * as React from "react";
import { ContextMenu as ContextMenuClass, IRFCMenu } from "react-frame-contextmenu";
import { LanguageType } from "i18n";

export interface IContextmenuItem {
  action: number | string;
  label?: string;
}

export abstract class ContextMenu<T = any> {
  public menu: IRFCMenu.IContextMenu;
  private _click: IRFCMenu.OnClickItem<T> | undefined;
  private _lang: LanguageType;

  public constructor() {
    this.menu = new ContextMenuClass({ id: "context-menu" });
    this._lang = "en";
    this.initMenu();
  }

  public set onClick(_onClick: IRFCMenu.OnClickItem<T> | undefined) {
    if (_onClick) {
      this._click = _onClick;
    }
  }

  public get language() {
    return this._lang;
  }

  public set language(lang: LanguageType) {
    this._lang = lang;
    this.initMenu();
  }

  public handleMenuClick = (
    menuItem: IRFCMenu.IMenuItem,
    browserWindow: Window,
    evt: React.MouseEvent<HTMLDivElement>
  ) => {
    // log.debug('handleMenuClick', menu, this._click);
    this._click?.(menuItem, browserWindow, evt);
  };

  public popup(e: React.MouseEvent, _options?: IRFCMenu.IPopupOption): void {
    this.menu.popup({ x: e.pageX, y: e.pageY });
  }

  public abstract initMenu(): void;

  public destroy(): void {
    this.menu.close();
  }
}
