import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Movie } from '../movieModel';
import { AddMoviePopupComponent } from '../add-movie-popup/add-movie-popup.component';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cast', 'language', 'genre', 'noOfLocationsAvailable', 'view'];
  dataSource = new MatTableDataSource(this.mainService.MOVIE_DATA.map((obj) => {
    obj.location = obj.locations.map((location) => {
      return location.available ? location.name : '';
    }).join(' ');
    return obj;
  }));
  filterContent = '';
  filteredData: any = []

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, public mainService: MainService) {
  }

  ngOnInit(): void {

  }

  openDialog(element: any): void {
    this.dialog.closeAll();
    this.dialog.open(PopupComponent, {
      width: '70%',
      height: '70%',
      data: element
    });
  }

  openPopupDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(AddMoviePopupComponent, {
      width: '70%',
      height: '90%',
    }).afterClosed().subscribe((data: Array<Movie>) => {
      if (data) {
        this.dataSource = new MatTableDataSource(data.map((obj: Movie) => {
          obj.location = obj.locations.map((location: any) => {
            return location.available ? location.name : '';
          }).join(' ');
          return obj;
        }));
      }
    });
  }

  openUpdatePopupDialog(movie: Movie): void {
    this.dialog.closeAll();
    movie.location = movie.locations;
    const { locations, ...movieData } = movie;
    this.dialog.open(AddMoviePopupComponent, {
      width: '70%',
      height: '70%',
      data: movieData
    }).afterClosed().subscribe((data: any) => {
      if (data) {
        this.dataSource = new MatTableDataSource(data.map((obj: any) => {
          obj.location = obj.locations.map((location: any) => {
            return location.available ? location.name : '';
          }).join(' ');
          return obj;
        }));
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}


