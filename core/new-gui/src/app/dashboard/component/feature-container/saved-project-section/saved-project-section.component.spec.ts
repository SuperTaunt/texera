import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedProjectSectionComponent} from './saved-project-section.component';
import { SavedProjectService } from '../../../service/saved-project/saved-project.service';
import { StubSavedProjectService } from '../../../service/saved-project/stub-saved-project.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { SavedProject } from '../../../type/saved-project';

import * as c from './saved-project-section.component';
import { HttpModule } from '@angular/http';

describe('SavedProjectSectionComponent', () => {
  let component: SavedProjectSectionComponent;
  let fixture: ComponentFixture<SavedProjectSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedProjectSectionComponent],
      providers: [
        { provide: SavedProjectService, useClass: StubSavedProjectService },
        NgbActiveModal
      ],
      imports: [MatDividerModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedProjectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
