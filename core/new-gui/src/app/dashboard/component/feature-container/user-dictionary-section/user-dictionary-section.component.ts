import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';

import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';


import { Observable } from 'rxjs/Observable';
import { UserDictionary } from '../../../type/user-dictionary';

import { UserDictionaryService } from '../../../service/user-dictionary/user-dictionary.service';

import { cloneDeep } from 'lodash';


@Component({
  selector: 'texera-user-dictionary-section',
  templateUrl: './user-dictionary-section.component.html',
  styleUrls: ['./user-dictionary-section.component.scss', '../../dashboard.component.scss']
})
export class UserDictionarySectionComponent implements OnInit {

  public UserDictionary: UserDictionary[] = [];

  constructor(
  ) { }

  ngOnInit() {
  }

}
