export class AppComponent {
  title = 'The String is Interpolated';
  clientName = 'Louise Salonga';
  appliedCSS = 'purple';
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
