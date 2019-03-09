import * as ClientAccountActions from "./client-account.action";

import { ClientAccount } from "../client-account.model";

export interface AppState {
  clientAccountList: State;
}

export interface State {
  clientAccounts: ClientAccount[];
  selectedClientAccount: number;
}

const initialState: State = {
  clientAccounts: [
    new ClientAccount(
      "Thomas Maier",
      "560321",
      "Switzerland",
      "Private Individual",
      "Live",
      "CHF",
      new Date("2019-02-28T12:17:57Z"),
      null,
      2,
      10,
      300000
    ),
    new ClientAccount(
      "Joseph Landau",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    )
  ],
  selectedClientAccount: -1
  // newClientAccount: null,
  // newClientAccountIndex: null
};

export function clientAccountReducer(
  state = initialState,
  action: ClientAccountActions.ClientAccountActions
) {
  switch (action.type) {
    case ClientAccountActions.ADD_CLIENT_ACCOUNT:
      return {
        ...state,
        clientAccounts: [...state.clientAccounts, action.payload]
      };
    case ClientAccountActions.UPDATE_CLIENT_ACCOUNT:
      const clientAccount = state.clientAccounts[action.payload.index];
      const updatedClientAccount = {
        ...clientAccount,
        ...action.payload.clientAccount
      };
      const clientAccounts = [...state.clientAccounts];
      clientAccounts[action.payload.index] = updatedClientAccount;
      return {
        ...state,
        clientAccounts: clientAccounts
      };
    case ClientAccountActions.DELETE_CLIENT_ACCOUNT:
      const oldClientAccounts = [...state.clientAccounts];
      oldClientAccounts.splice(action.payload, 1);
      return {
        ...state,
        clientAccounts: oldClientAccounts
      };
    case ClientAccountActions.SELECT_CLIENT_ACCOUNT:
      return {
        ...state,
        selectedClientAccount: action.payload
      };
    default:
      return state;
  }
}
