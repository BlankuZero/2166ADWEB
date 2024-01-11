export class AppComponent {
  title = 'The String is Interpolated';
  clientName = 'Louise Salonga';
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
