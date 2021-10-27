import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  loadAPI: Promise<any>;
  constructor() {
    
   }

  ngOnInit(): void {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }
  public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = [
          ,"/assets/cozaStore/vendor/jquery/jquery-3.2.1.min.js",
          "/assets/cozaStore/vendor/animsition/js/animsition.min.js",
          "/assets/cozaStore/vendor/bootstrap/js/popper.js",
          "/assets/cozaStore/vendor/bootstrap/js/bootstrap.min.js",
          "/assets/cozaStore/vendor/select2/select2.min.js",
          "/assets/cozaStore/js/select.js",
          "/assets/cozaStore/vendor/daterangepicker/moment.min.js",
          "/assets/cozaStore/vendor/daterangepicker/daterangepicker.js",
          "/assets/cozaStore/vendor/slick/slick.min.js",
          "/assets/cozaStore/js/slick-custom.js",
          "/assets/cozaStore/vendor/parallax100/parallax100.js",
          "/assets/cozaStore/js/parallax.js",
          "/assets/cozaStore/vendor/MagnificPopup/jquery.magnific-popup.min.js",
          "/assets/cozaStore/js/gallery.js",
          "/assets/cozaStore/vendor/isotope/isotope.pkgd.min.js",
          "/assets/cozaStore/vendor/sweetalert/sweetalert.min.js",
          "/assets/cozaStore/js/cart.js",
          "/assets/cozaStore/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
          "/assets/cozaStore/js/pscroll.js",
          "/assets/cozaStore/js/main.js"
        ];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}

}
