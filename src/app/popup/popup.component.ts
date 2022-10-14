import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from
  '@angular/material/dialog';
import { MainService } from '../main.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  selected = '';
  showsData: any = [];
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.showsData = this.mainService.getShowsData(this.data.locations[0].name, this.data.id);
    this.selected = this.selected ? this.selected : this.data.locations[0].name;
  }

  getShowsData(location: any) {
    this.showsData = this.mainService.getShowsData(location.value, this.data.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
