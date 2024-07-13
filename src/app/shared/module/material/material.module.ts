import { NgModule } from '@angular/core';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatList,
  MatListItem,
  MatListItemLine,
  MatNavList,
} from '@angular/material/list';
import { MatListItemSection } from '@angular/material/list/testing';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatButton,
    MatDivider,
    MatFabButton,
    MatIcon,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatList,
    MatListItemLine,
  ],
  exports: [
    MatSlideToggleModule,
    MatButton,
    MatDivider,
    MatFabButton,
    MatIcon,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatList,
    MatListItemLine,
  ],
})
export class MaterialModule {}
