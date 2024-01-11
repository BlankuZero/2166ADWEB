export class AppComponent {
  title = 'This string is interpolated';
  clientName = 'Adrian';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';  
  

  clickCount = 0
    clickMe() {
      this.clickCount++;
    }
  
    resetClickCount() {
      this.clickCount = 0;
    }

}
