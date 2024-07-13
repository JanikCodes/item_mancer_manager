import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  public showSnackBar(
    message: string,
    actionLabel?: string,
    options?: MatSnackBarConfig
  ) {
    this.snackBar.open(message, actionLabel, options);
  }
}
