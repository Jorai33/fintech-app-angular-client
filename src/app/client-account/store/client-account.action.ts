import { Action } from "@ngrx/store";

import { ClientAccount } from "../client-account.model";

export const ADD_CLIENT_ACCOUNT = "ADD_CLIENT_ACCOUNT";
export const UPDATE_CLIENT_ACCOUNT = "UPDATE_CLIENT_ACCOUNT";
export const DELETE_CLIENT_ACCOUNT = "DELETE_CLIENT_ACCOUNT";
export const SELECT_CLIENT_ACCOUNT = "SELECT_CLIENT_ACCOUNT";

export class AddClientAccount implements Action {
  readonly type = ADD_CLIENT_ACCOUNT;

  constructor(public payload: ClientAccount) {}
}

export class UpdateClientAccount implements Action {
  readonly type = UPDATE_CLIENT_ACCOUNT;

  constructor(
    public payload: { index: number; clientAccount: ClientAccount }
  ) {}
}

export class DeleteClientAccount implements Action {
  readonly type = DELETE_CLIENT_ACCOUNT;

  constructor(public payload: number) {}
}

export class SelectClientAccount implements Action {
  readonly type = SELECT_CLIENT_ACCOUNT;

  constructor(public payload: number) {}
}

export type ClientAccountActions =
  | AddClientAccount
  | UpdateClientAccount
  | DeleteClientAccount
  | SelectClientAccount;
