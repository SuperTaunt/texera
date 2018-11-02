import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDictionarySectionComponent} from './user-dictionary-section.component';
import { UserDictionaryService } from '../../../service/user-dictionary/user-dictionary.service';
import { StubUserDictionaryService } from '../../../service/user-dictionary/stub-user-dictionary.service';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { UserDictionary } from '../../../type/user-dictionary';

import { HttpModule } from '@angular/http';
// import { NgbdModalAddProjectComponent } from '../saved-project-section/saved-project-section.component';

describe('UserDictionarySectionComponent', () => {
  let component: UserDictionarySectionComponent;
  let fixture: ComponentFixture<UserDictionarySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDictionarySectionComponent],
      providers: [
        { provide: UserDictionaryService, useClass: StubUserDictionaryService },
        NgbActiveModal
      ],
      imports: [MatCardModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatChipsModule,
        MatIconModule,

        NgbModule.forRoot(),
        FormsModule,
        HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDictionarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
